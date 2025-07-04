import React from "react";

const Experience = () => {
  return (
    <div className="mt-5 w-full p-6 sm:p-10">
      <div className="text-center">
        <h2 className="text-2xl text-center font-bold text-yellow-300 mb-6 border-b border-yellow-500 inline-block">
          Work Experience
        </h2>
      </div>
      {/* Main Experience Div */}
      <div className="border border-gray-400 rounded-2xl text-white p-3 w-full bg-gray-900 shadow-md hover:shadow-yellow-400 transition-all duration-300">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-yellow-300">
            SDE-1 @ Prodsmiths
          </h3>
          <span className="text-sm text-gray-400">July 2024 - Present</span>
        </div>
        <p className="text-gray-300 mt-2 w-full text-sm break-words text-wrap">
          Contributed to the development of a legal case management dashboard.
          Built dynamic filters, modular components, and improved UI performance
          using React.js and Tailwind CSS. Collaborated with backend team for
          seamless API integration and handled feature deployment.
        </p>
        <ol className="list-decimal pl-6 text-gray-300 text-sm space-y-2 mt-2">
          <li>
            Led frontend development independently for all new features and
            functionalities in the legal case management module.
          </li>
          <li>
            Revamped the frontend of a legal case management module, creating a
            platform where lawyers and legal officers can generate legal cases
            efficiently.
          </li>
          <li>
            Engineered Python scripts to upload large, case-specific data into
            production, handling 12 different legal case types, each with around
            5000 records, ensuring smooth and accurate data integration at
            scale.
          </li>
          <li>
            Created dynamic HTML templates for multiple notice types, fixing
            alignment, footer, and datarelated issues. Previously, templates
            showed only one loan account’s data; enhanced them to display
            multiple account information dynamically.
          </li>
          <li>
            The legal case management product is actively used by major
            organizations like IndusInd Bank, Punjab National Bank (PNB), Aditya
            Birla Finance Limited (ABFL), and Vistaar Finance, highlighting its
            enterprise-level impact and scalability.
          </li>
        </ol>
      </div>
      <div className="border mt-5 border-gray-400 rounded-2xl text-white p-3 w-full bg-gray-900 shadow-md hover:shadow-yellow-400 transition-all duration-300">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-yellow-300">
            Software Development Internship
          </h3>
          <span className="text-sm text-gray-400">
            September 2023 - April 2024
          </span>
        </div>
        <p className="text-gray-300 mt-2 w-full text-sm break-words text-wrap">
          Hands-on experience in full-stack development using React, Python, and
          Django. Worked on large-scale systems including a legal dashboard and
          high-traffic GST calculator app.
        </p>
        <ol className="list-decimal pl-6 text-gray-300 text-sm space-y-2 mt-2">
          <li>
            Technologies:Python, Django REST Framework, Postman, AWS, React.js
            ,CSS , Pandas and Numpy
          </li>
          <li>
            Optimized the backend of a high-traffic India GST calculator app,
            serving a user base of 10-12 lakh users, utilizing Python, Django,
            and Django REST Framework for seamless functionality and user
            experience.
          </li>
          <li>
            {" "}
            Resolved frontend bugs for the Credit Nirvana ARCIL project using
            React.js and CSS, demonstrating frontend development expertise
            within a nationwide infrastructure across 12 states.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Experience;
