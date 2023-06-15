import React, { Component } from "react";
import "../feedStyle.css";
import emoji1 from "../icons/emojis/emoji-1.png";
import emoji2 from "../icons/emojis/emoji-2.png";
import emoji3 from "../icons/emojis/emoji-3.png";
import emoji4 from "../icons/emojis/emoji-4.png";
import emoji5 from "../icons/emojis/emoji-5.png";

class Feed extends Component {
  render() {
    return (
      <div className="feed-back">
        <div className="wrapper">
          <input type="radio" name="rate" id="star-1" />
          <input type="radio" name="rate" id="star-2" />
          <input type="radio" name="rate" id="star-3" />
          <input type="radio" name="rate" id="star-4" />
          <input type="radio" name="rate" id="star-5" />
          <div className="content">
            <div
              className="close-feed"
              onClick={() => {
                document.getElementById("show-feed").style.display = "none";
              }}
            >
              <button />
            </div>
            <div className="outer">
              <div className="emojis">
                <li className="slideImg">
                  <img src={emoji1} alt="" />
                </li>
                <li>
                  <img src={emoji2} alt="" />
                </li>
                <li>
                  <img src={emoji3} alt="" />
                </li>
                <li>
                  <img src={emoji4} alt="" />
                </li>
                <li>
                  <img src={emoji5} alt="" />
                </li>
              </div>
            </div>
            <div className="stars">
              <label htmlFor="star-1" className="star-1 fas fa-star" />
              <label htmlFor="star-2" className="star-2 fas fa-star" />
              <label htmlFor="star-3" className="star-3 fas fa-star" />
              <label htmlFor="star-4" className="star-4 fas fa-star" />
              <label htmlFor="star-5" className="star-5 fas fa-star" />
            </div>
          </div>
          <div className="footer">
            <span className="text" />
            <span className="numb" />
          </div>
        </div>
      </div>
    );
  }
}

export default Feed;
