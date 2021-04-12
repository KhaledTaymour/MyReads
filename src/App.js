import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";

//Components
import SearchPage from "./components/searchPage/SearchPage";
import BookList from "./components/bookList/BookList";

//API
import { getAll } from "./BooksAPI";

class BooksApp extends React.Component {
  //#region state
  state = {
    book_records: [],
  };
  //#endregion

  //#region helper functions
  handleBookRecords = (record, update = false) => {
    if (update) {
      this.setState((state) => ({
        book_records: [
          ...state.book_records.filter((book) => book.id !== record.id),
          record,
        ],
      }));
    } else {
      this.setState(() => ({ book_records: record }));
    }
  };
  //#endregion

  //#region Lifecycle Methods
  componentDidMount() {
    getAll().then((results) => {
      console.log({ results });
      this.handleBookRecords(results);
    });
  }
  //#endregion

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            {/* Switch tag used in order to navigate to ONLY ONE route of the wrapped routes and not compose more than one */}
            <Route exact path="/" component={BookList} />
            <Route path="/search" component={SearchPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default BooksApp;
