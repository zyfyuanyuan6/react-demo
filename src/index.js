import 'babel-polyfill';
import React  from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.dev';
import routes from './routes';
import { loadCourses, saveCourse} from './actions/courseActions';
import {loadAuthors} from "./actions/authorActions";
import "./styles/styles.css"; // webpack can import css file tool!
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/toastr/build/toastr.min.css';
const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());
store.dispatch(saveCourse());
render(
  <Provider store= {store}>
     <Router history = {browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
