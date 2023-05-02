import React from "react";
import GetApiData from "@/components/GetApiData";

export default function programasSociais() {
  return (
    <div className="formatPage">
      <GetApiData url="https://my-json-server.typicode.com/brasilcursinhos/fake-rest-api/programs/" />
    </div>
  );
}
