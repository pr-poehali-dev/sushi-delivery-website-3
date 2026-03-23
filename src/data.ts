export const SUBMIT_ORDER_URL = "https://functions.poehali.dev/84f60205-efe9-43b9-8f9d-51b38bba1a3b";

export const HERO_IMAGE = "https://cdn.poehali.dev/projects/02835ea0-044e-4985-b042-6784b0274c57/files/220231a1-6843-4454-af9e-bee9ca252a5b.jpg";
export const CHEF_IMAGE = "https://cdn.poehali.dev/projects/02835ea0-044e-4985-b042-6784b0274c57/files/cde1045e-9d1d-4a5e-9c83-1b82d98d9877.jpg";

export const menuCategories = [
  "Все",
  "Новинки",
  "Роллы",
  "Роллы запеченные",
  "Мак роллы",
  "Суши",
  "Роллы сладкие",
  "Сеты",
  "Суши-торты",
  "Соусы",
];

export const menuItems = [
  { id: 1, name: "Дракон", category: "Роллы", price: 890, weight: "320г", desc: "Угорь, авокадо, огурец, икра тобико", badge: "Хит", spicy: false, image: null },
  { id: 2, name: "Феникс", category: "Роллы", price: 760, weight: "290г", desc: "Тунец, манго, сыр, острый соус", badge: null, spicy: true, image: null },
  { id: 3, name: "Чёрный принц", category: "Роллы", price: 920, weight: "300г", desc: "Чернильный рис, краб, авокадо, икра", badge: null, spicy: false, image: null },
  { id: 4, name: "Эдамаме Трюфель", category: "Роллы", price: 680, weight: "260г", desc: "Соевые бобы, трюфельное масло, кунжут", badge: null, spicy: false, image: null },
  { id: 30, name: "Филадельфия с лососем", category: "Роллы", price: 790, weight: "280г", desc: "Лосось, сливочный сыр, огурец, рис", badge: null, spicy: false, image: "https://cdn.poehali.dev/projects/02835ea0-044e-4985-b042-6784b0274c57/bucket/80f24c8b-c8ef-4974-bbde-ac4b74bf6e7c.jpg" },
  { id: 31, name: "Большой ролл Фила", category: "Роллы", price: 990, weight: "400г", desc: "Лосось, сливочный сыр, огурец — большой формат", badge: null, spicy: false, image: "https://cdn.poehali.dev/projects/02835ea0-044e-4985-b042-6784b0274c57/bucket/e6f7afde-faa9-4cf4-908f-c63d7d79b679.jpg" },
  { id: 32, name: "Итачи", category: "Роллы", price: 850, weight: "300г", desc: "Краб, авокадо, огурец, сыр, соус спайси", badge: null, spicy: false, image: "https://cdn.poehali.dev/projects/02835ea0-044e-4985-b042-6784b0274c57/bucket/16305f34-3dd0-46f1-abae-3f6fe096beea.jpg" },
  { id: 33, name: "Филадельфия с креветкой", category: "Роллы", price: 820, weight: "290г", desc: "Тигровая креветка, сливочный сыр, огурец, икра тобико", badge: null, spicy: false, image: "https://cdn.poehali.dev/projects/02835ea0-044e-4985-b042-6784b0274c57/bucket/dd431390-6214-4c8b-a468-e6d546004e1d.jpg" },
  { id: 34, name: "Чёрная Луна", category: "Роллы", price: 970, weight: "310г", desc: "Чёрный рис, лосось тартар, авокадо, соус унаги", badge: null, spicy: false, image: "https://cdn.poehali.dev/projects/02835ea0-044e-4985-b042-6784b0274c57/bucket/e3d104b1-e6e0-4b5f-9ca9-295311ddcf16.jpg" },
  { id: 35, name: "Филадельфия с лососем и авокадо", category: "Роллы", price: 840, weight: "300г", desc: "Лосось, авокадо, сливочный сыр, икра тобико", badge: null, spicy: false, image: "https://cdn.poehali.dev/projects/02835ea0-044e-4985-b042-6784b0274c57/bucket/e4d002ca-effa-4582-a149-5ac275a8eef7.jpg" },
  { id: 5, name: "Лосось Запечённый", category: "Роллы запеченные", price: 820, weight: "300г", desc: "Лосось, сливочный сыр, соус спайси, запечены до золотистой корочки", badge: "Хит", spicy: false },
  { id: 6, name: "Краб Горячий", category: "Роллы запеченные", price: 870, weight: "310г", desc: "Крабовое мясо, авокадо, сыр, майонез — запечены в духовке", badge: null, spicy: false },
  { id: 7, name: "Вулкан", category: "Роллы запеченные", price: 950, weight: "320г", desc: "Тигровые креветки, сыр, соус терияки, запечены с кунжутом", badge: "Новинка", spicy: true },
  { id: 8, name: "Биг Мак Ролл", category: "Мак роллы", price: 590, weight: "280г", desc: "Говядина, огурец, листья салата, фирменный соус", badge: null, spicy: false },
  { id: 9, name: "Чикен Мак", category: "Мак роллы", price: 540, weight: "270г", desc: "Куриное филе, сыр чеддер, помидор, соус BBQ", badge: "Хит", spicy: false },
  { id: 10, name: "Фиш Мак", category: "Мак роллы", price: 560, weight: "265г", desc: "Минтай в кляре, огурец, тартар, хрустящий рис", badge: null, spicy: false },
  { id: 11, name: "Нигири Лосось", category: "Суши", price: 320, weight: "100г", desc: "Норвежский лосось слабой соли на рисе", badge: "Хит", spicy: false },
  { id: 12, name: "Нигири Магуро", category: "Суши", price: 380, weight: "100г", desc: "Синеплавниковый тунец на рисовом суши", badge: null, spicy: false },
  { id: 13, name: "Нигири Угорь", category: "Суши", price: 410, weight: "100г", desc: "Копчёный угорь унаги с соусом и кунжутом", badge: null, spicy: false },
  { id: 14, name: "Клубничный Рай", category: "Роллы сладкие", price: 490, weight: "220г", desc: "Рисовое тесто, маскарпоне, свежая клубника, карамель", badge: "Новинка", spicy: false },
  { id: 15, name: "Шоколадный Бонбон", category: "Роллы сладкие", price: 520, weight: "230г", desc: "Нутелла, банан, хрустящий рис, посыпка какао", badge: null, spicy: false },
  { id: 16, name: "Манго Тропик", category: "Роллы сладкие", price: 480, weight: "215г", desc: "Манго, кокосовое молоко, маскарпоне, мята", badge: null, spicy: false },
  { id: 17, name: "Сет Императора", category: "Сеты", price: 3200, weight: "1.2кг", desc: "48 штук — роллы, суши, сашими от шефа", badge: "Выгода 30%", spicy: false },
  { id: 18, name: "Сет на двоих", category: "Сеты", price: 1890, weight: "700г", desc: "32 штуки — классические и запечённые роллы", badge: "Хит", spicy: false },
  { id: 19, name: "Сет Мак", category: "Сеты", price: 1490, weight: "600г", desc: "24 штуки мак-роллов на выбор + соус", badge: null, spicy: false },
  { id: 20, name: "Торт Лосось-Авокадо", category: "Суши-торты", price: 2800, weight: "1.0кг", desc: "Лосось, авокадо, сливочный сыр, рис — торт на 4–6 персон", badge: "Хит", spicy: false },
  { id: 21, name: "Торт Радуга", category: "Суши-торты", price: 3100, weight: "1.2кг", desc: "5 видов рыбы, разноцветный декор из авокадо и икры", badge: "Новинка", spicy: false },
  { id: 22, name: "Соус Спайси", category: "Соусы", price: 80, weight: "50г", desc: "Острый майонезный соус с чили и чесноком", badge: null, spicy: true },
  { id: 23, name: "Соус Терияки", category: "Соусы", price: 80, weight: "50г", desc: "Классический японский соус с мёдом и соей", badge: null, spicy: false },
  { id: 24, name: "Соус Унаги", category: "Соусы", price: 90, weight: "50г", desc: "Сладкий густой соус для угря и запечённых роллов", badge: null, spicy: false },
  { id: 25, name: "Соус Тартар", category: "Соусы", price: 80, weight: "50г", desc: "Сливочный соус с каперсами и зеленью", badge: null, spicy: false },
  { id: 26, name: "Чёрный принц", category: "Новинки", price: 920, weight: "300г", desc: "Чернильный рис, краб, авокадо, икра", badge: "Новинка", spicy: false },
  { id: 27, name: "Вулкан", category: "Новинки", price: 950, weight: "320г", desc: "Тигровые креветки, сыр, соус терияки, запечены с кунжутом", badge: "Новинка", spicy: true },
  { id: 28, name: "Торт Радуга", category: "Новинки", price: 3100, weight: "1.2кг", desc: "5 видов рыбы, разноцветный декор из авокадо и икры", badge: "Новинка", spicy: false },
  { id: 29, name: "Клубничный Рай", category: "Новинки", price: 490, weight: "220г", desc: "Рисовое тесто, маскарпоне, свежая клубника, карамель", badge: "Новинка", spicy: false },
];

export const reviews = [
  { name: "Александра М.", rating: 5, text: "Лучшая доставка суши в городе! Рыба невероятно свежая, роллы доехали в идеальном виде. Уже накопила 800 бонусов!", date: "15 марта 2026" },
  { name: "Дмитрий К.", rating: 5, text: "Заказываю каждую неделю. Сет Императора — это шедевр. Бонусная программа — отличная идея, уже списал на бесплатный ролл.", date: "10 марта 2026" },
  { name: "Елена В.", rating: 5, text: "Элегантная упаковка, потрясающий вкус. Лосось Премиум от шефа — просто тает во рту. Рекомендую всем!", date: "5 марта 2026" },
];

export const deliveryZones = [
  { zone: "Центр", time: "30–45 мин", price: "Бесплатно от 1500₽" },
  { zone: "Север / Юг", time: "45–60 мин", price: "Бесплатно от 2000₽" },
  { zone: "Запад / Восток", time: "60–75 мин", price: "Бесплатно от 2500₽" },
];

export type CartMap = { [key: number]: number };
export type CartItem = { id: number; name: string; price: number; qty: number };
export type FormStatus = "idle" | "loading" | "success" | "error";