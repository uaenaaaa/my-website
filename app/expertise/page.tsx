import React from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

export const metadata = {
	title: 'Expertise - Froilan | Software Engineer',
	description: 'Personal Website of Froilan',
};

const Expertise = ({}) => {
	return (
		<>
			<div
				className='
					w-[95%]
					md:w-[90%]
					lg:w-[80%]
					xl:w-[70%]
					flex
					flex-col
					gap-2
					justify-start
					items-start'>
				<h1
					className='
						font-bold
						text-3xl
						lg:font-extrabold
						md:text-4xl
						lg:text-5xl
						xl:text-8xl'>
					Expertise
				</h1>
				<div className='w-full flex mt-2 flex-col'>
					<div className='w-full'>
						<Card>
							<CardHeader>
								<CardTitle>Information and Communication Technology</CardTitle>
							</CardHeader>
							<CardContent>
								I am an expert in the field of information and communication
								technology (ICT), and I love it. I earned my NC-II license in
								2021 while I was a senior in high school, demonstrating my
								proficiency in this area. I developed my skills in a variety of
								concentrations while focusing on my specialty strand in ICT. In
								order to provide outstanding visual content, I started dabbling
								in the field of visual graphic design in grade 11. I
								concentrated on computer hardware and networking in grade 12,
								learning useful skills for configuring and managing computer
								systems. I maintained a stellar academic record during the
								course of the two years, earning an average grade of 92. With
								such an amazing history, I am sure that I will be able to
								contribute my creativity, technical expertise, and commitment to
								any ICT/IT project I embark on.
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</>
	);
};

export default Expertise;
