

import algorithmsThumbnail from "../assets/algorithms_thumbnail.png";

export interface ProjectCardInfo {
    title: string;
    image: string | null;
    description: string;
    links: { label: string; url: string }[];
}

export const projectInfo: ProjectCardInfo[] = [
    {
        title: "Algorithms Library",
        image: algorithmsThumbnail,
        description: "Implementations of competitive programming algorithms and data structures.",
        links: [{ label: "Repo", url: "https://github.com/concl/algorithms" }],
    },
    {
        title: "My Website",
        image: null,
        description: "My personal website built with React and TypeScript.",
        links: [{ label: "Repo", url: "https://github.com/concl/concl.github.io" }],
    }
];

export const homePageText: string[] = [
    "Hi! I'm Luke, a developer specializing in software, machine learning, and design. \
    I'm passionate about game development and building creative projects that provide engaging experiences. \
    I love problem solving and continuously learning new things.",
    "Currently, I'm a Mathematics of Computation student at UCLA, and I am expected to graduate in 2028. \
    Some activities that I am involved in include research in bioinformatics, being an officer for ACM at UCLA, \
    and competing on the ICPC programming team, where I qualified for the 2026 ICPC North American Championship."
];

export const CVPageText = [
    
]

