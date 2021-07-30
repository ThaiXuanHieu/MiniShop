import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct, selectProduct } from "../../store/product-slice";
import * as P from "./style";
import CircularProgress from "@material-ui/core/CircularProgress";
import Rating from "@material-ui/lab/Rating";
import { formatCurrency } from "../../utils/formatCurrency";
import { showAlert } from "../../store/app-slice";

const Detail = (props) => {
  let { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [id, dispatch]);

  const product = useSelector(selectProduct);

  if (!!product && product.id === 0) {
    return (
      <div className="text-center">
        <CircularProgress />
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(
      showAlert({ open: true, message: "Added to cart", level: "success" })
    );
  };

  return (
    <React.Fragment>
      <P.Wrapper>
        <P.Col>
          <P.ImageDefault>
            <img
              src={`https://localhost:5001${product.productImages[0].imageUrl}`}
              alt=""
              width="100%"
            />
          </P.ImageDefault>
          <P.ThumbnailImages>
            {product.productImages.map((item) => (
              <P.ThumbnailImageItem key={item.id}>
                <img
                  src={`https://localhost:5001${item.imageUrl}`}
                  alt=""
                  width="100%"
                />
              </P.ThumbnailImageItem>
            ))}
          </P.ThumbnailImages>
        </P.Col>
        <P.Col>
          <P.Info>
            <P.Name>{product.name}</P.Name>
            <div className="d-flex">
              <P.Price>{formatCurrency(product.price)} ₫</P.Price>
              <Rating name="read-only" value={2} readOnly />
            </div>
            <hr />
            <P.ButtonPay>Pay now</P.ButtonPay>
            <P.ButtonAddToCart onClick={handleAddToCart}>
              Add to cart
            </P.ButtonAddToCart>
          </P.Info>
        </P.Col>
      </P.Wrapper>
    </React.Fragment>
  );
};

export default Detail;
