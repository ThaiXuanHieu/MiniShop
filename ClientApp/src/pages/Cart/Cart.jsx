import React, { useEffect } from "react";
import Link from "@material-ui/core/Link";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "../../components/shared/Layout";
import {
  fetchCart,
  decreItem,
  deleteItem,
  selectCart,
  addItem,
  selectTotalItem,
  selectTotalPayment,
} from "../../store/cart-slice";
import { formatCurrency } from "../../utils/formatCurrency";
import CartItem from "./CartItem";
const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const cart = useSelector(selectCart);
  const totalItem = useSelector(selectTotalItem);
  const totalPayment = useSelector(selectTotalPayment);

  const handleIncreItem = (item) => {
    dispatch(addItem(item));
  };
  const handleDecreItem = (id) => {
    dispatch(decreItem(id));
  };
  const handleDeleteItem = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <Layout title="Cart" description="Cart">
      {!!cart && cart.length > 0 ? (
        <div className="d-flex flex-row justify-content-between">
          <div className="d-flex flex-column">
            {cart.map((item) => (
              <CartItem
                key={item.product.id}
                product={item.product}
                quantity={item.quantity}
                onIncreItem={handleIncreItem}
                onDecreItem={handleDecreItem}
                onDeleteItem={handleDeleteItem}
              />
            ))}
          </div>
          <div
            className="flex-fill ml-2"
            style={{ border: "1px solid rgba(0,0,0,.125)", padding: "10px" }}
          >
            <div className="totalItem">
              <p style={{ color: "#55595c" }}>Total Items</p>
              <b>{totalItem}</b>
            </div>
            <div className="totalPayment">
              <p style={{ color: "#55595c" }}>Total payment</p>
              <b>{formatCurrency(totalPayment)} ₫</b>
            </div>
            <hr />
            <Link href="/checkout">Checkout &#8594;</Link>
          </div>
        </div>
      ) : (
        <p className="text-center text-danger">Your cart is empty</p>
      )}
    </Layout>
  );
};

export default Cart;
