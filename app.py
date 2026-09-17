from flask import Flask, jsonify, render_template, request
from pathlib import Path
import json
from datetime import datetime
from threading import Lock

BASE_DIR = Path(__file__).resolve().parent
DATA_DIR = BASE_DIR / "data"
MENU_FILE = DATA_DIR / "menu.json"
ORDERS_FILE = DATA_DIR / "orders.json"
DATA_DIR.mkdir(exist_ok=True)

app = Flask(__name__)
file_lock = Lock()

DEFAULT_MENU = [
    {"id": 1, "name": "Pasta", "price": 120, "category": "Main Course", "image": "/static/images/pasta.svg"},
    {"id": 2, "name": "Pizza", "price": 199, "category": "Main Course", "image": "/static/images/pizza.svg"},
    {"id": 3, "name": "Momos", "price": 100, "category": "Snacks", "image": "/static/images/momos.svg"},
    {"id": 4, "name": "Chowmein", "price": 110, "category": "Main Course", "image": "/static/images/chowmein.svg"},
    {"id": 5, "name": "Chaat", "price": 70, "category": "Snacks", "image": "/static/images/chaat.svg"},
    {"id": 6, "name": "Coffee", "price": 60, "category": "Beverage", "image": "/static/images/coffee.svg"},
    {"id": 7, "name": "Tea", "price": 30, "category": "Beverage", "image": "/static/images/tea.svg"},
]

IMAGE_BY_NAME = {
    "pasta": "/static/images/pasta.svg",
    "pizza": "/static/images/pizza.svg",
    "momos": "/static/images/momos.svg",
    "chowmein": "/static/images/chowmein.svg",
    "chaat": "/static/images/chaat.svg",
    "coffee": "/static/images/coffee.svg",
    "tea": "/static/images/tea.svg",
}
DEFAULT_IMAGE = "/static/images/default-food.svg"


def ensure_file(path, default):
    if not path.exists():
        path.write_text(json.dumps(default, indent=2), encoding="utf-8")


ensure_file(MENU_FILE, DEFAULT_MENU)
ensure_file(ORDERS_FILE, [])


def read_json(path):
    with file_lock:
        return json.loads(path.read_text(encoding="utf-8"))


def write_json(path, data):
    with file_lock:
        path.write_text(json.dumps(data, indent=2), encoding="utf-8")


def next_id(items):
    return max((item.get("id", 0) for item in items), default=0) + 1


def image_for_item(name, image=None):
    image = str(image or "").strip()
    if image:
        return image
    return IMAGE_BY_NAME.get(name.strip().lower(), DEFAULT_IMAGE)


def normalize_menu(menu):
    changed = False
    normalized = []
    for item in menu:
        current = dict(item)
        fallback = image_for_item(current.get("name", ""), current.get("image"))
        if current.get("image") != fallback:
            current["image"] = fallback
            changed = True
        normalized.append(current)
    if changed:
        write_json(MENU_FILE, normalized)
    return normalized


@app.get("/")
def index():
    return render_template("index.html")


@app.get("/api/menu")
def get_menu():
    return jsonify(normalize_menu(read_json(MENU_FILE)))


@app.post("/api/menu")
def add_menu_item():
    data = request.get_json(silent=True) or {}
    name = str(data.get("name", "")).strip()
    category = str(data.get("category", "Other")).strip() or "Other"
    image = image_for_item(name, data.get("image"))

    try:
        price = float(data.get("price", 0))
    except (TypeError, ValueError):
        return jsonify({"error": "Price must be a number."}), 400

    if not name:
        return jsonify({"error": "Item name is required."}), 400
    if price <= 0:
        return jsonify({"error": "Price must be greater than 0."}), 400

    menu = normalize_menu(read_json(MENU_FILE))
    item = {
        "id": next_id(menu),
        "name": name,
        "price": round(price, 2),
        "category": category,
        "image": image,
    }
    menu.append(item)
    write_json(MENU_FILE, menu)
    return jsonify(item), 201


@app.delete("/api/menu/<int:item_id>")
def delete_menu_item(item_id):
    menu = normalize_menu(read_json(MENU_FILE))
    updated = [item for item in menu if item.get("id") != item_id]
    if len(updated) == len(menu):
        return jsonify({"error": "Item not found."}), 404
    write_json(MENU_FILE, updated)
    return jsonify({"message": "Item deleted."})


@app.post("/api/orders")
def create_order():
    data = request.get_json(silent=True) or {}
    customer_name = str(data.get("customer_name", "Guest")).strip() or "Guest"
    items = data.get("items") or []

    if not items:
        return jsonify({"error": "Add at least one item to the order."}), 400

    menu = normalize_menu(read_json(MENU_FILE))
    menu_by_id = {item["id"]: item for item in menu}
    normalized = []
    subtotal = 0

    for row in items:
        try:
            item_id = int(row["id"])
            qty = int(row.get("qty", 1))
        except (KeyError, TypeError, ValueError):
            return jsonify({"error": "Invalid order item."}), 400

        if item_id not in menu_by_id or qty < 1:
            return jsonify({"error": "Invalid item or quantity."}), 400

        item = menu_by_id[item_id]
        line_total = round(item["price"] * qty, 2)
        subtotal += line_total
        normalized.append({
            "id": item["id"],
            "name": item["name"],
            "price": item["price"],
            "qty": qty,
            "line_total": line_total,
            "image": item.get("image", DEFAULT_IMAGE),
        })

    subtotal = round(subtotal, 2)
    tax = round(subtotal * 0.05, 2)
    grand_total = round(subtotal + tax, 2)

    orders = read_json(ORDERS_FILE)
    order_number = f"ORD-{datetime.now().strftime('%Y%m%d')}-{next_id(orders):04d}"
    order = {
        "order_number": order_number,
        "customer_name": customer_name,
        "items": normalized,
        "subtotal": subtotal,
        "tax": tax,
        "grand_total": grand_total,
        "created_at": datetime.now().isoformat(timespec="seconds"),
    }
    orders.append(order)
    write_json(ORDERS_FILE, orders)
    return jsonify(order), 201


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
