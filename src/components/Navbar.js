import React from 'react';
import './Navbar.css'
const Navbar = ({ setType, setCountry, theme, setTheme }) => {
    const cntr = ['in', 'ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'];
    let cotegry = ['Technology', 'Science', 'Sports', 'Business', 'Entertainment']
    console.log("Navbar ", theme)
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
                <div onChange={() => { theme === 'dark' ? setTheme('light') : setTheme('dark'); }} className='radio'>
                    <input type="checkbox" className="checkbox" id="checkbox" />
                    <label for="checkbox" className={theme === 'dark' ? 'checkbox-label_dark' : 'checkbox-label_light'}>
                        <span className={theme === 'dark' ? 'ball_dark ' : 'ball_light'}></span>
                    </label>
                </div>
                <h1 className="logo">News Explorar</h1>

                <select name="language" id="language" onChange={(e) => { setCountry(e.target.value) }}>
                    {cntr.map((country, index) => { return <option key={index} value={country} >{country}</option> })}
                </select>
            </div>
        </nav>
    );
};

export default Navbar;
