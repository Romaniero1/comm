import React from 'react';
import Image from 'next/image';
import FractalImg from './logos/fractal.svg';
import iLogosImg from './logos/i-logos.svg';
import StarLaunchImg from './logos/star-launch.svg';
import Solana from './logos/solana.svg';
import Unity from './logos/unity.svg';
import Circle from './images/CircleLogo.webp';
import LogoInCircle from './images/LogoInCircle.gif';
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

const FOOTER_SOCIALS = [
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

const FOOTER_LINKS = [
	{
		href: 'https://tinycolony.io/tinyverse#about',
		title: 'About',
	},
	{
		href: 'https://tinycolony.io/tinyverse#thegame',
		title: 'The Game',
	},
	{
		href: 'https://tinycolony.io/tinyverse#nfts',
		title: 'NFTs',
	},
	{
		href: 'https://tinycolony.io/tinyverse#roadmap',
		title: 'Roadmap',
	},
	{
		href: 'https://tinycolony.io/tinyverse#about',
		title: 'About',
	},
	{
		className: 'text-[#D5A830]',
		href: 'https://drive.google.com/file/d/1wTeosdBIHjipg7wJVW7IiqSRxNEo0RS5/view?usp=sharing',
		title: 'DOWNLOAD DECK',
	},
];

export const Footer = () => {
	return (
		<div className='flex bg-bottom h-[500px] bg-[#5F1C21] justify-center'>
			<div className='flex flex-col w-[900px] xl:w-[1200px]'>
				<div className='flex flex-row justify-between'>
					<div className='flex flex-col items-center pt-12 lg:flex-row xl:pt-[68px]'>
						<div className='container flex h-60 w-60 bg-[#a92633] rounded-full items-center justify-center'>
							<div className='absolute ml-2'>
								<Image
									src={LogoInCircle}
									width={118}
									height={118}
									alt='Mainlink'
								/>
							</div>
							<div className='animate-[spin_30s_linear_infinite]'>
								<Image src={Circle} width={200} height={200} alt='Mainlink' />
							</div>
						</div>
						<div className='flex space-x-7 pt-10 pl-10'>
							{FOOTER_SOCIALS.map(({ href, icon }, index) => (
								<a key={index} href={href} target='_blank' rel='noreferrer'>
									<FontAwesomeIcon icon={icon} className='h-7 w-7' />
								</a>
							))}
						</div>
					</div>
					<div
						className='flex flex-col font-mono text-base justify-center pt-10 items-start'
					>
						{FOOTER_LINKS.map(({ href, title, className }, index) => (
							<a
								{...(className && { className })}
								key={index}
								href={href}
								target='_blank'
								rel='noreferrer'
							>
								{title}
							</a>
						))}
					</div>
				</div>
				<div className='flex justify-center pt-14'>
					<div className='border-b-[2px] border-white w-[1200px]' />
				</div>
				<div className='container flex flex-wrap pt-5 items-center pb-4 '>
					<div className='flex flex-row items-center space-x-5'>
						<a

							href='https://ilogos.biz/'
							target='_blank'
							rel='noreferrer'
						>
							<Image src={iLogosImg} width={117} height={30} alt='iLogos' />
						</a>
						<a

							href='https://www.fractal.is/tinycolony'
							target='_blank'
							rel='noreferrer'
						>
							<Image src={FractalImg} width={88} height={30} alt='Fractal' />
						</a>
						<a

							href='https://starlaunch.com/'
							target='_blank'
							rel='noreferrer'
						>
							<Image
								src={StarLaunchImg}
								width={131}
								height={30}
								alt='Star Launch'
							/>
						</a>

						<a

							href='https://solana.com/'
							target='_blank'
							rel='noreferrer'
						>
							<Image src={Solana} width={92} height={30} alt='Solana' />
						</a>
						<a href='https://unity.com/' target='_blank' rel='noreferrer'>
							<Image src={Unity} width={81} height={30} alt='Unity' />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
