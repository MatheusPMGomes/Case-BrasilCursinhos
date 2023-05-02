import React, { useEffect, useState } from "react";
import MenuItens from "./MenuItens";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  return (
    <div
      className={`z-10 bg-sky-600 text-neutral-50 flex gap-5 items-center fixed w-full transition-all ${
        scroll ? "h-10" : "h-20"
      }`}
    >
      <div className="flex-auto">
        <h1 className="capitalize md:ml-10 ml-5 text-sm sm:text-3xl font-extrabold border-r-2 md:text-left text-center">
          Cursinho para todos
        </h1>
      </div>
      <ul className="md:mr-10 mr-5 flex md:gap-10 gap-5 font-medium md:text-base text-xs text-center items-center">
        <MenuItens name={"Home"} path={"/"} />
        <MenuItens name={"Programas sociais"} path={"/programasSociais"} />
        <MenuItens name={"Sobre nós"} path={"/sobreNos"} />
      </ul>
    </div>
  );
}
