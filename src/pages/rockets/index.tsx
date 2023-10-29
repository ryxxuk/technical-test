import RocketOverview from "@/components/RocketOverview";
import useRocketsData, {
	Rocket,
	fetchRocketsData,
} from "@/hooks/useRocketsData";
import { useEffect, useState } from "react";

type InputProps = {
	initalData: Rocket[];
};

export default function Crew({ initalData }: InputProps) {
	const { data } = useRocketsData(initalData);
	const [favourites, setFavourites] = useState<string[]>([]);

	useEffect(() => {
		const oldFavourites = localStorage.getItem("favourites");
		setFavourites(oldFavourites ? JSON.parse(oldFavourites) : []);
	}, []);

	const toggleRocketInFavourites = (id: string) => {
		// we use a temporary field with a deep clone here as the state is not updated immediately for the
		// setting of local storage
		let tempFavourites = [...favourites];
		if (favourites.includes(id)) {
			tempFavourites = tempFavourites.filter((fav) => fav !== id);
			setFavourites(tempFavourites);
		} else {
			tempFavourites.push(id);
			setFavourites(tempFavourites);
		}
		localStorage.setItem("favourites", JSON.stringify(tempFavourites));
	};

	return (
		<div className="py-8 sm:py-24">
			<div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
				<div className="mx-auto max-w-2xl">
					<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Meet our Rockets
					</h2>
					<p className="mt-4 text-lg leading-8 text-gray-400">
						They go really fast. They go really high. They go really
						far. They go really loud. They go really expensive.
					</p>
				</div>
				<div className="gap-y-20 flex flex-col mt-16">
					{data?.map((rocket) => (
						<RocketOverview
							key={rocket.id}
							rocket={rocket}
							toggleRocketInFavourites={toggleRocketInFavourites}
							favourites={favourites}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export async function getStaticProps() {
	const rockets = await fetchRocketsData();

	return {
		props: {
			initalData: rockets,
		},
	};
}
