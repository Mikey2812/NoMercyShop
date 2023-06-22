import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../../actions/posts';

const Paging = () => {
    const {numOfPages, page} = useSelector(state=>state.posts);
    const dispatch = useDispatch();
    // const pages = Array.from({ length: numOfPages }, (_, index) => {
    //     return index + 1;
    // });
    // console.log(pages);
    const nextPage = () => {
        let newPage = page + 1
        if (newPage > numOfPages) {
            newPage = 1
        }
        dispatch(changePage(newPage));
    }
    const prevPage = () => {
        let newPage = page - 1
        if (newPage < 1) {
            newPage = numOfPages
        }
        dispatch(changePage(newPage));
    }
    const renderPageItems = () => {
        const pageItems = [];
        for (let i = 1; i <= numOfPages; i++) {
            pageItems.push(
                <li key={i} className={`page-item${page === i ? ' active' : ''}`}>
                    <button className="page-link p-0" onClick={()=>{dispatch(changePage(i))}}>
                        {i}
                    </button>
                </li>
            );
        }
        return pageItems;
    }
    return (
        <div className="row">
            <div className="col-12 mt-2 mt-md-4">
                <ul className="pagination pagination_style1 justify-content-center">
                    <li className={`page-item${page === 1 ? ' disabled' : ''}`}>
                        <button className="page-link" onClick={()=>{nextPage()}}>
                            <i className="linearicons-arrow-left" />
                        </button>
                    </li>
                    {renderPageItems()}
                    <li className={`page-item${page === numOfPages ? ' disabled' : ''}`}>
                        <button className="page-link" onClick={()=>{prevPage()}}>
                            <i className="linearicons-arrow-right" />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Paging