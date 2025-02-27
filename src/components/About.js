import UserClass from "./UserClass";
import React from "react";
import userContext from "../utils/userContext";

class About extends React.Component {
  constructor(props) {
    super(props);

    //console.log("Parent constructor");
  }

  componentDidMount() {
    //console.log("Parent component did mount");
  }

  render() {
    //console.log("Parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React Web series.</h2>
        <br></br>
        <div>
          LoggedIn User
          <userContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </userContext.Consumer>
        </div>
        <UserClass name={"Anshika Goel (class)"} location={"Noida class"} />
      </div>
    );
  }
}

export default About;
