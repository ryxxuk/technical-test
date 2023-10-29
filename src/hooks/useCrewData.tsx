import { useQuery } from "@tanstack/react-query";

export interface Crew {
	name: string;
	agency: string;
	image: string;
	wikipedia: string;
	launches: string[];
	status: string;
	id: string;
}

export const fetchCrewData = (): Promise<Crew[]> =>
	fetch(`${process.env.SPACEX_API_URL}/crew`).then((res) => res.json());

export default function useCrewData(initialData: Crew[]) {
	return useQuery({
		queryKey: ["crew"],
		queryFn: fetchCrewData,
		initialData,
		staleTime: Infinity, // We do this as we're using SSR and don't want to refetch the data
	});
}
