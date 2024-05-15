import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

function Cart() {
  const [totalAmount, setTotalAmount] = useState(0);

  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  },[cart])

  return (
    <div >

      {cart.length > 0 ? (
        <div className="flex ml-64  gap-10 h-full py-7  ">
          <div className="py-20">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="flex fixed top-28 right-[18%] flex-col  h-[35rem] w-[20%] justify-between">
            <div>
              <div className="text-green-800 font-semibold">Your Cart</div>
              <div className="text-green-800 text-3xl mb-6 font-semibold">Summary</div>
              <p>
                <span>Total Items : {cart.length} </span>
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <p>Total Amount : <span className="font-semibold">${totalAmount}</span> </p>
              <button className="text-white w-full bg-green-700 rounded-lg py-2">Checkout Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-[100vh] items-center flex  flex-col justify-center">
          <h1>Cart Empty</h1>
          <Link to="/">
            <button className="py-1 px-4 bg-slate-600 rounded-full  text-white hover:bg-black">Go to Home Page</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
