import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
        avatar_url: "http://dummy-photo.com",
      },
    };

    //console.log(this.props.name + "Child constructor");
  }

  async componentDidMount() {
    //console.log(this.props.name + "Child component did mount");
    const data = await fetch("https://api.github.com/users/Anshikagoel65");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log("component did update");
  }
  componentWillUnmount() {
    console.log("component will unmounting");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    //console.log(this.props.name + "Child render");
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h3>Name: {name}</h3>
        <h4>Location: {location}</h4>
        <h4>Contact: @anshikagoel65</h4>
      </div>
    );
  }
}

export default UserClass;

/****
 * Mouting
 * 
 * Constructor(dummy)
 * render(dummy)
 *   <HTML dummy>
 * component did mount
 *   API call
 *   this.setState
 * 
 * Update
 *   render(new api data)
 *   <HTML new api data>
 * component did update
 * 
 * unmounting - when we go to different page
 *  component will unmount
 * 
 */
