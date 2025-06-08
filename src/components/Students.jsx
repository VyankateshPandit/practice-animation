import React from "react";
import "./Students.css";
import img1 from "../../assets/img1.svg";
import img2 from "../../assets/img2.svg";
import img3 from "../../assets/img3.svg";
import { useState } from "react";

function Students(props){
  const descripName = [
    {
      id: 1,
      descrip:
        "EEC Global’s structured approach and expert coaching made all the difference!",
      name: "Renee Wells",
    },
    {
      id: 2,
      descrip:
        "EEC desc2 structured approach and expert coaching helped me score Band 8.0!",
      name: "Felipe Lind",
    },
    {
      id: 3,
      descrip:
        "EEC desc3 helped me boost my confidence with 1:1 sessions and AI mock tests!",
      name: "Alicia Kovacek",
    },
  ];
      
  const images = [img1, img2, img3];
  const [index, setIndex] = useState(0);
  const [current, setCurrent] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
        
  const handleNext = () => {
      setCurrent((prev1) => (prev1 + 1) % images.length);
      setCurrentIndex((prev) => (prev + 1) % descripName.length);
  };
  
  const handlePrev = () => {
      setCurrent((prev1) => (prev1 - 1 + images.length) % images.length);
      setCurrentIndex(
        (prev) => (prev - 1 + descripName.length) % descripName.length
      );
  };

  const getVisibleImages = () => {
    const prevIndex = (current - 1 + images.length) % images.length;
    const nextIndex = (current + 1) % images.length;
  
    return [
      { image: images[prevIndex], originalIndex: prevIndex },
      { image: images[current], originalIndex: current },
      { image: images[nextIndex], originalIndex: nextIndex },
    ];
  };
  
    
  return (
    <div className="students">
        <div className="heading-and-text">
            <h2>Hear from Real Students</h2>
            <p>Trusted by thousands across Gujarat who made their IELTS dreams real.</p>
        </div>
        <div className="text-and-images">
            <div className="name-and-descrip">
                <p className="name">{descripName[current].name}</p>
                {props.showName && <p className={`Name Name${descripName[current].id}`} key={index}>
                  {descripName[currentIndex].name}
                </p> }
                <p className="descrip">{descripName[current].descrip}</p>
            </div>
            <div className="images">
            {getVisibleImages().map(({ image, originalIndex }, index) => (
                <img
                  src={image}
                  alt={`img-${originalIndex}`}
                  className={`img${index}`}
                  key={`image-${originalIndex}-${index}`} 
                />
              ))}

            </div>
        </div>
        <div className="btns">
            <div className="left-btn" onClick={handlePrev}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" >
                    <path d="M15.8334 10.0001H4.16675M4.16675 10.0001L10.0001 15.8334M4.16675 10.0001L10.0001 4.16675" stroke="#767676" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <div className="right-btn" onClick={handleNext}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"> 
                    <path d="M4.16675 10.0001H15.8334M15.8334 10.0001L10.0001 4.16675M15.8334 10.0001L10.0001 15.8334" stroke="#767676" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    </div>
  )
}

export default Students;