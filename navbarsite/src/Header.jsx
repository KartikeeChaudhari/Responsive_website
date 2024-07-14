import React from 'react'
import './Header.css';

const Header = () => {
  return (
   <>
    <header>
        <div className='container'>
        <nav>
        <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About Us</a></li>
            <li><a href='#'>Contact</a></li>
            <li className='toggle_button'>
            <button>toggle</button>
            
            </li>
        </ul>
        

        </nav>
        <div className='search'>
            <input type='text' placeholder='Search here...'></input>
        </div>
        <div className='main_content'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nam corrupti sint sit voluptas, quam minima vero hic, voluptatum accusamus natus cumque. Omnis, fugit. Sed in odio consequuntur porro possimus!</p>
        </div>
        <div className='circle'></div>
        <div className='circle2'></div>
        <div className='half_circle_left'></div>
       
        </div>
    </header>
   </>
  )
}

export default Header