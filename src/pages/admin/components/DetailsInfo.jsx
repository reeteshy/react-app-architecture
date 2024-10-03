import { faPaintBrush } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function DetailsInfo() {
  return (
    <>
        
        <div className="col-12 col-md-12 col-lg-6 order-1 order-md-2">
              <h3 className="text-primary">
                <FontAwesomeIcon icon={faPaintBrush} />
                 AdminLTE v3</h3>
              <p className="text-muted">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terr.</p>
              <br />
              <div className="text-muted">
                <p className="text-sm">Client Company
                  <b className="d-block">Deveint Inc</b>
                </p>
                <p className="text-sm">Project Leader
                  <b className="d-block">Tony Chicken</b>
                </p>
              </div>

              <h5 className="mt-5 text-muted">Project files</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="" className="btn-link text-secondary"><i className="far fa-fw fa-file-word"></i> Functional-requirements.docx</a>
                </li>
                <li>
                  <a href="" className="btn-link text-secondary"><i className="far fa-fw fa-file-pdf"></i> UAT.pdf</a>
                </li>
                <li>
                  <a href="" className="btn-link text-secondary"><i className="far fa-fw fa-envelope"></i> Email-from-flatbal.mln</a>
                </li>
                <li>
                  <a href="" className="btn-link text-secondary"><i className="far fa-fw fa-image "></i> Logo.png</a>
                </li>
                <li>
                  <a href="" className="btn-link text-secondary"><i className="far fa-fw fa-file-word"></i> Contract-10_12_2014.docx</a>
                </li>
              </ul>
            </div>
    </>
  )
}

export default DetailsInfo