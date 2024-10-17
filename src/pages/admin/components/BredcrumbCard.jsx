import React from 'react'

function BredcrumbCard() {
  return (
    <>
        
    <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>DataTable</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a>Home</a>
                  </li>
                  <li className="breadcrumb-item active">DataTable</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default BredcrumbCard