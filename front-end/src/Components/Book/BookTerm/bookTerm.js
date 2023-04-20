import React from "react";
import "../../../index.css";
import { Link } from "react-router-dom";

const bookTerm = (props) => {
  return (
    <div className="card border-dark my-3 card-custom">
      <div className="card-header bg-dark text-white">
        <h5 className="card-title text-center book-title">
          {props.currentItem.name}
        </h5>
      </div>
      <div className="card-body">
        <p className="card-text">
          Category: <b>{props.currentItem.category}</b>
        </p>
        <p className="card-text fst-italic bd-highlight">
          Author:
          {" " +
            props.currentItem.author.name +
            " " +
            props.currentItem.author.surname}
        </p>
        <p className="card-text rounded-3 p-1 text-center">
          Available copies: <b>{props.currentItem.availableCopies}</b>
        </p>
        <div className="text-center">
          <Link
            className="btn btn-sm btn-outline-secondary mx-1 lg"
            to={`/books/edit/${props.currentItem.id}`}
            onClick={() => props.getCurrentBook(props.currentItem.id)}
          >
            Edit
          </Link>
          <a
            title={"Delete"}
            onClick={() => props.onDeleteCurrentBook(props.currentItem.id)}
            className="btn btn-sm btn-outline-danger mx-1"
          >
            Remove
          </a>
          <button
            title={"SetCopies"}
            onClick={() => props.changeCopiesValue(props.currentItem.id)}
            className="btn btn-sm btn-outline-success"
            disabled={props.currentItem.availableCopies === 0}
          >
            Mark as taken
          </button>
        </div>
      </div>
    </div>
  );
};

export default bookTerm;
