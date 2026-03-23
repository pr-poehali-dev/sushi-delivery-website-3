import { useState } from "react";
import Icon from "@/components/ui/icon";
import { SUBMIT_ORDER_URL, FormStatus } from "@/data";

export default function ContactsSection() {
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formComment, setFormComment] = useState("");
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formMessage, setFormMessage] = useState("");

  const submitContactForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formPhone.trim()) return;
    setFormStatus("loading");
    try {
      const res = await fetch(SUBMIT_ORDER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: formName, phone: formPhone, comment: formComment, items: [], totalPrice: 0 }),
      });
      const data = await res.json();
      if (res.ok) {
        setFormStatus("success");
        setFormMessage(data.message || "Заявка принята!");
        setFormName(""); setFormPhone(""); setFormComment("");
      } else {
        setFormStatus("error");
        setFormMessage(data.error || "Ошибка при отправке");
      }
    } catch {
      setFormStatus("error");
      setFormMessage("Не удалось отправить. Попробуйте ещё раз.");
    }
  };

  return (
    <>
      {/* CONTACTS */}
      <section id="contacts" className="py-24 px-6 lg:px-16 relative">
        <div className="absolute inset-0 opacity-20" style={{ background: "linear-gradient(135deg, hsl(38,65%,15%), transparent)" }} />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-primary text-xs tracking-[0.4em] mb-4">КОНТАКТЫ</p>
            <h2 className="font-display text-5xl md:text-6xl font-light mb-4">Свяжитесь <em className="gold-text">с нами</em></h2>
            <div className="section-divider mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                { icon: "Phone", title: "Телефон", value: "+7 (495) 000-00-00", sub: "Ежедневно с 10:00 до 23:00" },
                { icon: "MessageCircle", title: "WhatsApp / Telegram", value: "@sashimi_delivery", sub: "Ответим за 5 минут" },
                { icon: "MapPin", title: "Адрес ресторана", value: "ул. Примерная, 12", sub: "Пн–Вс 11:00 – 23:00, самовывоз" },
                { icon: "Mail", title: "Email", value: "hello@sashimi.ru", sub: "Для корпоративных заказов" },
              ].map(({ icon, title, value, sub }) => (
                <div key={title} className="flex gap-5">
                  <div className="w-12 h-12 rounded-full gold-border flex items-center justify-center flex-shrink-0">
                    <Icon name={icon as "Phone"} size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-muted-foreground text-xs tracking-wider mb-1">{title}</div>
                    <div className="font-display text-xl font-semibold">{value}</div>
                    <div className="text-muted-foreground text-sm font-light">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="dark-card rounded-2xl p-8">
              {formStatus === "success" ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                    <Icon name="Check" size={28} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-2">Заявка отправлена!</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{formMessage}</p>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="gold-border text-primary px-6 py-2 text-sm tracking-widest hover:bg-primary/10 transition-all"
                  >
                    НОВАЯ ЗАЯВКА
                  </button>
                </div>
              ) : (
                <form onSubmit={submitContactForm} className="space-y-4">
                  <h3 className="font-display text-2xl font-semibold mb-6">Оставить заявку</h3>
                  <div>
                    <label className="text-muted-foreground text-xs tracking-wider block mb-2">ВАШЕ ИМЯ *</label>
                    <input
                      type="text" placeholder="Александр" required
                      value={formName} onChange={(e) => setFormName(e.target.value)}
                      className="w-full bg-secondary gold-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-muted-foreground text-xs tracking-wider block mb-2">ТЕЛЕФОН *</label>
                    <input
                      type="tel" placeholder="+7 (___) ___-__-__" required
                      value={formPhone} onChange={(e) => setFormPhone(e.target.value)}
                      className="w-full bg-secondary gold-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-muted-foreground text-xs tracking-wider block mb-2">КОММЕНТАРИЙ</label>
                    <textarea
                      placeholder="Уточните адрес или пожелания к заказу..." rows={3}
                      value={formComment} onChange={(e) => setFormComment(e.target.value)}
                      className="w-full bg-secondary gold-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>
                  {formStatus === "error" && (
                    <p className="text-red-400 text-sm">{formMessage}</p>
                  )}
                  <button
                    type="submit" disabled={formStatus === "loading"}
                    className="w-full gold-gradient text-primary-foreground py-4 text-sm tracking-widest font-semibold hover:opacity-90 transition-opacity rounded disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {formStatus === "loading" ? (
                      <><Icon name="Loader2" size={16} className="animate-spin" />ОТПРАВЛЯЕМ...</>
                    ) : "ОТПРАВИТЬ ЗАЯВКУ"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 lg:px-16 gold-border-top">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display text-2xl tracking-[0.15em] gold-text font-semibold">САШИМИ</div>
          <p className="text-muted-foreground text-sm text-center font-light">
            © 2026 Сашими. Все права защищены.{" "}
            <span className="text-primary">Доставка по всему городу</span>
          </p>
          <div className="flex gap-4">
            {[["Instagram", "instagram"], ["Send", "telegram"], ["Phone", "phone"]].map(([icon, label]) => (
              <button
                key={label}
                className="w-10 h-10 rounded-full gold-border flex items-center justify-center text-primary hover:bg-primary/10 transition-colors"
              >
                <Icon name={icon as "Instagram"} size={16} />
              </button>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
