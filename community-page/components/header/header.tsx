import {
	faDiscord,
	faTwitter,
	faInstagram,
	faMediumM,
	faLinkedin,
	faTiktok,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Logo from './logos/Logo.png';
import Link from 'next/link';

const SOCIALS = [
	{
		href: 'https://discord.com/invite/VjCHsa3WXm',
		icon: faDiscord,
	},
	{
		href: 'https://twitter.com/TinyColonyGame',
		icon: faTwitter,
	},
	{
		href: 'https://www.instagram.com/tinycolonygame/',
		icon: faInstagram,
	},
	{
		href: 'https://medium.com/@TinyColonyGame',
		icon: faMediumM,
	},
	{
		href: 'https://www.youtube.com/channel/UC8c545SX_PGCD7jqPTEU_yQ',
		icon: faYoutube,
	},
	{
		href: 'http://tiktok.com/@tinycolony',
		icon: faTiktok,
	},
	{
		href: 'https://www.linkedin.com/company/tiny-colony',
		icon: faLinkedin,
	},
];

export const Header = () => {
	return (
		<header className='relative flex flex-col items-center h-[800px] overflow-hidden bg-black backdrop-opacity-50'>
			<div className='container relative flex flex-col items-center z-10 '>
				<div className='flex flex-row items-center w-full justify-between pt-10 px-10'>
					<div className='flex flex-row items-baseline'>
						<a href='https://tinycolony.io'>
							<Image src={Logo} width={190} height={42} alt='Mainlink' />
						</a>
						<div className='flex space-x-7 pl-7 items-baseline'>
							{SOCIALS.map(({ href, icon }, index) => (
								<a key={index} href={href} target='_blank' rel='noreferrer'>
									<FontAwesomeIcon icon={icon} className='h-7 w-7' />
								</a>
							))}
						</div>
					</div>
					<a href='https://drive.google.com/file/d/1W0-kx1JsXLqEoL3eiSRbW_Mz1nKrtQwq/view?usp=sharing'>
						<button className='outline outline-0 w-40 h-10 rounded-full bg-white text-pink uppercase hover:bg-pink hover:text-white active:outline-pink active:outline-4'>
							download deck
						</button>
					</a>
				</div>
				<div className='text-center w-[500px] pt-32'>
					<h1 className='uppercase'>welcome to the mvp</h1>
					<p className='pt-4'>
						Build and grow your Colony, assemble your army, and train your
						Characters for defense. The MVP is the first step in conquering the
						Tinyverse.
					</p>
					<div className='mt-10'>
						<Link href='/mvp#connect'>
							<button className='outline outline-0 w-40 h-10 rounded-full bg-pink text-white uppercase hover:bg-white hover:text-pink active:outline-white active:outline-4'>
								let’s go!
							</button>
						</Link>
					</div>
				</div>
			</div>
			<video
				autoPlay
				loop
				muted
				className='absolute w-auto min-w-full min-h-full max-w-none'
			>
				<source src='/intro.mp4' type='video/mp4' />
				Your browser does not support the video tag.
			</video>
			<div className='absolute w-auto min-w-full min-h-full max-w-none bg-black opacity-50'></div>
		</header>
	);
};
