# APNA RESTAURANT 🍕

A simple, responsive restaurant ordering + billing web app.

### Included
- Restaurant branding: **APNA RESTAURANT**
- Tagline: **GOOD FOOD • GOOD DAY** and **GOOD MOOD • GREAT MOMENTS**
- Menu with Pasta, Pizza, Momos, Chowmein, Chaat, Coffee and Tea
- Search menu items
- Add items to cart and change quantity
- Customer name
- Live subtotal, 5% GST/tax and grand total
- Order confirmation with order number
- Bill/invoice modal + print bill
- Add new menu items from the UI
- Delete menu items
- Menu and confirmed orders stored in JSON files
- Java bill-calculation example included

## Run locally

### 1. Install Python
Python 3.10+ recommended.

### 2. Create virtual environment
```bash
python -m venv .venv
```

Windows:
```bash
.venv\Scripts\activate
```

macOS/Linux:
```bash
source .venv/bin/activate
```

### 3. Install dependencies
```bash
pip install -r requirements.txt
```

### 4. Start the app
```bash
python app.py
```

Open: **http://127.0.0.1:5000**

## Java demo

From the `java` folder:
```bash
javac BillCalculator.java
java BillCalculator
```

## GitHub upload
Push the whole `apna-restaurant` folder to your repository. Do not upload the `.venv` folder.


## Food Images

Every menu item now supports an `image` field. The built-in menu uses local SVG food illustrations in `static/images/`, so Pizza, Pasta, Momos, Chowmein, Chaat, Coffee, and Tea each show a different image. When adding a new item from the UI, you can optionally paste an image URL. If you leave it blank, the app automatically selects a matching built-in image for known food names or a default food placeholder.

