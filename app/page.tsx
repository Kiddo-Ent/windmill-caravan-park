import Image from "next/image";
import Link from "next/link";
export default function Home() {
return ( <main className="min-h-screen bg-white">

  <nav className="bg-green-700 text-white shadow-sm">
    <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">
        Windmill Caravan Park - Mobile: 0466544960
      </h1>

      <div className="flex gap-6">
        <a href="#" className="hover:text-green-200">
          Home
        </a>

        <a href="/gallery" className="hover:text-green-200">
  Gallery
</a>

        <a href="/contact" className="hover:text-green-200">
  Contact
</a>
      </div>
    </div>
  </nav>

  <section className="relative h-[600px]">
    <Image
      src="/images/hero.jpg"
      alt="Windmill Caravan Park"
      fill
      priority
      className="object-cover object-center"
    />

    <div className="absolute inset-0 bg-green-700/70 flex items-center justify-center">
      <div className="text-center text-white px-6">

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Windmill Caravan Park
        </h1>

        <p className="text-2xl md:text-3xl mb-4">
          Your Relaxing Gippsland Getaway in Yarram, Victoria
        </p>

        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Friendly accommodation, clean facilities and a relaxed
          atmosphere in the heart of Gippsland.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

    <Link
  href="/contact"
  className="border border-white px-8 py-3 rounded-lg hover:bg-white/10"
>
  Book Now
</Link>
<a
          href="tel:0466544960"
          className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100"
        >
        Call Us
        </a>

        </div>

      </div>
    </div>
  </section>

  <section id="gallery" className="py-20 px-6">
    <div className="max-w-7xl mx-auto">

      <h2 className="text-4xl font-bold text-center mb-4">
        Photo Gallery
      </h2>

      <p className="text-center text-gray-600 mb-12">
        Explore Windmill Caravan Park and discover why visitors
        return to Yarram year after year.
      </p>

      
    </div>
  </section>

  <section className="bg-green-50 py-20 px-6">
    <div className="max-w-5xl mx-auto">

      <h2 className="text-4xl font-bold text-center mb-12">
        Why Stay With Us?
      </h2>

      <div className="grid md:grid-cols-2 gap-6 text-lg max-w-3xl mx-auto">

        <div>✓ Pet Friendly</div>
        <div>✓ Comfortable Accommodation</div>
        <div>✓ Spacious Sites</div>
        <div>✓ Family Friendly</div>
        <div>✓ Quick Walk to Supermarkets & Shops</div>
        <div>✓ Games Room</div>
        <div>✓ Laundry & Clean Amenities</div>
        <div>✓ Relaxed Country Atmosphere</div>

      </div>

    </div>
  </section>

  <section className="py-20 px-6">
    <div className="max-w-6xl mx-auto">

      <h2 className="text-4xl font-bold text-center mb-12">
        Explore Yarram & Surrounds
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="border rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-semibold mb-4">
            Agnes Falls
          </h3>
          <p>
            Victoria's highest single-drop waterfall and one of
            Gippsland's most popular natural attractions.
          </p>
        </div>

        <div className="border rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-semibold mb-4">
            Tarra-Bulga National Park
          </h3>
          <p>
            Stunning rainforest walks, wildlife and spectacular scenery.
          </p>
        </div>

        <div className="border rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-semibold mb-4">
            Port Albert
          </h3>
          <p>
            Historic fishing village featuring fresh seafood and boating.
          </p>
        </div>

        <div className="border rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-semibold mb-4">
            Ninety Mile Beach
          </h3>
          <p>
            Enjoy fishing, beach walks and stunning coastal scenery.
          </p>
        </div>

      </div>

    </div>
  </section>

  <section id="contact" className="bg-green-700 text-white py-20 px-6">
    <div className="max-w-4xl mx-auto text-center">

      <h2 className="text-4xl font-bold mb-10">
        Contact Us
      </h2>

      <div className="space-y-4 text-lg">

        <p>📞 0466 544 960</p>

        <p>✉️ wcpyarram@gmail.com</p>

        <p>📍 460 Commercial Road, Yarram VIC 3971</p>

        <p>🕘 Office Hours: 9:00am – 5:00pm</p>

      </div>

      <div className="mt-10">

        <a
          href="tel:0466544960"
          className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100"
        >
          Book Now – Call Us
        </a>

      </div>

    </div>
  </section>

</main>

);
}
