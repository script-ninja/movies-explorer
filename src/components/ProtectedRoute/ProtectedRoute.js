import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function ProtectedRoute(props) {
  return (
    <Route>
      {
        props.authorized ? props.children : <Redirect to='/' />
      }
    </Route>
  );
}