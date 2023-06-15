import React,{ Component } from "react";
import Shelfs from'./Shelf'
import * as BooksAPI from '../BooksAPI'
import { Link } from "react-router-dom";
import Foot from "./Footer";

class Library extends Component {
    state ={
        books:[],
        currentRead:[],
        wantRead:[],
        read:[],
        viewBooks:(books)=>{
            const currentRead= books.filter(book => book.shelf === "currentlyReading")
            const wantRead= books.filter(book => book.shelf === "wantToRead")
            const read= books.filter(book => book.shelf === "read")
            this.setState(()=>({
                books:books,
                currentRead:currentRead,
                wantRead:wantRead,
                read:read
            }))},
        moveBook:()=>{
                this.componentDidMount()           
            }
        }

    async componentDidMount(){
        try{
        const allBooks = await BooksAPI.getAll()
        this.state.viewBooks(allBooks)
        }
        catch(error){
            console.log(error)}
        }
        
    render(){
    return(
        <div className="list-books">
        <div className="list-books-title">
          <h1>Library</h1>
        </div>
        <Shelfs title='Currently reading' books={this.state.currentRead} moveBook={this.state.moveBook} />
        <Shelfs title='WhishList' books={this.state.wantRead} moveBook={this.state.moveBook} />
        <Shelfs title='Finished reading' books={this.state.read} moveBook={this.state.moveBook} />
        <div className="list-books-content">
        </div>
        <div className="go-home">
          <Link className="go-home-link"  to='/'>Home</Link>
        </div>
        <div className="open-search">
          <Link className="open-search-link" to='/search'>Add a book</Link>
        </div>
        <Foot />
        </div>
          )}
}
export default Library