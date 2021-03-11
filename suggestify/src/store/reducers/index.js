import { combineReducers } from "redux";
import Profilereducer from "./Profilereducer";
import SSreducer from './SSreducer';
import SLreducer from './SLreducer';

export default combineReducers({ 
    Profilereducer, 
    SSreducer, 
    SLreducer 
});