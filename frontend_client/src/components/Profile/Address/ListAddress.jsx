import React from 'react'

const ListAddress = () => {
    return (
        <div
            className="tab-pane fade"
            id="address"
            role="tabpanel"
            aria-labelledby="address-tab"
        >
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between">
                            <h3>Shipping Address</h3>
                            <button className='btn btn-fill-line'>Add new</button>
                        </div>
                        <div className="card-body">
                            <address>
                                House #15
                            <br />
                                Road #1
                            <br />
                                Block #C
                            <br />
                            Angali <br /> Vedora <br />
                            1212
                            </address>
                            <p>New York</p>
                            <a href="#" className="btn btn-fill-out">
                            Edit
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListAddress