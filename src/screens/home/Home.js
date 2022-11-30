import React, { Fragment, useEffect } from "react";
import { clearErrors, getProducts } from "../../Actions/ProductAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../layout/loader/Loader";
import { useAlert } from "react-alert";
import ProductCard from "./ProductCard.js";
import "./home.css";

function Home() {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, product } = useSelector((state) => state.products);
  const data = useSelector((state) => state.products);
  console.log("home products ", product);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProducts());
  }, [dispatch, error, alert]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container"></a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {product &&
              product.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default Home;
