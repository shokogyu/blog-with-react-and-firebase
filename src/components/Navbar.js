import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faSquarePlus, faRightToBracket } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({isAuth}) => {
  return (
    <nav className='nav'>
        <Link to="/" className='nav-link'>
            <FontAwesomeIcon icon={faHouse} />Home
        </Link>
        {(!isAuth) ? (
          <Link to="/login" className='nav-link'>
            <FontAwesomeIcon icon={faRightToBracket} />ログイン
          </Link>
        ) : (
          <>
            <Link to="/createpost" className='nav-link'>
                <FontAwesomeIcon icon={faSquarePlus} />新規投稿
            </Link>
            <Link to="/logout" className='nav-link'>
                <FontAwesomeIcon icon={faRightToBracket} />ログアウト
            </Link>
          </>
        )}
    </nav>
  )
}

export default Navbar