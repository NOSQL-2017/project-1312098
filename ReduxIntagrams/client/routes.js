import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/home/index';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import NewEventPage from './components/events/NewEventPage';
import PublicPage from './components/public/public.js';
import ImagesUploadPage from './components/Images/Upload';
import LibraryPage from './components/Images/Library';
import PersonPage from './components/person/index.js'
import SearchPage from './components/person/Search.js'
import User from './components/person/index'

import requireAuth from './utils/requireAuth';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="signup" component={SignupPage} />
    <Route path="login" component={LoginPage} />
    <Route path="public" component={PublicPage} />
    <Route path="person" component={PersonPage} />
    <Route path="search" component={SearchPage} />
    <Route path="users/:username" component={User} />
    <Route path="images" component={ImagesUploadPage} />
    <Route path="library" component={LibraryPage} />
    <Route path="new-event" component={requireAuth(NewEventPage)} />
  </Route>
)
