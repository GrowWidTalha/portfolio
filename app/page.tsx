import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import RecentProjects from "../components/RecentProjects";

export default function Home() {
  return (
<main className="relative flex items-center justify-center bg-black-100 flex-col overflow-hidden mx-auto sm:px-10">
  <div className="max-w-7xl w-full">
    <FloatingNav navItems={navItems}/> 
    <Hero />
    <Grid />
    <RecentProjects />
  </div>
</main>
  );
}
