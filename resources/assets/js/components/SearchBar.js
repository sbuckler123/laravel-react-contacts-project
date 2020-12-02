import React from "react";
import { connect } from "react-redux";

import { filterList } from "../actions";

class SearchBar extends React.Component {
    filterByInput = (e) => {
        const value = e.target.value;
        this.props.filterList(value);
    };
    render() {
        return (
            <div className="search-input">
                <input
                    type="text"
                    placeholder="search in contacts..."
                    value={this.props.text}
                    onChange={e => this.filterByInput(e)}
                />
                <div className="search-icon">
                    <i className="fa fa-search" aria-hidden="true"></i>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        text: state.search.text
    };
};
export default connect(mapStateToProps, { filterList })(SearchBar);
