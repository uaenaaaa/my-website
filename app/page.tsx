import React from 'react';
import { certificationsListsPreview } from '@/app/data/CertificationsListsPreview';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
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
								size={125}
								className='top-0 left-[15%] absolute fill-[#3DDB86]'
							/>
							<FaNodeJs
								size={125}
								className='absolute bottom-0 z-20 right-[5%] fill-[#24B45D]'
							/>
							<FaReact
								size={125}
								className='absolute duration-15000 animate-spin z-30 top-[50%] left-0 fill-[#62ADFC]'
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
								<h1 className='font-bold text-xl md:text-3xl'>
									Annyeonghaseyo, Jeoneun Peurolan(Froilan) imnida,
								</h1>
								<p className='text-xs md:text-base'>
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
					<div
						className='
							w-full
							flex
							flex-col
							pb-3
							items-center'>
						<h1
							className='
								text-left
								self-start
								font-bold
								text-3xl
								lg:font-extrabold
								md:text-2xl
								lg:text-3xl
								xl:text-5xl'>
							Certifications & Badges
						</h1>
					</div>
					<div
						className='
							w-3/4
							grid
							grid-rows-3
							grid-cols-1
							md:grid-cols-2
							lg:grid-cols-3
							gap-5
							sm:gap-3
							justify-around
							'>
						{certificationsListsPreview.map((cert, index) => {
							return (
								<Card key={index}>
									<CardHeader>
										<CardTitle>{cert.title}</CardTitle>
										<CardDescription>{cert.description}</CardDescription>
									</CardHeader>
									<CardContent>
										<Button variant='default'>
											<Link href={cert.link}>View Certificate</Link>
										</Button>
									</CardContent>
								</Card>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}
