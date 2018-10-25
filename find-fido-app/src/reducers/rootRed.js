import {combineReducers} from 'redux';

import {alert} from './alertsRed';
import {authentication} from './authRed';
import {registration} from './regRed';
import {user} from './usersRed';

export const rootRed = combineReducers({alert, authentication, registration, user});