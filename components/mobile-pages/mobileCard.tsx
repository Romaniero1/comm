import {
	faDiscord,
	faTwitter,
	faInstagram,
	faMediumM,
	faYoutube,
	faLinkedin,
	faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Logo from '../header/logos/logo.svg';

export const MobileCard = () => {
	return (
		<header className="relative flex flex-col items-center h-screen overflow-visible bg-[url('/background/mobileBg.png')]">
			<div className='flex flex-col items-center'>
				<a href='https://tinycolony.io'>
					<Image src={Logo} width={190} height={42} alt='Mainlink' />
				</a>
				<div className='flex space-x-7 mx-auto pt-5 items-baseline'>
					<a
						href='https://discord.com/invite/VjCHsa3WXm'
						target='_blank'
						rel='noreferrer'
					>
						<FontAwesomeIcon icon={faDiscord} className='h-[14px] w-[14px]' />
					</a>
					<a
						href='https://twitter.com/TinyColonyGame'
						target='_blank'
						rel='noreferrer'
					>
						<FontAwesomeIcon icon={faTwitter} className='h-[14px] w-[14px]' />
					</a>
					<a
						href='https://www.instagram.com/tinycolonygame/'
						target='_blank'
						rel='noreferrer'
					>
						<FontAwesomeIcon icon={faInstagram} className='h-[14px] w-[14px]' />
					</a>
					<a
						href='https://medium.com/@TinyColonyGame'
						target='_blank'
						rel='noreferrer'
					>
						<FontAwesomeIcon icon={faMediumM} className='h-[14px] w-[14px]' />
					</a>
					<a
						href='https://www.youtube.com/channel/UC8c545SX_PGCD7jqPTEU_yQ'
						target='_blank'
						rel='noreferrer'
					>
						<FontAwesomeIcon icon={faYoutube} className='h-[14px] w-[14px]' />
					</a>
					<a
						href='http://tiktok.com/@tinycolony'
						target='_blank'
						rel='noreferrer'
					>
						<FontAwesomeIcon icon={faTiktok} className='h-[14px] w-[14px]' />
					</a>
					<a
						href='https://www.linkedin.com/company/tiny-colony'
						target='_blank'
						rel='noreferrer'
					>
						<FontAwesomeIcon icon={faLinkedin} className='h-[14px] w-[14px]' />
					</a>
				</div>
			</div>
			<div className='text-center px-4'>
				<h2 className='uppercase mt-20'>ooops!</h2>
				<p className='mt-10'>
					MVP page currently is only available in web version.
				</p>
				<p className='mt-8'>Sorry for the temporary inconvenience.</p>
			</div>
			<div className='absolute w-full bottom-0'>
				<a href='https://drive.google.com/file/d/1W0-kx1JsXLqEoL3eiSRbW_Mz1nKrtQwq/view?usp=sharing'>
					<button className='w-full h-6 bg-[#C10764]'>
						<h4>DOWNLOAD DECK</h4>
					</button>
				</a>
				<a
					href='https://discord.com/invite/VjCHsa3WXm'
					target='_blank'
					rel='noreferrer'
				>
					<button className='w-full h-6 bg-[#5865F2]'>
						<h4>JOIN OUR DISCORD</h4>
					</button>
				</a>
			</div>
		</header>
	);
};
