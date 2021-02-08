
import "./searched.css";
const SearchedProduct = ({ searchedProduct }) => {
  
  return (
    <div className="searchedProduct-container">
      <h1>{searchedProduct} akıllı telefonlar</h1>
      <p>
        <span>Aranan Kelime: </span> {searchedProduct}{" "}
      </p>
    </div>
  );
};

export default SearchedProduct;
