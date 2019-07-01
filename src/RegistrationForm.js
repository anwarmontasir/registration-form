import React, {Component} from 'react';

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: {
                value: ''
            }, 
            password: {
                value: ''
            },
            repeatPassword: {
                value: ''
            }
        }
    }
    updateName(name) {
        this.setState({name: {value: name}});
    }
    updatePassword(password) {
        this.setState({password: {value: password}});
    }
    updateRepeatPassword(repeatPassword) {
        this.setState({repeatPassword: {value: repeatPassword}});
    }
    handleSubmit(e) {
        e.preventDefault();
        const {name, password, repeatPassword} = this.state;
        console.log('name', name.value);
        console.log('password', password.value);
        console.log('repeatPassword', repeatPassword.value);
    }
    validateName() {
        const name = this.state.name.value.trim();
        if (name.length === 0) {
            return 'name is required';
        } else if (name.length < 3) {
            return 'name must be at least 3 characters long'
        }
    } 
    validatePassword() {
        const password = this.state.password.value.trim();
        if (password.length === 0) {
            return 'password is required';
        } else if (password.length < 6 || password.length > 72) {
            return 'password must be between 6 and 72 characters';
        } else if (!password.match(/[0-9]/)) {
            return 'password must contain at least one number'
        }
    }
    validateRepeatPassword() {
        const repeatPassword = this.state.repeatPassword.value.trim();
        const password = this.state.password.value.trim();
        if (repeatPassword !== password) {
            return 'passwords do not match';
        }
    }
    render() {
        return (
            <form className="registration" onSubmit={e => this.handleSubmit(e)}>
                <h2>Register</h2>
                <div className="registration__hint">* required field</div>
                <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input type="text" className="registration__control" name="name" id="name" onChange={e => this.updateName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password *</label>
                    <input type="password" className="registration__control" name="password" id="password" onChange={e => this.updatePassword(e.target.value)} />
                    <div className="registration__hint">6 to 72 characters, must include a number</div>
                </div>
                <div className="form-group">
                    <label htmlFor="repeatPassword">Repeat Password *</label>
                    <input type="password" className="registration__control" name="repeatPassword" id="repeatPassword" onChange={e => this.updateRepeatPassword(e.target.value)} />
                </div>

                <div className="registration__button__group">
                    <button type="reset" className="registration__button">
                        Cancel
                    </button>
                    <button type="submit" className="registration__button">
                        Save
                    </button>
                </div>
            </form>
        )
    }
}

export default RegistrationForm;