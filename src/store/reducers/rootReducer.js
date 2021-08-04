import authReducer from "./reducers/authReducer";
import projectReducer from "./reducers/projectReducer";
import { combineReducers} from 'redux'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: fireStoreReducer,
});

export default rootReducer
 
