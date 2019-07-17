import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Login.css';

class Login extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      formErrors: {email: "", password: ""},
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }


  hundleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value}, () => { this.validateField(name, value) });
  }


  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : "неккоректно заполнены поля";
        break;
      case "password":
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? "" : " слишком короткий пароль";
        break;
      default:
        break
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid
      },
      this.validateForm
    )
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid
    })
  }

  hundleSubmit() {

  }



  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <p className={s.lead}>
            Войдите под своим именем пользователя или адресом электронной почты компании.
          </p>

          <form method="post" onSubmit="">
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="usernameOrEmail">
                Адрес электронной почты
                <input
                  className={s.input}
                  id="usernameOrEmail"
                  type="email"
                  name="email"
                  value={this.state.email}
                  placeholder="Введите ваш email"
                  onChange={this.hundleUserInput}
                  autoFocus // eslint-disable-line jsx-a11y/no-autofocus
                />
              </label>
            </div>
            <div className={s.formGroup}>
              <label className={s.label} htmlFor="password">
                Пароль
                <input
                  className={s.input}
                  id="password"
                  type="password"
                  name="password"
                  value={this.state.password}
                  placeholder="Введите пароль"
                  onChange={this.hundleUserInput}
                />
              </label>
            </div>
            <div className={s.formGroup}>
              <button className={s.button} type="submit" onClick={this.hundleSubmit}>
                Войти
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Login);
