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
		<header className="flex flex-col items-center h-[700px] bg-cover bg-repeat-round bg-[url('/background/headerBg.png')]">
			<div className='container relative flex flex-col items-center z-10 '>
				<div className='flex flex-row items-center w-full justify-between pt-10 px-10'>
					<div className='flex flex-row items-center'>
						<a href='https://tinycolony.io'>
							<Image src={Logo} width={190} height={42} alt='Mainlink' />
						</a>
						<div className='flex space-x-7 pl-7 items-baseline pt-2'>
							{SOCIALS.map(({ href, icon }, index) => (
								<a key={index} href={href} target='_blank' rel='noreferrer'>
									<FontAwesomeIcon icon={icon} className='h-5 w-5' />
								</a>
							))}
						</div>
					</div>
				</div>
				<div className='flex flex-col text-center pt-32 items-center'>
					<h1 className='uppercase w-[844px]'>Community Creation Guide</h1>
					<p className='pt-8 w-[666px]'>
					Hello fellow ant lovers! With our MVP in full testing mode and further development 
					coming down the tunnels, we need your creativity! We are on the cusp of a major gaming movement. 
					One that provides the players the rights to truly own and trade their game assets. 
					To push this movement forward, we need your creative minds to build a fun, humble, and amazing space. 
					</p>
				</div>
			</div>
		</header>
	);
};
