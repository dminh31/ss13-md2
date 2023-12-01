import { state } from "./Reducer/Reducer";
import {createStore} from "redux"
export const store =createStore(state)