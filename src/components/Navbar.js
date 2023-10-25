import React from 'react';
import './Navbar.css'
const Navbar = ({ setType, setCountry }) => {
    const cntr = ['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'];
    let cotegry = ['Technology', 'Science', 'Sports', 'Business', 'Entertainment']

    return (
        <nav className="navbar">
            <div className="navbar-container container">
                <input type="checkbox" name="" id="" />
                <div className="hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
                <ul className="menu-items">
                    {cotegry.map((cot, index) => {
                        return (<li onClick={() => { setType(cot) }} key={index} className='item'> {cot}</li>)
                    })}
                </ul>
                <h1 className="logo">Navbar</h1>
            </div>
        </nav>
    );
};

export default Navbar;
