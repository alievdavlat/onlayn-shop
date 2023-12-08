import React from "react";
import "./Cart.scss";
// import { useSelector } from "react-redux";
// import { removeItem, resetCart } from ". ./../redux/cartReducer";
// import { useDispatch } from "react-redux";
import { makeRequest } from "../../service/makeRequest";
// import { loadStripe } from "@stripe/stripe-js";
import { FaTrash } from "react-icons/fa";



const Cart = () => {
  // const products = useSelector((state) => state.cart.products);
  // const dispatch = useDispatch();

  const data  = [
    {
      id:1,
      img:'https://picsum.photos/seed/picsum/200/300',
      img2:'https://picsum.photos/seed/picsum/200/300',
      title:'hello wolrd',
      isNew:true,
      oldPrice:19,
      price:12,
      descr:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, amet!"
    },
    {
      id:2,
      img:'https://picsum.photos/seed/picsum/200/300',
      img2:'https://picsum.photos/seed/picsum/200/300',
      title:'hello wolrd',
      isNew:true,
      oldPrice:19,
      price:12,
      descr:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, amet!"

    },
    {
      id:3,
      img:'https://picsum.photos/seed/picsum/200/300',
      img2:'https://picsum.photos/seed/picsum/200/300',
      title:'hello wolrd',
      isNew:true,
      oldPrice:19,
      price:12,
      descr:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, amet!"

    },
    {
      id:4,
      img:'https://picsum.photos/seed/picsum/200/300',
      img2:'https://picsum.photos/seed/picsum/200/300',
      title:'hello wolrd',
      isNew:true,
      oldPrice:19,
      price:12,
      descr:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, amet!"

    },
    {
      id:5,
      img:'https://picsum.photos/seed/picsum/200/300',
      img2:'https://picsum.photos/seed/picsum/200/300',
      title:'hello wolrd',
      isNew:true,
      oldPrice:19,
      price:12,
      descr:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, amet!"

    },
    {
      id:6,
      img:'https://picsum.photos/seed/picsum/200/300',
      img2:'https://picsum.photos/seed/picsum/200/300',
      title:'hello wolrd',
      isNew:true,
      oldPrice:19,
      price:12,
      descr:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, amet!"

    },
    {
      id:7,
      img:'https://picsum.photos/seed/picsum/200/300',
      img2:'https://picsum.photos/seed/picsum/200/300',
      title:'hello wolrd',
      isNew:true,
      oldPrice:19,
      price:12,
      descr:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, amet!"

    },
    {
      id:8,
      img:'https://picsum.photos/seed/picsum/200/300',
      img2:'https://picsum.photos/seed/picsum/200/300',
      title:'hello wolrd',
      isNew:true,
      oldPrice:19,
      price:12,
      descr:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, amet!"

    },
    {
      id:9,
      img:'https://picsum.photos/seed/picsum/200/300',
      img2:'https://picsum.photos/seed/picsum/200/300',
      title:'hello wolrd',
      isNew:true,
      oldPrice:19,
      price:12,
      descr:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, amet!"

    },
  ]

  // const totalPrice = () => {
  //   let total = 0;
  //   data.forEach((item) => {
  //     total += item.quantity * item.price;
  //   });
  //   return total.toFixed(2);
  // };

  // const stripePromise = loadStripe(
  //   "pk_test_eOTMlr8usx1ctymXqrik0ls700lQCsX2UB"
  // );

 

  // const handlePayment = async () => {
  //   try {
  //     const stripe = await stripePromise;
  //     const res = await makeRequest.post("/orders", {
  //       products,
  //     });
  //     await stripe.redirectToCheckout({
  //       sessionId: res.data.stripeSession.id,
  //     });

  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item?.descr?.substring(0, 100)}</p>
            <div className="price">
                ${item.price}
            </div>
          </div>
          <FaTrash
            className="delete"
            // onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        {/* <span>${totalPrice()}</span> */}
      </div>
      <button >PROCEED TO CHECKOUT</button>
      <span className="reset">
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;


/* 
<div className="cart">
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} x ${item.price}
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
*/