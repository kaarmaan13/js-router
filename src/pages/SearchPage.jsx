import { Link } from '../components/Link'

export function SearchPage({ routesParams }) {
  return (
    <>
      <h1>Hemos buscado {routesParams.query}</h1>
      <Link to='/'>Ir a la home</Link>
    </>
  )
}
