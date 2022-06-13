import React, { Component } from "react";

class Users extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.fetchUsers()}>Load Users</button>
        <div>
          {" "}
          {this.props.users.map((user) => {
            return <div key={user.id}>{user.name}</div>;
          })}{" "}
        </div>
      </div>
    );
  }
}

export default Users;
