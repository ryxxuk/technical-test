import { Crew } from "@/hooks/useCrewData";
import Image from "next/image";

type InputProps = {
	crewMember: Crew;
};

const CrewTile = ({ crewMember }: InputProps) => {
	return (
		<li
			key={crewMember.id}
			className="rounded-2xl bg-gray-800 px-8 py-10 flex flex-col"
		>
			<Image
				src={crewMember.image}
				alt=""
				width={300}
				height={300}
				className="rounded-lg mx-auto "
			/>
			<div className="mt-6 flex justify-center gap-2">
				<h3 className="text-base font-semibold leading-7 tracking-tight text-white gap-4">
					{crewMember.name}
				</h3>
				{crewMember.status === "active" ? (
					<span className="inline-flex items-center rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">
						Active
					</span>
				) : (
					<span className="inline-flex items-center rounded-md bg-red-400/10 px-2 py-1 text-xs font-medium text-red-400 ring-1 ring-inset ring-red-400/20">
						Inactive
					</span>
				)}
			</div>

			<p className="text-sm leading-6 text-gray-400">
				{crewMember.agency}
			</p>
			<p className="text-sm leading-6 text-gray-400">
				{crewMember.launches.length} Launch
				{crewMember.launches.length > 1 && "es"}
			</p>
			<a href={crewMember.wikipedia} className="mt-auto" target="_blank">
				Learn More &gt;
			</a>
		</li>
	);
};
export default CrewTile;
