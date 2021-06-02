import React from "react";
import {
  Route,
  Link,
  useRouteMatch,
  useParams,
  Switch,
} from "react-router-dom";
// import BookingsHeader from "../../components/bookings-header/bookings-header.component";
import NewBookings from "../../pages/new-bookings/new-bookings.component";
import PastBookings from "../../pages/past-bookings/past-bookings.components";
import "./bookings.styles.css";

function Topic() {
  let { topicId } = useParams();

  return (
    <div>{topicId === "newbookings" ? <NewBookings /> : <PastBookings />}</div>
  );
}

const Bookings = (props) => {
  let { path, url } = useRouteMatch();
  return (
    <div className="bookings-container">
      <ul>
        <li>
          <Link className="link-b" to={`${url}/newbookings`}>
            New Bookings
          </Link>
        </li>
        <li>
          <Link className="link-b" to={`${url}/pastbookings`}>
            Past Bookings
          </Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path} />
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
};

export default Bookings;
