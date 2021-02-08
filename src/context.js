import React, { createContext, useState, useEffect } from "react";
import { storeProducts } from "./data";


export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchedProduct, setSearchedProduct] = useState("");

  // const [filteredProducts, setFilteredProducts] = useState([])

  const searchedProductHandler = (event) => {
    setSearchedProduct(event.target.value);
  };

  const adjustProducts = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    return setProducts(tempProducts);
  };

  useEffect(() => {
    adjustProducts();
  }, []);

  useEffect(() => {
    const localData = localStorage.getItem("cart");
    if (localData) {
      setCart(JSON.parse(localData));
    } else {
      setCart([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const getItem = (id) => {
    const product = products.find((item) => item.id === id);
    return product;
  };

  const sortAsc = () => {
    let tmp = products.sort((a, b) => {
      if (a.brand > b.brand) {
        return 1;
      }
      if (b.brand > a.brand) {
        return -1;
      }
      return 0;
    });
    setProducts(tmp);
    setTimeout(() => {
      document.querySelector(".page-numbers:nth-child(2) p").click();
    }, 1);
    setTimeout(() => {
      document.querySelector(".page-numbers p").click();
    }, 2);
  }

  const sortDesc = () => {
    let tmp = products.sort((a, b) => {
      if (a.brand > b.brand) {
        return -1;
      }
      if (b.brand > a.brand) {
        return +1;
      }
      return 0;
    });
    setProducts(tmp);
    setTimeout(() => {
      document.querySelector(".page-numbers:nth-child(2) p").click();
    }, 1);
    setTimeout(() => {
      document.querySelector(".page-numbers p").click();
    }, 2);
  }

  
  const sortAscPrice = () => {
    let tmp = products.sort((a, b) => {
      if (a.price > b.price) {
        return 1;
      }
      if (b.price > a.price) {
        return -1;
      }
      return 0;
    });
    setProducts(tmp);
    setTimeout(() => {
      document.querySelector(".page-numbers:nth-child(2) p").click();
    }, 1);
    setTimeout(() => {
      document.querySelector(".page-numbers p").click();
    }, 2);
  }

  const sortDescPrice = () => {
    let tmp = products.sort((a, b) => {
      if (a.price > b.price) {
        return -1;
      }
      if (b.price > a.price) {
        return +1;
      }
      return 0;
    });
    setProducts(tmp);
    setTimeout(() => {
      document.querySelector(".page-numbers:nth-child(2) p").click();
    }, 1);
    setTimeout(() => {
      document.querySelector(".page-numbers p").click();
    }, 2);
  }


  const addToCart = (id) => {
    let tempProducts = [...products];
    const index = tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    // product.count = 1;
    // const price = product.price;
    // product.total = price;
    setProducts(tempProducts);
    setCart([...cart, product].reverse());
  };

  function removeItem(id) {
    let tempProducts = [...products];
    let tempCart = [...cart];
    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    setCart(tempCart);
    setProducts(tempProducts);
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        cart,
        searchedProduct,
        addToCart,
        removeItem,
        searchedProductHandler,
        sortAsc,
        sortDesc,
        sortAscPrice,
        sortDescPrice
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
