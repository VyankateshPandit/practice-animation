import React, { useState } from "react";
import eeclogo from "../../assets/eeclogo.svg";
import girlsimage from "../../assets/grilsimage.png";
const Sidebar = () => {
  const [isCourseOpen, setIsCourseOpen] = useState(false);
  const toggleCourseDropdown = () => setIsCourseOpen((prev) => !prev);

  return (
    <div className="flex flex-col absolute left-0 top-14 items-center w-full max-w-full h-full min-h-screen bg-white sm:w-full overflow-scroll">
      {/* Search bar */}
      <div className="flex flex-col items-start gap-2 px-4 pt-4 pb-1 w-full">
        <div className="flex justify-between items-center w-full px-4 py-3 rounded-[6px] border border-[#F5F5F5] bg-[#FAFAFA]">
          <input
            type="text"
            placeholder="Search"
            className="flex-grow bg-transparent text-[#323232] text-sm outline-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
              stroke="#A1A1A1"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.5003 17.5003L13.917 13.917"
              stroke="#A1A1A1"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Navigation */}
      {[
        <a href="/" key="home">
          Home
        </a>,
        "Course",
        <a href="/event&webinar" key="event">
          Events & Webinars
        </a>,
        <a href="" key="success">
          Success Stories & Testimonials
        </a>,
        <a href="/" key="blog">
          Blog & Free Resources
        </a>,
        <a href="/contact-us" key="contact">
          Contact Us
        </a>,
        <a href="/eec-components" key="contact">
          EEC components
        </a>,
      ].map((item, index) => {
        if (item === "Course") {
          return (
            <div
              key={index}
              className="text-[#323232] text-base font-medium px-4 py-3 w-full cursor-pointer"
            >
              <div
                className="flex items-center justify-between"
                onClick={toggleCourseDropdown}
              >
                <a href="/course" onClick={(e) => e.preventDefault()}>
                  <span>Course</span>
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className={`transition-transform duration-300 ${
                    isCourseOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  {" "}
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#323232"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />{" "}
                </svg>
              </div>
              {isCourseOpen && (
                <div className="mt-2 ml-4 space-y-1">
                  {["IELTS", "TOEFL", "GMAT GRE", "PTE", "SAT"].map(
                    (sub, i) => (
                      <a
                        key={i}
                        href={`/course/${sub
                          .toLowerCase()
                          .replace(/\s/g, "-")}`}
                        className="block text-[#555] text-sm hover:text-black"
                      >
                        {sub}
                      </a>
                    )
                  )}
                </div>
              )}
            </div>
          );
        }
        return (
          <div
            key={index}
            className="text-[#323232] text-base font-medium px-4 py-3 w-full"
          >
            <p>{item}</p>
          </div>
        );
      })}

      {/* Banner */}
      <div className="px-4 pb-2 w-full">
        <div className="flex flex-col p-3 gap-3 rounded-[8px] bg-[#F5F5F5] w-full">
          <img
            src={girlsimage}
            alt="Description of image"
            className="w-full h-auto max-h-full object-fit rounded-[8px]"
          />
          <p className="text-[#323232] text-base font-medium">
            We've just released an update!
          </p>
          <p className="text-[#A1A1A1] text-sm">
            Check out the all our new shorts on Instagram.
            <div className="flex flex-row gap-3">
              <p className="text-[#A1A1A1] text-sm font-medium">Dismiss</p>
              <p className="text-[#C30] text-sm font-medium">View it now</p>
            </div>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 w-full">
        <div className="flex flex-wrap justify-between items-start gap-2">
          <a href="/about" className="text-[#A1A1A1] text-base font-medium">
            About Us
          </a>
          <p className="text-[#A1A1A1] text-base font-medium">Career</p>
          <p className="text-[#A1A1A1] text-base font-medium">Policies</p>
          <p className="text-[#A1A1A1] text-base font-medium">Social Links:</p>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#A1A1A1"
              viewBox="0 0 24 24"
              className="hover:fill-[#E4405F] transition-colors"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zm8.75 1.25a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-4.25 2a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
            </svg>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="20"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M14.8156 0H1.18125C0.528125 0 0 0.515625 0 1.15313V14.8438C0 15.4813 0.528125 16 1.18125 16H14.8156C15.4688 16 16 15.4813 16 14.8469V1.15313C16 0.515625 15.4688 0 14.8156 0ZM4.74687 13.6344H2.37188V5.99687H4.74687V13.6344ZM3.55938 4.95625C2.79688 4.95625 2.18125 4.34062 2.18125 3.58125C2.18125 2.82188 2.79688 2.20625 3.55938 2.20625C4.31875 2.20625 4.93437 2.82188 4.93437 3.58125C4.93437 4.3375 4.31875 4.95625 3.55938 4.95625ZM13.6344 13.6344H11.2625V9.92188C11.2625 9.0375 11.2469 7.89687 10.0281 7.89687C8.79375 7.89687 8.60625 8.8625 8.60625 9.85938V13.6344H6.2375V5.99687H8.5125V7.04063H8.54375C8.85937 6.44063 9.63438 5.80625 10.7875 5.80625C13.1906 5.80625 13.6344 7.3875 13.6344 9.44375V13.6344V13.6344Z"
                fill="#A1A1A1"
              />
            </svg>
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 11.993 2.92547 15.3027 6.75 15.9028V10.3125H4.71875V8H6.75V6.2375C6.75 4.2325 7.94438 3.125 9.77172 3.125C10.6467 3.125 11.5625 3.28125 11.5625 3.28125V5.25H10.5538C9.56 5.25 9.25 5.86672 9.25 6.5V8H11.4688L11.1141 10.3125H9.25V15.9028C13.0745 15.3027 16 11.993 16 8Z"
                fill="#A1A1A1"
              />
            </svg>
          </a>
        </div>

        <div className="w-full mt-4 px-5 py-3 rounded-md bg-[#323232] flex justify-center">
          <p className="text-white text-base font-bold">
            Get Free Consultation
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center p-4 w-full">
        <p className="text-[#A1A1A1] text-xs text-center">
          © 2025 ECCGlobal. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
