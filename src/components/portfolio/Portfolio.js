import React, { Component } from "react";
import axios from "axios";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tagline: "",
      age: "",
      yearsAsGuide: "",
      title: "",
      username: "",
      profilePic: "",
      coverPic: "",
      name: "",
      token: localStorage.getItem("token")
    };
  }
  componentDidMount() {
    const { token } = this.state;
    axios
      .get("https://lambda-guidr.herokuapp.com/api/user", {
        headers: { authorization: token }
      })
      .then(response => {
        this.setState({
          username: response.data.username
        });
        console.log(this.state.username);
      })
      .catch(err => {
        console.log(err);
      });
  }
  changeHandler = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  portfolioUpdate = e => {
    e.preventDefault();
    console.log(this.state.username);

    const url = "https://lambda-guidr.herokuapp.com/api/auth/update";
    const {
      token,
      tagline,
      age,
      yearsAsGuide,
      title,
      username,
      coverPic,
      profilePic,
      name
    } = this.state;
    axios
      .put(
        url,
        {
          username,
          tagline,
          age,
          yearsAsGuide,
          title,
          name,
          coverPic,
          profilePic
        },
        { headers: { authorization: token } }
      )

      .then(response => {
        localStorage.setItem("token", response.data.token);
        console.log(response);
        this.props.history.push("/home");
      })
      .catch(err => {
        console.log(username);
      });
  };
  render() {
    return (
      <div style={styles}>
        <form onSubmit={this.portfolioUpdate} className="details-form">
          <input
            className="input"
            type="text"
            value={this.state.title}
            onChange={this.changeHandler}
            placeholder="Title"
            name="title"
          />
          <br />
          <input
            className="input"
            type="number"
            value={this.state.age}
            onChange={this.changeHandler}
            placeholder="Age"
            name="age"
          />
          <br />
          <input
            className="input"
            type="number"
            value={this.state.yearsAsGuide}
            onChange={this.changeHandler}
            placeholder="Years Experience"
            name="yearsAsGuide"
          />
          <br />
          <input
            className="input"
            type="text"
            value={this.state.tagline}
            onChange={this.changeHandler}
            placeholder="Tagline"
            name="tagline"
          />
          <br />
          <input
            className="input"
            type="text"
            value={this.state.profilePic}
            onChange={this.changeHandler}
            placeholder="Profile Pic"
            name="profilePic"
          />
          <input
            className="input"
            type="text"
            value={this.state.coverPic}
            onChange={this.changeHandler}
            placeholder="Cover Picture"
            name="coverPic"
          />

          <br />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default Portfolio;
const styles = {
  backgroundColor: "black",
  padding: "200px"
};
