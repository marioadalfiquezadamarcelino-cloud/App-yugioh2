import React from "react";
import "./NEWS.css";
const news = () => {
    return (

        <div className="news-container">

            <h1>Yu-Gi-Oh! NEWS</h1>

            <p>Latest official Yu-Gi-Oh! news form konami RSS feed:</p>


            <iframe
                title="Yu-Gi-Oh RSS"
                src="https://www.yugioh-card.com/en/feed/"
                className="rss-frame">
            </iframe>

            <p>New updates, events, banned cards in the TCG,OCG  in dual master</p>
           
            <iframe
                title="Yu-Gi-Oh Master"
                src="https://www.masterduelmeta.com/"
                className="rss-frame">

            </iframe>
        </div>
        
    );

};

export default news;