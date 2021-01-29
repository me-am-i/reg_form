import React, { Component } from 'react';
import axios from 'axios';

const url = 'http://localhost:3001/user';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            message: '',
            errors: []
        };

    };

    handleHtmlControlChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit  = (event) => {
        event.preventDefault();
        axios.post(url, this.state)
            .then( res => {
                if (res.data.success) {
                    this.setState({message: res.data.success,  login: '', password: '', errors: []});
                }
                else {
                    this.setState({ message: 'Error', errors: res.data.errors });
                }

        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        const { login, password, message, errors } = this.state;
        return (
            <div>
                <div className="result">{message}</div>
                <div>{errors.map((el) =>
                    <div className="errors" key={el.param}>
                        {el.msg}
                    </div>
                )}</div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label className='label'>Login: </label>
                        <input type='text' name="login" value={login} onChange={this.handleHtmlControlChange} />
                    </div>
                    <div>
                        <label className='label'>Password: </label>
                        <input type='text' name="password" value={password} onChange={this.handleHtmlControlChange} />
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;