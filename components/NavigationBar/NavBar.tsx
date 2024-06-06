import React from 'react';
import Logo from '@/components/logo';
import Links from '../../app/components/Links/Links';
import Socials from '../../app/components/Socials/Socials';

const NavBar = () => {
	return (
		<>
			<div
				className='
      hidden
      md:flex
      w-full
      md:w-[90%]
      lg:w-[85%]
      xl:w-[80%]
      items-center
      flex-row
      justify-between
      '>
				<Logo />
				<Links />
				<Socials />
			</div>
		</>
	);
};

export default NavBar;
