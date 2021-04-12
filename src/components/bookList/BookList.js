import React from "react";
import BookListContent from "../bookListContent/BookListContent";
import { Link } from "react-router-dom";

const BookList = () => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <BookListContent />
      <div className="open-search">
        <Link to="/search">
          <button>Add a book</button>
        </Link>
      </div>
    </div>
  );
};

export default BookList;
