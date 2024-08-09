import { Link, useRouteError } from 'react-router-dom'

export function Error() {
  const error = useRouteError() as Error

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl">Opsss, algo aconteceu...</h1>
      <p className="text-accent-foreground">Um erro aconteceu na aplicação</p>
      <pre>{error?.message || JSON.stringify(error)}</pre>
      <p className="text-accent-foreground">
        Voltar para{' '}
        <Link
          to="/"
          className="border-sky-700 text-sky-500 hover:border-b-2 dark:text-sky-700"
        >
          dasboard
        </Link>
      </p>
    </div>
  )
}
