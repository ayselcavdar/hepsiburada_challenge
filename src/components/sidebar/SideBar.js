import React, { useContext} from "react";
import { ProductContext } from "../../context";
import "./sidebar.css";

const getUnique = (item, value) => {
  return [...new Set(item.map((item) => item[value]))];
};

const SideBar = () => {
  const context = useContext(ProductContext);
  const { products, sortAsc, sortDesc,sortAscPrice,sortDescPrice  } = context;

  // get unique colors
  let colors = getUnique(products, "color");
  let brands = getUnique(products, "brand");

  return (
    <>
      <div className="sidebar-wrap">
        <div className="color-container">
          <p>
            <strong>Renk</strong>
          </p>
          {colors.map((item,i) => {
            return (
              <form key={i}>
                <label key={i} htmlFor={item}>
                  <input type="checkbox" name="color" value={item} id={item} />{" "}
                  {item} ({item.length})
                </label>
                <br />
              </form>
            );
          })}
        </div>
        <div className="range-container">
          <p>
            <strong>Sıralama</strong>
          </p>

          <ul className="dd-items">
            <li onClick={sortAscPrice}>En Düşük Fiyat</li>
            <li onClick={sortDescPrice}>En Yüksek Fiyat</li>
            <li onClick={sortAsc}>En Yeniler (A{">"}Z)</li>
            <li onClick={sortDesc}>En Yeniler (Z{">"}A)</li>
          </ul>
        </div>
        <div className="brand-container">
          <p>
            <strong>Marka</strong>
          </p>
          {brands.map((item,i) => {
            return (
              <form key={i}>
                <label key={i} htmlFor={item}>
                  <input type="checkbox" name="brand" value={item} id={item} />{" "}
                  {item} ({item.length})
                </label>
                <br /> 
              </form>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SideBar;
