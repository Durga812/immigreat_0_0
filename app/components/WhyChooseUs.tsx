
import Image from 'next/image';


const WhyChooseUsSection = () => {
  return (
    <div className="bg-white px-4 py-4">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 relative">Why Choose Us?</h2>
        <div className="h-1 bg-gray-400 w-1/4 mb-6"></div> 

        <div className="flex flex-wrap md:flex-nowrap">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <Image src="/thinking_man.jpg" alt="Feature Image" width={500} height={350} />
          </div>
          <div className="md:w-1/2 text-left pl-4 m-auto">
            <div className="text-lg font-medium text-gray-800 mb-4">
              <span className="font-bold">Expertise:</span> Our team has extensive experience with the EB1A and EB2-NIW categories, and we understand the nuances of each type of petition.
            </div>
            <div className="text-lg font-medium text-gray-800 mb-4">
              <span className="font-bold">Personalized Approach:</span> We provide tailored consulting and coaching to fit your unique background and achievements.
            </div>
            <div className="text-lg font-medium text-gray-800 mb-4">
              <span className="font-bold">Success-Driven:</span> Our focus is on helping you achieve a successful outcome. We are dedicated to your immigration goals and work diligently to ensure your petition is as strong as possible.
            </div>
            <div className="text-lg font-medium text-gray-800 mb-4">
              <span className="font-bold">Proven Track Record:</span>  We have a history of successful petitions and satisfied clients, demonstrating our commitment to excellence and effectiveness in navigating complex immigration cases.
            </div>
            <div className="text-lg font-medium text-gray-800 mb-4">
              <span className="font-bold">Comprehensive Support: </span>We offer continuous assistance throughout the entire process, from document preparation to submission, ensuring a seamless and thorough application experience.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
