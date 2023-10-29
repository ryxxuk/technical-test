import Image from "next/image";
import Link from "next/link";
import { Rocket } from "@/hooks/useRocketsData";
import { StarIcon } from "@heroicons/react/24/outline";

type InputProps = {
	rocket: Rocket;
	toggleRocketInFavourites: (id: string) => void;
	favourites: string[];
};

const RocketOverview = ({
	rocket,
	toggleRocketInFavourites,
	favourites,
}: InputProps) => {
	const isFavourite = (id: string): boolean => favourites.includes(id);

	return (
		<article key={rocket.id} className="flex flex-col lg:flex-row relative">
			<StarIcon
				width={30}
				className={`absolute left-2 top-2 cursor-pointer text-black ${
					isFavourite(rocket.id) ? "fill-black" : ""
				}`}
				onClick={() => toggleRocketInFavourites(rocket.id)}
			/>
			<Image
				src={rocket.flickr_images[0]}
				alt=""
				width={500}
				height={500}
				className="mr-16"
			/>
			<div className="flex flex-col text-left gap-y-6">
				<h3 className="text-lg font-bold">{rocket.name}</h3>
				<p>{rocket.description}</p>
				<div>
					<p>
						<strong>Cost per launch: </strong>
						{rocket.cost_per_launch}
					</p>
					<p>
						<strong>Success Rate: </strong>
						{rocket.success_rate_pct}%
					</p>
					<p>
						<strong>First Flight: </strong>
						{rocket.first_flight}
					</p>
					<p>
						<strong>Mass: </strong>
						{rocket.mass.kg}kg
					</p>
				</div>

				<a href={rocket.wikipedia} target="_blank">
					More Info &gt;
				</a>
			</div>
		</article>
	);
};
export default RocketOverview;
