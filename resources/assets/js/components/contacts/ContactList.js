import React from "react";
import { connect } from "react-redux";

import { fetchContacts } from "../../actions";
import SearchBar from "../SearchBar";
import ContactItem from "./ContactItem";
import Buttons from "../Buttons";

class ContactList extends React.Component {
    componentDidMount() {
        this.props.fetchContacts();
    }
    renderContactItems() {
        if (!this.props.contacts) {
            return <div>Loading...</div>;
        }
        return this.props.contacts.map(contact => {
            return <ContactItem contact={contact} key={contact.id} />;
        });
    }
    render() {
        return (
            <div>
                <SearchBar />
                <div className="contacts-container">
                    {this.renderContactItems()}
                </div>
                <Buttons />
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { text } = state.search;
    const filteredValues = Object.values(state.contacts).filter(contact => {
        return (
            contact.name.toLowerCase().includes(text) ||
            contact.phone.includes(text)
        );
    });
    return {
        contacts: filteredValues
    };
};

export default connect(mapStateToProps, { fetchContacts })(ContactList);
