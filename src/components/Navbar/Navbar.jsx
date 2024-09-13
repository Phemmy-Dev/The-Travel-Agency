import './Navbar.css'
import { CiHome } from "react-icons/ci";
import { IoIosInformationCircle } from "react-icons/io";
import { MdHomeRepairService, MdContactPage } from "react-icons/md";
import { FaBars, FaTimes } from 'react-icons/fa';
import data from '../../components/menuitems.json'

import { Link } from 'react-router-dom'
import { useState } from 'react';


const iconMap = {
    CiHome: <CiHome />,
    IoIosInformationCircle: <IoIosInformationCircle />,
    MdHomeRepairService: <MdHomeRepairService />,
    MdContactPage: <MdContactPage />,
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleNavbar = () => {
        console.log(isOpen)
        setIsOpen(!isOpen);
    }

    return (
        <>
            <nav className='nav_bar'>
                <h1 className="logo">
                    <Link to={'/'}>The Travel Agency</Link>
                </h1>


                <div className="hamburger" onClick={toggleNavbar}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                <div className={`nav-items  ${isOpen ? 'active' : ''}`}>
                    <ul>
                        {data.map((item, index) => (
                            <li key={index}>
                                <Link to={item.path} className={item.cName}>
                                {iconMap[item.icon]}
                                {item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
)
}

export default Navbar
