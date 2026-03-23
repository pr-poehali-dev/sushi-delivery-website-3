import { useState } from "react";
import { menuItems, CartMap } from "@/data";
import SiteNav from "@/components/SiteNav";
import MenuSection from "@/components/MenuSection";
import ContactsSection from "@/components/ContactsSection";
import CartModal from "@/components/CartModal";

export default function Index() {
  const [cart, setCart] = useState<CartMap>({});
  const [showOrderModal, setShowOrderModal] = useState(false);

  const totalInCart = Object.values(cart).reduce((a, b) => a + b, 0);
  const cartItems = menuItems
    .filter((i) => cart[i.id] > 0)
    .map((i) => ({ id: i.id, name: i.name, price: i.price, qty: cart[i.id] }));
  const cartTotal = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);

  const addToCart = (id: number) =>
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));

  const removeFromCart = (id: number) =>
    setCart((prev) => {
      const next = { ...prev };
      if (next[id] > 1) next[id]--;
      else delete next[id];
      return next;
    });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav
        totalInCart={totalInCart}
        onCartClick={() => (totalInCart > 0 ? setShowOrderModal(true) : scrollTo("menu"))}
        onScrollTo={scrollTo}
      />

      <MenuSection
        cart={cart}
        onAddToCart={addToCart}
        onScrollTo={scrollTo}
      />

      <ContactsSection />

      {showOrderModal && (
        <CartModal
          cart={cart}
          cartItems={cartItems}
          cartTotal={cartTotal}
          onClose={() => setShowOrderModal(false)}
          onAddToCart={addToCart}
          onRemoveFromCart={removeFromCart}
          onClearCart={() => setCart({})}
        />
      )}
    </div>
  );
}
