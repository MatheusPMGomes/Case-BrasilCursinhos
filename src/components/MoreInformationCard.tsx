import React, { useEffect, useState } from "react";

interface props {
  iconName: any;
  name: string;
  path: string;
}

export default function MoreInformationCard({ iconName, name, path }: props) {
  const Icon = iconName;
  const [nameComponent, setNameComponent] = useState("");
  const [pathComponent, setPathComponent] = useState("");

  useEffect(() => {
    setNameComponent(name);
    setPathComponent(path);
  }, []);

  return (
    <a className="w-full hover:scale-110 transition-all duration-1000" href={pathComponent}>
      <div className="w-full rounded-xl border bg-white p-4 shadow-xl ">
        <span className="flex justify-center text-7xl p-5 text-slate-300">
          <Icon />
        </span>
        <span className="flex justify-center sm:text-5xl text-2xl text-center text-slate-300">
          {nameComponent}
        </span>
      </div>
    </a>
  );
}
