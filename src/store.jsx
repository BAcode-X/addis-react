import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";

import employees from "./redux/slice/employees";
import employee from "./redux/slice/employee";
import { rootSaga } from './redux/sagas'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        employee,
        employees
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
})
sagaMiddleware.run(rootSaga)

export default store