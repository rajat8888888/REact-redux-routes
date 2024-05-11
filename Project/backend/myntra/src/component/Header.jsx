import React from 'react'
import {Link} from 'react-router-dom'
import { FcBusinessman,FcLike,FcPodiumWithoutSpeaker } from "react-icons/fc";
export const Header = () => {
  return (
    <header>
    <div class="logo_container">
        <Link to="/"><img class="myntra_home" src="../images/myntra_logo.webp" alt="Myntra Home"/></Link>
    </div>
    <nav class="nav_bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">Studio <sup>New</sup></a>
    </nav>
    <div class="search_bar">
        <span class="material-symbols-outlined search_icon">search</span>
        <input class="search_input" placeholder="Search for products, brands and more"/>
    </div>
    <div class="action_bar">
        <div class="action_container">
        <FcBusinessman />
           
            <span class="action_name">Profile</span>
        </div>

        <div class="action_container">
        <FcLike />
            <span class="material-symbols-outlined action_icon">favorite</span>
           
            
        </div>
<Link to='/bag'>
        <div class="action_container">
    <FcPodiumWithoutSpeaker />
            <span class="action_name">Bag</span>
            <span class="bag-item-count">0</span>
        </div>
        </Link>
    </div>
</header>
  )
}
