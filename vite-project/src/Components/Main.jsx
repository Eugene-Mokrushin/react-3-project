import React from "react";
import memesData from '../memesData.js'


export default function Main() {
    const [allMemeImages, setAllMemeImages] = React.useState(memesData.data.memes)
    const [meme, setMeme] = React.useState(
        {
            imgMeme: "",
            topText: "",
            bottomText: ""
        }
    )

    function getMemeImage() {
        const memesArray = allMemeImages
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMeme(prevState => ({ ...prevState, imgMeme: memesArray[randomNumber].url }))

    }


    return (
        <main>
            <div className="form">
                <div className="inputs">
                    <input type="text" className="upper-text" placeholder="Top text" />
                    <input type="text" className="lower-text" placeholder="Bottom text" />
                </div>
                <button type="submit" className="create-btn" onClick={getMemeImage}>
                    Get a new meme image
                </button>
            </div>
            <div className="generated-meme">
                {meme.imgMeme != "" && <img src={meme.imgMeme} alt="Meme image" className="meme--photo" />}
            </div>
        </main>
    )
}