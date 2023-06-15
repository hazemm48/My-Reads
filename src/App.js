import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Search from "./components/Search";
import Library from "./components/Library";
import Main from "./components/Home";

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={Main} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/Library" component={Library} />
      </div>
    );
  }
}

export default BooksApp;
