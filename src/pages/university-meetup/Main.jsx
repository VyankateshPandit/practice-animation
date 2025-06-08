import React, { useState } from 'react'
import Container from './Container'
import HeroBanner from '../../components/HeroBanner'
import headerImage from "../../../assets/headerImage.svg";
import subtract from "../../../assets/Subtract.svg";
import subtract2 from "../../../assets/Subtract2.svg";
import Form from '../../components/Form';
import mainImage1 from '../../../assets/second banner.png';
import mainImage2 from '../../../assets/img2.png'
import mainImage3 from '../../../assets/img3.png'
import Students from '../../components/Students'
import Bootcamp from '../../components/Bootcamp';
import Nav from '../../components/Nav';

const bootcampData = 
[
    {
        id: 1,
        text: "751 Jermey Neck • 1 May, 2 PM",
        heading: "Virtual Admission Fair: UK & Australia",
        btnText: "Book A Slot Now",
    },
    {
        id: 2,
        text: "329 Tius Ways • 3 May, 4PM",
        heading: "University of Toronto Session",
        btnText: "Book A Slot Now",
    },
];

const Main = () => {
   const examImages = [headerImage, subtract, subtract2];
  const carouselImages = [mainImage1, mainImage2, mainImage3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  return (
    <div className='w-full overflow-hidden'>
      <Nav />
      <HeroBanner
        heading="Talk to University Representatives"
        subHeading="Download high-impact resources or join a live grammar masterclass."
        images={examImages}
      />
      <Container />
      <Bootcamp data={bootcampData} heading= "Join Our Upcoming Live Sessions" subHeading="Connect with our expert counsellors to gain valuable insights and get ready for your dream destination!"/>
      <Students/>
      <Form
        heading="Join Our Whatsapp Group"
        subHeading="Stay informed and reap the benefits of our expert-led live sessions and webinars."
        showMessage={false}
        showReminder={true}
        button="Reserve My Spot"
      />
    </div>
  );
};

export default Main;
