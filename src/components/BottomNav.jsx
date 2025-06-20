import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import course from "../../assets/course.svg";
import contact from "../../assets/contact.svg";
import studyAbroad from "../../assets/study-abroad.svg";
import home from "../../assets/home.svg";

export default function BottomNav() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const boxes = [home, course, studyAbroad, contact];

  let hasBg = 0;

  return (
    <div className="bottom-nav relative top-[25px] z-40 w-full h-[71px] rounded">
      <div
        className="w-[91%] mx-auto flex h-[56px] shrink-0 rounded-[12px] border border-[#FAFAFA] bg-[#FEFEFE] items-center justify-between"
        style={{ boxShadow: "0px 2px 18px 0px rgba(0, 0, 0, 0.08)" }}
      >
        {boxes.map((label, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className="flex w-[88px] h-[40px] py-[8px] justify-center items-center"
          >
            {(hasBg = selectedIndex === index)}

            {selectedIndex === index && (
              <motion.div
                layoutId="highlight"
                className="absolute bottom-[35px] flex items-center justify-center w-[60px] h-[60px] z-0"
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              >
                <div className="absolute w-[60px] h-[60px] bg-[#f3f4f6] rounded-full z-0" />

                <div className="absolute w-[50px] h-[50px] bottom-[5px] bg-gray-900 rounded-full shadow-[0_4px_12px_rgba(156,163,175,0.5)] z-10" />
              </motion.div>
            )}

            <span
              className="relative z-10"
              style={{
                transform:
                  selectedIndex === index
                    ? "translateY(-22px)"
                    : "translateY(0)",
                transition: "transform 0.5s ease-in-out",
              }}
            >
              {hasBg == 0 ? (
                <img src={label} alt="navbar-img" />
              ) : index === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M15 21.9995V13.9995C15 13.7343 14.8946 13.4799 14.7071 13.2924C14.5196 13.1049 14.2652 12.9995 14 12.9995H10C9.73478 12.9995 9.48043 13.1049 9.29289 13.2924C9.10536 13.4799 9 13.7343 9 13.9995V21.9995"
                    stroke="#FEFEFE"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 10.9995C2.99993 10.7085 3.06333 10.4211 3.18579 10.1572C3.30824 9.89329 3.4868 9.65928 3.709 9.47148L10.709 3.47248C11.07 3.16739 11.5274 3 12 3C12.4726 3 12.93 3.16739 13.291 3.47248L20.291 9.47148C20.5132 9.65928 20.6918 9.89329 20.8142 10.1572C20.9367 10.4211 21.0001 10.7085 21 10.9995V19.9995C21 20.5299 20.7893 21.0386 20.4142 21.4137C20.0391 21.7888 19.5304 21.9995 19 21.9995H5C4.46957 21.9995 3.96086 21.7888 3.58579 21.4137C3.21071 21.0386 3 20.5299 3 19.9995V10.9995Z"
                    stroke="#FEFEFE"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : index === 1 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4.659 9.654C4.38395 11.7596 4.22005 13.8782 4.168 16.001C7.0468 17.2035 9.80318 18.6803 12.399 20.411C14.9951 18.6803 17.7519 17.2035 20.631 16.001C20.5789 13.8782 20.415 11.7596 20.14 9.654M20.14 9.654C21.015 9.36 21.902 9.088 22.798 8.84C19.5346 6.55225 16.051 4.59589 12.399 3C8.74699 4.59622 5.2634 6.55292 2 8.841C2.89327 9.08763 3.77961 9.35873 4.658 9.654C7.32662 10.5512 9.9159 11.6691 12.399 12.996C14.8817 11.6691 17.4717 10.5512 20.14 9.654ZM7.149 14.507C7.34791 14.507 7.53868 14.428 7.67933 14.2873C7.81998 14.1467 7.899 13.9559 7.899 13.757C7.899 13.5581 7.81998 13.3673 7.67933 13.2267C7.53868 13.086 7.34791 13.007 7.149 13.007C6.95009 13.007 6.75932 13.086 6.61867 13.2267C6.47802 13.3673 6.399 13.5581 6.399 13.757C6.399 13.9559 6.47802 14.1467 6.61867 14.2873C6.75932 14.428 6.95009 14.507 7.149 14.507ZM7.149 14.507V10.832C8.84573 9.77734 10.5983 8.81526 12.399 7.95M5.392 19.5C5.94997 18.9434 6.39244 18.282 6.69396 17.5539C6.99549 16.8257 7.15013 16.0451 7.149 15.257V13.757"
                    stroke="#FEFEFE"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : index == 2 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20.8911 13.3959L19.7561 12.2609C19.5853 12.0897 19.4431 11.8922 19.3351 11.6759L18.2551 9.51586C18.2257 9.45723 18.1828 9.40643 18.1299 9.36764C18.0771 9.32884 18.0157 9.30316 17.951 9.29271C17.8862 9.28226 17.8199 9.28735 17.7575 9.30754C17.6951 9.32773 17.6384 9.36246 17.5921 9.40886C17.4878 9.51308 17.3575 9.58751 17.2147 9.62443C17.0719 9.66136 16.9219 9.65943 16.7801 9.61886L15.5071 9.25586C15.3034 9.1986 15.086 9.21577 14.8938 9.30429C14.7017 9.39282 14.5473 9.5469 14.4585 9.73891C14.3697 9.93093 14.3521 10.1483 14.409 10.3521C14.466 10.5559 14.5936 10.7327 14.7691 10.8509L15.3561 11.2409C15.9461 11.6359 16.0301 12.4709 15.5281 12.9729L15.3281 13.1729C15.1161 13.3849 14.9981 13.6709 14.9981 13.9689V14.3789C14.9981 14.7879 14.8881 15.1879 14.6781 15.5369L13.3631 17.7279C13.1756 18.0405 12.9104 18.2993 12.5932 18.4789C12.276 18.6585 11.9176 18.7529 11.5531 18.7529C11.2733 18.7529 11.005 18.6417 10.8071 18.4439C10.6092 18.246 10.4981 17.9777 10.4981 17.6979V16.5259C10.4981 15.6059 9.9381 14.7789 9.0841 14.4369L8.4291 14.1759C7.95254 13.9851 7.55554 13.6371 7.30398 13.1896C7.05242 12.7422 6.96142 12.2222 7.0461 11.7159L7.0531 11.6739C7.09958 11.3957 7.19796 11.1287 7.3431 10.8869L7.4331 10.7369C7.67192 10.3392 8.02782 10.025 8.45208 9.83741C8.87634 9.64981 9.34821 9.59792 9.8031 9.68886L10.9811 9.92486C11.2583 9.98015 11.5462 9.92906 11.7874 9.78175C12.0287 9.63444 12.2056 9.40171 12.2831 9.12986L12.4911 8.39986C12.5632 8.14766 12.5448 7.87822 12.4393 7.6381C12.3337 7.39799 12.1476 7.2023 11.9131 7.08486L11.2481 6.75286L11.1571 6.84386C10.9482 7.05279 10.7001 7.21852 10.4271 7.33159C10.1542 7.44467 9.86157 7.50286 9.5661 7.50286H9.3861C9.1371 7.50286 8.8991 7.60286 8.7241 7.77686C8.56371 7.9387 8.34955 8.0361 8.12217 8.05062C7.89479 8.06515 7.66997 7.99579 7.4903 7.85567C7.31063 7.71556 7.18858 7.51442 7.14726 7.29035C7.10594 7.06628 7.14822 6.83484 7.2661 6.63986L8.6771 4.28686C8.81773 4.05297 8.91465 3.79544 8.9631 3.52686M20.8911 13.3959C21.1333 11.853 20.9699 10.2737 20.4169 8.81309C19.8638 7.35252 18.9403 6.06099 17.7369 5.06547C16.5336 4.06995 15.0919 3.40469 13.5536 3.1351C12.0153 2.86551 10.4333 3.00087 8.9631 3.52786C7.46742 4.064 6.14033 4.98653 5.1167 6.20172C4.09306 7.4169 3.40937 8.88142 3.1351 10.4464C2.86084 12.0114 3.00577 13.6212 3.55517 15.112C4.10457 16.6029 5.03885 17.9217 6.26308 18.9345C7.48731 19.9473 8.95784 20.618 10.5252 20.8783C12.0926 21.1387 13.701 20.9795 15.1869 20.4169C16.6728 19.8542 17.9833 18.9083 18.9852 17.6751C19.9871 16.4419 20.6447 14.9655 20.8911 13.3959Z"
                    stroke="#FEFEFE"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="none"
                >
                  <path
                    d="M15 19V17C15 15.9391 14.5786 14.9217 13.8284 14.1716C13.0783 13.4214 12.0609 13 11 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19"
                    stroke="#FEFEFE"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 9C10.2091 9 12 7.20914 12 5C12 2.79086 10.2091 1 8 1C5.79086 1 4 2.79086 4 5C4 7.20914 5.79086 9 8 9Z"
                    stroke="#FEFEFE"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
