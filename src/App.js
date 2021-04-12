import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

//Components
import SearchPage from "./components/searchPage/SearchPage";
import BookList from "./components/bookList/BookList";

//API
import * as BooksAPI from "./BooksAPI";

//enums
import { SHELF } from "./constants/enums";

class BooksApp extends React.Component {
  //#region state
  state = {
    book_records: [],
    book_records_currently: [],
    book_records_want: [],
    book_records_read: [],
  };
  //#endregion

  //#region helper functions
  setBookRecords = (records) => {
    const currently = [];
    const want = [];
    const read = [];

    for (const rec of records) {
      switch (rec.shelf) {
        case SHELF.CURRENTLY:
          currently.push(rec);
          break;
        case SHELF.WANT:
          want.push(rec);
          break;
        case SHELF.READ:
          read.push(rec);
          break;
        default:
          break;
      }
    }

    this.setState(() => ({ book_records_currently: currently }));
    this.setState(() => ({ book_records_want: want }));
    this.setState(() => ({ book_records_read: read }));
  };

  handleShelfUpdate = async (book, newShelf) => {
    book.shelf = newShelf;
    const response = await BooksAPI.update(book, newShelf);
    if (response) {
      const results = await BooksAPI.getAll();
      if (results) {
        this.setBookRecords(results);
      }
    }
  };

  filterShelfBooks = (shelf) => {
    return this.state.book_records.filter((book) => book.shelf === shelf);
  };
  //#endregion

  //#region Lifecycle Methods
  componentDidMount() {
    BooksAPI.getAll().then((results) => {
      console.log({ results });
      this.setBookRecords(results);
    });
  }
  //#endregion

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            {/* Switch tag used in order to navigate to ONLY ONE route of the wrapped routes and not compose more than one */}
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <BookList
                    // filterShelfBooks={this.filterShelfBooks}
                    handleShelfUpdate={this.handleShelfUpdate}
                    book_records_currently={this.state.book_records_currently}
                    book_records_want={this.state.book_records_want}
                    book_records_read={this.state.book_records_read}
                  />
                );
              }}
            />
            <Route
              path="/search"
              render={() => {
                return (
                  <SearchPage
                  // books={this.state.book_records}
                  // handleShelfUpdate={this.handleShelfUpdate}
                  />
                );
              }}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default BooksApp;
