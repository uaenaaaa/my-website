import React from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
	title: 'Contacts - Froilan | Software Engineer',
};

const Contacts = () => {
	return (
		<Card
			className='
      w-[95%]
      md:w-[90%]
      lg:w-[80%]
      xl:w-[50%]
      flex
      flex-col
      gap-10
      justify-start
      items-start'>
			<CardHeader>
				<CardTitle
					className='font-bold
                self-start
                text-3xl
                lg:font-extrabold
                md:text-5xl
                lg:text-7xl'>
					Contact
				</CardTitle>
				<CardDescription>
					Feel at liberty to reach out to me via{' '}
					<Link
						className='font-bold'
						href='mailto:froilanaquino1@gmail.com'>
						email
					</Link>
					.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<h1>froilanaquino1@gmail.com</h1>
			</CardContent>
			<CardFooter>
				<Button>GET MY CV</Button>
			</CardFooter>
		</Card>
	);
};

export default Contacts;
