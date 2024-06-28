import React from 'react';

export default function Section({ text, imagePath, altText, background, height, showExtraContent, extraContent  }) {
    return (
        <div className={`section flex ${background} ${height} flex-col`}>
            <div className='max-w-2xl m-auto lg:grid lg:grid-cols-2 flex flex-col items-center justify-center text-xl'>
                <div className="text-content p-4 text-orange-950 items-center mx-auto" data-aos="zoom-in-right">
                    {text}
                </div>
                <div className="image-content p-4">
                    <img src={imagePath} alt={altText} className="w-md" data-aos="zoom-out-left" />
                </div>
            </div>
                    {showExtraContent && (
                        <div className="">
                            {extraContent}
                        </div>
                    )}
        </div>
    );
}

