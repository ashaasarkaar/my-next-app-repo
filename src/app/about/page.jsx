import Image from 'next/image';
import React from 'react';
import virat from '../../assets/images/virat-kolijpg.jpg'

const AboutPage = () => {
    return (
        <div>
            <h1 className='text-amber-400 text-7xl'>This is About Section</h1>
            <div className='grid grid-cols-4 gap-4'>
                <Image src='/african.jpg' alt='africal lady' width='500' height='300'></Image>
            <Image src={virat} alt='virat' width='500' height='300'></Image>
            <Image src='https://images.unsplash.com/photo-1723296637578-95124ce6024b' alt='Egg line' height='300' width='500'></Image>
            <Image src='https://i.ibb.co.com/FbNYdFM5/The-Dating-Play-Book-For-Men-Book.png' alt='book image' width='500' height='300'></Image>
            </div>
        </div>
    );
};

export default AboutPage;