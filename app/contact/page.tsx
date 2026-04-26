"use client";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* HEADER */}
      <section className="py-20 px-6 text-center border-b border-gray-100">
        <h1
          className="text-5xl font-bold mb-4"
          style={{ color: "#104c36" }}
        >
          Contact Us
        </h1>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Visit us, call ahead, or stop by for fresh poke bowls made daily.
        </p>
      </section>

      {/* INFO SECTION */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">

          {/* LEFT: DETAILS */}
          <div className="space-y-6">

            {/* ADDRESS */}
            <div>
              <h2 className="text-xl font-bold mb-2" style={{ color: "#104c36" }}>
                Address
              </h2>
              <p className="text-gray-700">
                1928 Pacific Coast Hwy<br />
                Lomita, CA
              </p>
            </div>

            {/* PHONE (UPDATED) */}
            <div>
              <h2 className="text-xl font-bold mb-2" style={{ color: "#104c36" }}>
                Phone
              </h2>
              <a
                href="tel:+14242634215"
                className="text-gray-700 hover:underline"
              >
                +1 424 263 4215
              </a>
            </div>

            {/* HOURS (UPDATED CLEAN VERSION) */}
            <div>
              <h2 className="text-xl font-bold mb-2" style={{ color: "#104c36" }}>
                Hours
              </h2>

              <div className="text-gray-700 space-y-1">
                <p><strong>Mon:</strong> 10:00 AM - 8:00 PM</p>
                <p><strong>Tue:</strong> 10:00 AM - 8:00 PM</p>
                <p><strong>Wed:</strong> 10:00 AM - 8:00 PM</p>
                <p><strong>Thu:</strong> 10:00 AM - 8:00 PM</p>
                <p><strong>Fri:</strong> 10:00 AM - 8:00 PM</p>
                <p><strong>Sat:</strong> 10:00 AM - 8:00 PM</p>
                <p><strong>Sun:</strong> 10:00 AM - 6:00 PM</p>
              </div>
            </div>

          </div>

          {/* RIGHT: MAP */}
          <div className="w-full h-[300px] rounded-xl overflow-hidden border border-gray-200">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=1928%20Pacific%20Coast%20Hwy%20Lomita%20CA&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center border-t border-gray-100">

        <h2
          className="text-3xl font-bold mb-4"
          style={{ color: "#104c36" }}
        >
          Stop By or Call Ahead
        </h2>

        <p className="text-gray-600 mb-6">
          Fresh poke made daily — quick pickup and dine-in available.
        </p>

        <a
          href="tel:+14242634215"
          className="inline-block px-8 py-4 rounded-lg text-white font-semibold"
          style={{ backgroundColor: "#ea2a2f" }}
        >
          Call Now
        </a>

      </section>

    </main>
  );
}