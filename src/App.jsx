// import { useState } from "react";
import { BasicForm } from "./components/BasicForm";
import { About } from "./components/About";
import { Home } from './components/Home'
import { RootLayout } from "./layout/RootLayout";
import ErrorPage from "./components/ErrorPage";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

function App() {
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route path="/" element={<Home />} />
      <Route path="basicform" element={<BasicForm />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);
// const [view, setView] = useState("basic");

  return (
    <>
      <RouterProvider router={router} />
      {/* forms */}
      {/* <nav className="form-container">
        <section className="header">
        <h4 onClick={() => setView('basic')}>
            Basic
        </h4>

        <h4 onClick={() => setView('advanced')}>
          Advanced
        </h4>
        </section>
       
       {view === 'basic' ? <BasicForm /> : <AdvancedForm />}
       
      </nav> */}

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
