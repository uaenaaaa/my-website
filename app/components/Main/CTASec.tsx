'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CTASec = () => {
	return (
		<>
			<div
				className='
        w-full
        flex
        flex-col
        justify-center
        relative
        gap-10
        items-left'>
				<div
					className='
          w-3/4
          flex
          justify-center
          flex-col
          items-left'>
					<h1 className='font-bold text-3xl'>Hi! I&apos;m Froilan,</h1>
					<p className='text-xs md:hidden'>Software Developer Based In</p>
					<p className='text-xs md:hidden'>Caloocan Philippines</p>
					<p className='text-xs hidden md:block'>
						Software Developer and Cybersecurity Novice Based In Caloocan
						Philippines
					</p>
				</div>
				<Button
					asChild
					className='w-fit'>
					<Link
						target='_blank'
						href={'https://discord.gg/6Tfcg6Ta8N'}>
						Join My Discord
					</Link>
				</Button>
			</div>
		</>
	);
};

export default CTASec;
