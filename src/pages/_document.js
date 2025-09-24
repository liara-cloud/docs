import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta
					property="og:image"
					content="https://media.liara.ir/liara-features/liara-opengraph.jpg"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
