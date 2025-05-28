import { FaHome } from "react-icons/fa";
import Hero from "./components/hero";
import { FloatingNav } from "./components/ui/floating-navbar";
import Grid from "./components/Grid";
import RecentProject from "./components/RecentProject";
import { navItems } from "@/data";
import Clients from "./components/Clients";

export default function page() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProject />
        <Clients />
      </div>
    </main>
  )
}