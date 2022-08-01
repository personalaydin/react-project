import React from 'react';
import '../styles.scss'
import HeaderImage from '../../src/header-image.svg';
import Button from '../Components/CustomButtons';

class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div class="headerArea">
        <div className="headerArea__top">
          <div class="headerArea__top-left"><Button label="Kayıt Ol"/></div>
          <div className="headerArea__top-right"><Button label="Giriş Yap"/></div>
        </div>
        <div className="headerArea__image">
          <img src={HeaderImage} className="" alt="Header Images" />
          <div className="formInput">
            <div className="formInput__top">
              <div className="formInput__top-title"><strong>find</strong>developer.net</div>
              <div className="formInput__top-subtitle">find your teammate</div>
            </div>
            <form onSubmit={this.handleSubmit} >
              <input type="text" className="input" value={this.state.value} onChange={this.handleChange} 
              placeholder="İş ara | İş, Şirket, Anathar Kelime"/>
              <Button label="find"/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default FormInput;