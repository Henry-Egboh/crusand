// import { useState } from "react";
import React from "react";
import { BasicForm } from "./components/BasicForm";
import { About } from "./components/About";
import { Home } from './components/Home'
import { RootLayout } from "./layout/RootLayout";
import ErrorPage from "./components/ErrorPage";
import {FeedbackForm} from "./components/FeedbackForm";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import NewsLetterSignUp from "./components/NewsLetterSignUp";
import Login from "./components/Login";
import AdvancedForm from "./components/AdvancedForm";
import { ComplicatedForm } from "./components/ComplicatedForm";

function App() {
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route path="/" element={<Home />} />
      <Route path="basicform" element={<BasicForm />} />
      <Route path="about" element={<About />} />
      <Route path="feedbackform" element={<FeedbackForm />} />
      <Route path="newslettersignup" element={<NewsLetterSignUp />}/>
      <Route path="login" element={<Login />} />
      <Route path="advancedform" element={<AdvancedForm />} />
      <Route path="complicatedform" element={<ComplicatedForm />} />
    </Route>
  )
);
// const [view, setView] = useState("basic");

  return (
    <>
    {/* <h1>WHY IS THAT</h1> */}
      <RouterProvider router={router} />

      {/* overlay text over images */}
      {/* <div className="bg">
        <img alt="" src="https://picsum.photos/id/13/200/200" />
        <div className="overlay">
          <div className="txt">
            <h4>Awesome Dreams </h4>
            <p>Think deep Oh! less</p>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default App;
