import Image from 'next/image';

const ServiceSection = () => {
  return (
    <>
   <div className="container pt-24 mx-auto px-4 md:px-10 lg:px-20 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 relative">
          Our Services
          <div className="h-1 bg-gray-400 w-1/4 mt-2"></div> 
        </h1>
        
        {/* Service 1 */}
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center mb-10">
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-3">EB1A Consulting and Coaching</h2>
            <p className='text-lg font-medium text-gray-800'>The EB1A category is designed for individuals who possess extraordinary abilities in their field. This category is ideal for those who have achieved significant accomplishments and can demonstrate sustained national or international acclaim. At Immigreat.ai, we offer:</p>
            <ul className="list-disc pl-5 mt-2 text-lg font-medium text-gray-800">
              <li>Personalized Consulting: We assess your qualifications and help you understand the EB1A criteria.</li>
              <li>Document Preparation: Assistance with preparing a compelling petition, including drafting letters of recommendation and highlighting your achievements.</li>
              <li>Strategic Guidance: Tailored advice on how to present your case effectively to the USCIS.</li>
            </ul>
          </div>
          <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center">
            <Image src='/unique_ability_r.jpg' alt="EB1A Service Image" width={500} height={300} />
          </div>
        </div>

        {/* Service 2 */}
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center">
          <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
            <Image src='/graduate_man.jpg' alt="EB2-NIW Service Image" width={500} height={300} />
          </div>
          <div className="md:w-2/3 md:pl-6">
            <h2 className="text-2xl font-bold mb-3">EB2-NIW Consulting and Coaching</h2>
            <p className='text-lg font-medium text-gray-800'>The EB2-NIW (National Interest Waiver) category is for individuals whose work is in the national interest of the United States. This category is suitable for those with advanced degrees or exceptional abilities. Our services include:</p>
            <ul className="list-disc pl-5 mt-2 text-lg font-medium text-gray-800">
              <li>Qualification Assessment: We evaluate your profile to ensure you meet the eligibility requirements for EB2-NIW.</li>
              <li>Comprehensive Support: Guidance through the entire application process, from gathering necessary documents to writing the petition.</li>
              <li>Expert Advice: Insights on how to best demonstrate the national importance of your work and your exceptional abilities.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
