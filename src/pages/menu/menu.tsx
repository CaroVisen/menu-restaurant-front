import React, { useEffect, useState } from "react";
import CardItem from "../../components/card-item";
import { MenuComponent } from "./styles";
import axios from "axios";
import { Plato } from "./types";

const Menu = () => {
  const [platos, setPlatos] = useState<Plato[]>([]);

  const getPlatos = () => {
    axios.get("http://localhost:5000/api/platos/getPlatos").then((res) => {
      var platos = res.data as Plato[];
      setPlatos(platos);
    });
  };
  useEffect(() => {
    getPlatos();
  }, []);

  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,224L30,192C60,160,120,96,180,90.7C240,85,300,139,360,138.7C420,139,480,85,540,106.7C600,128,660,224,720,266.7C780,309,840,299,900,282.7C960,267,1020,245,1080,202.7C1140,160,1200,96,1260,106.7C1320,117,1380,203,1410,245.3L1440,288L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>
      <MenuComponent>
        <h1 style={{ textAlign: "center", fontFamily: "math", marginTop: "0" }}>
          Menu
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {platos.map((plato: Plato, index) => (
            <CardItem plato={plato} />
          ))}
        </div>
      </MenuComponent>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,96L30,106.7C60,117,120,139,180,128C240,117,300,75,360,80C420,85,480,139,540,144C600,149,660,107,720,96C780,85,840,107,900,138.7C960,171,1020,213,1080,213.3C1140,213,1200,171,1260,128C1320,85,1380,43,1410,21.3L1440,0L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Menu;
