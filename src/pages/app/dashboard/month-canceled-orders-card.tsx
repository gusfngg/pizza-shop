import { getMonthCanceledOrdersAmount } from '@/api/get-month-canceled-orders-amount'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'
import { MetricCardSkeleton } from './metric-card-skeleton'

export function MonthCanceledOrdersAmountCard() {
  const { data: getMonthCanceledOrdersAmountFn } = useQuery({
    queryKey: ['metrics', 'month-canceled-orders-amount'],
    queryFn: getMonthCanceledOrdersAmount,
  })

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (mes)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {getMonthCanceledOrdersAmountFn ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {getMonthCanceledOrdersAmountFn.amount.toLocaleString('pt-BR')}
            </span>
            <p className="text-xs text-muted-foreground">
              {getMonthCanceledOrdersAmountFn.diffFromLastMonth < 0 ? (
                <>
                  <span className="text-emerald-700 dark:text-emerald-600">
                    {getMonthCanceledOrdersAmountFn.diffFromLastMonth}%
                  </span>{' '}
                  em relação ao mes passado.
                </>
              ) : (
                <>
                  <span className="text-rose-700 dark:text-rose-600">
                    +{getMonthCanceledOrdersAmountFn.diffFromLastMonth}%
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
