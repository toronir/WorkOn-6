import "./main.scss"

import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header'
import ReactBootstrap from './pages/react-bootstrap'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./app"
import Home from "./pages/home"
import ParamTest from "./pages/param-test"
import TestAxios from "./pages/test-axios"
import FormikTest from "./pages/formik-test"
import ReduxTest from "./pages/redux-test"
import store from "./redux/redux-store"
import { Provider } from "react-redux"






const Main = () => {

    return (
        <>
            {/* <Header/> */}
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<App />}>
                            <Route path='reactrouterdom' element={<ReactBootstrap />} />
                            <Route path="param-test/:id" element={<ParamTest />} />
                            <Route path="axios" element={<TestAxios />} />
                            <Route path="redux" element={<ReduxTest />} />
                            <Route path="formik" element={<FormikTest />} />
                            <Route index element={<Home />} />
                        </Route>
                    </Routes>
                </BrowserRouter>

            </Provider>
        </>
    )

}




ReactDOM.render(< Main />, document.getElementById('root'))