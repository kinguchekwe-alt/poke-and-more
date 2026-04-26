"use client";

import { useState, useEffect, useMemo } from "react";

type CartItem = {
  name: string;
  price: number;
};

const categories = ["Bowls", "Burritos", "Breakfast", "Plates", "Sides"];

export default function MenuPage() {
  const [active, setActive] = useState("Bowls");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  // LOCK SCROLL WHEN CART OPEN
  useEffect(() => {
    document.body.style.overflow = cartOpen ? "hidden" : "auto";
  }, [cartOpen]);

  function addToCart(item: CartItem) {
    setCart((prev) => [...prev, item]);

    setToast(`Added ${item.name}`);
    setTimeout(() => setToast(null), 1200);
  }

  const total = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  }, [cart]);

  return (
    <main className="min-h-screen bg-white text-black">

      {/* HERO */}
      <section className="py-20 text-center text-white" style={{ backgroundColor: "#104c36" }}>
        <h1 className="text-5xl font-bold">Our Menu</h1>
      </section>

      {/* TABS */}
      <div className="sticky top-0 bg-white border-b z-40">
        <div className="flex gap-3 overflow-x-auto px-4 py-3 max-w-6xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm transition hover:-translate-y-0.5 ${
                active === cat ? "text-white" : "bg-gray-100"
              }`}
              style={active === cat ? { backgroundColor: "#ea2a2f" } : {}}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* LAYOUT */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 grid md:grid-cols-3 gap-6">

        {/* MENU */}
        <div className="md:col-span-2 space-y-10">

          <MenuBlock
            title={active}
            items={getItems(active)}
            addToCart={addToCart}
          />

        </div>

        {/* DESKTOP CART */}
        <div className="hidden md:block border rounded-2xl p-5 sticky top-24">

          <h2 className="text-xl font-bold text-[#104c36]">Your Order</h2>

          <div className="mt-4 space-y-2">
            {cart.map((c, i) => (
              <div key={i} className="flex justify-between text-sm">
                <span>{c.name}</span>
                <span>${c.price.toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="border-t mt-4 pt-4 flex justify-between font-bold">
            <span>Total</span>
            <span style={{ color: "#ea2a2f" }}>${total}</span>
          </div>

          <button className="w-full mt-4 py-3 rounded-lg text-white font-semibold transition hover:-translate-y-0.5"
            style={{ backgroundColor: "#ea2a2f" }}>
            Checkout
          </button>

        </div>

      </div>

      {/* MOBILE CART BUTTON */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
        <button
          onClick={() => setCartOpen(true)}
          className="w-full py-4 text-white font-bold rounded-xl shadow-lg transition hover:-translate-y-0.5"
          style={{ backgroundColor: "#ea2a2f" }}
        >
          View Cart • {cart.length}
        </button>
      </div>

      {/* MOBILE DRAWER */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 md:hidden">

          <div className="absolute inset-0 bg-black/40" onClick={() => setCartOpen(false)} />

          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-5">

            <h2 className="font-bold text-[#104c36]">Your Order</h2>

            {cart.map((c, i) => (
              <div key={i} className="flex justify-between text-sm mt-2">
                <span>{c.name}</span>
                <span>${c.price.toFixed(2)}</span>
              </div>
            ))}

            <div className="border-t mt-4 pt-4 flex justify-between font-bold">
              <span>Total</span>
              <span style={{ color: "#ea2a2f" }}>${total}</span>
            </div>

            <button className="w-full mt-4 py-3 text-white font-semibold rounded-lg"
              style={{ backgroundColor: "#ea2a2f" }}>
              Checkout
            </button>

          </div>
        </div>
      )}

      {/* TOAST */}
      {toast && (
        <div className="fixed top-5 right-5 bg-[#104c36] text-white px-4 py-2 rounded shadow-lg">
          {toast} ✔
        </div>
      )}

    </main>
  );
}

/* ---------------------------
   MENU DATA
---------------------------- */

function getItems(active: string): [string, number][] {
  const data: Record<string, [string, number][]> = {
    Bowls: [["Tuna", 18.97], ["Salmon", 19.54], ["Tofu", 12.7]],
    Burritos: [["Tuna Burrito", 16.38], ["Salmon Burrito", 16.96]],
    Breakfast: [["Portuguese Sausage", 12.64], ["Corned Beef", 14.94]],
    Plates: [["Sizzling Tuna Sisig", 16.9], ["Pork Sisig", 17.24]],
    Sides: [["Seaweed Salad", 1.8], ["Spicy Mayo", 1.32]],
  };

  return data[active] || [];
}

/* ---------------------------
   MENU BLOCK
---------------------------- */

function MenuBlock({
  title,
  items,
  addToCart,
}: {
  title: string;
  items: [string, number][];
  addToCart: (item: CartItem) => void;
}) {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6 text-[#104c36]">{title}</h2>

      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="flex justify-between border-b pb-3">
            <div>
              <p className="font-medium">{item[0]}</p>
              <p className="text-sm text-gray-500">${item[1].toFixed(2)}</p>
            </div>

            <button
              onClick={() => addToCart({ name: item[0], price: item[1] })}
              className="px-3 py-1 text-white rounded transition hover:-translate-y-0.5 active:scale-95"
              style={{ backgroundColor: "#104c36" }}
            >
              Add
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}