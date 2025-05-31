import Hero from "./components/hero";
import { FloatingNav } from "./components/ui/floating-navbar";
import Grid from "./components/Grid";
import RecentProject from "./components/RecentProject";
import { navItems } from "@/data";
import Clients from "./components/Clients";
import Exp from "./components/Exp";
import Footer from "./components/Footer";

export const metadata = {
  title: 'Chathuraka-LK | Portfolio',
  description: 'Welcome to my portfolio website showcasing my projects and skills',
};

export default function page() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 overflow-hidden px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Exp/>
        <RecentProject />
        <Clients />
        <Footer />
      </div>
    </main>
  )
}