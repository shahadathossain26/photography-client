import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Logo.jpg'
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <div>
            {user?.email ?
                <div className='flex'>
                    <li><Link to='/myreviews'>My Reviews</Link></li>
                    <li><Link to='/myreviews'>Add Service</Link></li>
                </div>
                : <></>
            }
        </div>
        <li><Link to='/blog'>Blog</Link></li>

    </>
    return (
        <div className="navbar bg-base-100 mb-4 px-16">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/'>
                    <img className='h-20' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>

            <div className="navbar-end">
                <div>
                    {user?.photoURL ?
                        <img className='rounded-full w-16 mr-4' src={user.photoURL} alt="" />
                        : <FaUserAlt className='text-white text-3xl mr-4'></FaUserAlt>
                    }
                </div>
                <div>
                    {user?.email ?
                        <button onClick={handleLogOut} className="btn btn-accent">Logout</button>
                        : <Link to='/login'><button className="btn btn-accent">Login</button></Link>
                    }
                </div>

            </div>
        </div>
    );
};

export default Header;