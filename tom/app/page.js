import Image from "next/image";

{
	/* <style>
  .container {
    width: 100%;

  }
</style> */
}

/*
.box {
  width: 200px;
  height: 100px;
  background: red;
}
*/

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="w-[200px] h-[100px] bg-red-600"></div>
		</main>
	);
}
