import { faArrowCircleRight, faCartFlatbedSuitcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function AnalyticCard() {
  return (
    <>

      <div className="small-box bg-info">
        <div className="inner">
          <h3>150</h3>

          <p>New Orders</p>
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faCartFlatbedSuitcase} />
        </div>
        <Link to="#" className="small-box-footer">
          More info
          <FontAwesomeIcon icon={faArrowCircleRight} />
        </Link>
      </div>
    </>
  )
}

export default AnalyticCard