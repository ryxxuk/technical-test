import CrewTile from "@/components/CrewTile";
import useCrewData, { Crew, fetchCrewData } from "@/hooks/useCrewData";

type InputProps = {
	initalData: Crew[];
};

export default function Crew({ initalData }: InputProps) {
	const { data: crewMembers } = useCrewData(initalData);
	return (
		<div className="py-8 sm:py-24">
			<div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
				<div className="mx-auto max-w-2xl">
					<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Meet our crew
					</h2>
					<p className="mt-4 text-lg leading-8 text-gray-400">
						Pioneering the future of space exploration, our crew is
						at the forefront of the latest research in space. Their
						dedication and commitment ensures safe and successful
						missions.
					</p>
				</div>
				<ul
					role="list"
					className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
				>
					{crewMembers?.map((crewMember) => (
						<CrewTile key={crewMember.id} crewMember={crewMember} />
					))}
				</ul>
			</div>
		</div>
	);
}

export async function getStaticProps() {
	const crewMembers = await fetchCrewData();

	return {
		props: {
			initalData: crewMembers,
		},
	};
}
