import React from 'react';
class Form extends React.Component
{
    constructor()
    {
        super();
          this.state = {

              name: '',
              password: '',
              confirmPassword: ''
          }
    }
    onInputChange= e => this.setState({[e.target.name]:e.target.value});
    formValidate=(e) =>{
        e.preventDefault()
        if(this.state.name==='' || this.state.password==='' || this.state.confirmPassword===''){
            alert("can't be blank");
        }
        else if(this.state.password!==this.state.confirmPassword) {
            alert("password should be same");
        }
    }
    render()
    {
        return (
            <form>
                Name:<input type='text' onChange={this.onInputChange} value={this.state.Name} name="name"/><br></br>
                Password:<input type='password' onChange={this.onInputChange} value={this.state.Password} name="password"/><br></br>
                confirm_password:<input type='password' onChange={this.onInputChange} value={this.state.Confirm_Password} name="confirmPassword"/>
                <input type="submit" onClick ={this.formValidate}/>
            </form>
        )
    }

}

export default Form;
