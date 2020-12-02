import React from "react";
import { Field, reduxForm, change } from "redux-form";
import { connect } from "react-redux";

import { fetchRandomAvatar } from "../../actions";

class ContactForm extends React.Component {
    onAvatarClick = event => {
        event.preventDefault();
        this.props.fetchRandomAvatar();
    };

    componentDidUpdate(prevProps) {
        const { avatar, change } = this.props;
        if (avatar !== prevProps.avatar) {
            change("contactForm", "avatar", avatar);
        }
    }

    renderAvatar() {
        return (
            <div className="new-contact-avatar">
                <Field name="avatar" component={this.renderImg} />

                <button
                    disabled={this.props.disabled}
                    onClick={this.onAvatarClick}
                >
                    <i className="fa fa-refresh" aria-hidden="true"></i>
                </button>
            </div>
        );
    }
    renderImg = ({ input }) => {
        const src = input.value
            ? input.value
            : "http://www.gravatar.com/avatar/?d=mp";
        return (
            <div>
                <img {...input} src={src} />
            </div>
        );
    };
    renderInput = field => {
        const { input, label, meta } = field;
        const className = `form-control ${
            meta.error && meta.touched ? "is-invalid" : ""
        }`;
        return (
            <React.Fragment>
                <div className="new-contact-input">
                    <label>{label}</label>
                    <input
                        {...input}
                        autoComplete="off"
                        className={className}
                        disabled={field.disabled}
                    />
                </div>
                {this.renderError(meta)}
            </React.Fragment>
        );
    };
    renderInputs() {
        return (
            <div className="new-contact-inputs">
                <Field
                    name="name"
                    component={this.renderInput}
                    label="Name"
                    props={{
                        disabled: this.props.disabled
                    }}
                />
                <Field
                    name="phone"
                    component={this.renderInput}
                    label="Phone"
                    props={{
                        disabled: this.props.disabled
                    }}
                />
                <Field
                    name="title"
                    component={this.renderInput}
                    label="Title"
                    props={{
                        disabled: this.props.disabled
                    }}
                />
            </div>
        );
    }
    renderButtons() {
        return (
            <div className="new-contact-buttons">
                <button disabled={this.props.disabled} className="button-ok">
                    Save
                </button>
                <button className="button-cancel" onClick={this.onCancelClick}>
                    Cancel
                </button>
            </div>
        );
    }
    renderNotExitMsg = () => {
        return (
            <div className="alert alert-danger mt-2" role="alert">
                The selected contact does not exist!
            </div>
        );
    };
    renderError({ error, touched }) {
        if (error && touched) {
            return <div className="text-danger">{error}</div>;
        }
    }
    onCancelClick = event => {
        this.props.onCancelClick(event);
    };
    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    };
    render() {
        return (
            <form
                onSubmit={this.props.handleSubmit(this.onSubmit)}
                className="new-contact-container"
            >
                {this.props.disabled ? (
                    <div>{this.renderNotExitMsg()}</div>
                ) : (
                    ""
                )}
                {this.renderAvatar()}
                {this.renderInputs()}
                {this.renderButtons()}
            </form>
        );
    }
}

const validate = formValues => {
    const errors = {};
    if (!formValues.name) {
        errors.name = "You must enter name";
    } else if (formValues.name.length > 30) {
        errors.name = "Length name must be under 30 chars";
    }

    if (!formValues.phone) {
        errors.phone = "You must enter phone";
    } else if (formValues.phone.search(/^\d+(-\d+)*$/) < 0) {
        errors.phone = "Phone number can only contain numbers and dashes";
    }

    if (!formValues.title) {
        errors.title = "You must enter title";
    }

    return errors;
};
const mapStateToProps = state => {
    return {
        avatar: state.random.avatar
    };
};
ContactForm.defaultProps = {
    disabled: false
};
export default reduxForm({
    form: "contactForm",
    enableReinitialize: true,
    validate
})(connect(mapStateToProps, { fetchRandomAvatar, change })(ContactForm));
