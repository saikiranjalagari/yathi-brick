import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export default class Form extends React.Component {
  state = {
    username: "",
    usernameError: "",
    order:"",
    orderError:"",
    phonenumber:"",
    phonenumberError:"",
    count:1,
  };

  change = e => {
    // this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
    let isError = false;
    const errors = {
      usernameError: "",
      orderError:"",
      phonenumberError:"",
    };

    if (this.state.username.length < 5) {
      isError = true;
      errors.usernameError = "Username needs to be atleast 5 characters long";
    }


    if (this.state.phonenumberError.length < 10) {
      isError = true;
      errors.phonenumberError = "Phone Number needs to be atleast 10 digits";
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  onSubmit = e => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      this.props.onSubmit(this.state);
      // clear form
      this.setState({
        username: "",
        usernameError: "",
        orderError:"",
        order:"",
        phonenumberError:"",
        phonenumber:"",
        count:this.state.count,
      });
    }
  };

  buttonCount = () => {
    this.setState({
        count: this.state.count + 1
    })
}

  render() {
    return (
      <form>
       
        <br />
        <TextField
          name="username"
          hintText="Username"
          floatingLabelText="Username"
          value={this.state.username}
          onChange={e => this.change(e)}
          errorText={this.state.usernameError}
          floatingLabelFixed
        />
        <br />
    
        <TextField
          name="order"
          hintText="Order"
          floatingLabelText="Order"
          value={this.state.order}
          onChange={e => this.change(e)}
          errorText={this.state.orderError}
          type="number"
          floatingLabelFixed
        />
        <br />

        <TextField
          name="phonenumber"
          hintText="Phone Number"
          floatingLabelText="Phone Number"
          value={this.state.phonenumber}
          onChange={e => this.change(e)}
          errorText={this.state.phonenumberError}
          type="number"
          floatingLabelFixed
        />
        <br />
        <RaisedButton label="Submit" 
         onClick={(e) => {
          this.onSubmit(e);
          this.buttonCount();
      }}
        primary />
      </form>
    );
  }
}
