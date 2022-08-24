import React from "react";



export default function Main() {
    const [allMemes, setAllMemes] = React.useState([])
    const [meme, setMeme] = React.useState(
        {
            memeId: 0,
            imgMeme: "http://i.imgflip.com/1bij.jpg",
            topText: "",
            bottomText: ""
        }
    )

    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
        console.log('I run')
    }, []);

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            imgMeme: url
        }))
        
    }

    function handleChange(e) {
        const { value, name } = e.target
        setMeme(prevState => {
            return (
                {
                    ...prevState,
                    [name]: value
                }
            )
        })

    }




    return (
        <main>
            <div className="form">
                <div className="inputs">
                    <input type="text"
                        value={meme.topText}
                        className="upper-text"
                        placeholder="Top text"
                        name="topText"
                        onChange={handleChange}
                    />

                    <input type="text"
                        className="lower-text"
                        placeholder="Bottom text"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </div>
                <button type="submit" className="create-btn" onClick={getMemeImage}>
                    Get a new meme image
                </button>
            </div>
            <div className="generated-meme">
                {meme.imgMeme != "" && <img src={meme.imgMeme} alt="Meme image" className="meme--photo" />}
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}