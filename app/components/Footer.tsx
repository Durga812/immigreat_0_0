import Link from "next/link";

const Footer = () => {
    return (
      <footer id="contact-us">
        <div className="bg-gray-300 text-gray-800 py-8 px-4">
          <div className="container mx-auto px-4 md:px-10 lg:px-20 flex flex-wrap md:flex-nowrap justify-between items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h5 className="text-xl font-bold underline mb-2">Contact Us</h5>
              <p className="text-gray-800">Ready to take the next step in your immigration journey? Contact Immigreat.ai today to schedule a consultation and learn how we can help you achieve your green card goals.</p>
            </div>
            <div className="md:w-1/2 text-left text-gray-800 md:text-right">
              <p>Email: info@company.ai</p>
              <p>Call: 01-446-54546-2</p>
              <p>Address: Raleigh, North Carolina, USA, 45751</p>
            </div>
          </div>
        </div>
        <div className="bg-white text-center py-4">
          <p>All rights reserved by <span className="font-bold">Immigreat.ai LLC</span>, All illustrations are used from <Link href='https://www.freepik.com/' className="font-bold">Freepic.com</Link></p>
        </div>
      </footer>
    );
  };
  export default Footer;