
const HeaderComponent = () => {
  return (
    <header className="top-header">
      <div className="header-text">
        <h1>The true vision and Ingenuity ...</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde voluptate <br /> 
        officiis qui corrupti sopre dut culpa delectus?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde voluptate <br /> 
        officiis qui corrupti sopre dut culpa delectus?
        </p>
        <p>Find out if its true</p>
      </div>

      <div className="headerbtns-wrapper">
      {/* get started button */}
      <button
        className='headerbtns'
      >
        Get Started
      </button>
      {/* More button */}
      <button
        className='headerbtns headerbtns-light'
      >
        Get Started
      </button>
      </div>
    </header>
  );
};

export default HeaderComponent;
