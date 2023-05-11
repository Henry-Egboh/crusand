import { useState } from "react";
import BasicForm from "./components/BasicForm";
import AdvancedForm from "./components/AdvancedForm";

function App() {

const [view, setView] = useState("basic");

  return (
    <main className="container">
      {/* forms */}
      <nav className="form-container">
        <section className="header">
        <h4 onClick={() => setView('basic')}>
            Basic
        </h4>

        <h4 onClick={() => setView('advanced')}>
          Advanced
        </h4>
        </section>
       
       {view === 'basic' ? <BasicForm /> : <AdvancedForm />}
       
      </nav>

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
    </main>
  );
}

export default App;
