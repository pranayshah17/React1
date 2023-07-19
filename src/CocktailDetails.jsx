import React, { useEffect, useState } from "react";
import "./Details.css";
import CompA from "./CompA";
import CompB from "./CompB";

export default function CocktailDetails() {
  const [cocktailDetails, setCocktailDetails] = useState([]);
  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
      .then((resp) => resp.json())
      .then((data) => {
        setCocktailDetails(data);
      });
  }, []);

  return (
    <div>
      <h1>Drinks</h1>
      <div className="details">
        {(cocktailDetails?.drinks || []).map((items) => {
          const { idDrink, strDrink, strDrinkThumb, strInstructions } = items;
          return (
            <div className="card" style={{ width: "18rem" }} key={idDrink}>
              <img src={strDrinkThumb} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{strDrink}</h5>
                <p className="card-text">{strInstructions}</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <CompA />
      <CompB />
    </div>
  );
}
