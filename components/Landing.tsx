import Image from "next/image";
import React from "react";
import Button from "./Button";
import Footer from "./Footer";

function Landing() {
  return (
    <section className="sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8">
    <div className="space-y-8">
      <h1 className="space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl">
        <span className="block bg-gradient-to-r from-pink-500 to-violet-700 bg-clip-text text-transparent">
          Disfruta del mejor café
        </span>
        <span className="block">Ayuda a los productores</span>
      </h1>

      <div className="space-x-8">
        <Button title="Comprar" />
        <a className="link">Más información</a>
      </div>
    </div>

    <div className="relative hidden h-[450px] w-[450px] transition-all duration-500 md:inline lg:h-[650px] lg:w-[600px]">
      <Image src="/caffee1.png" layout="fill" objectFit="contain" alt={""} />
    </div>
  </section>
  );
}

export default Landing;
