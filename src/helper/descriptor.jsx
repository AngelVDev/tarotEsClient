import React from "react";
import {
  arcanosMayoresPath,
  arcanosMenoresPath,
  cortePath,
  palosPath,
} from "./baseUrl";

export const descriptor = (endpoint) => {
  // if (endpoint.includes("search")) {
  //   return (
  //     <>
  //       <strong>?type= </strong>especifica los tipos de arcanos de arcanos a
  //       mostrar (<strong>/mayor, /menor</strong>)
  //       <p>
  //         <strong>?n= </strong>especifica la cantidad de cartas a mostrar.
  //       </p>
  //     </>
  //   );
  // }
  if (endpoint.includes("random")) {
    return (
      <>
        <strong>?type= </strong>especifica los tipos de arcanos de arcanos a
        mostrar (<strong>/mayor, /menor</strong>)
        <p>
          <strong>?n= </strong>especifica la cantidad de cartas a mostrar.
        </p>
      </>
    );
  }
  if (endpoint === arcanosMayoresPath || endpoint === arcanosMenoresPath) {
    return (
      <>
        <strong>/type/ </strong>especifica los tipos de arcanos de arcanos a
        mostrar (<strong>/mayor, /menor</strong>)
      </>
    );
  }
  if (endpoint.includes(cortePath)) {
    return (
      <>
        <strong>/courts/ </strong>devuelve todos los arcanos de la corte. Luego
        puede especificarse si se desean reyes, reinas, caballeros o sotas (
        <strong>/reys, /reinas, /caballos, /sotas</strong> )
      </>
    );
  }
  if (endpoint.includes(palosPath)) {
    return (
      <>
        <strong>/palos/:palo </strong>
        devuelve todos los arcanos de la corte del palo indicado.
      </>
    );
  }
};
