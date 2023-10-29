import { useQuery } from "@tanstack/react-query";

interface Thrust {
	kN: number;
	lbf: number;
}

interface Distance {
	meters: number;
	feet: number;
}

interface Weight {
	kg: number;
	lb: number;
}

interface Payload extends Weight {
	id: string;
	name: string;
}

export interface Rocket {
	height: Distance;
	diameter: Distance;
	mass: Weight;
	first_stage: {
		thrust_sea_level: Thrust;
		thrust_vacuum: Thrust;
		reusable: boolean;
		engines: number;
		fuel_amount_tons: number;
		burn_time_sec: number;
	};
	second_stage: {
		thrust: Thrust;
		payloads: {
			composite_fairing: {
				height: Distance;
				diameter: Distance;
			};
			option_1: string;
		};
		reusable: boolean;
		engines: number;
		fuel_amount_tons: number;
		burn_time_sec: number;
	};
	engines: {
		isp: {
			sea_level: number;
			vacuum: number;
		};
		thrust_sea_level: Thrust;
		thrust_vacuum: Thrust;
		number: number;
		type: string;
		version: string;
		layout: string;
		engine_loss_max: number;
		propellant_1: string;
		propellant_2: string;
		thrust_to_weight: number;
	};
	landing_legs: {
		number: number;
		material: string | null;
	};
	payload_weights: Payload[];
	flickr_images: string[];
	name: string;
	type: string;
	active: boolean;
	stages: number;
	boosters: number;
	cost_per_launch: number;
	success_rate_pct: number;
	first_flight: string;
	country: string;
	company: string;
	wikipedia: string;
	description: string;
	id: string;
}

export const fetchRocketsData = (): Promise<Rocket[]> =>
	fetch(`${process.env.SPACEX_API_URL}/rockets`).then((res) => res.json());

export default function useRocketsData(initialData: Rocket[]) {
	return useQuery({
		queryKey: ["rockets"],
		queryFn: fetchRocketsData,
		initialData,
		staleTime: Infinity, // We do this as we're using SSR and don't want to refetch the data
	});
}
