import React from 'react';

const MeetOurFaculty = () => {
  const data = {
    title: "Meet Our Faculty & Team",
    description:
      "Behind every great score is a great mentor. At EEC, our team is made up of certified professionals, passionate educators, and counselors who care about your growth as much as you do.",
    members: [
      {
        name: "Mr. Rajeev Sharma",
        title: "IELTS Head Trainer",
        experience: "15+ years of experience | British Council & IDP Certified",
        rating: 8.5,
        description: "Known for advanced writing strategies",
        imageUrl: "/images/img2.png",
      },
      {
        name: "Ms. Priya Mehta",
        title: "Senior Trainer",
        experience: "8+ years training experience",
        rating: 8.5,
        description: "Student favorite for speaking and listening modules",
        imageUrl: "/images/image.png",
      },
      {
        name: "Ms. Richa Jain",
        title: "Academic Counselor",
        experience: "",
        rating: 8.5,
        description: "Guides students through test prep timelines, study plans, and university shortlisting",
        imageUrl: "/images/img2.png",
      },
      {
        name: "Mr. Amit Taneja",
        title: "Speaking Coach",
        experience: "",
        rating: 8.5,
        description: "IELTS speaking specialist with a knack for boosting confidence and fluency",
        imageUrl: "/images/image.png",
      },
    ],
  };

  return (
    <div className="bg-[#FEFEFE] w-full py-9 px-4 flex flex-col items-start gap-6">
      {/* Title + Description */}
      <div className="w-full text-center flex flex-col gap-3">
        <p className="text-[#323232] text-xl font-bold leading-[30px]">
          {data.title}
        </p>
        <p className="text-[#5B5B5B] text-sm font-normal leading-5">
          {data.description}
        </p>
      </div>

      {/* Faculty Cards */}
      <div className="flex flex-col w-full">
        {data.members.map((member, index) => (
          <div
            key={index}
            className={`flex ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } justify-start items-stretch bg-white rounded-lg p-3 relative`}
          >
            {/* Image */}
            <div className="relative w-1/2 h-full flex-shrink-0 overflow-visible z-[1]">
              <img
                className="min-w-[162px] w-full min-h-[118px] object-cover rounded-lg"
                src={member.imageUrl}
                alt={member.name}
              />
            </div>

            {/* Text Info */}
            <div 
              className={`${index === 1 || index ===3 ? "left-0":"right-0"}  flex flex-col p-[10px] justify-center items-center gap-[6px] flex-1 self-stretch border border-[#F0F0F0] bg-[#FEFEFE] rounded-br-[8px] rounded-bl-[8px] h-[168px] absolute bottom-0 w-[56%] top-[17%]`}
              style={{boxShadow: '[0px 4px 12px 0px rgba(0, 0, 0, 0.07)]'}}
            >
              <div>
                <p className="text-[#323232] font-inter text-center text-base font-bold leading-6 self-stretch">
                  {member.name}
                </p>
                <p className="text-[#5B5B5B] text-sm font-medium leading-5 text-center">
                  {member.title}
                </p>
              </div>
              <p className="text-[#5B5B5B] text-xs font-inter self-stretch text-center font-normal leading-4 w-[90%] mx-auto">
                {member.experience}
                {member.experience && member.description ? " | " : ""}
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetOurFaculty;
