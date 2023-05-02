import React, { useEffect, useState } from "react";

interface Props {
  hierarchy: string;
  imgPath: string[];
  name: string[];
  office: string[];
}

export default function StaffComponent({ hierarchy, imgPath, name, office }: Props) {
  const [hierarchyComponent, setHierarchyComponent] = useState("");
  const [imgPathComponent, setImgPathComponent] = useState<string[]>([]);
  const [nameComponent, setNameComponent] = useState<string[]>([]);
  const [officeComponent, setOfficeComponent] = useState<string[]>([]);

  useEffect(() => {
    setHierarchyComponent(hierarchy);
    setImgPathComponent(imgPath);
    setNameComponent(name);
    setOfficeComponent(office);
  }, []);

  return (
    <div>
      <div className="">
        <span className="mt-10 mb-5 flex justify-center text-center text-3xl text-white font-extrabold drop-shadow-lg">
          {hierarchyComponent}
        </span>
        <span className="flex flex-wrap justify-center gap-10 ">
          {Array.isArray(imgPathComponent) &&
            imgPathComponent.map((item, index) => (
              <div key={item}>
                <div>
                  <img className="w-56 m-auto rounded-2xl" src={item} alt="" />
                </div>
                <div className="text-center font-bold">{nameComponent[index]}</div>
                <div className="text-center">{officeComponent[index]}</div>
              </div>
            ))}
        </span>
      </div>
    </div>
  );
}
