import React ,{useRef}from 'react'
import './Header.css';
import { FaFacebook,FaYoutube,FaTwitter,FaBars} from "react-icons/fa";


const Header = () => {
    const navClass=useRef();
    const handleButton=()=>{
       
       navClass.current.classList.toggle('nav_toggle');
       
    }
  return (
   <>
    <header>
        <div className='container'>
        <nav>
        <ul  ref={navClass}>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About Us</a></li>
            <li><a href='#'>Contact</a></li>
           
        </ul>
        <div className='toggle_button'>
            <button onClick={handleButton}><FaBars /></button>
            
            </div>
        

        </nav>
        <div className='search'>
            <input type='text' placeholder='Search here...'></input>
        </div>
        <div className='main_content'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nam corrupti sint sit voluptas, quam minima vero hic, voluptatum accusamus natus cumque. Omnis, fugit. Sed in odio consequuntur porro possimus!</p>
        </div>
        <div className='circle'></div>
        <div className='circle2'></div>
       
        </div>
    </header>
    <footer>
    <FaFacebook className='facebook' />
    <FaYoutube className='youtube' />
    <FaTwitter className='twitter' />
    </footer>
   </>
  )
}

export default Header