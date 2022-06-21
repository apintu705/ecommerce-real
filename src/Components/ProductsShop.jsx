import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
// import {products} from '../data.js' //but for now -> is not good
import '../Styles/productsshop.css'
import ReactPaginate from 'react-paginate'
import {useDispatch,useSelector} from 'react-redux'
import { categoryaction, getproduct } from '../redux/action/productaction.js';
import ProductShop from './ProductShop.jsx';


const ProductsShop = () => {
  const dispatch = useDispatch();
  const {products} = useSelector((state)=>state.product)
  
  

  //for filter category and all products
  const[data, setData] = useState(products);
  

  //for category
 const {category}=useSelector((state)=>state.category)

  //for paginate
  const [pageNumber, setPageNumber] = useState(0);

  const productPerPage = 3;

  const pagesVisited = pageNumber * productPerPage;

  const displayProducts = data.slice(pagesVisited, pagesVisited + productPerPage).map((item) => (
      <ProductShop item={item} key={item._id} />
      
    ))

  const pageCount = Math.ceil(data.length / productPerPage);

  const changePage = ({selected}) => {
    setPageNumber(selected); //if i click page number 2 than selected is number 2
  }
  


  //filter and all products
  const filterResult = (catItem) => {
    
    const result =products&& products.filter((curDate) => {
      return curDate.category === catItem;
    });
    setData(result);
  }

  //for show all category
  useEffect(() => {
    
      dispatch(categoryaction())    
      dispatch(getproduct())

  }, [dispatch]);

  return (
    <div className='shop-container'>
      <div className="shop-row">
        <div className="shop-col">
          <h2>Catgeory</h2>
          <button className="shop-btn" onClick={() => setData(products)}>All <FontAwesomeIcon icon={faChevronRight} /></button>
          {/* show all category if exists */}
          {category&&category.map((item) => (
              <button className="shop-btn" key={item._id} onClick={() => filterResult(item.title)}>{item.title} <FontAwesomeIcon icon={faChevronRight} /></button>
          ))}
        </div>
        <div className="shop-col">
          <div className="shop-products">
            {displayProducts}
          </div>
          <div className="shop-pagination">
              <ReactPaginate 
                previousLabel={"<<"}  //for previous
                nextLabel={">>"}  //for next
                pageCount={pageCount} //for page number
                onPageChange={changePage} //for selected page, current page
                containerClassName={"paginationBttns"} //class for style
                previousLinkClassName={"previousBttn"}  //class for style
                nextLinkClassName={"nextBttn"}  //class for style
                disabledClassName={"paginationDisabled"}  //class for style
                activeClassName={"paginationActive"}  //class for style
              />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsShop
