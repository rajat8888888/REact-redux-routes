import React from 'react'

export const Container = ({children}) => {
  return (
    <div className='container'><div className="card" style={{width: "30rem",height:"400px"}}>
    
    <div className="card-body">
      {children}
    </div>
  </div></div>
  )
}
