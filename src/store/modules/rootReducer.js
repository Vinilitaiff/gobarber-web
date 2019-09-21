import { combaineReducers } from 'redux';

import auth from './auth/reducer';

export default combaineReducers({ auth });
