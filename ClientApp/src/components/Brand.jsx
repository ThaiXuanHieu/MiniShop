import React, { useEffect } from "react";
// import { getAsync } from "../helpers/axios-helper";
import { useSelector, useDispatch } from "react-redux";
import { fetchBrands, selectBrands } from "../store/brand-slice";
import { Nav } from "react-bootstrap";
const Brand = () => {
  const brands = useSelector(selectBrands);
  //const [brands, setBrands] = useState([]);
  // useEffect(() => {
  //   getAsync("/api/Brands").then(
  //     (res) => {
  //       setBrands(res.data);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  return (
    <>
      {brands.map((item) => (
        <Nav.Link href="/" key={item.id}>
          {item.name}
        </Nav.Link>
      ))}
    </>
  );
};

export default Brand;
