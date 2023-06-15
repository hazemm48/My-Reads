import React, { Component } from "react";
import "../footStyle.css";
import { Link } from "react-router-dom";

class Foot extends Component {
  render() {
    return (
      <footer>
        <div className="main-content">
          <div className="left box">
            <h2>About us</h2>
            <div className="content">
              <p>
                E store is your best choise to broswe books from every where and
                add it to your libarary to read it{" "}
              </p>
              <div className="social">
                <a href="https://facebook.com/coding.np">
                  <span className="fab fa-facebook-f" />
                </a>
                <a href="https://instagram.com/coding.np">
                  <span className="fab fa-twitter" />
                </a>
                <a href="https://instagram.com/coding.np">
                  <span className="fab fa-instagram" />
                </a>
                <a href="https://youtube.com/c/codingnepal">
                  <span className="fab fa-youtube" />
                </a>
              </div>
            </div>
          </div>

          <div className="center box">
            <h2>Address</h2>
            <div className="content">
              <div className="place">
                <span className="fas fa-map-marker-alt" />
                <span className="text">Alexandria, Egypt</span>
              </div>
              <div className="phone">
                <span className="fas fa-phone-alt" />
                <span className="text">01284659308</span>
              </div>
              <div className="email">
                <span className="fas fa-envelope" />
                <span className="text">bookStore@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="right box">
            <h2>Contact us</h2>
            <div className="content">
              <form action="#">
                <div className="email">
                  <div className="text">Email *</div>
                  <input type="email" required />
                </div>
                <div className="msg">
                  <div className="text">Message *</div>
                  <textarea rows="2" cols="25" required />
                </div>
                <div className="btn">
                  <button type="submit">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="bottom">
          <center>
            <span className="credit">
              Created By{" "}
              <a href="https://youtube.com/c/codingnepal">Bookstore</a> |{" "}
            </span>
            <span className="far fa-copyright" />
            <span> 2021 All rights reserved.</span>
          </center>
        </div>
      </footer>
    );
  }
}
export default Foot;
