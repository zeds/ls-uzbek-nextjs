/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "https://qoqjesbdiymmyyibtwsw.supabase.co",
				pathname: "**",
			},
			{
				protocol: "https",
				hostname: "picsum.photos",
				pathname: "**",
			},
			{
				protocol: "https",
				hostname: "i.ytimg.com",
				pathname: "**",
			},
			{
				protocol: "https",
				hostname: "yt3.ggpht.com",
				pathname: "**",
			},
		],
	},
	typescript: {
		// !! 警告 !!
		// あなたのプロジェクトに型エラーがあったとしても、プロダクションビルドを正常に完了するために危険な許可をする。
		// !! 警告 !!
		ignoreBuildErrors: true,
	},
};
module.exports = nextConfig;
