import React, { Component } from "react";
import { YearPicker, MonthPicker, DayPicker } from "react-dropdown-date";

class MyDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: "",
      month: "",
      day: "",
    };
  }

  yearHandler = (year) => {
    this.setState({
      year,
    });
    console.log(year);
  };

  render() {
    return (
      <div>
        <YearPicker
          defaultValue={"select year"}
          // default is 1900
          start={1900}
          // default is current year
          end={2050}
          // default is ASCENDING
          reverse
          // default is false
          required={true}
          // default is false
          disabled={false}
          // mandatory
          value={this.state.year}
          // mandatory
          /* onChange={(year) => {
                 this.setState({ year });
                 console.log(year);
             }}*/
          onChange={this.yearHandler}
          id="year"
          name="year"
          classes={"classes"}
          optionClasses={"option classes"}
        />
        <MonthPicker
          defaultValue={"select month"}
          // to get months as numbers
          numeric
          // default is full name
          short
          // default is Titlecase
          caps
          // mandatory if end={} is given in YearPicker
          endYearGiven
          // mandatory
          year={this.state.year}
          // default is false
          required={true}
          // default is false
          disabled={false}
          // mandatory
          value={this.state.month}
          // mandatory
          id="month"
          name="month"
          classes={"classes"}
          optionClasses={"option classes"}
        />
        <DayPicker
          defaultValue={"select day"}
          // mandatory
          year={this.state.year}
          // mandatory
          month={this.state.month}
          // mandatory if end={} is given in YearPicker
          endYearGiven
          // default is false
          required={true}
          // default is false
          disabled={false}
          // mandatory
          value={this.state.day}
          // mandatory
          id="day"
          name="day"
          classes={"classes"}
          optionClasses={"option classes"}
          onChange={this.pickerChangeHandler}
        />
      </div>
    );
  }
}

export default MyDatePicker;
