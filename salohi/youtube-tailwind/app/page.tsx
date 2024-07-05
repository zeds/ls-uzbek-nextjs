	import Articles from "@/components/Articles";
	import Navbar from "@/components/Navbar";
	import Tags from "@/components/Tags";
	import Image from "next/image";

	export default function Home() {
	return (
		<div>
		<Tags />
		<Navbar />
		<Articles />
		</div>
	);
	}
