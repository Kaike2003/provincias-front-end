"use client";

import { TProvincias } from "@/@types/provincias";
import client from "@/lib/aplloClient";
import { gql } from "@apollo/client";
import { useEffect, useState } from "react";

export default function Home() {
  const [provincias, setProvincias] = useState<TProvincias[]>([]);

  useEffect(() => {
    async function fetchProvincias() {
      try {
        const { data } = await client.query({
          query: gql`
            {
              provincias {
                governador {
                  data_nomeacao
                  nome
                }
              }
            }
          `,
        });
        setProvincias(data.provincias);
      } catch (error) {
        console.error("Ero ao buscar dados:", error);
      }
    }

    fetchProvincias();
  }, []);
  console.log(provincias);
  return (
    <>
      <h1>Provincias de Angola</h1>
      {provincias.map((provincia, index) => (
        <div key={index} className="flex flex-row gap-6">
          <p>{provincia.governador.nome}</p>
          <p>{provincia.governador.data_nomeacao}</p>
          <p>{provincia.provincia}</p>
        </div>
      ))}
    </>
  );
}
