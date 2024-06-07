import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import CertificationSection from '@/app/components/Certification/CertificationSection';
import FooterSection from '@/app/components/Footer/FooterSection';
import Me from '@/public/images/me.png';
import { FaAndroid, FaNodeJs, FaReact } from 'react-icons/fa';
import Image from 'next/image';
import NowPlayingWidget from '@/components/widget/NowPlayingWidget';

export default function Home() {
	return (
		<>
			<div className='w-full flex justify-center flex-col items-center'>
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
					<div className='flex flex-col lg:flex-row-reverse gap-5 w-full md:w-[95%]'>
						<div className='w-full flex justify-center relative items-center'>
							<FaAndroid
								size={75}
								className='top-0 left-[15%] absolute fill-[#3DDB86]'
							/>
							<FaNodeJs
								size={95}
								className='absolute bottom-0 z-20 right-[5%] fill-[#24B45D]'
							/>
							<FaReact
								size={75}
								className='absolute z-30 top-[50%] left-0 fill-[#62ADFC]'
							/>
							<Image
								priority={true}
								className='w-3/4 z-10'
								src={Me}
								alt='Picture of the Developer'
							/>
						</div>
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
									Software Developer Based In Caloocan Philippines
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
							<NowPlayingWidget />
						</div>
					</div>
					<CertificationSection />
					<FooterSection />
				</div>
			</div>
		</>
	);
}
