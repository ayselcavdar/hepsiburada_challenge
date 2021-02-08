import "./pagination.css";

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  
  return (
    <nav>
    
      <ul className="pagination">
        {pageNumbers.map((number) => {
          return (
            <li  key={number} className="page-numbers">
              <p onClick={() => paginate(number)} >
                {number}
              </p>
            </li>        
          );
        })}    
      </ul>
    </nav>
  );
};

export default Pagination;
