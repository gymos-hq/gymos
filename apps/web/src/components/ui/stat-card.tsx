import { Card } from './card';

interface StatCardProps {
  label: string;
  value: string;
  trend?: 'up' | 'down';
  trendValue?: string;
}

export function StatCard({
  label,
  value,
  trend,
  trendValue,
}: StatCardProps): JSX.Element {
  return (
    <Card>
      <p className="text-sm text-gray-400 mb-1">{label}</p>
      <p className="text-2xl font-semibold text-white">{value}</p>
      {trend && trendValue && (
        <div className="flex items-center gap-1 mt-2">
          <span
            className={trend === 'up' ? 'text-electric' : 'text-red-400'}
          >
            {trend === 'up' ? '↑' : '↓'}
          </span>
          <span className="text-sm text-gray-400">{trendValue}</span>
        </div>
      )}
    </Card>
  );
}