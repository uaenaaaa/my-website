import Link from 'next/link';
import React from 'react';
import { ThemeToggler } from '@/components/ThemeToggler';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';

export const metadata = {
	title: 'Socials | Froilan | Software Engineer',
	description: 'Personal Website of Froilan',
};
const LinkedIn = () => {
	return (
		<svg
			className='w-6 h-6 md:w-8 md:h-8'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				className='fill-current'
				d='M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z'
				fill='#0F0F0F'
			/>
			<path
				className='fill-current'
				d='M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z'
				fill='#0F0F0F'
			/>
			<path
				className='fill-current'
				d='M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z'
				fill='#0F0F0F'
			/>
			<path
				className='fill-current'
				fillRule='evenodd'
				clipRule='evenodd'
				d='M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z'
				fill='#0F0F0F'
			/>
		</svg>
	);
};

const Github = () => {
	return (
		<svg
			className='w-6 h-6 md:w-8 md:h-8'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				className='stroke-current'
				fillRule='evenodd'
				clipRule='evenodd'
				d='M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5125 19.15C7 19.6125 6.35 18.5375 6.15 17.975C6.0375 17.6875 5.55 16.8 5.125 16.5625C4.775 16.375 4.275 15.9125 5.1125 15.9C5.9 15.8875 6.4625 16.625 6.65 16.925C7.55 18.4375 8.9875 18.0125 9.5625 17.75C9.65 17.1 9.9125 16.6625 10.2 16.4125C7.975 16.1625 5.65 15.3 5.65 11.475C5.65 10.3875 6.0375 9.4875 6.675 8.7875C6.575 8.5375 6.225 7.5125 6.775 6.1375C6.775 6.1375 7.6125 5.875 9.525 7.1625C10.325 6.9375 11.175 6.825 12.025 6.825C12.875 6.825 13.725 6.9375 14.525 7.1625C16.4375 5.8625 17.275 6.1375 17.275 6.1375C17.825 7.5125 17.475 8.5375 17.375 8.7875C18.0125 9.4875 18.4 10.375 18.4 11.475C18.4 15.3125 16.0625 16.1625 13.8375 16.4125C14.2 16.725 14.5125 17.325 14.5125 18.2625C14.5125 19.6 14.5 20.675 14.5 21.0125C14.5 21.275 14.6875 21.5875 15.1875 21.4875C17.1727 20.8173 18.8977 19.5415 20.1198 17.8395C21.3419 16.1376 21.9995 14.0953 22 12C22 6.475 17.525 2 12 2Z'
				strokeLinejoin='round'
			/>
		</svg>
	);
};

const Instagram = () => {
	return (
		<svg
			className='w-6 h-6 md:w-8 md:h-8'
			viewBox='0 0 192 192'
			xmlns='http://www.w3.org/2000/svg'
			fill='none'>
			<path
				className='stroke-current'
				strokeWidth='12'
				d='M96 162c-14.152 0-24.336-.007-32.276-.777-7.849-.761-12.87-2.223-16.877-4.741a36 36 0 0 1-11.33-11.329c-2.517-4.007-3.98-9.028-4.74-16.877C30.007 120.336 30 110.152 30 96c0-14.152.007-24.336.777-32.276.76-7.849 2.223-12.87 4.74-16.877a36 36 0 0 1 11.33-11.33c4.007-2.517 9.028-3.98 16.877-4.74C71.663 30.007 81.847 30 96 30c14.152 0 24.336.007 32.276.777 7.849.76 12.87 2.223 16.877 4.74a36 36 0 0 1 11.329 11.33c2.518 4.007 3.98 9.028 4.741 16.877.77 7.94.777 18.124.777 32.276 0 14.152-.007 24.336-.777 32.276-.761 7.849-2.223 12.87-4.741 16.877a36 36 0 0 1-11.329 11.329c-4.007 2.518-9.028 3.98-16.877 4.741-7.94.77-18.124.777-32.276.777Z'
			/>
			<circle
				className='stroke-current'
				cx='96'
				cy='96'
				r='30'
				strokeWidth='12'
			/>
			<circle
				className='stroke-current'
				cx='135'
				cy='57'
				r='9'
			/>
		</svg>
	);
};

const Socials = () => {
	return (
		<div className='flex flex-row md:w-1/5 lg:w-1/4 xl:w-[15%] w-1/8 justify-end gap-5 items-center'>
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger asChild>
						<Link
							target='_blank'
							href='https://github.com/froilanimnida'>
							<Github />
						</Link>
					</TooltipTrigger>
					<TooltipContent>
						<p>@froilanimnida</p>
					</TooltipContent>
				</Tooltip>

				<Tooltip>
					<TooltipTrigger asChild>
						<Link
							target='_blank'
							href='https://instagram.com/froilanimnida'>
							<Instagram />
						</Link>
					</TooltipTrigger>
					<TooltipContent>
						<p>@froilanimnida</p>
					</TooltipContent>
				</Tooltip>

				<Tooltip>
					<TooltipTrigger asChild>
						<Link
							target='_blank'
							href='https://linkedin.com/in/froilanimnida'>
							<LinkedIn />
						</Link>
					</TooltipTrigger>
					<TooltipContent>
						<p>@froilanimnida</p>
					</TooltipContent>
				</Tooltip>
				<ThemeToggler />
			</TooltipProvider>
		</div>
	);
};

export default Socials;
