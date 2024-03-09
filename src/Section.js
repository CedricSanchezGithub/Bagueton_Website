import React from 'react';

export default function Section({ text, imagePath, altText, background, height }) {
    return (
        <div className={`section flex ${background} ${height}`}>
            <div className='max-w-xl m-auto lg:grid lg:grid-cols-2 flex flex-col items-center justify-center text-xl'>
                <div className="text-content p-4 text-orange-950 items-center mx-auto" data-aos="zoom-in-right">
                    {text}
                </div>
                <div className="image-content p-4">
                    <img src={imagePath} alt={altText} className="w-md" data-aos="zoom-out-left" />
                </div>
            </div>
        </div>
    );
}
