import { Link, NavLink } from "react-router-dom"
import DefaultUser from '../../assets/user.png'
import { useContext } from "react"
import { AuthContext } from "../../export/Auth/AuthContextProvider"

const SimpleNavbar = () => {

    const { user, signOutUser } = useContext(AuthContext)


    const handleSignOutUser = () => {
        signOutUser()
            .then()
            .catch()
    }

    const navLinks = <>
        <li className="dark:text-black"><NavLink to='/'>Home</NavLink></li>
        <li className="dark:text-black"><NavLink to='/about'>About</NavLink></li>
        <li className="dark:text-black"><NavLink to='/career'>Career</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 mb-16 rounded-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-12 rounded-full">
                        <img src={user?.photoURL?user.photoURL:DefaultUser} />
                    </div>
                </label>


                {
                    user ?
                        <button onClick={handleSignOutUser} className="btn ml-2 bg-orange-700 hover:bg-orange-600 text-white px-5">Sign Out</button>
                        :
                        <Link to='/login'>
                            <button className="btn ml-2 bg-gray-800 hover:bg-gray-600 text-white px-5">Log in</button>
                        </Link>
                }
            </div>
        </div>
    )
}

export default SimpleNavbar