import React from 'react';
import heroimage from "../../../assets/heroImg.jpg";
import Form from "../../components/Form";
import TrainerCarousel from '../../components/trainerCorousel';
import BottomNav from "../../components/BottomNav";
import Nav from '../../components/Nav';
import card1Icon from "../../../assets/card1Icon.svg";
import card2Icon from "../../../assets/card2Icon.svg";
import card3Icon from "../../../assets/card3Icon.svg";

const IELTSPage = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <Nav />
      {/* Hero Banner Section */}
      <div className="herobanner flex flex-col items-center gap-4 bg-[#FEFEFE] shadow-[0px_0.852px_5.785px_0px_rgba(0,0,0,0.02)] px-4 pt-5 pb-9 w-full max-w-[100%] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto">
        <h2 className="text-[#323232] text-center font-gt text-[22px] sm:text-[26px] md:text-[30px] leading-snug font-extrabold w-full">
          IELTS Webinars & Live Sessions
        </h2>
        <p className="text-[#323232] text-center font-inter text-sm sm:text-base leading-6 w-full">
          Join our live sessions designed to boost your IELTS scores. Led by certified
          trainers, these webinars cover all four modules—Listening, Reading, Writing,
          and Speaking—with live Q&A.
        </p>
        <div className="w-full mt-4">
          <img
            src={heroimage}
            alt="IELTS Webinar"
            className="w-full rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Container Cards Section */}
      <div className="px-4 py-6 max-w-[1140px] mx-auto">
        <div className="text-center mb-6">
          <p className="text-xl font-semibold font-inter">What You Will Learn At EEC</p>
          <p className="text-sm text-gray-600 mt-2 font-inter">
            We’re not just another IELTS coaching center. We’re your test prep
            partners — committed to your score, your goals, and your future.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-orange-100 rounded-lg p-4 shadow text-center">
            <img src={card1Icon} alt="card1 icons" className="mx-auto w-10 h-10 mb-2" />
            <p className="text-lg font-semibold text-orange-700">Proven Success Rates</p>
            <p className="text-sm text-gray-700 mt-1">
              Thousands of students score 7.5+ Bands every year — with many hitting 8 and above!
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-cyan-100 rounded-lg p-4 shadow text-center">
            <img src={card2Icon} alt="card2 icons" className="mx-auto w-[60px] h-[60px] mb-2" />
            <p className="text-lg font-semibold text-cyan-700">Certified Expert Trainers</p>
            <p className="text-sm text-gray-700 mt-1">
              Our mentors are IDP & British Council certified with years of real classroom and exam experience.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-pink-100 rounded-lg p-4 shadow text-center">
            <img src={card3Icon} alt="card3 icon" className="mx-auto w-[60px] h-[60px] mb-2" />
            <p className="text-lg font-semibold text-pink-700">Personalized Study Plans</p>
            <p className="text-sm text-gray-700 mt-1">
              We tailor learning paths based on your strengths, weak areas, and target score — not just a standard curriculum.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-green-100 rounded-lg p-4 shadow text-center">
            <svg alt="card4 icon" className="mx-auto mb-2" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M26.5639 34.7204H30.6673V20.0112C30.6673 19.8564 30.7288 19.7079 30.8383 19.5985C30.9478 19.489 31.0962 19.4275 31.2511 19.4275C31.4059 19.4275 31.5543 19.489 31.6638 19.5985C31.7733 19.7079 31.8348 19.8564 31.8348 20.0112V34.7204H35.9382V33.07C35.9303 32.3812 36.0986 31.7017 36.4271 31.0961C36.7555 30.4906 37.2333 29.979 37.815 29.6099C39.4944 28.5133 40.8743 27.0158 41.8304 25.2526C42.9425 23.1966 43.4316 20.8612 43.2378 18.5318C43.044 16.2023 42.1757 13.9798 40.7391 12.1359C39.3024 10.292 37.3597 8.90666 35.1484 8.14916C32.937 7.39166 30.5529 7.29485 28.2874 7.87056C26.0219 8.44628 23.9733 9.66958 22.3918 11.3909C20.8104 13.1122 19.7648 15.257 19.3828 17.5631C19.0007 19.8692 19.2989 22.2366 20.2407 24.3759C21.1825 26.5153 22.7272 28.3339 24.686 29.6094C25.2678 29.9784 25.7455 30.49 26.074 31.0956C26.4024 31.7012 26.5707 32.3806 26.5628 33.0695V34.7204H26.5639ZM31.2822 52.9446C32.533 50.6382 37.8266 47.8209 40.3499 47.1443C43.7044 46.244 47.2512 46.3656 50.5361 47.4937C50.6244 47.5272 50.7195 47.5388 50.8133 47.5275C50.9071 47.5162 50.9968 47.4824 51.0746 47.4288C51.1525 47.3753 51.2162 47.3036 51.2602 47.2201C51.3043 47.1365 51.3275 47.0435 51.3277 46.949V25.7281C51.9104 25.7985 52.4953 25.8907 53.0826 26.0047C53.7265 26.1292 54.3656 26.2793 55 26.4549V53.2512C50.8427 52.0505 46.4949 51.062 42.4225 51.0308C38.2214 50.9981 34.3275 51.9808 31.25 54.7881C28.1725 51.9829 24.2786 50.9981 20.0775 51.0308C16.0051 51.062 11.6573 52.0505 7.5 53.2512V26.4549C8.13333 26.2789 8.77247 26.1289 9.41742 26.0047C10.0043 25.891 10.5893 25.7988 11.1723 25.7281V46.9511C11.1722 47.0154 11.1829 47.0793 11.2039 47.1401C11.2541 47.2859 11.36 47.406 11.4985 47.4741C11.6369 47.5421 11.7967 47.5526 11.9428 47.5032C15.233 46.3689 18.7872 46.2447 22.1485 47.1464C25.6903 48.153 28.8627 50.1683 31.279 52.9467L31.2822 52.9446ZM35.9382 35.8863H26.5639V39.5971C26.5651 39.9326 26.699 40.2541 26.9362 40.4913C27.1735 40.7286 27.495 40.8625 27.8305 40.8637H34.6732C35.0087 40.8625 35.3302 40.7286 35.5675 40.4913C35.8047 40.2541 35.9386 39.9326 35.9398 39.5971V35.8884L35.9382 35.8863ZM30.6673 50.7063C28.2959 48.3826 25.3464 46.735 22.1243 45.9342C18.9022 45.1334 15.5247 45.2084 12.3413 46.1515V21.2647C14.198 20.6724 16.1411 20.3964 18.0893 20.4482C18.2175 22.3254 18.7481 24.1529 19.6452 25.8068C20.6948 27.7413 22.2098 29.3839 24.0532 30.5863C24.4719 30.8497 24.8154 31.2168 25.0505 31.6519C25.2857 32.087 25.4044 32.5755 25.3954 33.07V39.5992C25.3969 40.2443 25.6538 40.8625 26.11 41.3187C26.5661 41.7748 27.1844 42.0317 27.8295 42.0333H30.6673V50.7063ZM31.8348 42.0333H34.6732C35.3186 42.0323 35.9374 41.7756 36.394 41.3194C36.8506 40.8632 37.1079 40.2446 37.1094 39.5992V33.07C37.1003 32.5754 37.2191 32.0869 37.4543 31.6517C37.6896 31.2166 38.0333 30.8496 38.4521 30.5863C40.2949 29.3845 41.8096 27.7428 42.8595 25.8094C43.7567 24.1556 44.2873 22.328 44.4154 20.4509C46.3636 20.399 48.3067 20.675 50.1634 21.2673V46.1515C46.9801 45.2084 43.6025 45.1334 40.3804 45.9342C37.1583 46.735 34.2089 48.3826 31.8374 50.7063L31.8348 42.0333Z" fill="#69A042"/>
            </svg>
            <p className="text-lg font-semibold text-green-700">Flexible Batches</p>
            <p className="text-sm text-gray-700 mt-1">
              Weekday or weekend, online or in-person — we fit into your schedule, not the other way around.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-blue-100 rounded-lg p-4 shadow text-center">
            <svg alt="card5 icon" className="mx-auto mb-2" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M26.5639 34.7204H30.6673V20.0112C30.6673 19.8564 30.7288 19.7079 30.8383 19.5985C30.9478 19.489 31.0962 19.4275 31.2511 19.4275C31.4059 19.4275 31.5543 19.489 31.6638 19.5985C31.7733 19.7079 31.8348 19.8564 31.8348 20.0112V34.7204H35.9382V33.07C35.9303 32.3812 36.0986 31.7017 36.4271 31.0961C36.7555 30.4906 37.2333 29.979 37.815 29.6099C39.4944 28.5133 40.8743 27.0158 41.8304 25.2526C42.9425 23.1966 43.4316 20.8612 43.2378 18.5318C43.044 16.2023 42.1757 13.9798 40.7391 12.1359C39.3024 10.292 37.3597 8.90666 35.1484 8.14916C32.937 7.39166 30.5529 7.29485 28.2874 7.87056C26.0219 8.44628 23.9733 9.66958 22.3918 11.3909C20.8104 13.1122 19.7648 15.257 19.3828 17.5631C19.0007 19.8692 19.2989 22.2366 20.2407 24.3759C21.1825 26.5153 22.7272 28.3339 24.686 29.6094C25.2678 29.9784 25.7455 30.49 26.074 31.0956C26.4024 31.7012 26.5707 32.3806 26.5628 33.0695V34.7204H26.5639ZM31.2822 52.9446C32.533 50.6382 37.8266 47.8209 40.3499 47.1443C43.7044 46.244 47.2512 46.3656 50.5361 47.4937C50.6244 47.5272 50.7195 47.5388 50.8133 47.5275C50.9071 47.5162 50.9968 47.4824 51.0746 47.4288C51.1525 47.3753 51.2162 47.3036 51.2602 47.2201C51.3043 47.1365 51.3275 47.0435 51.3277 46.949V25.7281C51.9104 25.7985 52.4953 25.8907 53.0826 26.0047C53.7265 26.1292 54.3656 26.2793 55 26.4549V53.2512C50.8427 52.0505 46.4949 51.062 42.4225 51.0308C38.2214 50.9981 34.3275 51.9808 31.25 54.7881C28.1725 51.9829 24.2786 50.9981 20.0775 51.0308C16.0051 51.062 11.6573 52.0505 7.5 53.2512V26.4549C8.13333 26.2789 8.77247 26.1289 9.41742 26.0047C10.0043 25.891 10.5893 25.7988 11.1723 25.7281V46.9511C11.1722 47.0154 11.1829 47.0793 11.2039 47.1401C11.2541 47.2859 11.36 47.406 11.4985 47.4741C11.6369 47.5421 11.7967 47.5526 11.9428 47.5032C15.233 46.3689 18.7872 46.2447 22.1485 47.1464C25.6903 48.153 28.8627 50.1683 31.279 52.9467L31.2822 52.9446ZM35.9382 35.8863H26.5639V39.5971C26.5651 39.9326 26.699 40.2541 26.9362 40.4913C27.1735 40.7286 27.495 40.8625 27.8305 40.8637H34.6732C35.0087 40.8625 35.3302 40.7286 35.5675 40.4913C35.8047 40.2541 35.9386 39.9326 35.9398 39.5971V35.8884L35.9382 35.8863ZM30.6673 50.7063C28.2959 48.3826 25.3464 46.735 22.1243 45.9342C18.9022 45.1334 15.5247 45.2084 12.3413 46.1515V21.2647C14.198 20.6724 16.1411 20.3964 18.0893 20.4482C18.2175 22.3254 18.7481 24.1529 19.6452 25.8068C20.6948 27.7413 22.2098 29.3839 24.0532 30.5863C24.4719 30.8497 24.8154 31.2168 25.0505 31.6519C25.2857 32.087 25.4044 32.5755 25.3954 33.07V39.5992C25.3969 40.2443 25.6538 40.8625 26.11 41.3187C26.5661 41.7748 27.1844 42.0317 27.8295 42.0333H30.6673V50.7063ZM31.8348 42.0333H34.6732C35.3186 42.0323 35.9374 41.7756 36.394 41.3194C36.8506 40.8632 37.1079 40.2446 37.1094 39.5992V33.07C37.1003 32.5754 37.2191 32.0869 37.4543 31.6517C37.6896 31.2166 38.0333 30.8496 38.4521 30.5863C40.2949 29.3845 41.8096 27.7428 42.8595 25.8094C43.7567 24.1556 44.2873 22.328 44.4154 20.4509C46.3636 20.399 48.3067 20.675 50.1634 21.2673V46.1515C46.9801 45.2084 43.6025 45.1334 40.3804 45.9342C37.1583 46.735 34.2089 48.3826 31.8374 50.7063L31.8348 42.0333Z" fill="#2C74B9"/>
            </svg>
            <p className="text-lg font-semibold text-blue-700">Resource-Rich Learning</p>
            <p className="text-sm text-gray-700 mt-1">
              Exclusive practice materials, mock test simulations, grammar drills, and recorded sessions — all in one place.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-yellow-100 border border-yellow-400 rounded-lg p-4 shadow text-center">
            <svg alt="card6 icon" className="mx-auto mb-2" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M26.5639 34.7204H30.6673V20.0112C30.6673 19.8564 30.7288 19.7079 30.8383 19.5985C30.9478 19.489 31.0962 19.4275 31.2511 19.4275C31.4059 19.4275 31.5543 19.489 31.6638 19.5985C31.7733 19.7079 31.8348 19.8564 31.8348 20.0112V34.7204H35.9382V33.07C35.9303 32.3812 36.0986 31.7017 36.4271 31.0961C36.7555 30.4906 37.2333 29.979 37.815 29.6099C39.4944 28.5133 40.8743 27.0158 41.8304 25.2526C42.9425 23.1966 43.4316 20.8612 43.2378 18.5318C43.044 16.2023 42.1757 13.9798 40.7391 12.1359C39.3024 10.292 37.3597 8.90666 35.1484 8.14916C32.937 7.39166 30.5529 7.29485 28.2874 7.87056C26.0219 8.44628 23.9733 9.66958 22.3918 11.3909C20.8104 13.1122 19.7648 15.257 19.3828 17.5631C19.0007 19.8692 19.2989 22.2366 20.2407 24.3759C21.1825 26.5153 22.7272 28.3339 24.686 29.6094C25.2678 29.9784 25.7455 30.49 26.074 31.0956C26.4024 31.7012 26.5707 32.3806 26.5628 33.0695V34.7204H26.5639ZM31.2822 52.9446C32.533 50.6382 37.8266 47.8209 40.3499 47.1443C43.7044 46.244 47.2512 46.3656 50.5361 47.4937C50.6244 47.5272 50.7195 47.5388 50.8133 47.5275C50.9071 47.5162 50.9968 47.4824 51.0746 47.4288C51.1525 47.3753 51.2162 47.3036 51.2602 47.2201C51.3043 47.1365 51.3275 47.0435 51.3277 46.949V25.7281C51.9104 25.7985 52.4953 25.8907 53.0826 26.0047C53.7265 26.1292 54.3656 26.2793 55 26.4549V53.2512C50.8427 52.0505 46.4949 51.062 42.4225 51.0308C38.2214 50.9981 34.3275 51.9808 31.25 54.7881C28.1725 51.9829 24.2786 50.9981 20.0775 51.0308C16.0051 51.062 11.6573 52.0505 7.5 53.2512V26.4549C8.13333 26.2789 8.77247 26.1289 9.41742 26.0047C10.0043 25.891 10.5893 25.7988 11.1723 25.7281V46.9511C11.1722 47.0154 11.1829 47.0793 11.2039 47.1401C11.2541 47.2859 11.36 47.406 11.4985 47.4741C11.6369 47.5421 11.7967 47.5526 11.9428 47.5032C15.233 46.3689 18.7872 46.2447 22.1485 47.1464C25.6903 48.153 28.8627 50.1683 31.279 52.9467L31.2822 52.9446ZM35.9382 35.8863H26.5639V39.5971C26.5651 39.9326 26.699 40.2541 26.9362 40.4913C27.1735 40.7286 27.495 40.8625 27.8305 40.8637H34.6732C35.0087 40.8625 35.3302 40.7286 35.5675 40.4913C35.8047 40.2541 35.9386 39.9326 35.9398 39.5971V35.8884L35.9382 35.8863ZM30.6673 50.7063C28.2959 48.3826 25.3464 46.735 22.1243 45.9342C18.9022 45.1334 15.5247 45.2084 12.3413 46.1515V21.2647C14.198 20.6724 16.1411 20.3964 18.0893 20.4482C18.2175 22.3254 18.7481 24.1529 19.6452 25.8068C20.6948 27.7413 22.2098 29.3839 24.0532 30.5863C24.4719 30.8497 24.8154 31.2168 25.0505 31.6519C25.2857 32.087 25.4044 32.5755 25.3954 33.07V39.5992C25.3969 40.2443 25.6538 40.8625 26.11 41.3187C26.5661 41.7748 27.1844 42.0317 27.8295 42.0333H30.6673V50.7063ZM31.8348 42.0333H34.6732C35.3186 42.0323 35.9374 41.7756 36.394 41.3194C36.8506 40.8632 37.1079 40.2446 37.1094 39.5992V33.07C37.1003 32.5754 37.2191 32.0869 37.4543 31.6517C37.6896 31.2166 38.0333 30.8496 38.4521 30.5863C40.2949 29.3845 41.8096 27.7428 42.8595 25.8094C43.7567 24.1556 44.2873 22.328 44.4154 20.4509C46.3636 20.399 48.3067 20.675 50.1634 21.2673V46.1515C46.9801 45.2084 43.6025 45.1334 40.3804 45.9342C37.1583 46.735 34.2089 48.3826 31.8374 50.7063L31.8348 42.0333Z" fill="#E5AF27"/>
            </svg>
            <p className="text-lg font-semibold text-yellow-700">End-to-End Study Support</p>
            <p className="text-sm text-gray-700 mt-1">
              Doubt clearing, speaking practice, personalized feedback, and coaching to keep you motivated till the exam day.
            </p>
          </div>
        </div>
      </div>

      {/* Seminar Section */}
      <div className="seminars w-full inline-flex flex-col items-center gap-5 px-4 py-9 sm:px-4 sm:py-9">
        <div className="description flex flex-col items-start gap-2 w-full">
          <p className="subheading text-[#323232] text-center font-[GT Walsheim Trial] text-[24px] font-bold leading-[32px] self-stretch sm:text-[26px] sm:leading-[34px]">
            Join Our Upcoming Events
          </p>
          <p className="short-title text-[#5B5B5B] text-center font-inter text-[16px] font-normal leading-[24px] self-stretch sm:text-[15px] sm:leading-[22px]">
            Join our live sessions and experience learning from our Elite Mentors
          </p>
        </div>

        {/* Webinar Slot 1 */}
        <div className="WebinarSlot1 flex flex-col justify-between items-start w-full h-[220px] px-6 py-8 rounded-[12px] border-2 border-[#FFA585] bg-[linear-gradient(90deg,rgba(255,165,133,0.14)_0.65%,rgba(255,237,160,0.14)_100%)] backdrop-blur-[30px]">
          <p className="small-text text-[#767676] font-inter text-[14px] font-medium leading-[20px] self-stretch sm:text-[13px] sm:leading-[18px]">
            7209 Skiles Ways • 2th May, 4PM
          </p>
          <p className="text-[#323232] font-inter text-[20px] font-bold leading-[30px] flex-1 sm:text-[18px] sm:leading-[27px]">
            IELTS Writing Deep Dive Session with Rajeev Gupta
          </p>
          <button className="button flex justify-center items-center gap-2.5 px-3.5 py-2 rounded-[6px] bg-[#323232] self-stretch sm:px-3.5 sm:py-2">
            <p className="text-[#FEFEFE] font-inter text-[14px] font-bold leading-[20px] sm:text-[13px] sm:leading-[18px]">
              Book A Slot Now
            </p>
          </button>
        </div>

        {/* Webinar Slot 2 */}
        <div className="WebinarSlot2 flex flex-col justify-between items-start w-full h-[220px] px-6 py-8 rounded-[12px] border-2 border-[#4557F6] bg-[linear-gradient(0deg,rgba(69,87,246,0.14)_15.75%,rgba(215,219,255,0.14)_86.85%)] backdrop-blur-[30px]">
          <p className="small-text text-[#767676] font-inter text-[14px] font-medium leading-[20px] self-stretch sm:text-[13px] sm:leading-[18px]">
            67235 Rempel Glen • 6th May, 2PM
          </p>
          <p className="text-[#323232] font-inter text-[20px] font-bold leading-[30px] flex-1 sm:text-[18px] sm:leading-[27px]">
            Speaking Mock Test Session (LIVE) with Nirmala Thakur
          </p>
          <button className="button flex justify-center items-center gap-2.5 px-3.5 py-2 rounded-[6px] bg-[#323232] self-stretch sm:px-3.5 sm:py-2">
            <p className="text-[#FEFEFE] font-inter text-[14px] font-bold leading-[20px] sm:text-[13px] sm:leading-[18px]">
              Book A Slot Now
            </p>
          </button>
        </div>

        {/* Webinar Slot 3 */}
        <div className="WebinarSlot3 flex flex-col justify-between items-start w-full h-[220px] px-6 py-8 rounded-[12px] border-2 border-[#88D1D8] bg-[linear-gradient(270deg,rgba(136,209,216,0.14)_0%,rgba(200,238,241,0.14)_99.54%)] backdrop-blur-[30px]">
          <p className="text-[#767676] font-inter text-[14px] font-medium leading-[20px] self-stretch sm:text-[13px] sm:leading-[18px]">
            44729 Rowan Divide • 10th May, 5PM
          </p>
          <p className="text-[#323232] font-inter text-[20px] font-bold leading-[30px] flex-1 sm:text-[18px] sm:leading-[27px]">
            Study Tips With Band 9 Toppers with Ayaan Sharma
          </p>
          <button className="flex justify-center items-center gap-2.5 px-3.5 py-2 rounded-[6px] bg-[#323232] self-stretch sm:px-3.5 sm:py-2">
            <p className="text-[#FEFEFE] font-inter text-[14px] font-bold leading-[20px] sm:text-[13px] sm:leading-[18px]">
              Book A Slot Now
            </p>
          </button>
        </div>
      </div>

      {/* Trainer Carousel */}
      <TrainerCarousel />

      {/* Form Section */}
      <Form
        heading="Join Our Whatsapp Group"
        subHeading="Stay informed and reap the benefits of our expert-led live sessions and webinars."
        showMessage={false}
        showReminder={true}
        button="Reserve My Spot"
      />
      {/* <BottomNav /> */}
    </div>
  );
};

export default IELTSPage;
