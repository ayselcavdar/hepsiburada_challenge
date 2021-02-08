import { useContext } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import SvgHepsiburada from "../svg/SvgHepsiburada";
import SearchedProduct from "../searchedProduct/SearchedProduct";
import DropdownButton from "../dropdown/DropdownButton";
import { ProductConsumer } from "../../context";
import { ProductContext } from "../../context";

const Navbar = ({ location }) => {
  const context = useContext(ProductContext);
  const { searchedProductHandler, searchedProduct } = context;

  // remove navbar when scrolling
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector(".header-container").style.top = "0";
    } else {
      document.querySelector(".header-container").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <div className="header-container">
      <div className="header">
        <div className="header_logo">
          <Link to="/">
            <SvgHepsiburada />
          </Link>
        </div>
        <div className="header_search">
          <input
            type="text"
            name="search"
            className="header_searchInput"
            placeholder="25 milyon'dan fazla ürün içerisinde ara"
            onChange={searchedProductHandler}
          />
        </div>
        <Link to="/cart">
          <div className="header_chart">
            <button
              className="header_chart_button"
              style={{ cursor: "pointer" }}
            >
              {" "}
              <div className="chartellips">
                <ProductConsumer>
                  {(val) => {
                    const { cart } = val;
                    if (cart?.length > 0) {
                      return <span id="counter">{cart.length}</span>;
                    }
                    return <span id="counter">0</span>;
                  }}
                </ProductConsumer>
              </div>
              Sepetim
            </button>
          </div>
        </Link>
      </div>
      {location.pathname === "/cart" || location.pathname !== "/" ? (
        null
        ) : (
        <div className="sub-nav">
          <SearchedProduct searchedProduct={searchedProduct} />
          <DropdownButton />
        </div>
        
      )}
    </div>
  );
};

export default Navbar;
