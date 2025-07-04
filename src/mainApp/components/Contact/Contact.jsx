import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="w-full bg-black text-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <div className="text-center mt-10">
            <h2 className="text-2xl font-bold text-yellow-300 mb-6 border-b border-yellow-500 inline-block">
          Contact Me
        </h2>
        </div>

        <p className="text-gray-300 text-base sm:text-sm mt-4">
          Feel free to reach out — I’m always open to opportunities, collaborations, or just a good tech convo!
        </p>

        <div className="mt-8 space-y-4 text-lg sm:text-sm text-gray-200">
          <p>
            📧 Email:{" "}
            <a
              href="mailto:abhisheksaroch06@gmail.com"
              className="text-blue-400 hover:text-yellow-300 transition"
            >
              abhisheksaroch2505@gmail.com
            </a>
          </p>
          <p>
            📞 Phone:{" "}
            <a
              href="tel:+918894552443"
              className="text-blue-400 hover:text-yellow-300 transition"
            >
              +91 9625002750
            </a>
          </p>
          <p>
            🔗 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/abhisheksharma2505/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-yellow-300 transition"
            >
              Click Here
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
