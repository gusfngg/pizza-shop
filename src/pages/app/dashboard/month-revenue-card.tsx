import { getMonthRevenue } from '@/api/get-month-revenue'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'
import { MetricCardSkeleton } from './metric-card-skeleton'

export function MonthRevenueCard() {
  const { data: monthRevenueFn } = useQuery({
    queryKey: ['metrics', 'month-revenue'],
    queryFn: getMonthRevenue,
  })

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Receita total (mes)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthRevenueFn ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {(monthRevenueFn?.receipt / 100).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthRevenueFn.diffFromLastMonth > 0 ? (
                <>
                  <span className="text-emerald-700 dark:text-emerald-600">
                    +{monthRevenueFn.diffFromLastMonth}%
                  </span>{' '}
                  em relação ao mes passado.
                </>
              ) : (
                <>
                  <span className="text-rose-700 dark:text-rose-600">
                    {monthRevenueFn.diffFromLastMonth}%
                  </span>{' '}
                  em relação ao mes passado.
                </>
              )}
            </p>
          </>
        ) : (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  )
}
