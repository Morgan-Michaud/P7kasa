import React from 'react';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ThumbContainer from '../../components/Thumb_container/ThumbContainer';
import '../../components/styles/index.css'
import './home.css'

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <ThumbContainer/>
            <Footer/>
        </div>
    );
};

export default Home;