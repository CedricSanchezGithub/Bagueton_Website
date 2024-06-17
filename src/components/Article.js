import React from 'react';

export default function Article({ text, imagePath, altText, background, height }) {
    return (
        <div className={`section flex ${background} ${height}`}>
            <p>
                <img src={imagePath} alt={altText} className="w-md" data-aos="zoom-out-left"/>
                {text}
            </p>
        </div>
    );
}
