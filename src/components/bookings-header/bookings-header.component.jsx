import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "./bookings-header.styles.css";

const BookingsHeader = () => {
  let { path, url } = useRouteMatch();
  // console.log(path, url);
  return (
    <div className="bookings-header">
      {/* <ul>
        <li>
          <Link to={props.history.push(`${url}/newbookings`)}>
            New Bookings
          </Link>
        </li> */}
      {/* /<Link to={`${url}/pastbookings`}>Past Bookings</Link> */}
      {/* </ul> */}
    </div>
  );
};

export default BookingsHeader;
