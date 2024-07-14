import React from 'react'

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
        </ul>
        <div className='toggle_button'>
        toggle
        </div>

        </nav>
        <div className='search'>
            <input type='text'></input>
        </div>
        <div className='main_content'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nam corrupti sint sit voluptas, quam minima vero hic, voluptatum accusamus natus cumque. Omnis, fugit. Sed in odio consequuntur porro possimus!</p>
        </div>
        <div className='circle'> circle1</div>
        <div className='circle2'>Circle2</div>
        <div className='half_circle_left'>hl</div>
        <div className='half_circle_right'>hr</div>
        
        </div>
    </header>
    <footer>
        <p>facebook</p>
        <p>yooutube</p>
        <p>twitter</p>
    </footer>
   </>
  )
}

export default Header