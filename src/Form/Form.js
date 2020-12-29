import { React , Component } from "react";
import './Form.css';

class Form extends Component {
    render(){
        return(
            <div className='container'>
                <form className='form'>
                    <h2>Enter Your Details</h2>
                    <div className='form-control'>
                        <label>UserName</label>
                        <input type='text' className='success' placeholder='Your User Name'/>
                        <small>error message</small>
                    </div>
                    <div className='form-control'>
                        <label>Email</label>
                        <input type='text' className='error' placeholder='Enter your Email'/>
                        <small>error message</small>
                    </div>
                    <div className='form-control'>
                        <label>Password</label>
                        <input type='text' className='password' placeholder='Enter your Password'/>
                        <small>error message</small>
                    </div>
                    <div className='form-control'>
                        <label>Confirm Password</label>
                        <input type='text' className='confirm-password' placeholder='Enter your Password again'/>
                        <small>error message</small>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;