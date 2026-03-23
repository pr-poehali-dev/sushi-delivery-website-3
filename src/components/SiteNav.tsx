import Icon from "@/components/ui/icon";

interface SiteNavProps {
  totalInCart: number;
  onCartClick: () => void;
  onScrollTo: (id: string) => void;
}

export default function SiteNav({ totalInCart, onCartClick, onScrollTo }: SiteNavProps) {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-16 py-4"
      style={{ background: "linear-gradient(to bottom, hsl(20,10%,6%), transparent)" }}
    >
      <button
        onClick={() => onScrollTo("hero")}
        className="font-display text-2xl tracking-[0.15em] gold-text font-semibold"
      >
        САШИМИ
      </button>
      <div className="hidden md:flex items-center gap-8 text-sm tracking-widest text-muted-foreground font-light">
        {[["menu", "МЕНЮ"], ["about", "О НАС"], ["delivery", "ДОСТАВКА"], ["contacts", "КОНТАКТЫ"]].map(([id, label]) => (
          <button
            key={id}
            onClick={() => onScrollTo(id)}
            className="hover:text-primary transition-colors duration-300"
          >
            {label}
          </button>
        ))}
      </div>
      <button
        onClick={onCartClick}
        className="relative flex items-center gap-2 gold-border rounded-full px-4 py-2 text-sm text-primary hover:bg-primary/10 transition-all duration-300"
      >
        <Icon name="ShoppingBag" size={16} />
        {totalInCart > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-semibold">
            {totalInCart}
          </span>
        )}
      </button>
    </nav>
  );
}
