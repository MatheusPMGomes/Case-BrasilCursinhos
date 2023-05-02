import MoreInformation from "@/components/MoreInformation";
import { useRouter } from "next/router";

export default function SaibaMais() {
  const router = useRouter();

  const image = router.query.progamImage;
  const name = router.query.programName;
  const description = router.query.programDescription;
  const objectives = router.query.programObjectives;
  const goals = router.query.programGoals;
  const impact = router.query.programImpact;

  return (
    <div className="formatPage">
      <div className="mt-20 md:mt-10 block rounded-xl text-justify border bg-white p-4 shadow-xl sm:p-6 lg:p-8">
        <div className="flex flex-wrap justify-center ">
          <img
            className="shadow rounded-full max-w-full h-auto align-middle border-none"
            src={typeof image === "string" ? image : "/default-image.png"}
            alt="Imagem representativa do programa"
          />
        </div>
        <div className="text-center font-black text-2xl">{name}</div>
        <div className="customDivDescriptions">
          <span className="customProgramDescriptions ">Descrição: </span>
          {description}
        </div>
        <div className="customDivDescriptions">
          <span className="customProgramDescriptions">Objetivos: </span>
          {objectives}
        </div>
        <div className="customDivDescriptions">
          <span className="customProgramDescriptions">Metas: </span>
          {goals}
        </div>
        <div className="customDivDescriptions">
          <span className="customProgramDescriptions">Impacto: </span>
          {impact}
        </div>
      </div>
      <div>
        <MoreInformation />
      </div>
    </div>
  );
}
