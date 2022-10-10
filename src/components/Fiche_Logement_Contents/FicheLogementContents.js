import React from 'react';
import RatingStars from '../RatingStars/RatingStars'
import './FicheLogementContents.css'

const FicheLogementContents = (props) => {
    const tags = props.tags
    
    function tagDisplay()  {
        tags.forEach((tag) => {
            <li>{tag}</li>
            }
        )
    }
    
    return (
        <div className='crib_contents'>
            <div className='left'>
                <h1>{props.title}</h1>
                <p>{props.location}</p>

                {/* ca marche pas */}
                <ul className='tags'>
                    {tagDisplay}
                </ul>
            </div>
            <div className='right'>
                <div className='host'>
                    <p className='hostName'>
                        {props.hostName}
                    </p>
                    <div className='hostPicture'>
                        <img src = {props.hostPicture} alt = "propriétaire"></img>
                    </div>
                </div>
                <div className='rating'>
                    <div className='starsContainer'>
                        <RatingStars rating = {props.rating}/>
                        <span className="star">&#9733;</span>
                    </div>
                                  
                </div>
            </div>
            
        </div>
    );
};

export default FicheLogementContents;