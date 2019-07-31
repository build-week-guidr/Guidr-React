import React, { Component } from "react";
import './portfolio.css'
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
      token: localStorage.getItem("token"),
      profilePicUrl:""
    };
  }
  componentDidMount() {
    const { token } = this.state;
    axios
      .get("https://lambda-guidr.herokuapp.com/api/user", {
        headers: { authorization: token }
      })
      .then(response => {
        const {username, tagline, age, yearsAsGuide, title, name, coverPic,profilePic}  = response.data    
        
        this.setState({
          username:username,
          tagline: tagline,
          age:age,
          yearsAsGuide: yearsAsGuide,
          title:title,
          name:name,
          coverPic:coverPic,
          profilePic:profilePic,
        })

      })
      .catch(err => {
        console.log(err)
      });
  
  }
  omponentWillUpdate(nextProps){
    if(this.state.profilePic !== nextProps.profilePic)
    this.setState({
     profilePic:this.props.userInfo.profilePic
    })
   }
  changeHandler = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  submitPortfolio = e => {
    e.preventDefault();  
    const url = "https://lambda-guidr.herokuapp.com/api/auth/update";
    const {
      token,
      tagline,
      age,
      yearsAsGuide,
      title,
      username,
      coverPic,
      profilePicUrl,
      name
    } = this.state;
    const profilePic = profilePicUrl
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
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="portfolio-page">
       
        <div className="form-container">
         
          <form onSubmit={this.submitPortfolio} className="form">
          <div >
            { this.state.profilePic
            ? <img className="profile-pic" src={this.state.profilePic} alt="profile"/>
            : <i className="fa fa-user fa-5x profile-pic-none"> </i>}
          </div>
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
              value={this.state.profilePicUrl}
              onChange={this.changeHandler}
              placeholder="Profile Pic"
              name="profilePicUrl"
            />
            <br />
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
      </div>
    );
  }
}

export default Portfolio;

