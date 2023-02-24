import React from 'react';
 
const Paginate = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
   const pageNumbers = [];
 
   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
   }
   return (
      <div className="themesflat-pagination">
         <ul>
            {
            pageNumbers.map((number) => (
            <li key={number} onClick={() => paginate(number)}><a href="/" className={number === currentPage ? "page-numbers current" : "page-numbers"}>{number}</a></li>
            ))}
         </ul>
      </div>
   );
};
export default Paginate;