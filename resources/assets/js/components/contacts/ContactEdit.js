import _ from "lodash";
import React from "react";
import { connect } from "react-redux";

import ContactForm from "./ContactForm";
import { fetchContact, editContact, deleteContact } from "../../actions";
import history from "../../history";

class ContactEdit extends React.Component {
    componentDidMount() {
        this.props.fetchContact(this.props.match.params.id);
    }
    onSubmit = formValues => {
        this.props.editContact(this.props.match.params.id, formValues);
    };
    onCancelClcik = event => {
        event.preventDefault();
        if (!this.props.contact) {
            history.push("/");
        } else {
            this.props.deleteContact(this.props.match.params.id);
        }
    };
    render() {
        let initialValues = [];
        if (this.props.contact) {
            initialValues = _.pick(
                this.props.contact,
                "title",
                "name",
                "phone",
                "avatar"
            );
        }
        return (
            <div>
                <ContactForm
                    initialValues={initialValues}
                    onSubmit={this.onSubmit}
                    onCancelClick={this.onCancelClcik}
                    disabled={this.props.disabled}
                />
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        contact: state.contacts[ownProps.match.params.id],
        disabled: state.contacts[ownProps.match.params.id] ? false : true
    };
};
export default connect(mapStateToProps, {
    fetchContact,
    editContact,
    deleteContact
})(ContactEdit);
