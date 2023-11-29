import React from "react";
import backgroundImage from '../assets/images/Arrow.png';
import './working.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Working = () => {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        height: '400vh',
      }}
    >
      <div className="heading text-black">
        <h1 className="text-4xl font-bold mb-4 text-center pt-5">How <span className="text-gray-400">It </span>Works?</h1>
      </div>
      <div className="absolute-box1 text-black">
        <h1 className="text-3xl font-bold mb-4">Record Livestock Data</h1>
        <p className="text-lg">
          Easily add details about your livestock. Input information such as species, breed, and birthdate. Keep all your livestock data organized in one place.
        </p>
        <div className="download-app  flex items-center mt-4">
          <p className="text-lg mr-2 font-bold">Download App</p>
          <div className="mt-2"> <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>
      <div className="absolute-box2 text-black">
        <h1 className="text-3xl font-bold mb-4">  Analyze and Optimize</h1>
        <p className="text-lg">

          Access detailed reports and analytics to track the performance of your farm. Use data-driven insights to make informed decisions and optimize your farm's operations.


        </p>
        <div className="download-app  flex items-center mt-4">
          <p className="text-lg mr-2 font-bold">Download App</p>
          <div className="mt-2"> <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>
      <div className="absolute-box3 text-black">
        <h1 className="text-3xl font-bold mb-4"> Monitor Financials</h1>
        <p className="text-lg">

          Track your farm's financial health with ease. Record sales, expenses, and revenue to gain a clear picture of your farm's profitability.


        </p>
        <div className="download-app  flex items-center mt-4">
          <p className="text-lg mr-2 font-bold">Download App</p>
          <div className="mt-2"> <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>
      <div className="absolute-box4 text-black">
        <h1 className="text-3xl font-bold mb-4">  Customize Feed Formulas</h1>
        <p className="text-lg">

          Create your own feed formulas or choose from our library of ready-made formulas. Tailor your livestock's diet for optimal growth and health.

        </p>
        <div className="download-app  flex items-center mt-4">
          <p className="text-lg mr-2 font-bold">Download App</p>
          <div className="mt-2"> <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>
      <div className="absolute-box5 text-black">
        <h1 className="text-3xl font-bold mb-4"> Collaborate With Others</h1>
        <p className="text-lg">

          Effortlessly invite and collaborate with team members, partners, and fellow farmers to streamline farm management, enhance communication, and boost efficiency

        </p>
        <div className="download-app  flex items-center mt-4">
          <p className="text-lg mr-2 font-bold">Download App</p>
          <div className="mt-2"> <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;
