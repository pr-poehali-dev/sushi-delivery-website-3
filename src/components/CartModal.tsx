import { useState } from "react";
import Icon from "@/components/ui/icon";
import { SUBMIT_ORDER_URL, CartMap, CartItem, FormStatus } from "@/data";

interface CartModalProps {
  cart: CartMap;
  cartItems: CartItem[];
  cartTotal: number;
  onClose: () => void;
  onAddToCart: (id: number) => void;
  onRemoveFromCart: (id: number) => void;
  onClearCart: () => void;
}

export default function CartModal({
  cart,
  cartItems,
  cartTotal,
  onClose,
  onAddToCart,
  onRemoveFromCart,
  onClearCart,
}: CartModalProps) {
  const [orderName, setOrderName] = useState("");
  const [orderPhone, setOrderPhone] = useState("");
  const [orderComment, setOrderComment] = useState("");
  const [orderStatus, setOrderStatus] = useState<FormStatus>("idle");

  const submitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderName.trim() || !orderPhone.trim()) return;
    setOrderStatus("loading");
    try {
      const res = await fetch(SUBMIT_ORDER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: orderName, phone: orderPhone, comment: orderComment, items: cartItems, totalPrice: cartTotal }),
      });
      const data = await res.json();
      if (res.ok) {
        setOrderStatus("success");
        onClearCart();
      } else {
        setOrderStatus("error");
        setOrderComment(data.error || "Ошибка при отправке");
      }
    } catch {
      setOrderStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={() => { if (orderStatus !== "loading") onClose(); }}
      />
      <div className="relative dark-card rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-fade-in-up">
        <div className="p-8">
          {orderStatus === "success" ? (
            <div className="text-center py-8">
              <div className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center mx-auto mb-6">
                <Icon name="CheckCheck" size={36} className="text-primary-foreground" />
              </div>
              <h2 className="font-display text-3xl font-semibold mb-3">Заказ принят!</h2>
              <p className="text-muted-foreground font-light mb-2">Мы свяжемся с вами в ближайшее время для подтверждения.</p>
              <p className="text-primary text-sm mb-8">Примерное время доставки: 45–60 минут</p>
              <button
                onClick={() => { onClose(); setOrderStatus("idle"); setOrderName(""); setOrderPhone(""); setOrderComment(""); }}
                className="gold-gradient text-primary-foreground px-8 py-3 text-sm tracking-widest font-semibold hover:opacity-90 transition-opacity rounded"
              >
                ОТЛИЧНО!
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-2xl font-semibold">Оформление заказа</h2>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full gold-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon name="X" size={14} />
                </button>
              </div>

              {/* Cart items */}
              <div className="space-y-3 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between py-2 gold-border-top">
                    <div>
                      <div className="font-semibold text-sm">{item.name}</div>
                      <div className="text-muted-foreground text-xs">{item.qty} × {item.price.toLocaleString()}₽</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-display text-lg gold-text font-semibold">
                        {(item.price * item.qty).toLocaleString()}₽
                      </span>
                      <button
                        onClick={() => onRemoveFromCart(item.id)}
                        className="w-6 h-6 rounded-full gold-border flex items-center justify-center text-muted-foreground hover:text-primary transition-colors text-xs"
                      >
                        <Icon name="Minus" size={10} />
                      </button>
                      <span className="text-sm w-4 text-center">{cart[item.id]}</span>
                      <button
                        onClick={() => onAddToCart(item.id)}
                        className="w-6 h-6 rounded-full gold-border flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Icon name="Plus" size={10} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="flex items-center justify-between py-4 mb-6"
                style={{ borderTop: "1px solid hsl(42,50%,30%)", borderBottom: "1px solid hsl(42,50%,30%)" }}
              >
                <span className="font-semibold">Итого</span>
                <span className="font-display text-2xl gold-text font-semibold">{cartTotal.toLocaleString()}₽</span>
              </div>

              <form onSubmit={submitOrder} className="space-y-4">
                <div>
                  <label className="text-muted-foreground text-xs tracking-wider block mb-2">ВАШЕ ИМЯ *</label>
                  <input
                    type="text" placeholder="Александр" required
                    value={orderName} onChange={(e) => setOrderName(e.target.value)}
                    className="w-full bg-secondary gold-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="text-muted-foreground text-xs tracking-wider block mb-2">ТЕЛЕФОН *</label>
                  <input
                    type="tel" placeholder="+7 (___) ___-__-__" required
                    value={orderPhone} onChange={(e) => setOrderPhone(e.target.value)}
                    className="w-full bg-secondary gold-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="text-muted-foreground text-xs tracking-wider block mb-2">АДРЕС И ПОЖЕЛАНИЯ</label>
                  <textarea
                    placeholder="Улица, дом, квартира..." rows={2}
                    value={orderComment} onChange={(e) => setOrderComment(e.target.value)}
                    className="w-full bg-secondary gold-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
                {orderStatus === "error" && (
                  <p className="text-red-400 text-sm">Ошибка при отправке. Попробуйте ещё раз.</p>
                )}
                <button
                  type="submit" disabled={orderStatus === "loading"}
                  className="w-full gold-gradient text-primary-foreground py-4 text-sm tracking-widest font-semibold hover:opacity-90 transition-opacity rounded disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {orderStatus === "loading" ? (
                    <><Icon name="Loader2" size={16} className="animate-spin" />ОФОРМЛЯЕМ...</>
                  ) : `ОФОРМИТЬ ЗАКАЗ — ${cartTotal.toLocaleString()}₽`}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}