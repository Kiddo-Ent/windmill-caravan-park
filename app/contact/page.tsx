import Link from "next/link";

export default function ContactPage() {
return ( <main className="min-h-screen bg-white">

  <nav className="bg-green-700 text-white shadow-sm">
    <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

      <h1 className="font-bold text-xl">
        Windmill Caravan Park - Mobile: 0466544960
      </h1>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/contact">Contact</Link>
      </div>

    </div>
  </nav>

  <section className="bg-green-700 text-white py-16 px-6 text-center">

    <h1 className="text-5xl font-bold mb-4">
      Contact Us
    </h1>

    <p className="text-xl">
      We'd love to hear from you.
    </p>

  </section>

  <section className="py-20 px-6">
    <div className="max-w-3xl mx-auto">

      <div className="bg-white rounded-xl shadow-lg p-10 space-y-8">

        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-2">
            Mobile
          </h2>

          <a
            href="tel:0466544960"
            className="text-lg hover:text-green-700"
          >
            0466 544 960
          </a>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-2">
            Email
          </h2>

          <a
            href="mailto:wcpyarram@gmail.com"
            className="text-lg hover:text-green-700"
          >
            wcpyarram@gmail.com
          </a>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-2">
            Address
          </h2>

          <p className="text-lg">
            460 Commercial Road<br />
            Yarram VIC 3971
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-2">
            Office Hours
          </h2>

          <p className="text-lg">
            Monday – Sunday<br />
            9:00am – 5:00pm
          </p>
        </div>

      </div>

    </div>
  </section>

  <section className="bg-green-50 py-12 text-center">

    <Link
      href="/"
      className="inline-block bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800"
    >
      Return Home
    </Link>

  </section>

</main>

);
}
