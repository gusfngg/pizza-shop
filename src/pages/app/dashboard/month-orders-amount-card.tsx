import { getMonthOrdersAmount } from '@/api/get-month-orders-amout'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { useQuery } from '@tanstack/react-query'
import { Utensils } from 'lucide-react'
import { MetricCardSkeleton } from './metric-card-skeleton'

export function MonthOrdersAmountCard() {
  const { data: monthOrderAmountFn } = useQuery({
    queryKey: ['metrics', 'month-orders-amount'],
    queryFn: getMonthOrdersAmount,
  })
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (mes)</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthOrderAmountFn ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthOrderAmountFn.amount.toLocaleString('pt-BR')}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthOrderAmountFn.diffFromLastMonth > 0 ? (
                <>
                  <span className="text-emerald-700 dark:text-emerald-600">
                    +{monthOrderAmountFn.diffFromLastMonth}%
                  </span>{' '}
                  em relação ao mes passado.
                </>
              ) : (
                <>
                  <span className="text-rose-700 dark:text-rose-600">
                    {monthOrderAmountFn.diffFromLastMonth}%
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
