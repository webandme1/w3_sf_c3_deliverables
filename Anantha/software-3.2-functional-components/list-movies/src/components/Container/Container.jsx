import React from 'react';
import Genre from '../Genre/Genre';
import './Container.css';

function Container() {
  return (
    <>
        <header>
            <h1 className='HeaderTitle'>Movie App</h1>
        </header>
        <Genre name="Comedy" description="#1 Comedy Movie in Hindi & English" movieTitle1="Raja Babu" movieTitle2="Mask" />
        <Genre name="Romance" description="#1 Romance Movie in Hindi & English" movieTitle1="Ek Duuje Ke Liye" movieTitle2="Titanic" />
    </>
  )
}

export default Container