import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "../../components/shared/Layout";
import { fetchCart, selectCart } from "../../store/cart-slice";
const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const cart = useSelector(selectCart);
  console.log(cart)
  return (
    <Layout title="Cart" description="Cart">
      <div className="text-danger text-center">
        {cart.length > 0 ? "Data Cart" : "Your cart is empty"}
      </div>
    </Layout>
  );
};

export default Cart;
