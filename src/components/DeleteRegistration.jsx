import React from 'react'
import NavRegistration from './NavRegistration'

const DeleteRegistration = () => {
  return (
    <div>
        <NavRegistration />
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-6 col lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Reg No</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-6 col lg-6 col-xl-6 col-xxl-6">
                            <br>
                            </br>
                            <button className="btn btn-success">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteRegistration