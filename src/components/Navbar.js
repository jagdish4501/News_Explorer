import React, { useState } from 'react';
import './Navbar.css'
const Navbar = ({ setType, setCountry, theme, setTheme }) => {
    const [click, setClick] = useState(false)
    const cntr = ['', 'in', 'us', 'ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 've', 'za'];
    let cotegry = ['Technology', 'Science', 'Sports', 'Business', 'Entertainment', 'general']

    return (
        <nav className='nav_container'>
            <div onClick={() => { click ? setClick(false) : setClick(true) }} className='show_hide'>
                <div className='show_hide_line'></div>
                <div className='show_hide_line'></div>
                <div className='show_hide_line'></div>
            </div>
            <div className="logo">News Explorar</div>

            <div className={click ? 'navbar_mob' : "navbar"}>
                <div className={click ? 'cotegry_mob' : "cotegry"}>
                    {cotegry.map((cot, index) => {
                        return (<div onClick={() => { setType(cot) }} key={index} className='item'> {cot}</div>)
                    })}
                </div>
                <select name="language" id="language" onChange={(e) => { setCountry(e.target.value) }} className={click ? 'drop_down_mob' : 'drop_down'}>
                    {cntr.map((cntry, index) => { return <option key={index} value={cntry} >Slected Courtry: {cntry}</option> })}
                </select>

                <div onClick={() => { theme === 'dark' ? setTheme('light') : setTheme('dark'); }} className={click ? 'radio_mob' : ' radio'} >
                    {theme}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
