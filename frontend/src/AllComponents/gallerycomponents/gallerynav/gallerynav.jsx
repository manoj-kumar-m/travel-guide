import React, {useState} from 'react'
import './gallerynav.css'
import {  NavLink } from 'react-router-dom';
import { GalleryList } from './gallerylist';
const GalleryNav = () => {
    const [clicked, setClicked] = useState(false);
    const galleryList = GalleryList.map(({ url, title }, index) => {
      return (
        <li key={index}>
          <NavLink exact to={url} activeClassName="active">
            {title}
          </NavLink>
        </li>
      );
    });
  
    const handleClick = () => {
      setClicked(!clicked);
    };
  
 
    return (
        <nav>
            <div className="logo">
                <h3>Gallery</h3>
            </div>
            <div className="menu-icon" onClick={handleClick}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={clicked ? "menu-list" : "menu-list close"}>{galleryList}</ul>
        </nav >
    )
}

export default GalleryNav