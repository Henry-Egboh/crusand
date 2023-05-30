import { NavLink } from "react-router-dom";
import SignUp from "./SignUp";
import React from "react";

const FooterComponent = () => {
  return (
    <main className="footer-container">
      {/* footer section */}
      <section className="footer-header">
        <h2>We can do more</h2>
      </section>

      {/* footer */}
      <footer className="footer">
        {/* col 1 */}
        <section>
          <h4>Get Our Weekly Newsletter</h4>
          <div className="Sign-up">
            <SignUp />
          </div>
        </section>
        {/* col 2 */}
        <section>
          <h4>Basking Forth</h4>
          <ul>
            <li>
              <NavLink to="/">Motions of Code</NavLink>
            </li>
            <li>
              <NavLink to="/">Investigation Duel</NavLink>
            </li>
            <li>
              <NavLink to="/">Motions of Code</NavLink>
            </li>
            <li>
              <NavLink to="/">Investigation Duel</NavLink>
            </li>
          </ul>
        </section>
        {/* col 3 */}
        <section>
          <h4>Basking Forth</h4>
          <ul>
            <li>
              <NavLink to="/">Motions of Code</NavLink>
            </li>
            <li>
              <NavLink to="/">Investigation Duel</NavLink>
            </li>
            <li>
              <NavLink to="/">Motions of Code</NavLink>
            </li>
            <li>
              <NavLink to="/">Investigation Duel</NavLink>
            </li>
          </ul>
        </section>
        {/* col 4 */}
        <section>
          <h4>Basking Forth</h4>
          <ul>
            <li>
              <NavLink to="/">Motions of Code</NavLink>
            </li>
            <li>
              <NavLink to="/">Investigation Duel</NavLink>
            </li>
            <li>
              <NavLink to="/">Motions of Code</NavLink>
            </li>
            <li>
              <NavLink to="/">Investigation Duel</NavLink>
            </li>
          </ul>
        </section>
      </footer>

      {/* footer-second-row */}
      <footer className="footer-second-row">
        {/* one */}
        <section className="first-col">
          <h4>Basking Forth</h4>
          <p>
            <NavLink to="/">Investigation Duel of excellence in between</NavLink>
          </p>
          <p>
            <NavLink to="/">Motions of Code invites essence</NavLink>
          </p>
        </section>

        {/* two */}
        <section>
          <h4>Basking Forth</h4>
          <p>
            <NavLink to="/">Investigation Duel</NavLink>
          </p>
          <p>
            <NavLink to="/">Motions of Code</NavLink>
          </p>
          <p>
            <NavLink to="/">Motions of Code</NavLink>
          </p>
        </section>

        {/* three */}
        <section>
          <h4>Basking Forth</h4>
          <p>
            <NavLink to="/">Investigation Duel</NavLink>
          </p>
          <p>
            <NavLink to="/">Investigation Duel</NavLink>
          </p>
          <p>
            <NavLink to="/">Investigation Duel</NavLink>
          </p>
          <p>
            <NavLink to="/">Motions of Code</NavLink>
          </p>
        </section>

        {/* four */}
        <section>
          <h4>Basking Forth</h4>
          <p>
            <NavLink to="/">Investigation Duel</NavLink>
          </p>
          <p>
            <NavLink to="/">Investigation Duel</NavLink>
          </p>
          <p>
            <NavLink to="/">Investigation Duel</NavLink>
          </p>
          <p>
            <NavLink to="/">Motions of Code</NavLink>
          </p>
        </section>
      </footer>

      {/* horizontal list */}
      <footer className="footerHorList">
        <div className="horList">
          <p>
            <NavLink to="/">Privacy Policy</NavLink>
          </p>
          <p>
            <NavLink to="/">Cookie Policy</NavLink>
          </p>
          <p>
            <NavLink to="/">Investor Pattern</NavLink>
          </p>
        </div>
        <div className="social"></div>
      </footer>
    </main>
  );
};
export default FooterComponent;
