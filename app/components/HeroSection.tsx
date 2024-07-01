import Image from 'next/image';

  const HeroSection = () => {
    return (
      <div className="container mx-auto px-4 py-12 -mb-24 md:px-10 lg:px-20">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 text-left ml-5 mt-20 md:text-left space-y-4">
            <h1 className="text-4xl font-bold text-gray-800">
              <span>Welcome</span><br />
              <span>to Immigreat.ai</span>
            </h1>
            <p className="text-lg font-medium text-gray-700">
              Simplify your green card and visa applications from home with user-friendly tools, expert guidance, and step-by-step instructions for a stress-free, efficient process.
            </p>
          </div>
          <div className="md:w-1/2 mt-2  md:mt-0 flex justify-center">
            <Image src='/passing_border.jpg' alt="Hero Image" layout="responsive" width={700} height={500} />
          </div>
        </div>
      </div>
    );
  };
  
  export default HeroSection;