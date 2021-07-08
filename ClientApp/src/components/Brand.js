import React, { useEffect, useState } from "react";
import { getAsync } from "../helpers/axios-helper";
const Brand = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    getAsync("/api/Brands").then(
      (res) => {
        setBrands(res.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <React.Fragment>
      <div>
        <h1>Data</h1>
        {
          brands.map((item) => (
            <div key={item.id}>
              <h1>{item.name}</h1>
            </div>
          ))
        }
      </div>
    </React.Fragment>
  );
};

export default Brand;
