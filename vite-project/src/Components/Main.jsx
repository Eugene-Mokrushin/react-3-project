import React from "react";


export default function Main() {
    return (
        <main>
            <form action="" className="form">
                <div className="inputs">
                    <input type="text" className="upper-text" placeholder="Top text"/>
                    <input type="text" className="lower-text" placeholder="Bottom text"/>
                </div>
                <button type="submit" className="create-btn">
                    Get a new meme image
                </button>
            </form>
            <div className="generated-meme">
                <div className="lower-txt--meme">SHUT UP</div>
                <div className="upper-txt--meme">AND TAKE MY MONEY</div>
                <img src="/images/memeimg.jpg" alt="Meme image" className="meme--photo" />
            </div>
        </main>
    )
}