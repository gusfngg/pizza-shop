import { getDayOrdersAmount } from '@/api/get-day-orders-amount'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { useQuery } from '@tanstack/react-query'
import { Utensils } from 'lucide-react'
import { MetricCardSkeleton } from './metric-card-skeleton'

export function DayOrdersAmountCard() {
  const { data: dayOrderAmountFn } = useQuery({
    queryKey: ['metrics', 'day-orders-amount'],
    queryFn: getDayOrdersAmount,
  })

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (dia)</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {dayOrderAmountFn ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {dayOrderAmountFn.amount.toLocaleString('pt-BR')}
            </span>
            <p className="text-xs text-muted-foreground">
              {dayOrderAmountFn.diffFromYesterday > 0 ? (
                <>
                  <span className="text-emerald-700 dark:text-emerald-600">
                    +{dayOrderAmountFn.diffFromYesterday}
                  </span>{' '}
                  em relação ao mes passado.
                </>
              ) : (
                <>
                  <span className="text-rose-700 dark:text-rose-600">
                    {dayOrderAmountFn.diffFromYesterday}
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
