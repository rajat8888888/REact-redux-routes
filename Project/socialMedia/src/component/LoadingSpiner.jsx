import React from 'react'

export const LoadingSpiner = () => {
  return (
    <div class="text-center spinner">
    <h1>Data is loading Plz wait...</h1>
    <div class="spinner-border spinner" role="status" style={{width:"4rem",height:"4rem"}}>
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  )
}
