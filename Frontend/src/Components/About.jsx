import React from "react";

const About = () => {
  return (
    <div>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800  pb-4">
              About Us
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">
              The E-Voting MERN Stack Project offers a modern and efficient
              solution for conducting elections electronically. By leveraging
              the MongoDB, Express.js, React.js, and Node.js technologies, it
              provides a scalable, secure, and user-friendly platform for voters
              to participate in elections and for election administrators to
              manage the entire process. With its emphasis on transparency,
              verifiability, and security, the e-voting system contributes to
              the advancement of democratic processes in the digital age.
            </p>
          </div>
          <div className="w-full lg:w-8/12">
            <img
              className="w-full h-full"
              src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
              alt="A group of People"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
