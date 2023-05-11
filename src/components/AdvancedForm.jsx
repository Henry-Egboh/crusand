const AdvancedForm = () => {
  return (
    <main style={{ backgroundColor: "teal", color: "white" }}>
      <section className="form">
        <form>
          <fieldset className="fieldset">
          <h1 className="h1">Fill Out the Form Correctly</h1>
            <section>
              <div>
                <label htmlFor="username">Username: </label>
              </div>
              <div>
                <input
                  id="username"
                  className="input"
                  type="text"
                  placeholder="Enter username"
                  name="username"
                />
              </div>
            </section>

            {/* email */}
            <section>
              <div>
                <label htmlFor="email">E-mail: </label>
              </div>
              <div>
                <input
                  id="email"
                  className="input"
                  type="email"
                  placeholder="Enter email"
                  name="email"
                />
              </div>
            </section>

            {/* age */}
            <section>
              <div>
                <label htmlFor="age">Age: </label>
              </div>
              <div>
                <input
                  id="age"
                  className="input"
                  type="number"
                  placeholder="Enter your age"
                  name="age"
                />
              </div>
            </section>

            {/* city */}
            <section>
              <div>
                <label htmlFor="city">City: </label>
              </div>
              <div>
                <select id="city" className="input" name="city">
                  <option value="">...Select your City</option>
                  <option value="bahamas">Bahamas</option>
                  <option value="orlando">Orlando</option>
                  <option value="texas">Texas</option>
                  <option value="california">California</option>
                  <option value="new jersey">New Jersey</option>
                  <option value="brooklyn">Brooklyn</option>
                  <option value="alabama">Alabama</option>
                </select>
              </div>
            </section>

            {/* country */}
            <section>
              <div>
                <label htmlFor="country">Country: </label>
              </div>
              <div>
                <input
                  id="country"
                  className="input"
                  type="text"
                  placeholder="Choose your Country"
                  name="country"
                  list="country-list"
                />
              </div>
              <datalist id="country-list">
                <option value="USA"></option>
                <option value="China"></option>
                <option value="Armenia"></option>
                <option value="United Kingdom"></option>
                <option value="Canada"></option>
                <option value="Berlin"></option>
                <option value="Haiti"></option>
                <option value="Netherland"></option>
              </datalist>
            </section>

            {/* password */}
            <section>
              <div>
                <label htmlFor="password">Password: </label>
              </div>
              <div>
                <input
                  id="password"
                  className="input"
                  type="password"
                  placeholder="Enter password"
                  name="password"
                />
              </div>
            </section>

            {/* confirm password */}
            <section>
              <div>
                <label htmlFor="confirmPassword">Confirm Password: </label>
              </div>
              <div>
                <input
                  id="confirmPassword"
                  className="input"
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                />
              </div>
            </section>
            {/* radio button */}
            <section>
              <fieldset className="radio-fieldset">
                <div>
                  <input className="space-radio" type="radio" name="radio" />
                  <label>Male</label>
                </div>

                <div>
                  <input className="space-radio" type="radio" name="radio" />
                  <label>Female</label>
                </div>
              </fieldset>
            </section>

            {/* checkbox */}
            <section className="checkbox">
              <input id="checkbox" type="checkbox" name="checkbox" />
              <label htmlFor="checkbox" style={{ marginLeft: "4rem" }}>
                <code>
                  I acknowledge that I have read and agreed to the terms of
                  service.{" "}
                </code>
              </label>
            </section>

            {/* button */}

            <div className="btn-div">
              <button type="button" className="button">
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </section>
    </main>
  );
};

export default AdvancedForm;
