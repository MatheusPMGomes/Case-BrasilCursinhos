import React from "react";

export default function Home() {
  return (
    <div className="formatPage">
      <img
        src="/images/logo.png"
        alt="logo cursinho para todos"
        className="flex m-auto sm:mt-10 mt-20"
      />
      <div className="mb-10 mt-10 text-center text-3xl">
        <h1>Seja bem-vindo(a) ao nosso site! </h1>
      </div>
      <div className="w-5/6 text-justify m-auto md:text-2xl text-lg">
        <p>
          Somos uma ONG que reúne diversos cursinhos pré-vestibulares espalhados pelo país, e
          estamos muito felizes em tê-lo aqui. Acreditamos que a educação é uma ferramenta poderosa
          de transformação social e nosso objetivo é torná-la mais acessível a todos. Nós
          trabalhamos para fornecer aos estudantes de baixa renda as ferramentas necessárias para
          que eles possam ingressar nas universidades públicas.
        </p>
        <br />
        <p>
          Se você compartilha dos nossos valores e quer fazer parte dessa missão, há muitas maneiras
          de se envolver com a nossa organização. Você pode se tornar um voluntário, fazer doações,
          compartilhar nossas postagens nas redes sociais ou simplesmente espalhar a palavra sobre o
          nosso trabalho.
        </p>
        <br />
        <p>
          Juntos, podemos transformar a vida de muitos jovens e construir um futuro melhor para
          todos. Obrigado por nos visitar e esperamos que você se junte a nós nessa jornada!
        </p>
      </div>
    </div>
  );
}
