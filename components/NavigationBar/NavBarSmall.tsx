import React from 'react';
import Logo from '../logo';
import Links from '../../app/components/Links/Links';
import Socials from '../../app/components/Socials/Socials';
import Button from '../../app/components/Button';

const NavBarSmall = () => {
	return (
		<>
			<div
				className='
        flex
        flex-row
        items-start
        justify-between
        w-[95%]
        md:hidden
      '>
				<div
					className='
          flex
          flex-col
          w-[70%]
          gap-2
        '>
					<Logo />
					<Links />
				</div>
				<div
					className='
          w-[35%]
          flex
          flex-col
          justify-center
          items-end
          gap-5
        '>
					<Socials />
					<Button
						className='rounded-lg
            w-3/4
            text-white
            text-sm
            bg-black
            dark:bg-white
            dark:text-black
            p-[5px]'
						text='Projects'
					/>
				</div>
			</div>
		</>
	);
};

export default NavBarSmall;
