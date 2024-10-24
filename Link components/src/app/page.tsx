import Link from "next/link"
import About from "./About/page"

const HomePage = () => {
  return (
    <div>
      <h1 >HomePage</h1>
      <br></br>
      <button><Link href="/About">go to about page</Link></button>
      
    </div>
  )
}

export default HomePage