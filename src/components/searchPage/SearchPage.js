import React from "react";
import { Link } from "react-router-dom";
import Book from "../bookListContent/book/Book";
//enums
import { SHELF } from "../../constants/enums";

const SearchPage = ({ searchedBooks, handleSearch }) => {
  const handleChangingSearchText = (searchedText) => {
    handleSearch(searchedText);
  };

  if (searchedBooks) {
    console.log({ searchedBooks });
  }
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search">Close</button>
        </Link>

        <div className="search-books-input-wrapper">
          {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
          <input
            type="text"
            placeholder="Search by title or author"
            // value={}
            onChange={(e) => {
              const searchedText = e.target.value;
              handleChangingSearchText(searchedText);
            }}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchedBooks?.length > 0 &&
            searchedBooks.map((bk) => (
              <li key={`currently-${bk?.id}`}>
                <Book
                  shelf={SHELF.CURRENTLY}
                  // handleShelfUpdate={(newShelf) => {
                  //   handleShelfUpdate(bk, newShelf);
                  // }}
                  backgroundImage={bk?.imageLinks?.thumbnail}
                  title={bk?.title}
                  authors={bk?.authors?.join()}
                />
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
