import { React } from 'react';

import './Card.css'
import Share from './Share';

const Card = ({ title, description, urlToImage, newsUrl, theme }) => {
    return (
        < div className="card_container" >
            {urlToImage ? <img className="card_img" src={urlToImage} alt="Snowy Mountains" /> :
                <div className='img_not_found'>Image Not Found</div>
            }
            <div className={theme === 'dark' ? 'card_header_dark' : 'card_header'}>{title}</div>
            < p className={theme === 'dark' ? "card_text_dark" : "card_text"}>{description}</p>
            <div className='button_group'>
                <Share text={title} url={newsUrl} />
                <a href={newsUrl} className="button"> read more</a>
            </div>
        </div >
    );
};

export default Card;
