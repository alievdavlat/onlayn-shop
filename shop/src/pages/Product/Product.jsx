import React from "react";
import { useState } from "react";
import "./Product.scss";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../redux/cartReducer";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";


const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // const dispatch = useDispatch();
  // const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

const images = [
  'https://picsum.photos/seed/picsum/200/300',
  'https://picsum.photos/seed/picsum/200/300'
]

  return (
    <div className="product">
     
          <div className="left">
            <div className="images">
              <img
                src={images[0]}
                alt=""
                onClick={(e) => setSelectedImg(0)}
              />
              <img
                src={images[1]}
                alt=""
                onClick={(e) => setSelectedImg(1)}
              />
            </div>
            <div className="mainImg ">
              <img
               src={images[selectedImg]}
              alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>Lorem, ipsum dolor.</h1>
            <span className="price">$90</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam laboriosam magni soluta itaque ratione non velit architecto temporibus eveniet vero!</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="add"
              
            >
              <FiShoppingCart /> ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <FaRegHeart /> ADD TO WISH LIST
              </div>
              <div className="item">
                < addToCart/> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
    </div>
  );
};

export default Product;


/* 
<div className="product">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img")}
              />
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes[selectedImg]?.data?.attributes?.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="price">${data?.attributes?.price}</span>
            <p>{data?.attributes?.desc}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.img.data.attributes.url,
                    quantity,
                  })
                )
              }
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
*/