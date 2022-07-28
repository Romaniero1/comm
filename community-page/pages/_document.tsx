import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<meta name='description' content='TinyColony MVP' />
				<link rel='icon' href='/favicon.ico' />
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
					<link rel="preconnect" href="https://fonts.gstatic.com"/>
						<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Quantico:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
						</Head>
						<body>
							<Main />
							<NextScript />
						</body>
					</Html>
					);
}
