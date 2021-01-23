import { React , Component } from "react";
import './Form.css';

class Form extends Component {

    state = {
        userData: {
            username:'',
            email:'',
            password1:'',
            password2:''
        },
        validations: {
            username:'',
            email:'',
            password1:'',
            password2:'',
        }
    }

    inputChangedHandler = (event,inputName) => {
        const updatedUserData = {
            ...this.state.userData
        }
        updatedUserData[inputName]=event.target.value;
        this.setState({userData:updatedUserData});
    }

    validate = () => {
        let isError =false;
        const errors = {
            username:'',
            email:'',
            password1:'',
            password2:''
        };
            if(this.state.userData.username.length < 4) {
                isError=true;
                errors.username='username need to be atleast 4 characters';
            }

            const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if(!pattern.test(this.state.userData.email)) {
                isError=true;
                errors.email='Enter A valid Email address';
            }

            if(this.state.userData.password1.length < 6) {
                isError=true;
                errors.password1='password needs to be atleast 6 characters';
            }
            if(this.state.userData.password1.length ===0) {
                isError=true;
                errors.password1='This field is required';
            }
            

            if(this.state.userData.password2.length ===0) {
                isError=true;
                errors.password2='This field is required';
            } else if (this.state.userData.password1 !== this.state.userData.password2) {
                isError=true;
                errors.password2 = "passwords don't match";
            }
        let updatedValidations = {
            ...this.state.validations
        };
        updatedValidations = errors;
        this.setState( { validations : updatedValidations});
        return isError;
    };

    onSubmitHandler = (event) => {
        event.preventDefault();
        const error = this.validate();
        if(!error) {
            console.log('FORM SUBMITTED SUCCESSFULLY !')
            console.log('The USER DATA is ' , this.state.userData);
        }
    }

    render(){
        return(
            <div className='container'>
                <form className='form'>
                    <h2>Enter Your Details</h2>
                    <div className='form-control'>
                        <label>UserName</label>
                        <input 
                        type='text' 
                        className={this.state.validations.username.length > 0 ? 'error' : ''}  
                        placeholder='Your User Name'
                        value={this.state.userData.username}
                        onChange={(event) => this.inputChangedHandler(event,'username')}
                        />
                        <small>{this.state.validations.username}</small>
                    </div>
                    <div className='form-control'>
                        <label>Email</label>
                        <input 
                        key='email'
                        type='text' 
                        className={this.state.validations.email.length > 0 ? 'error' : ''} 
                        placeholder='Enter your Email'
                        value={this.state.userData.email}
                        onChange={(event) => this.inputChangedHandler(event,'email')}
                        />
                        <small>{this.state.validations.email}</small>
                    </div>
                    <div className='form-control'>
                        <label>Password</label>
                        <input
                        type='password' 
                        className={this.state.validations.password1.length > 0 ? 'error' : ''}
                        placeholder='Enter your Password'
                        value={this.state.userData.password1}
                        onChange={(event) => this.inputChangedHandler(event,'password1')}
                        />
                        <small>{this.state.validations.password1}</small>
                    </div>
                    <div className='form-control'>
                        <label>Confirm Password</label>
                        <input 
                        type='password' 
                        className={this.state.validations.password2.length > 0 ? 'error' : ''} 
                        placeholder='Enter your Password again'
                        value={this.state.userData.password2}
                        onChange={(event) => this.inputChangedHandler(event,'password2')}
                        />
                        <small>{this.state.validations.password2}</small>
                    </div>
                    <button onClick={this.onSubmitHandler} type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;