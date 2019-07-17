import React from 'react';
import Layout from '../../components/Layout';
import Login from './Login';

const title = 'Войти в систему';

function action() {
  return {
    chunks: ['login'],
    title,
    component: (
      <Layout>
        <Login title={title} />
      </Layout>
    ),
  };
}

export default action;
