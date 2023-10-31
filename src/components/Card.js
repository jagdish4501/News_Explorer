import { React } from 'react';

import './Card.css'
import Share from './Share';

const Card = ({ title, description, urlToImage, newsUrl, theme }) => {
    console.log("card ", theme)
    if (theme === 'dark')
        return (

            <div className="card_container">
                <img className="card_img" src={urlToImage} alt="Snowy Mountains" />
                <div className="card_header_dark">{title}</div>
                <p className="card_text_dark">{description}</p>
                <div className='button_group'>
                    <Share text={title} url={newsUrl} />
                    <a href={newsUrl} className="button"> read more</a>
                </div>
            </div>
        );
    else
        return (

            <div className="card_container">
                <img className="card_img" src={urlToImage} alt="Snowy Mountains" />
                <div className="card_header">{title}</div>
                <p className="card_text">{description}</p>
                <div className='button_group'>
                    <Share text={title} url={newsUrl} />
                    <a href={newsUrl} className="button"> read more</a>
                </div>
            </div>
        );
};

export default Card;
