import React from "react";
import { Plato } from "../pages/menu/types";

type props = {
  plato: Plato;
};

const CardItem = ({ plato }: props) => {
  return (
    <>
      <div
        style={{
          height: "150px",
          width: "320px",
          borderRadius: "25px",
          border: " solid 2px #0099ff",
          display: "flex",
          margin: "auto",
          marginBottom: "5%",
        }}
      >
        <div style={{ width: "40%", height: "100%" }}>
          <img
            style={{ height: "90%", padding: "5%", borderRadius: "25px" }}
            src={plato.img}
            alt=""
          />
        </div>
        <div style={{ width: "60%", height: "100%", padding: " 0% 5%" }}>
          <h3 style={{ margin: "7% 5% 5% 5%" }}>{plato.name}</h3>
          <p style={{ margin: "5%" }}>{plato.dsc}</p>
          <p style={{ textAlign: "end", fontWeight: "600", margin: "5%" }}>
            ${plato.price}
          </p>
        </div>
      </div>
    </>
  );
};

export default CardItem;
