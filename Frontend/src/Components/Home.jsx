import React from "react";
import HeroSaction from "./HeroSaction";

const Home = () => {
  return (
    <>
      <HeroSaction />

      <h4 className="text-center  my-2 text-3xl font-extrabold text-[#00263a]">
        Our Services
      </h4>
      <div class="text-center border-t rounded-full" role="group">
        <button
          type="button"
          class="px-4 py-2 text-sm font-medium text-[#00263a] bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-[#00263a] dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Aadhaar Details
        </button>
        <button
          type="button"
          class="px-4 py-2 text-sm font-medium text-[#00263a] bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-[#00263a] dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Pan Details
        </button>
        <button
          type="button"
          class="px-4 py-2 text-sm font-medium text-[#00263a] bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-[#00263a] dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Aadhaar Pan Link
        </button>
      </div>
      <h1 className="my-10 text-center text-gray-500 font-bold ">
        ElectionMen For world-class organizations with industry-specific voting
        needs
      </h1>

      <div className="my-16 grid divide-x divide-y  divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
        <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
          <div className="relative space-y-8 py-12 p-8">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4341/4341139.png"
              className="w-12"
              width={512}
              height={512}
              alt="burger illustration"
            />
            <div className="space-y-2">
              <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                User Authentication
              </h5>
              <p className="text-gray-600 dark:text-gray-300">
                The system allows users to register and authenticate themselves
                securely. This ensures that only eligible voters can participate
                in the voting process, maintaining the integrity of the
                elections.
              </p>
            </div>
          </div>
        </div>
        <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
          <div className="relative space-y-8 py-12 p-8">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4341/4341134.png"
              className="w-12"
              width={512}
              height={512}
              alt="burger illustration"
            />
            <div className="space-y-2">
              <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                Candidate Registration:
              </h5>
              <p className="text-gray-600 dark:text-gray-300">
                Candidates can register their profiles on the platform,
                providing details such as their name, party affiliation, and
                campaign manifesto.
              </p>
            </div>
          </div>
        </div>
        <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
          <div className="relative space-y-8 py-12 p-8">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4341/4341160.png"
              className="w-12"
              width={512}
              height={512}
              alt="burger illustration"
            />
            <div className="space-y-2">
              <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                Transparent and Verifiable
              </h5>
              <p className="text-gray-600 dark:text-gray-300">
                The e-voting system maintains transparency and verifiability by
                recording each vote in the database. This allows for auditing
                and verification of the election results
              </p>
            </div>
          </div>
        </div>
        <div className="group relative bg-gray-50 dark:bg-gray-900 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
          <div className="relative space-y-8 py-12 p-8 transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4341/4341025.png"
              className="w-12"
              width={512}
              height={512}
              alt="burger illustration"
            />
            <div className="space-y-2">
              <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                Real-time Result Tabulation
              </h5>
              <p className="text-gray-600 dark:text-gray-300">
                As votes are cast, the system continuously tabulates the results
                in real-time. This provides instant visibility into the current
                state of the elections and helps in monitoring the progress.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white my-10">
        <div id="solution">
          <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
            <div className="space-y-6 justify-between text-gray-600 md:flex flex-row-reverse md:gap-6 md:space-y-0 lg:gap-12 lg:items-center">
              <div className="md:5/12 lg:w-1/2">
                <img
                  src="https://astrolus.netlify.app/images/pie.svg"
                  alt="image"
                  loading="lazy"
                  width
                  height
                  className="w-full"
                />
              </div>
              <div className="md:7/12 lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                  Trusted by over Many users and
                </h2>
                <p className="my-8 text-gray-600 dark:text-gray-300">
                  These features collectively contribute to making online voting
                  apps a secure, convenient, and inclusive option for conducting
                  elections and gathering public input. However, it's essential
                  to continuously evaluate and update these features to address
                  emerging security threats and ensure the integrity of the
                  voting process.
                </p>
                <div className="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
                  <div className="mt-8 flex gap-4 md:items-center">
                    <div className="w-12 h-12 flex gap-4 rounded-full bg-indigo-100 dark:bg-indigo-900/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 m-auto text-indigo-500 dark:text-indigo-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="w-5/6">
                      <h3 className="font-semibold text-lg text-gray-700 dark:text-indigo-300">
                        Voter Authentication:
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Secure login procedures to ensure that only eligible
                        voters can participate. This may include methods like
                        email verification, SMS verification, or multi-factor
                        authentication.
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 flex gap-4 md:items-center">
                    <div className="w-12 h-12 flex gap-4 rounded-full bg-teal-100 dark:bg-teal-900/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 m-auto text-teal-600 dark:text-teal-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="w-5/6">
                      <h3 className="font-semibold text-lg text-gray-700 dark:text-teal-300">
                        Real-time Monitoring
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Tools for administrators to monitor voting activity in
                        real-time, ensuring that the system is functioning
                        correctly and detecting any irregularities or suspicious
                        activity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
