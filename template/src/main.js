import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

{{#router}}
import { Router } from 'react-router'
import createHashHistory from 'history/lib/createHashHistory'
const routerHistory = createHashHistory({
  queryKey: false
})

const routeConfig = [{
  path: '/',
  component: App,
  indexRoute: {
    getComponent: (location, cb) => {
      require.ensure([], require => {
        cb(null, require('./pages/Index').default)
      }, '404-page');
    }
  },
  childRoutes: [
    {
      path: '*',
      getComponent: (location, cb) => {
        require.ensure([], require => {
          cb(null, require('./pages/404').default)
        }, '404-page');
      }
    }
  ]
}]
{{/router}}

{{#redux}}
const { Provider } = require('react-redux')
const { combineReducers, createStore } = require('redux')
// reducers
const Reducer = (state, filter) => {
  switch (filter) {
    case 'MUTATION_TYPE':
    default:
      return {...state}
  }
}
const reducers = { Reducer }

const storeSeed = combineReducers(reducers)
let store = createStore(storeSeed, /* applyMiddleware(thunk, promiseMiddleware) */);
{{/redux}}

/* TODO: add 404 page */
ReactDOM.render(
  {{#router}}
  (
    <Provider{{#redux}} store={store}{{/redux}}>
      <Router history={routerHistory} routes={routeConfig} />
    </Provider>
  ),
  {{else}}
  <App />,
  {{/router}}
  document.getElementById('app')
);
