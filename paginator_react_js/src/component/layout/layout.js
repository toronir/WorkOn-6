import React from 'react';
import '../../main.scss'

const Layout = ({children,countDone,allItemCount}) => {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card shadow my-5">

                            <div className="card-header">
                                <h2 className="text-info font-weight-normal text-center mb-0 ">
                                    Buy list (<span id='count-done'>{countDone()}</span>/<span id='count-all'>{allItemCount}</span>)
                                </h2>
                            </div>

                            <div className="card-body">

                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Layout