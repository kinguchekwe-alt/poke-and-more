"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">

    
      {/* HERO */}
      <section
        className="relative h-[85vh] flex items-center justify-center text-center px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 max-w-4xl text-white">
          <p className="uppercase tracking-[0.3em] text-sm mb-4 font-semibold">
            Fresh • Fast • Flavorful
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Fresh Hawaiian
            <br />
            Poke & More
          </h1>

          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Signature poke bowls, fresh seafood, handcrafted sauces,
            and California-inspired flavors made daily.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/menu"
              className="px-8 py-4 rounded-lg font-semibold text-lg text-white"
              style={{ backgroundColor: "#ea2a2f" }}
            >
              View Menu
            </a>

            <a
              href="/contact"
              className="px-8 py-4 rounded-lg font-semibold text-lg border border-white hover:bg-white hover:text-black transition"
            >
              Visit Us
            </a>
          </div>
        </div>
      </section>

      {/* FEATURED ITEMS */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <p
              className="font-semibold uppercase tracking-widest mb-2"
              style={{ color: "#ea2a2f" }}
            >
              Customer Favorites
            </p>

            <h2
              className="text-4xl font-bold"
              style={{ color: "#104c36" }}
            >
              Signature Menu Items
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <FoodCard
              title="Salmon Lover Bowl"
              desc="Fresh salmon, crab mix, cucumber, avocado, seaweed salad"
            />

            <FoodCard
              title="Spicy Tuna Pokirrito"
              desc="Wrapped sushi burrito packed with tuna, rice, and signature sauce"
            />

            <FoodCard
              title="Garlic Shrimp Bowl"
              desc="Savory grilled shrimp with warm rice and house toppings"
            />

          </div>
        </div>
      </section>

      {/* BUILD YOUR OWN */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p
              className="font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#ea2a2f" }}
            >
              Build Your Own
            </p>

            <h2
              className="text-4xl font-bold mb-6"
              style={{ color: "#104c36" }}
            >
              Create Your Perfect Bowl
            </h2>

            <p className="text-gray-700 text-lg mb-6">
              Choose your base, proteins, toppings, sauces, and crunch.
              Fresh ingredients prepared daily for a bowl made exactly how you like it.
            </p>

            <ul className="space-y-3 text-lg">
              <li>✓ White Rice / Brown Rice / Salad Base</li>
              <li>✓ Salmon / Tuna / Shrimp / Eel / Tofu</li>
              <li>✓ House Sauces + Premium Toppings</li>
            </ul>
          </div>

          <div
            className="rounded-2xl h-[420px]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </section>

      {/* REVIEWS */}
      <section
        className="py-20 px-6 text-white"
        style={{ backgroundColor: "#104c36" }}
      >
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-8">
            Loved By Locals
          </h2>

          <p className="text-xl italic mb-6">
            “Fresh ingredients, huge portions, and the best poke bowls in town.”
          </p>

          <p className="font-semibold">
            — Local Customer Review
          </p>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2
            className="text-4xl font-bold mb-6"
            style={{ color: "#104c36" }}
          >
            Visit Poke & More
          </h2>

          <p className="text-lg text-gray-700 mb-4">
            Fresh poke, fast service, and a welcoming atmosphere for dine-in or takeout.
          </p>

          <p className="mb-8">
            📍 Los Angeles, California
          </p>

          <a
            href="/contact"
            className="px-8 py-4 rounded-lg font-semibold text-white text-lg"
            style={{ backgroundColor: "#ea2a2f" }}
          >
            Get Directions
          </a>
        </div>
      </section>

    </main>
  );
}

function FoodCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
      <h3
        className="text-2xl font-bold mb-3"
        style={{ color: "#104c36" }}
      >
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed">
        {desc}
      </p>
    </div>
  );
} 
