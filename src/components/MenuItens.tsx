import Link from "next/link";
import React, { useEffect, useState } from "react";

interface props {
  name: string;
  path: string;
}

export default function MenuItens({ name, path }: props) {
  const [nameComponent, setNameComponent] = useState("");
  const [pathComponent, setPathComponent] = useState("");

  useEffect(() => {
    setNameComponent(name);
    setPathComponent(path);
  }, []);

  return (
    <li>
      <Link href={pathComponent} legacyBehavior>
        <a className="hover:underline" href="">
          {nameComponent}
        </a>
      </Link>
    </li>
  );
}
