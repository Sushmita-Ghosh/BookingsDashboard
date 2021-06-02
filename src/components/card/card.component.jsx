import React from "react";
import Rating from "@material-ui/lab/Rating";

import CardImage from "../../images/cardimg.jpg";

import data from "../data/data";

import "./card.styles.css";
import { purple } from "@material-ui/core/colors";

const Card = ({ data }) => {
  // the colorStatus object
  const colorStatus = {
    Unavailable: "#DC3545",
    "Check Status": "#D63384",
    "Available Book Now": "green",
    "Checking Status": "#0D6EFD",
  };

  console.log(data);
  return (
    <div className="card">
      <img src={CardImage} />
      <div className="content">
        <div className="name">{data.name}</div>
        <div className="arrival-departure">
          <h6 className="depart">{data.departure}</h6>
          <h6 className="hours">{data.duration}</h6>
          <h6 className="arrival">{data.arrival}</h6>
        </div>
        <div className="availability">
          <div
            className="status"
            // color-coded logic
            style={{
              backgroundColor: Object.keys(colorStatus).includes(data.status)
                ? colorStatus[data.status]
                : purple,
            }}
          >
            {data.status}
          </div>
        </div>
        <div className="amount-rating">
          <div className="amount">{data.cost}</div>

          <div className="rating">
            <h5>{data.rating}</h5>
            <Rating
              style={{ color: "#520dc2", fontSize: "0.9rem" }}
              name="read-only"
              value={data.rating}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

{
  /* <div className="balloon"></div> */
}
