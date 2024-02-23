'use client'

import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  // adjusting the height of the container dynamically based on the content inside it.
  const [containerHeight, setContainerHeight] = useState('auto');

  useEffect(() => {
    // Calculate the height of the content and set it as the container height
    const contentHeight = document.getElementById('content')?.offsetHeight;
    if (contentHeight) {
      setContainerHeight(`${contentHeight}px`);
    }
  }, []);

  return (
    <main className="h-full w-full">
      <div id="content" className="flex flex-col gap-20" style={{ height: containerHeight }}>
        <Hero/>
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
