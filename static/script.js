:root {
  --bg: #f7f7fb;
  --card: #ffffff;
  --text: #16161d;
  --muted: #6f7180;
  --line: #e7e7ef;
  --accent: #e85535;
  --accent-2: #ffb347;
  --green: #16a36a;
  --shadow: 0 18px 50px rgba(20, 20, 40, 0.08);
  --radius: 22px;
}

* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: var(--text);
  background: radial-gradient(circle at top left, #fff5ee 0, transparent 30%), var(--bg);
}
button, input, select { font: inherit; }
button { cursor: pointer; }

.hero {
  padding: 46px 22px 70px;
  background: linear-gradient(135deg, #17171c, #3c241e 60%, #161416);
  color: #fff;
  position: relative;
  overflow: hidden;
}
.hero::after {
  content: "";
  position: absolute;
  width: 390px;
  height: 390px;
  right: -100px;
  top: -190px;
  border-radius: 50%;
  background: rgba(255, 179, 71, 0.2);
}
.hero-inner { max-width: 1180px; margin: auto; position: relative; z-index: 1; display: flex; align-items: center; justify-content: space-between; gap: 34px; }
.hero-copy { min-width: 0; }
.eyebrow, .section-kicker { margin: 0 0 8px; font-size: 12px; letter-spacing: .18em; font-weight: 800; }
.eyebrow { color: #ffbd76; }
.hero h1 { margin: 0; font-size: clamp(38px, 6vw, 74px); line-height: .95; letter-spacing: -.045em; }
.tagline { margin: 18px 0 0; color: #ffe2c7; font-size: 18px; letter-spacing: .08em; font-weight: 800; }
.sub-tagline { margin: 7px 0 0; color: #ffd0a8; font-size: 15px; letter-spacing: .1em; font-weight: 700; }
.status-pill { display: inline-flex; margin-top: 24px; padding: 9px 14px; border: 1px solid rgba(255,255,255,.16); border-radius: 999px; background: rgba(255,255,255,.07); font-size: 13px; }
.hero-food { width: 220px; flex: 0 0 220px; transform: rotate(5deg); filter: drop-shadow(0 20px 26px rgba(0,0,0,.3)); }
.hero-food img { width: 100%; display: block; border-radius: 34px; }

.container { max-width: 1180px; margin: -35px auto 60px; padding: 0 18px; position: relative; z-index: 2; }
.top-grid { display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 18px; margin-bottom: 18px; }
.workspace { display: grid; grid-template-columns: 1.55fr .85fr; gap: 18px; align-items: start; }
.card { background: var(--card); border: 1px solid rgba(0,0,0,.05); border-radius: var(--radius); box-shadow: var(--shadow); padding: 24px; }
.card h2 { margin: 0; font-size: 24px; letter-spacing: -.03em; }
.section-kicker { color: var(--accent); }
.customer-card label { display: block; margin: 22px 0 8px; font-size: 13px; font-weight: 700; color: var(--muted); }
input, select { width: 100%; border: 1px solid var(--line); border-radius: 14px; padding: 12px 14px; outline: none; background: #fff; color: var(--text); }
input:focus, select:focus { border-color: #ef8b75; box-shadow: 0 0 0 4px rgba(232,85,53,.09); }
.form-row { display: grid; grid-template-columns: 1.05fr .62fr .85fr 1.1fr auto; gap: 10px; margin-top: 18px; }
.hint { color: var(--muted); font-size: 12px; margin: 10px 0 0; }

.btn { border: 0; border-radius: 14px; padding: 12px 16px; font-weight: 800; transition: transform .15s ease, opacity .15s ease; }
.btn:hover { transform: translateY(-1px); }
.btn:disabled { opacity: .45; cursor: not-allowed; transform: none; }
.primary { background: var(--accent); color: #fff; }
.secondary { background: #f1f1f5; color: var(--text); }
.confirm-btn { width: 100%; margin-top: 18px; background: linear-gradient(135deg, #e85535, #f48c3d); color: #fff; padding: 15px; }

.card-heading { display: flex; gap: 20px; align-items: center; justify-content: space-between; margin-bottom: 20px; }
.search { max-width: 230px; }
.menu-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
.menu-item {
  border: 1px solid var(--line);
  border-radius: 19px;
  overflow: hidden;
  background: linear-gradient(180deg, #fff, #fffaf8);
  transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
}
.menu-item:hover { transform: translateY(-4px); border-color: #f2c2b4; box-shadow: 0 16px 30px rgba(53, 34, 28, .1); }
.food-image-wrap { background: #fff4ea; aspect-ratio: 1.55 / 1; overflow: hidden; }
.food-image { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .3s ease; }
.menu-item:hover .food-image { transform: scale(1.035); }
.item-info { padding: 15px 16px 17px; }
.item-name { margin: 0; font-size: 18px; font-weight: 900; text-transform: capitalize; }
.item-cat { margin: 5px 0 0; color: var(--muted); font-size: 12px; }
.item-price { font-weight: 900; margin-top: 8px; font-size: 18px; }
.add-order-btn { border: 0; width: 100%; margin-top: 13px; border-radius: 12px; padding: 11px 12px; background: #1d4382; color: #fff; font-weight: 850; letter-spacing: .02em; }
.add-order-btn:hover { background: #15366c; }
.add-mini { display: none; }

.cart-card { position: sticky; top: 18px; }
.icon-btn { border: 0; background: #f1f1f4; width: 36px; height: 36px; border-radius: 50%; font-size: 22px; line-height: 1; color: #5d5e69; }
.cart-items { max-height: 360px; overflow: auto; }
.empty-state { min-height: 160px; display: grid; place-content: center; text-align: center; color: var(--muted); }
.empty-icon { font-size: 34px; margin-bottom: 5px; }
.empty-state p { margin: 0; font-weight: 800; color: var(--text); }
.empty-state span { font-size: 12px; margin-top: 5px; }
.cart-row { display: grid; grid-template-columns: 52px 1fr auto; gap: 10px; align-items: center; padding: 11px 0; border-bottom: 1px solid var(--line); }
.cart-thumb { width: 52px; height: 52px; border-radius: 12px; object-fit: cover; background: #fff4ea; border: 1px solid var(--line); }
.cart-details { min-width: 0; }
.cart-title { font-weight: 800; }
.cart-meta { color: var(--muted); font-size: 12px; margin-top: 4px; }
.qty { display: flex; align-items: center; gap: 7px; }
.qty button { border: 0; width: 30px; height: 30px; border-radius: 10px; background: #f2f2f5; font-weight: 900; }
.qty button:hover { background: #e7e7ed; }
.qty span { min-width: 18px; text-align: center; font-weight: 800; }
.bill-box { border-top: 1px dashed var(--line); margin-top: 14px; padding-top: 14px; }
.bill-box > div { display: flex; justify-content: space-between; padding: 6px 0; color: var(--muted); font-size: 14px; }
.bill-box strong { color: var(--text); }
.bill-box .grand { margin-top: 7px; padding-top: 13px; border-top: 1px solid var(--line); color: var(--text); font-size: 16px; }
.bill-box .grand strong { color: var(--accent); font-size: 24px; }

.manage-card { margin-top: 18px; }
.item-manager { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 10px; }
.manage-row { border: 1px solid var(--line); border-radius: 14px; padding: 12px 13px; display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.manage-row strong { font-size: 14px; }
.manage-image { width: 46px; height: 46px; object-fit: cover; border-radius: 11px; border: 1px solid var(--line); }
.manage-left { display: flex; align-items: center; gap: 10px; min-width: 0; }
.delete-btn { border: 0; background: #fff0ed; color: #bd3e25; border-radius: 9px; padding: 8px 10px; font-weight: 700; }

.toast { position: fixed; left: 50%; bottom: 24px; transform: translate(-50%, 20px); background: #18181d; color: #fff; padding: 11px 15px; border-radius: 12px; font-size: 13px; opacity: 0; pointer-events: none; transition: .25s; z-index: 20; }
.toast.show { opacity: 1; transform: translate(-50%, 0); }

.modal.hidden { display: none; }
.modal { position: fixed; inset: 0; z-index: 30; display: grid; place-items: center; padding: 18px; }
.modal-backdrop { position: absolute; inset: 0; background: rgba(14,14,19,.63); backdrop-filter: blur(7px); }
.bill-modal { position: relative; width: min(620px, 100%); max-height: 90vh; overflow: auto; background: #fff; border-radius: 24px; padding: 24px; box-shadow: 0 30px 90px rgba(0,0,0,.25); }
.bill-top { display: flex; justify-content: space-between; gap: 20px; padding-bottom: 16px; border-bottom: 1px solid var(--line); }
.bill-top h2 { margin: 0; }
.bill-top p:last-child { margin: 5px 0 0; color: var(--muted); font-size: 12px; letter-spacing: .08em; }
.invoice-meta { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px 18px; margin: 16px 0; font-size: 13px; }
.invoice-meta span { color: var(--muted); }
.invoice-table { width: 100%; border-collapse: collapse; font-size: 13px; }
.invoice-table th, .invoice-table td { padding: 9px 4px; border-bottom: 1px solid var(--line); text-align: left; }
.invoice-table th:last-child, .invoice-table td:last-child { text-align: right; }
.bill-item-cell { display: flex; align-items: center; gap: 9px; }
.bill-thumb { width: 36px; height: 36px; border-radius: 8px; object-fit: cover; background: #fff4ea; border: 1px solid var(--line); }
.invoice-total { margin-top: 12px; margin-left: auto; width: min(260px,100%); }
.invoice-total div { display: flex; justify-content: space-between; padding: 5px 0; }
.invoice-total .big { font-size: 18px; font-weight: 900; border-top: 1px solid var(--line); padding-top: 10px; margin-top: 4px; }
.modal-actions { display: flex; justify-content: flex-end; gap: 9px; margin-top: 18px; }

@media (max-width: 1050px) {
  .form-row { grid-template-columns: 1fr 1fr; }
  .hero-inner { align-items: flex-start; }
  .hero-food { width: 170px; flex-basis: 170px; }
}
@media (max-width: 900px) {
  .top-grid, .workspace { grid-template-columns: 1fr; }
  .cart-card { position: static; }
  .item-manager { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 620px) {
  .hero { padding: 38px 16px 58px; }
  .hero-inner { flex-direction: column; }
  .hero-food { width: 140px; flex-basis: auto; align-self: flex-end; margin-top: -16px; }
  .container { padding: 0 10px; }
  .card { padding: 17px; border-radius: 18px; }
  .form-row, .menu-grid, .item-manager { grid-template-columns: 1fr; }
  .card-heading { align-items: flex-start; flex-direction: column; }
  .search { max-width: none; }
  .cart-row { grid-template-columns: 48px 1fr; }
  .qty { grid-column: 2; justify-content: flex-end; }
}

@media print {
  body * { visibility: hidden !important; }
  .bill-modal, .bill-modal * { visibility: visible !important; }
  .modal { position: absolute; inset: 0; }
  .modal-backdrop, .modal-actions { display: none !important; }
  .bill-modal { width: 100%; max-height: none; box-shadow: none; border-radius: 0; }
}
