import { useEffect } from "react";

export default function Home() {
	// This part is not included on the application, hence why we redirect to /crew
	useEffect(() => {
		window.location.href = "/crew";
	}, []);
	
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="z-10 max-w-5xl w-full text-sm lg:flex flex-col">
				<h1>ArchX</h1>
				<p>Click on menu item to get started</p>
			</div>
		</main>
	);
}
