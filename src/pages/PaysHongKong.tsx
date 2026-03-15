export default function PaysHongKong() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl text-yellow-500 mb-6">Hong Kong</h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="border border-yellow-500 p-6 rounded">
          <h3>Starter</h3>
          <p className="text-2xl">3000€</p>
        </div>
        <div className="border border-yellow-500 p-6 rounded">
          <h3>Business</h3>
          <p className="text-2xl">5000€</p>
        </div>
        <div className="border border-yellow-500 p-6 rounded">
          <h3>VIP</h3>
          <p className="text-2xl">8000€</p>
        </div>
      </div>
    </div>
  );
}
