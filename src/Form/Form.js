import { React , Component } from "react";
import './Form.css';

class Form extends Component {

    state = {
        userData: {
            username:'',
            email:'',
            password1:'',
            password2:''
        }
        
    }

    inputChangedHandler = (event,inputName) => {
        const updatedUserData = {
            ...this.state.userData
        }
        updatedUserData[inputName]=event.target.value;
        this.setState({userData:updatedUserData});
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(this.state.userData);
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
                        className='success'  
                        placeholder='Your User Name'
                        value={this.state.userData.username}
                        onChange={(event) => this.inputChangedHandler(event,'username')}
                        />
                        <small>error message</small>
                    </div>
                    <div className='form-control'>
                        <label>Email</label>
                        <input 
                        key='email'
                        type='text' 
                        className='error' 
                        placeholder='Enter your Email'
                        value={this.state.userData.email}
                        onChange={(event) => this.inputChangedHandler(event,'email')}
                        />
                        <small>error message</small>
                    </div>
                    <div className='form-control'>
                        <label>Password</label>
                        <input
                        type='password' 
                        className='password' 
                        placeholder='Enter your Password'
                        value={this.state.userData.password1}
                        onChange={(event) => this.inputChangedHandler(event,'password1')}
                        />
                        <small>error message</small>
                    </div>
                    <div className='form-control'>
                        <label>Confirm Password</label>
                        <input 
                        type='password' 
                        className='confirm-password' 
                        placeholder='Enter your Password again'
                        value={this.state.userData.password2}
                        onChange={(event) => this.inputChangedHandler(event,'password2')}
                        />
                        <small>error message</small>
                    </div>
                    <button onClick={this.onSubmitHandler} type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;