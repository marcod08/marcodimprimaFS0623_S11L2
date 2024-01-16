import { combineReducers, configureStore } from '@reduxjs/toolkit'
import mainReducer from '../reducers'
import { getJobsAction } from '../actions'
import favouritesReducer from '../reducers/favourites';


const bigReducer = combineReducers({
  /* favourite: favouritesReducer,
  job: 
  */
});

const store = configureStore({
  reducer: mainReducer,
})

export default store
