import React, { Component } from "react";
import { YearPicker, MonthPicker, DayPicker } from "react-dropdown-date";
import UserService from "../services";

class CreateUserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      mobileNumber: "",
      dob: "",
      gender: "",
      email: "",
      year: "",
      month: "",
      day: "",
    };
    this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changeMobileNumberHandler = this.changeMobileNumberHandler.bind(this);
    this.changeGenderHandler = this.changeGenderHandler.bind(this);
    this.saveUser = this.saveUser.bind(this);
  }

  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };

  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };

  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };

  changeMobileNumberHandler = (event) => {
    this.setState({ mobileNumber: event.target.value });
  };

  changeUsernameHandler = (event) => {
    this.setState({ username: event.target.value });
  };

  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  changeGenderHandler = (event) => {
    this.setState({ gender: event.target.value });
    console.log(this.state.gender);
  };

  saveUser = (event) => {
    event.preventDefault();
    let month = this.state.month;
    console.log("Month " + month);
    if (month.length < 2) {
      month = "0" + month;
    }

    let day = this.state.day;
    if (day.length < 2) {
      day = "0" + day;
    }

    let newUser = {
      username: this.state.username,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      fullName: this.state.firstName + " " + this.state.lastName,
      mobileNumber: this.state.mobileNumber,
      dateOfBirth: month + "-" + day + "-" + this.state.year,
      gender: this.state.gender,
      email: this.state.email,
    };

    console.log("New User => " + JSON.stringify(newUser));

    UserService.CreateNewUser(newUser).then((res) => {});
  };

  clearField = () => {
    this.setState({
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      mobileNumber: "",
      email: "",
      year: "",
      month: "",
      day: "",
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Add User</h3>
              <form>
                <div className="form-group">
                  <label>Username:</label>
                  <input
                    placeholder="username"
                    name="username"
                    className="form-control"
                    value={this.state.username}
                    onChange={this.changeUsernameHandler}
                  />
                </div>

                <div className="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="form-control"
                    value={this.state.password}
                    onChange={this.changePasswordHandler}
                  />
                </div>

                <div className="form-group">
                  <label>First Name:</label>
                  <input
                    placeholder="First Name"
                    name="firstName"
                    className="form-control"
                    value={this.state.firstName}
                    onChange={this.changeFirstNameHandler}
                  />
                </div>

                <div className="form-group">
                  <label>Last Name:</label>
                  <input
                    placeholder="Last Name"
                    name="lastName"
                    className="form-control"
                    value={this.state.lastName}
                    onChange={this.changeLastNameHandler}
                  />
                </div>

                <div className="form-group">
                  <label>Mobile Number:</label>
                  <input
                    placeholder="Mobile Number"
                    name="mobileNumber"
                    className="form-control"
                    value={this.state.mobileNumber}
                    onChange={this.changeMobileNumberHandler}
                  />
                </div>

                <div className="form-group">
                  <label>Date of Birth</label> <br />
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
                    onChange={(month) => {
                      this.setState({ month });
                      console.log(month);
                    }}
                    id="month"
                    name="month"
                    classes={"classes"}
                    optionClasses={"option classes"}
                  />{" "}
                  &nbsp;
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
                    onChange={(day) => {
                      this.setState({ day });
                      console.log(day);
                    }}
                    id="day"
                    name="day"
                    classes={"classes"}
                    optionClasses={"option classes"}
                  />{" "}
                  &nbsp;
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
                    onChange={(year) => {
                      this.setState({ year });
                      console.log(year);
                    }}
                    id="year"
                    name="year"
                    classes={"classes"}
                    optionClasses={"option classes"}
                  />
                </div>

                <div className="form-group" onChange={this.changeGenderHandler}>
                  <input type="radio" value="Male" name="gender" /> Male &nbsp;
                  <input type="radio" value="Female" name="gender" /> Female
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    placeholder="Email"
                    name="email"
                    className="form-control"
                    value={this.state.email}
                    onChange={this.changeEmailHandler}
                  />
                </div>

                <button className="btn btn-success" onClick={this.saveUser}>
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  onClick={this.clearField}
                  style={{ marginLeft: "10px" }}
                >
                  Clear
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CreateUserComponent;
