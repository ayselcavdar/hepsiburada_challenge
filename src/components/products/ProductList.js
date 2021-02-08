import "./productList.css";
import { useState, useContext } from "react";
import { ProductConsumer } from "../../context";
import { ProductContext } from "../../context";
import { storeProducts } from "../../data";
import Product from "../product/Product";
import Pagination from "../pagination/Pagination";
import SideBar from "../sidebar/SideBar";

const ProductList = () => {
  const context = useContext(ProductContext);
  const { searchedProduct } = context;
  const [products] = useState(storeProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  //Get current posts
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  //Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);



  return (
    <>
      <div className="home-container">
        <SideBar products={products}/>
        <div className="product-container">
          <div className="product-row">
            <ProductConsumer>
              {(value) => {
                return value.products
                  .filter((item) => {
                    if (searchedProduct.length < 3) {
                      return item;
                    } else if (
                      item.title
                        .toLowerCase()
                        .includes(searchedProduct.toLowerCase())
                    ) {
                      return item;
                    }
                  })
                  .slice(indexOfFirstProduct, indexOfLastProduct)
                  .map((product) => {
                    return <Product key={product?.id} product={product} />;
                  });
              }}
            </ProductConsumer>
          </div>
        </div>
      </div>
      <div className="pagination-container">
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={products?.length}
          paginate={paginate}
        />
      </div>
    </>
  );
};

export default ProductList;
