import Image from "next/image";
import Link from "next/link";

export default function GalleryPage() {
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
      Photo Gallery
    </h1>

    <p className="text-xl max-w-3xl mx-auto">
      Take a look around Windmill Caravan Park and discover
      our facilities, grounds and relaxed Gippsland atmosphere.
    </p>

  </section>

  <section className="py-16 px-6">
    <div className="max-w-7xl mx-auto">

      <div className="grid md:grid-cols-3 gap-6">

        <div className="overflow-hidden rounded-xl shadow-lg">
          <Image
            src="/images/frontsign.jpg"
            alt="Park Entrance"
            width={800}
            height={600}
            className="w-full h-72 object-cover"
          />
        </div>

        <div className="overflow-hidden rounded-xl shadow-lg">
          <Image
            src="/images/park1.png"
            alt="Park Photo 1"
            width={800}
            height={600}
            className="w-full h-72 object-cover"
          />
        </div>

        <div className="overflow-hidden rounded-xl shadow-lg">
          <Image
            src="/images/park2.png"
            alt="Park Photo 2"
            width={800}
            height={600}
            className="w-full h-72 object-cover"
          />
        </div>

        <div className="overflow-hidden rounded-xl shadow-lg">
          <Image
            src="/images/park3.png"
            alt="Park Photo 3"
            width={800}
            height={600}
            className="w-full h-72 object-cover"
          />
        </div>

        <div className="overflow-hidden rounded-xl shadow-lg">
          <Image
            src="/images/park4.png"
            alt="Park Photo 4"
            width={800}
            height={600}
            className="w-full h-72 object-cover"
          />
        </div>

        <div className="overflow-hidden rounded-xl shadow-lg">
          <Image
            src="/images/park5.png"
            alt="Park Photo 5"
            width={800}
            height={600}
            className="w-full h-72 object-cover"
          />
        </div>

        <div className="overflow-hidden rounded-xl shadow-lg">
          <Image
            src="/images/gamesroom.png"
            alt="Games Room"
            width={800}
            height={600}
            className="w-full h-72 object-cover"
          />
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
