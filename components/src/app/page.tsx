import Image from "next/image";
import About from "./component/about";
import Header from "./component/header";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <About/>
      <Header/>
    </div>
  );
}
