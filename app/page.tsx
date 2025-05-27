import { FaHome } from "react-icons/fa";
import Hero from "./components/hero";
import { FloatingNav } from "./components/ui/floating-navbar";
import Grid from "./components/Grid";

export default function page() {
  return (
    <main className="relative flex bg-black-100 flex-col items-center justify-center mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          { name: "Home", link: "/", icon: <FaHome /> },
          { name: "About", link: "/about", icon: <FaHome /> },
        ]} />
        <Hero />
        <Grid />
      </div>
    </main>
  )
}