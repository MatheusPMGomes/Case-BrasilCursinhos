import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import RenderProgramsData from "./RenderProgramsData";

interface ProgramData {
  id: number;
  name: string;
  description: string;
  image: string;
  goals: string;
  impact: string;
  objectives: string;
}

export default function GetApiData({ url }: { url: string }) {
  const [urlApi, setUrlApi] = useState("");
  const [jsonData, setJsonData] = useState<ProgramData[] | null>(null);

  useEffect(() => {
    setUrlApi(url);
  }, [url]);

  async function jsonFormatData() {
    try {
      const response = await axios.get(urlApi);
      const jsonData = response.data;
      setJsonData(jsonData);
      return jsonData;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  useEffect(() => {
    jsonFormatData();
  }, [urlApi]);

  const router = useRouter();

  function handleSaibaMais(item: ProgramData) {
    // redireciona para a página desejada e passa os dados via state
    router.push({
      pathname: "/saibaMais",
      query: {
        progamImage: item.image,
        programName: item.name,
        programDescription: item.description,
        programObjectives: item.objectives,
        programGoals: item.goals,
        programImpact: item.impact,
      },
    });
  }

  return (
    <div>
      {Array.isArray(jsonData) &&
        jsonData.map((item) => (
          <div key={item.id}>
            <div>
              <RenderProgramsData
                programName={item.name}
                programDescription={item.description}
                programImage={item.image}
              />
              <button
                onClick={() => handleSaibaMais(item)}
                className="bg-sky-600 hover:bg-sky-700 transition-all text-white text-xl p-3 rounded-xl flex w-auto m-auto relative bottom-14"
              >
                Saiba mais
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
