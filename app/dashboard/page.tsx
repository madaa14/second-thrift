"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function DashboardPage() {
  const router = useRouter();

  // Produk (sama seperti di halaman Produk Saya)
  const products = [
    { name: "Kids Short Sleeve T-Shirts", price: "Rp45.000", stock: 5, sold: 18, image: "/shirt.png" },
    { name: "Cardigan for Women", price: "Rp85.000", stock: 3, sold: 12, image: "/cardigan.png" },
    { name: "Thermal Lined Hoodie", price: "Rp65.000", stock: 0, sold: 25, image: "/hodie.png" },
    { name: "Cargo Pants", price: "Rp70.000", stock: 7, sold: 9, image: "/sweatpants.png" },
  ];

  // Ringkasan
  const summary = [
    { label: "Total Penjualan", value: "Rp4.250.000", note: "+12% dari bulan lalu" },
    { label: "Pesanan Baru", value: "24", note: "6 perlu diproses" },
    { label: "Total Produk", value: String(products.length), note: "1 produk habis" },
    { label: "Pelanggan", value: "58", note: "+5 minggu ini" },
  ];

  // Data grafik penjualan 7 hari
  const sales = [
    { day: "Sen", value: 40 },
    { day: "Sel", value: 65 },
    { day: "Rab", value: 50 },
    { day: "Kam", value: 80 },
    { day: "Jum", value: 95 },
    { day: "Sab", value: 70 },
    { day: "Min", value: 55 },
  ];

  // Pesanan terbaru
  const orders = [
    { id: "#ORD-001", customer: "Siti Aminah", total: "Rp130.000", status: "Selesai" },
    { id: "#ORD-002", customer: "Budi Santoso", total: "Rp65.000", status: "Dikirim" },
    { id: "#ORD-003", customer: "Dewi Lestari", total: "Rp85.000", status: "Diproses" },
    { id: "#ORD-004", customer: "Andi Wijaya", total: "Rp45.000", status: "Diproses" },
  ];

  const statusColor: Record<string, string> = {
    Selesai: "bg-green-100 text-green-700",
    Dikirim: "bg-blue-100 text-blue-700",
    Diproses: "bg-yellow-100 text-yellow-700",
  };

  const terlaris = [...products].sort((a, b) => b.sold - a.sold).slice(0, 3);

  return (
    <main className="min-h-screen bg-pink-100">
      {/* NAVBAR */}
      <nav className="flex flex-wrap items-center justify-between gap-4 bg-white px-8 py-5 shadow-sm">
        <div className="flex flex-wrap items-center gap-8">
          <h1 className="text-xl font-bold">Second Thrift</h1>

          <div className="flex flex-wrap gap-6 font-medium">
            <a href="/dashboard" className="text-pink-400">Dashboard</a>
            <a href="/produksaya" className="text-black hover:text-pink-400">Produk Saya</a>
            <a href="/dashboard" className="text-black hover:text-pink-400">Pesanan</a>
            <a href="/dashboard" className="text-black hover:text-pink-400">Laporan</a>
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

      <section className="m-6 space-y-6 md:m-8">
        {/* SAMBUTAN */}
        <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-3xl font-bold">Dashboard</h2>
          <p className="mt-2 text-gray-500">Selamat datang di Second Thrift!</p>
        </div>

        {/* KARTU RINGKASAN */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {summary.map((item) => (
            <div key={item.label} className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">{item.label}</p>
              </div>
              <p className="mt-3 text-3xl font-bold">{item.value}</p>
              <p className="mt-1 text-xs text-gray-500">{item.note}</p>
            </div>
          ))}
        </div>

        {/* GRAFIK + PRODUK TERLARIS */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Grafik penjualan */}
          <div className="rounded-2xl bg-white p-6 shadow-sm lg:col-span-2">
            <h3 className="text-xl font-bold">Penjualan 7 Hari Terakhir</h3>
            <div className="mt-6 flex h-48 items-end justify-between gap-3">
              {sales.map((s) => (
                <div key={s.day} className="flex flex-1 flex-col items-center gap-2">
                  <div
                    className="w-full rounded-t-lg bg-pink-300 hover:bg-pink-500"
                    style={{ height: `${s.value}%` }}
                  />
                  <span className="text-xs text-gray-500">{s.day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Produk terlaris */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">Produk Terlaris</h3>
            <div className="mt-5 space-y-4">
              {terlaris.map((p) => (
                <div key={p.name} className="flex items-center gap-3">
                  <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl bg-pink-200">
                    <Image src={p.image} alt={p.name} width={100} height={100} className="w-full" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{p.name}</p>
                    <p className="text-xs text-gray-500">{p.sold} terjual</p>
                  </div>
                  <p className="text-sm font-semibold">{p.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PESANAN TERBARU + STOK MENIPIS */}
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-sm lg:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-bold">Pesanan Terbaru</h3>
              <a href="/dashboard" className="font-medium text-pink-500 hover:underline">
                Lihat semua
              </a>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-pink-200 text-sm">
                  <tr>
                    <th className="px-4 py-3">ID</th>
                    <th className="px-4 py-3">PELANGGAN</th>
                    <th className="px-4 py-3">TOTAL</th>
                    <th className="px-4 py-3">STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((o) => (
                    <tr key={o.id} className="border-t border-gray-100 hover:bg-pink-50">
                      <td className="px-4 py-3 font-medium">{o.id}</td>
                      <td className="px-4 py-3">{o.customer}</td>
                      <td className="px-4 py-3">{o.total}</td>
                      <td className="px-4 py-3">
                        <span className={`rounded-full px-3 py-1 text-sm ${statusColor[o.status]}`}>
                          {o.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Stok menipis */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">Stok Menipis</h3>
            <div className="mt-5 space-y-3">
              {products
                .filter((p) => p.stock <= 3)
                .map((p) => (
                  <div key={p.name} className="flex items-center justify-between rounded-xl bg-pink-50 p-3">
                    <p className="truncate pr-2 text-sm font-medium">{p.name}</p>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        p.stock === 0 ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {p.stock === 0 ? "Habis" : `Sisa ${p.stock}`}
                    </span>
                  </div>
                ))}
            </div>
            <button
              onClick={() => router.push("/produksaya")}
              className="mt-5 w-full rounded-lg bg-pink-300 py-2 font-semibold hover:bg-pink-500 hover:text-white"
            >
              Kelola Produk
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}