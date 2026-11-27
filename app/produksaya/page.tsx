"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function produksayaPage() {
  const router = useRouter();

  const products = [
    {
      name: "Kids Short Sleeve T-Shirts",
      category: "T-Shirt",
      price: "Rp45.000",
      stock: 5,
      status: "Aktif",
      image: "/shirt.png",
    },
    {
      name: "Cardigan for Women",
      category: "Cardigan",
      price: "Rp85.000",
      stock: 3,
      status: "Aktif",
      image: "/cardigan.png",
    },
    {
      name: "Thermal Lined Hoodie",
      category: "Hoodie sweater",
      price: "Rp65.000",
      stock: 0,
      status: "Habis",
      image: "/hodie.png",
    },
    {
      name: "Cargo Pants",
      category: "Sweatpants",
      price: "Rp70.000",
      stock: 7,
      status: "Aktif",
      image: "/sweatpants.png",
    },
  ];

  return (
    <main className="min-h-screen bg-pink-100">
      {/* NAVBAR */}
      <nav className="flex flex-wrap items-center justify-between gap-4 bg-white px-8 py-5 shadow-sm">
        <div className="flex flex-wrap items-center gap-8">
          <h1 className="text-xl font-bold">Second Thrift</h1>

          <div className="flex flex-wrap gap-6 font-medium">
            <a href="/dashboard" className="text-black">
              Dashboard
            </a>
            <a href="/produksaya" className="text-pink-400">
              Produk Saya
            </a>
            <a href="/dashboard" className="text-black">
              Pesanan
            </a>
            <a href="/dashboard" className="text-black">
              Laporan
            </a>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="text-right">
            <p className="font-semibold">Admin</p>
            <p className="text-sm">Second Thrift</p>
          </div>

          <button
            onClick={() => router.push("/login")}
            className="rounded-full bg-pink-100 px-6 py-3 font-semibold hover:bg-pink-300"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* ISI HALAMAN */}
      <section className="m-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:m-8 md:p-9">
        <div className="mb-7">
          <h2 className="text-3xl font-bold">Produk Saya</h2>
          <p className="mt-2 text-gray-500">
            Kelola semua produk jualan kamu di sini.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-gray-100">
          <table className="w-full text-left">
            <thead className="bg-pink-200 text-sm">
              <tr>
                <th className="px-5 py-5">NAMA PRODUK</th>
                <th className="px-5 py-5">KATEGORI</th>
                <th className="px-5 py-5">HARGA</th>
                <th className="px-5 py-5">STOK</th>
                <th className="px-5 py-5">STATUS</th>
                <th className="px-5 py-5">AKSI</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-100 hover:bg-pink-50"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-pink-200">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={100}
                          height={100}
                          className="w-full"
                        />
                      </div>
                      <span className="font-medium">{product.name}</span>
                    </div>
                  </td>

                  <td className="px-5 py-4">{product.category}</td>
                  <td className="px-5 py-4">{product.price}</td>
                  <td className="px-5 py-4">{product.stock}</td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-4 py-2 text-sm ${
                        product.status === "Aktif"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <button className="rounded-lg bg-pink-300 px-5 py-2 font-semibold hover:bg-pink-500 hover:text-white">
                      kelola
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}