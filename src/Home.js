import React, { Component } from "react";
import { Link } from "@reach/router";

class Home extends Component {
  render() {
    const { user } = this.props;

    const biggerLead = {
      fontSize: 1.4 + "em",
      fontWeight: 200,
    };

    return (
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-10 col-md-10 col-lg-8 col-xl-7">
            <div
              className="display-4 text-primary mt-3 mb-2"
              style={{
                fontSize: 2.8 + "em",
              }}
            >
              Meeting Log
            </div>
            <p className="lead" style={biggerLead}>
              Using this app you can create meetings where people can check in
              and pick random user (e.g. to award giveways). The admin only can
              delete any attendee, the simple users can only see the list of
              attendees. The project includes routing which is achieved with
              reach router and connection to a database. It's a nice boilerplate
              of using <a href="https://reactjs.org/">React</a> with{" "}
              <a href="https://firebase.google.com">Firebase</a>.
            </p>

            {user == null && (
              <span>
                <Link to="/register" className="btn btn-outline-primary mr-2">
                  Register
                </Link>
                <Link to="/login" className="btn btn-outline-primary mr-2">
                  Log In
                </Link>
              </span>
            )}
            {user && (
              <Link to="/meetings" className="btn btn-primary">
                Meetings
              </Link>
            )}
          </div>{" "}
          {/* columns */}
        </div>
      </div>
    );
  }
}

export default Home;
