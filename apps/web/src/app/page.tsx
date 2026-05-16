export default function HomePage(): JSX.Element {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">مرحباً بكم في GymOS</h1>
        <p className="text-gray-400">منصة إدارة الصالات الرياضية</p>
        <p className="text-sm text-gray-500 mt-8">
          <a href="/design-test" className="text-electric hover:underline">
            عرض مكتبة المكونات ←
          </a>
        </p>
      </div>
    </main>
  );
}