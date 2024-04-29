import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(22)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            Rs {product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            Rs {product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Treat your taste buds to the irresistible flavors of our signature
          chicken biryani. Crafted with aromatic spices and tender, marinated
          chicken, this dish promises a culinary experience like no other. The
          fragrant basmati rice, infused with saffron, creates a harmonious
          blend of taste and aroma. Whether you're dining in or opting for
          takeout, our chicken biryani is the perfect choice for indulging in
          authentic Indian cuisine. Savor the richness of tradition and flavor
          at our biryani house.
        </div>

        <div className="productdisplay-right-size">
          <button style={{marginTop: "10px"}}
            onClick={() => {
              addToCart(product.id);
            }}
          >
            Add To Cart
          </button>
          <p
            className="product-right-category"
            style={{ visibility: "hidden" }}
          >
            <span>Category :</span>Men, T-shirt, Trouser
          </p>
          <p
            className="product-right-category"
            style={{ visibility: "hidden" }}
          >
            <span>Tags :</span>Modern, Newest, Trendiest
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
