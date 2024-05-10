import React from 'react'
import { Link, Outlet }from 'react-router-dom'

export const Profile = () => {
  return (
    <>
    <ul class="list-group" style={{margin:"4px"}}>
  <Link to='/profile/setting' class="list-group-item">An active item</Link>
  <Link to='/profile/privace' class="list-group-item">A second item</Link>
 
</ul>
<div>{Outlet}</div>
</>
  )
}
