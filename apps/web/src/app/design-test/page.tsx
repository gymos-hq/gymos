import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { StatCard } from '@/components/ui/stat-card';

export default function DesignTestPage(): JSX.Element {
  return (
    <main className="min-h-screen p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">مكتبة المكونات</h1>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-electric">الأزرار</h2>
        <div className="flex gap-3 flex-wrap">
          <Button variant="primary">زر رئيسي</Button>
          <Button variant="secondary">زر ثانوي</Button>
          <Button variant="ghost">زر شفاف</Button>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-electric">الحقول</h2>
        <div className="grid grid-cols-2 gap-4 max-w-2xl">
          <Input label="اسم العضو" placeholder="أدخل الاسم الكامل" />
          <Input label="رقم الهاتف" placeholder="01xxxxxxxxx" type="tel" />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-electric">البطاقات</h2>
        <div className="grid grid-cols-3 gap-4">
          <Card>
            <h3 className="font-semibold mb-2">عنوان البطاقة</h3>
            <p className="text-sm text-gray-400">
              محتوى البطاقة العادي. يمكن استخدامها لأي محتوى.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold mb-2">بطاقة أخرى</h3>
            <p className="text-sm text-gray-400">
              نفس التصميم، محتوى مختلف. متسقة عبر التطبيق.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold mb-2">بطاقة ثالثة</h3>
            <p className="text-sm text-gray-400">
              قابلة لإعادة الاستخدام في أي مكان.
            </p>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-electric">إحصائيات</h2>
        <div className="grid grid-cols-4 gap-4">
          <StatCard label="الأعضاء النشطون" value="247" trend="up" trendValue="12 هذا الشهر" />
          <StatCard label="إيرادات اليوم" value="3,450 ج.م" trend="up" trendValue="+18%" />
          <StatCard label="تسجيلات الدخول اليوم" value="89" />
          <StatCard label="ينتهي هذا الأسبوع" value="14" trend="down" trendValue="تحتاج متابعة" />
        </div>
      </section>
    </main>
  );
}