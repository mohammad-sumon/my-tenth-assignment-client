import React from 'react';
import PcBg from '../../assets/pc-bg.jpg';
import Footer from '../shared/Footer/Footer';

const Home = () => {
    return (
        <div className='text-center'>
            <h1 className='mt-4'>Welcome to <span style={{color: 'orange'}}>Expert Programmer</span> </h1>
            <img src={PcBg} alt="" className='w-50 rounded' />
            <Footer></Footer>
        </div>
    );
};

export default Home;