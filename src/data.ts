export const SUBMIT_ORDER_URL = "https://functions.poehali.dev/84f60205-efe9-43b9-8f9d-51b38bba1a3b";

export const HERO_IMAGE = "https://cdn.poehali.dev/projects/02835ea0-044e-4985-b042-6784b0274c57/files/220231a1-6843-4454-af9e-bee9ca252a5b.jpg";
export const CHEF_IMAGE = "https://cdn.poehali.dev/projects/02835ea0-044e-4985-b042-6784b0274c57/files/cde1045e-9d1d-4a5e-9c83-1b82d98d9877.jpg";

export const menuCategories = ["Все", "Роллы", "Суши", "Сашими", "Сеты"];

export const menuItems = [
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
