import React from "react";
import './Pagination.scss'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";


function Pagination({btnTitle, renderData, data}) {


  const [currentPage, setcurrentPage] = React.useState(1);
  const [itemsPerPage, setitemsPerPage] = React.useState(4);

  const [pageNumberLimit, setpageNumberLimit] = React.useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = React.useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = React.useState(0);

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={`${currentPage == number ? "active" : null } pagination-item`}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });




  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li className="nextPageBtn" onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li className="prevPageBtn" onClick={handlePrevbtn}> &hellip; </li>;
  }

  const handleLoadMore = () => {
    setitemsPerPage(itemsPerPage + 5);
  };

  return (
    <>
      {renderData(currentItems ? currentItems : '')}
      <ul className="pageNumbers ">
        <li>
          <button
           className="prevBtn"
            onClick={handlePrevbtn}
            disabled={currentPage == pages[0] ? true : false}
          >
             <MdOutlineKeyboardDoubleArrowLeft/>
          
          </button>
        </li>
        {pageDecrementBtn ? pageDecrementBtn :''}
        {renderPageNumbers ? renderPageNumbers : ''}
        {pageIncrementBtn ? pageIncrementBtn : ''}

        <li>
          <button
          className="nextBtn"
            onClick={handleNextbtn}
            disabled={currentPage == pages[pages.length - 1] ? true : false}
          >
            <MdOutlineKeyboardDoubleArrowRight/>
          </button>
        </li>
      </ul>

    
 
    </>
  );
}

export default Pagination;
