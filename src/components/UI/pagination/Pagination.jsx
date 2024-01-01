import {usePagination} from "../../../hooks/usePagination";


const Pagination = ({totalPages, page, changePage}) => {
  let pagesArray = usePagination(totalPages);
  return (
    <div className='page-wrapper'>
      {pagesArray.map(p =>
        <span
          onClick={() => changePage(p)}
          className={p === page ? 'page page__current' : 'page'}
          key={p}>{p}</span>
      )}
    </div>
  )
}

export default Pagination;