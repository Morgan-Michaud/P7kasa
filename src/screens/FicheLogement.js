import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { useParams } from 'react-router-dom';


const FicheLogement = () => {
    const {id} = useParams()
    console.log(id)
    return (
        <div>
            <Header/>
            <Footer/>
        </div>
    );
};

export default FicheLogement;