import './dropdown.css'
import { useContext } from 'react';
import { ProductContext } from '../../context';
const DropdownButton = () => {
  const context = useContext(ProductContext);

  const { sortAsc, sortDesc,sortAscPrice,sortDescPrice } = context;

  return (
    <div className="dropdown-container">
      <label className="dropdown">
        <div className="dd-button">Sıralama</div>

        <input type="checkbox" className="dd-input" id="test" />

        <ul className="dd-menu">
          <li onClick={sortAscPrice}>En Düşük Fiyat</li>
          <li onClick={sortDescPrice}>En Yüksek Fiyat</li>
          <li onClick={sortAsc}>En Yeniler(A{'>'}Z)</li>
          <li onClick={sortDesc}>En Yeniler(Z{'>'}A)</li>
        </ul>
      </label>
    </div>
  );
};

export default DropdownButton;
