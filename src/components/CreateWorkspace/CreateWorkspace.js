import React, { Component } from "react";
import { connect } from "react-redux";
import { createWorkspace } from "../../redux/store/userActions";

class CreateWorkspace extends Component {
  state = {
    facebookUrl: "",
    twitterUrl: "",
    linkedinUrl: "",
    githubUrl: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createWorkspace(this.state);
  };
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Project</h5>
          <div className="input-field">
            <input type="text" id="userId" onChange={this.handleChange} />
            <label htmlFor="userId">Public profile</label>
          </div>
          <div className="input-field">
            <textarea
              id="facebookUrl"
              className="materialize-textarea"
              onChange={this.handleChange}
            ></textarea>
            <label htmlFor="facebookUrl">Facebook</label>
          </div>
          <div className="input-field">
            <textarea
              id="conlinkedinUrltent"
              className="materialize-textarea"
              onChange={this.handleChange}
            ></textarea>
            <label htmlFor="linkedinUrl">LinkedIn</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createWorkspace: (user) => dispatch(createWorkspace(user)),
  };
};

export default connect(null, mapDispatchToProps)(CreateWorkspace);
