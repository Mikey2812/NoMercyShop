import { useEffect } from "react";
import { useAppContext } from "../../contexts/appContext";

const PageBtnContainer = () => {
  const { numOfPages, limit, page, changePage, totalValues } = useAppContext()

    useEffect(() => {
        console.log("change...");
        console.log(page);
    }, [page])

    const pages = Array.from({ length: numOfPages }, (_, index) => {
        return index + 1;
    })
    const nextPage = () => {
        let newPage = page + 1
        if (newPage > numOfPages) {
            newPage = 1
        }
        changePage(newPage)
    }
    const prevPage = () => {
        let newPage = page - 1
        if (newPage < 1) {
            newPage = numOfPages
        }
        changePage(newPage)
    }
    return (
        <div className="card-footer clearfix">
            <div className='float-left'>
                Showing data form {limit*page - limit + 1} to {(limit*page > totalValues) ? totalValues : limit*page} of {totalValues} value
            </div>
            <ul className="pagination pagination-sm m-0 float-right">
                <li className="page-item">
                    <button className="page-link" onClick={()=>{nextPage()}}>«</button>
                </li>
                {pages.map((pageNumber) => {
                    return (
                        <li className={pageNumber === page ? 'page-item active' : 'page-item'}
                            key={pageNumber}>
                            <button className="page-link" disabled={pageNumber === page ? true : false} onClick={()=>{changePage(pageNumber)}}>
                                {pageNumber}
                            </button>
                        </li>
                    )
                })}
                <li className="page-item">
                     <button className="page-link" onClick={()=>{prevPage()}}>»</button>
                </li>
            </ul>
        </div>
        
    )
}

export default PageBtnContainer