import React from "react";
import CountUp from "react-countup";

const DiasAcumulativos = ({ clasesumir }) => {
  // Data de início
  const dataInicio = new Date("2023-10-21");
  const hoje = new Date();
  const anosAcumulados = Math.floor(
    (hoje - dataInicio) / (1000 * 60 * 60 * 24 * 30 * 12)
  );
  const mesesAcumulados = Math.floor(
    (hoje - dataInicio) / (1000 * 60 * 60 * 24 * 30) - anosAcumulados * 12
  );
  const diasAcumulados = Math.floor(
    (hoje - dataInicio) / (1000 * 60 * 60 * 24) -
      mesesAcumulados * 30 -
      anosAcumulados * 12 * 30
  );
  const horasAcumuladas = Math.floor(
    (hoje - dataInicio) / (1000 * 60 * 60) -
      diasAcumulados * 24 -
      mesesAcumulados * 30 * 24 -
      anosAcumulados * 12 * 30 * 24
  );
  const minutosAcumulados = Math.floor(
    (hoje - dataInicio) / (1000 * 60) -
      horasAcumuladas * 60 -
      diasAcumulados * 24 * 60 -
      mesesAcumulados * 30 * 24 * 60 -
      anosAcumulados * 12 * 30 * 24 * 60
  );
  const segundosAcumulados = Math.floor(
    (hoje - dataInicio) / 1000 -
      minutosAcumulados * 60 -
      horasAcumuladas * 60 * 60 -
      diasAcumulados * 24 * 60 * 60 -
      mesesAcumulados * 30 * 24 * 60 * 60 -
      anosAcumulados * 12 * 30 * 24 * 60 * 60
  );

  return (
    <div className="datas">
      <div className={`segundoss total `}>
        <CountUp start={0} end={segundosAcumulados} duration={2.75} />

        <p>Segundos</p>
      </div>
      <div className={`segundos total `}>
        <CountUp start={0} end={minutosAcumulados} duration={2.75} />

        <p>Minutos</p>
      </div>
      <div className={`horas total `}>
        <CountUp start={0} end={horasAcumuladas} duration={2.75} />
        <p>Horas</p>
      </div>
      <div className={`dias total ${clasesumir}`}>
        <CountUp start={0} end={diasAcumulados} duration={2.75} />
        <p>Dias</p>
      </div>
      <div className={`meses total ${clasesumir}`}>
        <CountUp start={0} end={mesesAcumulados} duration={2.75} />
        <p>Meses</p>
      </div>
      <div className={`anos total ${clasesumir}`}>
        <CountUp start={0} end={anosAcumulados} duration={2.75} />
        <p>Ano</p>
      </div>
    </div>
  );
};

export default DiasAcumulativos;
