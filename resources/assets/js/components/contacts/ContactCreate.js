import _ from "lodash";
import React from "react";
import { connect } from "react-redux";

import ContactForm from "./ContactForm";
import { createContact, fetchRandomAvatar } from "../../actions";
import history from "../../history";

class ContactCreate extends React.Component {
    componentDidMount() {
        this.props.fetchRandomAvatar();
    }
    onSubmit = formValues => {
        this.props.createContact(formValues);
    };

    onCancelClcik = event => {
        event.preventDefault();
        history.push("/");
    };
    render() {
        return (
            <div>
                <ContactForm
                    onSubmit={this.onSubmit}
                    onCancelClick={this.onCancelClcik}
                />
            </div>
        );
    }
}

export default connect(null, { createContact, fetchRandomAvatar })(
    ContactCreate
);
