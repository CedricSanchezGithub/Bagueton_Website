import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

export default function Article({ text, background, height }) {
    return (
        <div className={`article ${background} ${height} bg-[#FFF5E8] flex flex-col justify-between`} style={{ minHeight: '100vh' }}>
            <Header />
            {text}
            <Footer />
        </div>
    );
}
