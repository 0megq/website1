import toy from "./assets/toy.png"

type Project = {
	name: string;
	start: string;
	end: string;
	link: string;
	role: string;
	preview: string;
};

type ProjectId ="toy" | "dummy";

const projects: Record<ProjectId, Project> = {
	"toy": {
		name: "Trials of Yarbil",
		start: "June 2025",
		end: "September 2024",
		link: "https://store.steampowered.com/app/3320710/Trials_of_Yarbil/",
		role: "Solo-developed Steam game",
		preview: toy,
	},
	"dummy": {
		name: "",
		start: "",
		end: "",
		link: "",
		role: "",
		preview: "",
	},
};

type ProjectPreviewProps = {
	id: ProjectId;
};

export default function ProjectPreview({id}: ProjectPreviewProps) {
	const project = projects[id];
	return (
		<div className="space-y-2">
			<a href={project.link} target="_blank"><img src={project.preview}></img></a>
			<h2 className="text-xl">
				{project.name}
			</h2>
			<h2 className="text-l">
				{project.role}
			</h2>
		</div>
	);
}