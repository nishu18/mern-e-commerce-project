import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/signup')
  }
  return (

    <div>
       <img
            alt='logo'
            className='logo'
             src='https://banner2.cleanpng.com/20180811/hts/kisspng-e-commerce-web-design-website-development-internet-ebook-vendors-mspbasics-com-5b6e96a9c05a40.5743099315339741857879.jpg' />
            
      {
        auth ? <ul className="nav-ul">
          <li><Link to="/">Products</Link></li>
          <li><Link to="/add">Add Products</Link></li>
          <li><Link to="/update"> Update Products</Link></li>
          {/* <li><Link to="/profile">Profile</Link></li> */}
          <li> <Link onClick={logout} to="/signup">Logout </Link></li>
        </ul>
          :
          <ul className="nav-ul nav-right">
            <li> <Link to="/signup">Sign Up</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
      }

    </div>
  )
}

export default Nav;