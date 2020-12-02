import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { deleteContact } from "../../actions";

class ContactItem extends React.Component {
    onDeleteClick = () => {
        this.props.deleteContact(this.props.contact.id);
    };

    render() {
        const { contact } = this.props;
        return (
            <div className="contact">
                <div className="contact-avatar">
                    <img src={contact.avatar} />
                </div>
                <div className="contact-details">
                    <Link
                        to={`/contacts/${contact.id}`}
                        className="contact-name"
                    >
                        {contact.name}
                    </Link>
                    <div className="contact-phone">{contact.phone}</div>
                </div>
                <div className="contact-buttons">
                    <button>
                        <i className="fa fa-phone" aria-hidden="true"></i>
                    </button>
                </div>
                <div
                    className="contact-button-close"
                    onClick={this.onDeleteClick}
                >
                    <i className="fa fa-times" aria-hidden="true"></i>
                </div>
            </div>
        );
    }
}

export default connect(null, { deleteContact })(ContactItem);
