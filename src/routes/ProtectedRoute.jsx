import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function ProtectedRoute({children}) {

    const { accessToken } = useSelector((state)=>state.auth)
    console.log("tokentokentoken ", accessToken)
    const navigate = useNavigate()

  useEffect(()=>{
    if(!accessToken) {
        console.log("Compoent loggeeeeeee!", accessToken)
        navigate('/')
    }
  }, [accessToken])

  return children
}

export default ProtectedRoute