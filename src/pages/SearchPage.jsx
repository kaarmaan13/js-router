import { Link } from '../components/Link'

export default function SearchPage({ routesParams }) {
  return (
    <>
      <h1>Hemos buscado {routesParams.query}</h1>
      <Link to='/'>Ir a la home</Link>
    </>
  )
}
