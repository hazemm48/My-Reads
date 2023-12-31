import React , {Component} from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from '../BooksAPI'
import Grid from "./Grid";

class Search extends Component{
state ={
    result:[],
    books:[]
    }

async componentDidMount(){
    try{
        const allBooks = await BooksAPI.getAll()
        this.setState({books:allBooks})
    }catch(error){
        console.log(error)}
    }

handleChange = async (e)=> {
    try{
        const string = e.target.value
        if (string.trim()){
            const search = await BooksAPI.search(string)
            if(search!==''){
                this.setState(()=>({
                result:search
            }))  
            }else{
                this.setState({result:[]})}      
        }else{
            this.setState({result:[]})
        }
    }catch (error){
        console.log(error);
    }
}
    
render(){
    return(
        <div className="search-books">
            <div className="search-books-bar">             
              <Link className="close-search2" to='/' >Close</Link>             
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={this.handleChange} autoFocus/>
              </div>
              <Link className="close-search1" to='/Library' >Close</Link>
            </div>
            <div className="search-books-results">
              <ol className="books-grid" >
                  {this.state.result.length >0 && this.state.result.map(book =>{const foundshelf = this.state.books.find(search => search.id === book.id); if (foundshelf){
                   book.shelf = foundshelf.shelf;
                  }else{
                   book.shelf = 'none'
                  };  return (<Grid book={book} moveBook={this.props.moveBook} key={book.id}/>);})}
              </ol>
            </div>
          </div>
    )
}
}

export default Search