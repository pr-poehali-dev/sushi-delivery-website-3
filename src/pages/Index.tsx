import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/02835ea0-044e-4985-b042-6784b0274c57/files/220231a1-6843-4454-af9e-bee9ca252a5b.jpg";
const CHEF_IMAGE = "https://cdn.poehali.dev/projects/02835ea0-044e-4985-b042-6784b0274c57/files/cde1045e-9d1d-4a5e-9c83-1b82d98d9877.jpg";

const menuCategories = ["Все", "Роллы", "Суши", "Сашими", "Сеты"];

const menuItems = [
  { id: 1, name: "Дракон", category: "Роллы", price: 890, weight: "320г", desc: "Угорь, авокадо, огурец, икра тобико", badge: "Хит", spicy: false },
  { id: 2, name: "Лосось Премиум", category: "Сашими", price: 1240, weight: "200г", desc: "Тонкие ломтики свежего лосося с лемонграссом", badge: "Шеф", spicy: false },
  { id: 3, name: "Феникс", category: "Роллы", price: 760, weight: "290г", desc: "Тунец, манго, сыр, острый соус", badge: null, spicy: true },
  { id: 4, name: "Чёрный принц", category: "Роллы", price: 920, weight: "300г", desc: "Чернильный рис, краб, авокадо, икра", badge: "Новинка", spicy: false },
  { id: 5, name: "Нигири Магуро", category: "Суши", price: 380, weight: "100г", desc: "Синеплавниковый тунец на рисовом суши", badge: null, spicy: false },
  { id: 6, name: "Сет Императора", category: "Сеты", price: 3200, weight: "1.2кг", desc: "48 штук — роллы, суши, сашими от шефа", badge: "Выгода 30%", spicy: false },
  { id: 7, name: "Эдамаме Трюфель", category: "Роллы", price: 680, weight: "260г", desc: "Соевые бобы, трюфельное масло, кунжут", badge: null, spicy: false },
  { id: 8, name: "Нигири Лосось", category: "Суши", price: 320, weight: "100г", desc: "Норвежский лосось слабой соли на рисе", badge: "Хит", spicy: false },
  { id: 9, name: "Сашими Ассорти", category: "Сашими", price: 1680, weight: "350г", desc: "Лосось, тунец, дорадо, осьминог, гребешок", badge: "Шеф", spicy: false },
];

const reviews = [
  { name: "Александра М.", rating: 5, text: "Лучшая доставка суши в городе! Рыба невероятно свежая, роллы доехали в идеальном виде. Уже накопила 800 бонусов!", date: "15 марта 2026" },
  { name: "Дмитрий К.", rating: 5, text: "Заказываю каждую неделю. Сет Императора — это шедевр. Бонусная программа — отличная идея, уже списал на бесплатный ролл.", date: "10 марта 2026" },
  { name: "Елена В.", rating: 5, text: "Элегантная упаковка, потрясающий вкус. Лосось Премиум от шефа — просто тает во рту. Рекомендую всем!", date: "5 марта 2026" },
];

const deliveryZones = [
  { zone: "Центр", time: "30–45 мин", price: "Бесплатно от 1500₽" },
  { zone: "Север / Юг", time: "45–60 мин", price: "Бесплатно от 2000₽" },
  { zone: "Запад / Восток", time: "60–75 мин", price: "Бесплатно от 2500₽" },
];

export default function Index() {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [cart, setCart] = useState<{ [key: number]: number }>({});
  const loyaltyBonuses = 1250;

  const filtered = activeCategory === "Все" ? menuItems : menuItems.filter(i => i.category === activeCategory);
  const totalInCart = Object.values(cart).reduce((a, b) => a + b, 0);

  const addToCart = (id: number) => setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-16 py-4"
        style={{ background: "linear-gradient(to bottom, hsl(20,10%,6%), transparent)" }}>
        <button onClick={() => scrollTo("hero")} className="font-display text-2xl tracking-[0.15em] gold-text font-semibold">
          САШИМИ
        </button>
        <div className="hidden md:flex items-center gap-8 text-sm tracking-widest text-muted-foreground font-light">
          {[["menu","МЕНЮ"],["about","О НАС"],["delivery","ДОСТАВКА"],["contacts","КОНТАКТЫ"]].map(([id,label]) => (
            <button key={id} onClick={() => scrollTo(id)}
              className="hover:text-primary transition-colors duration-300">{label}</button>
          ))}
        </div>
        <button onClick={() => scrollTo("menu")} className="relative flex items-center gap-2 gold-border rounded-full px-4 py-2 text-sm text-primary hover:bg-primary/10 transition-all duration-300">
          <Icon name="ShoppingBag" size={16} />
          {totalInCart > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-semibold">
              {totalInCart}
            </span>
          )}
        </button>
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden noise-bg">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="Сашими" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(20,10%,4%) 0%, hsl(20,10%,6%) 50%, transparent 100%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 50%, hsl(42,60%,15%) 0%, transparent 60%)" }} />
        </div>

        <div className="relative z-10 px-6 lg:px-16 max-w-4xl">
          <p className="text-primary text-sm tracking-[0.4em] font-light mb-6 animate-fade-in-up">
            ✦ ДОСТАВКА СУШИ С 2018 ГОДА ✦
          </p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-[10rem] leading-none font-light mb-8 animate-fade-in-up animate-delay-100">
            <span className="block text-foreground">Искусство</span>
            <span className="block gold-text italic">японской</span>
            <span className="block text-foreground">кухни</span>
          </h1>
          <p className="text-muted-foreground text-lg font-light max-w-md mb-12 leading-relaxed animate-fade-in-up animate-delay-200">
            Свежие ингредиенты, мастерство шеф-повара и элегантная подача — прямо к вашему столу за 60 минут
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up animate-delay-300">
            <button onClick={() => scrollTo("menu")}
              className="gold-gradient text-primary-foreground px-8 py-4 text-sm tracking-widest font-semibold hover:opacity-90 transition-opacity duration-300">
              ЗАКАЗАТЬ СЕЙЧАС
            </button>
            <button onClick={() => scrollTo("about")}
              className="gold-border text-primary px-8 py-4 text-sm tracking-widest font-light hover:bg-primary/10 transition-all duration-300">
              О НАС
            </button>
          </div>
        </div>

        <div className="absolute bottom-12 right-6 lg:right-16 flex gap-8 md:gap-12 z-10">
          {[["6 лет","на рынке"],["15 мин","от нарезки до упаковки"],["4.9★","средняя оценка"]].map(([val, label]) => (
            <div key={val} className="text-right animate-fade-in-up animate-delay-400">
              <div className="font-display text-3xl gold-text font-semibold">{val}</div>
              <div className="text-muted-foreground text-xs tracking-wider mt-1">{label}</div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <Icon name="ChevronDown" size={24} className="text-primary opacity-60" />
        </div>
      </section>

      {/* LOYALTY */}
      <section className="py-16 px-6 lg:px-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(38,65%,15%) 0%, hsl(20,10%,6%) 100%)" }} />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <p className="text-primary text-xs tracking-[0.4em] mb-3">ПРОГРАММА ЛОЯЛЬНОСТИ</p>
              <h2 className="font-display text-4xl md:text-5xl font-light mb-4">
                Бонусы за каждый заказ
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-8">
                Накапливайте <span className="text-primary">5% от суммы</span> каждого заказа бонусными баллами. Списывайте баллы при следующем заказе — 1 балл = 1 рубль.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: "Gift", label: "Серебро", desc: "от 0₽", bonus: "5% бонусов" },
                  { icon: "Crown", label: "Золото", desc: "от 15 000₽", bonus: "7% бонусов" },
                  { icon: "Star", label: "Платина", desc: "от 50 000₽", bonus: "10% бонусов" },
                ].map(({ icon, label, desc, bonus }) => (
                  <div key={label} className="dark-card rounded-lg p-4 text-center">
                    <Icon name={icon as "Gift"} size={20} className="text-primary mx-auto mb-2" />
                    <div className="font-display text-lg gold-text font-semibold">{label}</div>
                    <div className="text-muted-foreground text-xs mt-1">{desc}</div>
                    <div className="text-primary text-sm font-semibold mt-2">{bonus}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="dark-card rounded-2xl p-8 text-center min-w-[280px]">
              <div className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                <Icon name="Coins" size={32} className="text-primary-foreground" />
              </div>
              <p className="text-muted-foreground text-sm mb-1">Ваши бонусы</p>
              <div className="font-display text-5xl gold-text font-semibold mb-1">{loyaltyBonuses.toLocaleString()}</div>
              <p className="text-muted-foreground text-xs mb-6">= {loyaltyBonuses}₽ к следующему заказу</p>
              <div className="w-full bg-secondary rounded-full h-2 mb-2">
                <div className="h-2 rounded-full gold-gradient" style={{ width: "62%" }} />
              </div>
              <p className="text-muted-foreground text-xs">1250 / 2000 до статуса Золото</p>
              <button className="mt-6 w-full gold-gradient text-primary-foreground py-3 text-sm tracking-widest font-semibold rounded hover:opacity-90 transition-opacity">
                ВОЙТИ В ЛИЧНЫЙ КАБИНЕТ
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-24 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary text-xs tracking-[0.4em] mb-4">НАШЕ МЕНЮ</p>
            <h2 className="font-display text-5xl md:text-6xl font-light mb-4">Каждый ролл — <em className="gold-text">шедевр</em></h2>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {menuCategories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 text-sm tracking-widest transition-all duration-300 ${
                  activeCategory === cat
                    ? "gold-gradient text-primary-foreground"
                    : "gold-border text-muted-foreground hover:text-primary"
                }`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(item => (
              <div key={item.id} className="dark-card rounded-xl overflow-hidden group hover:border-primary/40 transition-all duration-500">
                <div className="h-40 relative overflow-hidden" style={{
                  background: `linear-gradient(135deg, hsl(${item.id * 30}, 30%, 12%), hsl(${item.id * 20}, 20%, 8%))`
                }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-500">
                      {item.category === "Роллы" ? "🍣" : item.category === "Суши" ? "🍱" : item.category === "Сашими" ? "🐟" : "🎋"}
                    </span>
                  </div>
                  {item.badge && (
                    <div className="absolute top-3 left-3 gold-gradient text-primary-foreground text-xs px-3 py-1 font-semibold tracking-wider">
                      {item.badge}
                    </div>
                  )}
                  {item.spicy && (
                    <div className="absolute top-3 right-3 text-xs">🌶️</div>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-display text-xl font-semibold text-foreground">{item.name}</h3>
                    <span className="text-muted-foreground text-xs mt-1">{item.weight}</span>
                  </div>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed mb-5">{item.desc}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-display text-2xl gold-text font-semibold">{item.price.toLocaleString()}₽</span>
                      <span className="text-muted-foreground text-xs ml-2">+{Math.round(item.price * 0.05)} бонусов</span>
                    </div>
                    <button onClick={() => addToCart(item.id)}
                      className={`flex items-center gap-2 px-4 py-2 text-sm transition-all duration-300 ${
                        cart[item.id]
                          ? "gold-gradient text-primary-foreground"
                          : "gold-border text-primary hover:bg-primary/10"
                      }`}>
                      <Icon name={cart[item.id] ? "Check" : "Plus"} size={14} />
                      {cart[item.id] ? `${cart[item.id]} в корзине` : "В корзину"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="gold-border text-primary px-10 py-4 text-sm tracking-widest hover:bg-primary/10 transition-all duration-300">
              ПОЛНОЕ МЕНЮ — ОФОРМИТЬ ЗАКАЗ
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 lg:px-16 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 hidden lg:block">
          <img src={CHEF_IMAGE} alt="Шеф-повар" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, hsl(20,10%,6%), transparent)" }} />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-2xl">
            <p className="text-primary text-xs tracking-[0.4em] mb-4">О НАС</p>
            <h2 className="font-display text-5xl md:text-6xl font-light mb-8">
              Философия <em className="gold-text">вкуса</em>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg font-light">
              «Сашими» — это не просто доставка суши. Это концепция, в которой каждый ролл создаётся с уважением к японским традициям и любовью к вкусу.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12 font-light">
              Наш шеф-повар Танака-сан обучался в Токио в течение 8 лет. Рыба поставляется ежедневно из Мурманска и Норвегии. Рис мы готовим по авторскому рецепту с рисовым уксусом и морскими водорослями.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: "Fish", title: "Свежесть гарантирована", desc: "Рыба поставляется ежедневно, срок хранения — не более 24 часов" },
                { icon: "Award", title: "Мастерство шефа", desc: "8 лет обучения в Токио, авторские рецепты и техники" },
                { icon: "Clock", title: "Точно в срок", desc: "Доставка за 60 минут или заказ бесплатно" },
                { icon: "Leaf", title: "Только натуральное", desc: "Без консервантов, усилителей вкуса и глутамата" },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-3">
                  <div className="w-10 h-10 rounded-full gold-border flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name={icon as "Fish"} size={16} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-1">{title}</div>
                    <div className="text-muted-foreground text-xs font-light leading-relaxed">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERY */}
      <section id="delivery" className="py-24 px-6 lg:px-16 relative">
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at 50% 0%, hsl(42,50%,15%), transparent 70%)" }} />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-primary text-xs tracking-[0.4em] mb-4">ДОСТАВКА</p>
            <h2 className="font-display text-5xl md:text-6xl font-light mb-4">Быстро и <em className="gold-text">бережно</em></h2>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {deliveryZones.map(({ zone, time, price }) => (
              <div key={zone} className="dark-card rounded-xl p-8 text-center hover:border-primary/40 transition-all duration-300">
                <Icon name="MapPin" size={24} className="text-primary mx-auto mb-4" />
                <h3 className="font-display text-2xl font-semibold mb-2">{zone}</h3>
                <div className="gold-text font-display text-3xl font-semibold mb-2">{time}</div>
                <p className="text-muted-foreground text-sm">{price}</p>
              </div>
            ))}
          </div>

          <div className="dark-card rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {[
                { step: "01", icon: "Smartphone", title: "Выберите блюда", desc: "В удобном меню на сайте или по телефону" },
                { step: "02", icon: "CreditCard", title: "Оплатите", desc: "Картой онлайн, наличными или бонусами" },
                { step: "03", icon: "ChefHat", title: "Мы готовим", desc: "Шеф-повар начинает готовить сразу после заказа" },
                { step: "04", icon: "Bike", title: "Доставка", desc: "Курьер доставит в термосумке для сохранения температуры" },
              ].map(({ step, icon, title, desc }) => (
                <div key={step} className="relative">
                  <div className="font-display text-6xl gold-text opacity-20 font-semibold absolute -top-2 left-1/2 -translate-x-1/2">{step}</div>
                  <div className="relative z-10 pt-4">
                    <div className="w-12 h-12 rounded-full gold-border flex items-center justify-center mx-auto mb-4">
                      <Icon name={icon as "Smartphone"} size={20} className="text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">{title}</h4>
                    <p className="text-muted-foreground text-sm font-light leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary text-xs tracking-[0.4em] mb-4">ОТЗЫВЫ</p>
            <h2 className="font-display text-5xl md:text-6xl font-light mb-4">Говорят <em className="gold-text">гости</em></h2>
            <div className="section-divider mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="dark-card rounded-xl p-8 hover:border-primary/40 transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <span key={i} className="text-primary text-sm">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground font-light leading-relaxed mb-6 italic">"{r.text}"</p>
                <div className="gold-border-top pt-4 flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-sm">{r.name}</div>
                    <div className="text-muted-foreground text-xs">{r.date}</div>
                  </div>
                  <div className="w-8 h-8 rounded-full gold-gradient flex items-center justify-center">
                    <Icon name="User" size={14} className="text-primary-foreground" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              <h3 className="font-display text-2xl font-semibold mb-6">Оставить заявку</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-muted-foreground text-xs tracking-wider block mb-2">ВАШЕ ИМЯ</label>
                  <input type="text" placeholder="Александр"
                    className="w-full bg-secondary gold-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="text-muted-foreground text-xs tracking-wider block mb-2">ТЕЛЕФОН</label>
                  <input type="tel" placeholder="+7 (___) ___-__-__"
                    className="w-full bg-secondary gold-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="text-muted-foreground text-xs tracking-wider block mb-2">КОММЕНТАРИЙ</label>
                  <textarea placeholder="Уточните адрес или пожелания к заказу..." rows={3}
                    className="w-full bg-secondary gold-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none" />
                </div>
                <button className="w-full gold-gradient text-primary-foreground py-4 text-sm tracking-widest font-semibold hover:opacity-90 transition-opacity rounded">
                  ОТПРАВИТЬ ЗАЯВКУ
                </button>
              </div>
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
            {[["Instagram","instagram"],["Send","telegram"],["Phone","phone"]].map(([icon, label]) => (
              <button key={label}
                className="w-10 h-10 rounded-full gold-border flex items-center justify-center text-primary hover:bg-primary/10 transition-colors">
                <Icon name={icon as "Instagram"} size={16} />
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
