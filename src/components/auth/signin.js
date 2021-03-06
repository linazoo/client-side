import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class Signin extends Component {
  handleFormSubmit ({ email, password }) {
    console.log(email, password);
    //need to do something to log user in
  }

  renderInput(field){
    return (
      <div>
        <input {...field.input } type= {field.type} className="form-control" />
      </div>
    )
  }
  render(){
    const { handleSubmit, fields: { email, password }} = this.props;


    return (
      <form onSubmit={ handleSubmit(this.handleFormSubmit.bind(this)) }>
        <fieldset className="form-group">
          <label>Email:</label>
          <Field
          name="email"
          component={this.renderInput}
          type="text" />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <Field
          name="password"
          component={this.renderInput}
          type="text" />
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign in</button>
        
      </form>
    );
  }
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(Signin);