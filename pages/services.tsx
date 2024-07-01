

import Image from 'next/image';
import Layout from '@/app/layout';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import "../app/globals.css"
import ServiceSection from '@/app/components/ServiceSection';


const Services = () => {
  return (

    <><Navbar/>
      <ServiceSection/>
      <Footer/>
    </>
  );
};

export default Services;