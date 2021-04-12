import React from "react";

/**
 * Book Component
 * @param {Object} props
 * @param {String} shelf shelf
 * @param {Functiom} handleShelfUpdate handles the Change of Shelf for a book
 * @param {String} backgroundImage book thumbnail image
 * @param {String} title book title
 * @param {Array} authors Array of book authors
 */
function Book({ shelf, handleShelfUpdate, backgroundImage, title, authors }) {
  const handleSelectOnChange = (newShelf) => {
    handleShelfUpdate(newShelf);
  };

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
        <div className="book-shelf-changer">
          <select
            value={shelf ? shelf : "none"}
            onChange={(e) => {
              const newShelf = e.target.value;
              handleSelectOnChange(newShelf);
            }}
          >
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors}</div>
    </div>
  );
}

export default Book;
