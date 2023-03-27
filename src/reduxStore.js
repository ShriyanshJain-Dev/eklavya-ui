import {createStore} from "redux";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import createRootReducer from "./reducers/index";

const persistConfig = {
    key: "app",
    storage
}

const persistedReducer = persistReducer(persistConfig, createRootReducer());

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export {store, persistor};