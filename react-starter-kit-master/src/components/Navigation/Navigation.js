/*Навигация*/
import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';

//TODO реализовать логику входа пользователя пока пользователь не авторизован
// личный кабинет не доступен и нет конпки выйти из системы
class Navigation extends React.Component {
  render() {
    return (
      <div className={s.root} role="navigation">

        <Link className={s.link} to="/login">
          Войти
        </Link>
        <span className={s.spacer}> | </span>
        <Link className={s.link} to="/">Выйти из ситемы</Link>
        <Link className={s.usersystem} to="/profile" >Профиль</Link>
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
