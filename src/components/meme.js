import {useState} from 'react'
import '../styles/meme.css'

import memeData from '../data/memedata'

export default function Meme(){
    let [meme, setMeme] = useState({
        memeUrl: "https://i.imgflip.com/3si4.jpg",
        topText: "",
        bottomText: "",
    });
    
    function getMemeImage(){
        const memeArray = memeData.data.memes
        const meme = memeArray[Math.floor(Math.random() * memeArray.length)].url;
        setMeme((prevState) => {
            return{
                ...prevState,
                memeUrl: meme,
            }
        });
    }

    function getMemeText(evt){
        setMeme((prevState) => {
            return {
                ...prevState,
                [evt.target.id]: evt.target.value,
            };
        })
    }


    return(
        <main>
            <div className="meme-form">
                <input 
                type="text"
                placeholder="Top text"
                id='topText'
                onInput={getMemeText}
                value={meme.topText}
                />
                <input 
                type="text"
                placeholder="Bottom text"
                id='bottomText'
                onInput={getMemeText}
                value={meme.bottomText}
                />
                <button onClick={getMemeImage}>
                    Get a new meme image
                </button>
            </div>
            <div className='meme'>
                <h2 className='topText'>{meme.topText}</h2>
                <img className="img-meme" src={meme.memeUrl} alt=""/>
                <h2 className='bottomText'>{meme.bottomText}</h2>
            </div>

        </main>
    );
}