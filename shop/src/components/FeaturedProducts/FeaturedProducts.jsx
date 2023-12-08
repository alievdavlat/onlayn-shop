import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";
import "./FeaturedProducts.scss";
import Pagination from "../pagination/Pagination";
import axios from "axios";
const baseUrl = import.meta.env.VITE_APP_API_URL
const apiToken = import.meta.env.VITE_APP_API_TOKEN


const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );


  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
   

      <div className="bottom">
      {
          error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)
        }

    </div>

  </div>
  );
};

export default FeaturedProducts;


/*
 {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}

*/