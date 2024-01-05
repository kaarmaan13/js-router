import { Link } from "../components/Link";

export default function Page404 (){
  return (
    <>
      <h1>This is NOT fine</h1>
      <div><img src="https://addc401spring2020.files.wordpress.com/2020/02/giphy-1.gif" alt="This is fine 404" /></div>
      <Link to='/'>Volver a la home</Link>
    </>
  )
}