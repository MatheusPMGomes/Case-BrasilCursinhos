import StaffComponent from "@/components/StaffComponent";
import React from "react";

export default function sobreNos() {
  return (
    <div className="formatPage">
      <div className="grid grid-rows mt-20 sm:mt-10 gap-5">
        <span className="m-auto">
          <img src="/images/logo.png" alt="logo cursinho para todos" />
        </span>
        <div className="w-5/6 text-justify m-auto md:text-2xl text-lg">
          Fundada em 2010, a ONG Cursinho Para Todos tem como missão unir cursinhos populares de
          pré-vestibular em uma única plataforma, facilitando o acesso ao ensino superior para
          estudantes de baixa renda em todo o país. Desde então, já ajudamos mais de 10.000 alunos a
          alcançarem seus sonhos de ingressar na universidade. Estamos localizados na Rua dos
          Cursinhos, nº 123, em São Paulo. Para entrar em contato conosco por telefone, ligue para
          (11) 1234-5678.
          <br />
          <br />
          Aqui apresentamos a diretoria da Gestão 2023 do Cursinho Para Todos:
        </div>
        <StaffComponent
          hierarchy="Presidência"
          imgPath={["/images/1.png"]}
          name={["Fulano da Silva"]}
          office={["Presidente Organizacional"]}
        />
        <StaffComponent
          hierarchy="Diretoria de Captação de Recursos"
          imgPath={["/images/2.png", "/images/3.png"]}
          name={["Inventonilda Carla", "Reginaldo Moisés"]}
          office={["Coordenadora de Captação de Recursos", "Diretor de Expansão"]}
        />
        <StaffComponent
          hierarchy="Diretoria de Tecnologia"
          imgPath={["/images/4.png", "/images/5.png", "/images/6.png"]}
          name={["Xinxila Yoko", "Paulo Firmino", "Jorge Augusto"]}
          office={["Desenvolvedora Mobile", "Diretor de Tecnologia", "Coordenador de Tecnologia"]}
        />
      </div>
    </div>
  );
}
