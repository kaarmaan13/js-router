import { Link } from '../components/Link'

export default function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <div>
        <img
          src='https://media.licdn.com/dms/image/C4D03AQGG6quMXVUoag/profile-displayphoto-shrink_800_800/0/1567682096173?e=2147483647&v=beta&t=by2cI0gXmhWmJtlAn0oNTCOX949AaWrqjOc-r-YXASY'
          alt='Foto mia'
        />
      </div>
      <Link to='/'>Ir a la home</Link>
    </>
  )
}
