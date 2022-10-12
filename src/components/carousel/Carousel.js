import React, {useState} from 'react';
import './Carousel.css'
import leftArrow from '../../assets/images/Vectorleft.png'
import rightArrow from '../../assets/images/Vectorright.png'


const Carousel = (props) => {
    const [currentImg, setCurrentImg] = useState(0)
    const carouselLength = props.pictures.length;
    
    //afficher un compteur de photos
    const displayImgNumber = () => {
        let num1 = currentImg + 1
        return num1 + '/' + carouselLength;  
    }

    //Si le carousel contient plus d'une photo:
    const isMoreThanOne = () => {
        if(carouselLength > 1){
            return (
                <div className='arrows'>
                    <div className='vectorLeft'>
                        <img src = {leftArrow} alt='flèche gauche' onClick={previousImg}></img>
                    </div>
                    <div className='vectorRight'>
                        <img src = {rightArrow} alt='flèche droite' onClick={nextImg}></img>
                    </div>
                    <p>{displayImgNumber()}</p>
                </div>
            )
        }
    } 
    
    //logique de navigation dans le carousel:
    //ascendant: si l'index de l'image actuelle est le dernier du array =  changer l'index à 0, sinon +1
    const nextImg = () => {
        setCurrentImg( currentImg === carouselLength -1 ? 0 : currentImg +1 )
    }

    //descendant: si l'index de l'image actuelle est le premier du array =  changer l'index au dernier, sinon -1
    const previousImg = () => {
        setCurrentImg( currentImg === 0 ? carouselLength -1 : currentImg - 1 )
    }
    
    //si pas d'images ou tableau vide envoyé en props:
    if(!Array.isArray(props.pictures) || carouselLength === 0)
        return null
    return (
        <section className='carousel'>
            
            {props.pictures.map((picture, index) => {
                return(
                <div className = {index === currentImg ? 'active' : 'inactive'} key = {index}>
                    {index === currentImg && (<img src = {picture} alt = "un appartement"></img>)}
                     
                </div>)
            })}
            {isMoreThanOne()}
            {/* on peut mettre un array en props, pas un objet */}
        </section>
    );
};

export default Carousel;