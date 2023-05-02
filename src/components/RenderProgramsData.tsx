import React from "react";

interface Props {
  programName: string;
  programDescription: string;
  programImage: string;
}

export default function RenderProgramsData({
  programName,
  programDescription,
  programImage,
}: Props) {
  return (
    <div className="lg:flex mt-20 md:mt-10 rounded-xl bg-white bg-opacity-40 shadow-xl sm:p-6 lg:p-8">
      <div className="flex">
        <img
          className="mt-5 mt:m-0 m-auto w-auto rounded-xl border-8 border-slate-300"
          src={programImage}
          alt="Imagem representativa do programa"
        />
      </div>
      <div className="text-center lg:text-left flex-wrap p-5">
        <div className="font-black text-4xl mb-5 font-">{programName}</div>
        <div className="mb-10 ">{programDescription}</div>
      </div>
    </div>
  );
}
