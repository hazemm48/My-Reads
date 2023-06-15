import React, { Component } from "react";
import { Link } from "react-router-dom";
import Grid from "./Grid";
import * as BooksAPI from "../BooksAPI";
import logo from "../icons/book.png";
import Feed from "./Feedback";
import Foot from "./Footer";

class Main extends Component {
  state = {
    suggestBook: [
      "nggnmAEACAAJ",
      "evuwdDLfAyYC",
      "l8m8DQAAQBAJ",
      "oBK6mi7xBlIC",
      "5c_C6kcnApoC",
      "LzGXOaFWxCwC",
      "ZYOajAOrf6cC",
    ],
    newBooks: [
      "xlp6NE2NWecC",
      "7BFaAAAAMAAJ",
      "quYMbC9SfncC",
      "4ymVpRiXsMIC",
      "755FKBCSDL0C",
      "Pk_fZmoa1soC",
      "mFqvV7e4nUwC",
    ],
    allNewBooks: [],
    allSugBooks: [],
  };
  async componentDidMount() {
    try {
      const sugBooks = this.state.suggestBook;
      const newBooks = this.state.newBooks;

      for (let i = 0; i < sugBooks.length; i++) {
        const book = await BooksAPI.get(sugBooks[i]);
        this.setState((prevState) => ({
          allSugBooks: [...this.state.allSugBooks, book],
        }));
      }

      for (let i = 0; i < newBooks.length; i++) {
        const book = await BooksAPI.get(newBooks[i]);
        this.setState((prevState) => ({
          allNewBooks: [...this.state.allNewBooks, book],
        }));
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="main">
        <div id="header">
          <nav>
            <div className="head-title">
              <img id="himg" src={logo} width="50px" height="50px" alt="" />
              <span>Online Bookstore</span>
              <div>
                <div>
                  <Link to="/search">
                    <form className="nav-search">
                      <input
                        type="search"
                        name="keywords"
                        id="keywords"
                        placeholder="Search"
                      />
                      <img
                        src="https://rails-assets-us.bookshop.org/assets/ic_search-839c204e62aedfbf9dff768f4965fa9f67c5807cac1c0defe6d5d3adfff53298.svg"
                        alt=""
                      />
                    </form>
                  </Link>
                </div>
                <Link to="/Library" className="library">
                  Library
                </Link>
              </div>
            </div>
          </nav>
        </div>

        <div className="sugg-new">
          <p>Suggestions</p>
          <div className="con">
            <ol className="books-grid">
              {this.state.allSugBooks &&
                this.state.allSugBooks.map((book) => (
                  <Grid book={book} key={book.id} />
                ))}
            </ol>
          </div>
        </div>

        <div className="sugg-new">
          <p>New Books</p>
          <div className="con">
            <ol className="books-grid">
              {this.state.allNewBooks &&
                this.state.allNewBooks.map((book) => (
                  <Grid book={book} key={book.id} />
                ))}
            </ol>
          </div>
        </div>

        <div>
          <button
            id="feed"
            className="feedpos"
            onClick={() => {
              document.getElementById("show-feed").style.display = "block";
            }}
          >
            feedback
          </button>
        </div>

        <div id="show-feed">
          <Feed />
        </div>

        <Foot />
      </div>
    );
  }
}
export default Main;
