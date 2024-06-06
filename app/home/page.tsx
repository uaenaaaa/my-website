import React from 'react';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/Projects/ProjectsSection';
import CertificationSection from '../components/Certification/CertificationSection';
import FooterSection from '../components/Footer/FooterSection';

const HomePage = ({}) => {
	return (
		<>
			<div
				className='
      w-[95%]
      md:w-[90%]
      lg:w-[80%]
      xl:w-[75%]
      gap-y-10
      flex
      pt-5
      flex-col
      items-center
      justify-center'>
				<HeroSection />
				<CertificationSection />
				<FooterSection />
			</div>
		</>
	);
};

export default HomePage;
