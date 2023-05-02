import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import FooterIcons from "./FooterIcons";

export default function Footer() {
  return (
    <div className="w-full font-semibold p-5 bg-slate-700 text-gray-400 flex items-center flex-col md:flex-row">
      <div className="flex-1 text-center md:text-left">
        <span>
          2020 Cursinho Para Todos ©
          <br />
          Pernambuco, Brasil.
        </span>
        <span>
          <br />
          <br />
          Contato: contato@cursinhoparatodos.org
        </span>
      </div>
      <div className="flex-col text-center space-y-4">
        <span className="md:text-base">Acompanhe a gente nas redes sociais</span>
        <div className="space-x-2 flex gap-5 text-gray-800 w-auto m-auto text-2xl flex-wrap">
          <FooterIcons iconName={FaInstagram} pageLink={"https://www.instagram.com/"} />
          <FooterIcons iconName={FaFacebookF} pageLink={"https://www.facebook.com/"} />
          <FooterIcons iconName={FaLinkedinIn} pageLink={"https://www.linkedin.com/"} />
          <FooterIcons iconName={FaYoutube} pageLink={"https://www.youtube.com/"} />
        </div>
      </div>
    </div>
  );
}
