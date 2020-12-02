import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchAndCreateRandomUser } from "../actions";

class Buttons extends React.Component {
    onRandomClick = () => {
        this.props.fetchAndCreateRandomUser();
    };
    render() {
        return (
            <div className="contact-new">
                <Link to="/contacts/new">
                    <i className="fa fa-user-plus" aria-hidden="true"></i>
                </Link>
                <button onClick={this.onRandomClick}>
                    <i
                        className="fa fa-random"
                        aria-hidden="true"
                        style={{ marginLeft: "15px" }}
                    ></i>
                </button>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        user: state.random.user
    };
};
export default connect(null, { fetchAndCreateRandomUser })(Buttons);
