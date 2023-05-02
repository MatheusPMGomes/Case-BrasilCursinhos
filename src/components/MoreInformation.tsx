import React from "react";
import { FaHandHoldingHeart, FaHandHoldingUsd } from "react-icons/fa";
import MoreInformationCard from "./MoreInformationCard";

export default function MoreInformation() {
  return (
    <div>
      <h2 className="mt-10 mb-5 text-sm md:text-2xl lg:text-3xl  font-extrabold text-center text-white drop-shadow-lg">
        Acesse os links abaixo e faça a diferença
      </h2>
      <div className="grid lg:grid-cols-2 gap-10 ">
        <MoreInformationCard iconName={FaHandHoldingUsd} name={"Doações"} path={"#"} />
        <MoreInformationCard iconName={FaHandHoldingHeart} name={"Seja um voluntário"} path={"#"} />
      </div>
    </div>
  );
}
