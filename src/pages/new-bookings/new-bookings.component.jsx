import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Input from "../../components/input/input.component";
//import ReactSlider from "react-slider";
import { Slider } from "@material-ui/core";
import Card from "../../components/card/card.component";
import data from "../../components/data/data";

import "./new-bookings.styles.css";

const NewBookings = () => {
  const [val, setVal] = useState([0, 1000]);
  const [startDate, setStartDate] = useState(new Date());
  const [clicked, isSetClicked] = useState(false); // to check if clicked or not
  const [filteredArray, isSetFilteredArray] = useState([]);

  // for the arrival and departure inputs
  const [inputs, setInputs] = useState([
    {
      id: 1,
      name: "Depature",
      value: "",
    },
    {
      id: 2,
      name: "Arrival",
      value: "",
    },
  ]);

  const updateRange = (event, data) => {
    setVal(data);
  };

  //const handleNameChange = (name) => {setName(name)};

  const handleNamesChanges = (ind, val) => {
    //copy the old array
    let newArr = [...inputs];

    //modify in old array
    newArr[ind].value = val;

    // set the new array
    setInputs(newArr);

    console.log(inputs);
  };

  const renderCard = () => {
    isSetClicked(true);

    const arrival = inputs.find((i) => i.id === 2).value;
    const departure = inputs.find((i) => i.id === 1).value;

    const mincost = val[0];
    const maxcost = val[1];

    let filtered = data.flights.filter(
      (flight) =>
        flight.arrival.toLowerCase() === arrival.toLowerCase() &&
        flight.departure.toLowerCase() === departure.toLowerCase() &&
        flight.cost > mincost &&
        flight.cost < maxcost
    );

    // set the filtered array with the filtered results
    isSetFilteredArray(filtered);
  };

  return (
    <div className="newbookings-container">
      <div className="header">
        {inputs.map((item, ind) => (
          <Input
            id={item.id}
            placeholder={item.name}
            handleNamesChanges={handleNamesChanges}
            index={ind}
          />
        ))}

        <DatePicker
          className="date"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />

        <div style={{ width: 300, marginLeft: 30 }}>
          <Slider
            value={val}
            onChange={updateRange}
            valueLabelDisplay="auto"
            min={1000}
            max={20000}
          />
        </div>

        <button className="button" onClick={renderCard}>
          {" "}
          Search{" "}
        </button>
      </div>

      <div className="card-container">
        {(clicked ? filteredArray : data.flights).map((item, ind) => (
          <Card data={item} key={ind} />
        ))}
      </div>
    </div>
  );
};

export default NewBookings;
