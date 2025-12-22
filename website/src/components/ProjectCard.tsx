
import mandelbrotIcon from "../assets/mandelbrot_icon.png";
import { ProjectCardInfo } from "../data/SiteData";
import "./ProjectCard.css";

function ProjectCard( info : ProjectCardInfo ) {

    const image = info.image ? (
        <img src={info.image} alt={info.title} />
    ) : <img src={mandelbrotIcon} alt="default_project_icon" />;

    const links = info.links.map((link, index) => (
        <a
            key={index}
            className="LinkButton"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
        >
            {link.label}
        </a>
    ));

    return (
        <div className="ProjectCard">
            {image}
            <div className="TextContent">
                <h3>{info.title}</h3>
                <p>{info.description}</p>
                {links.length > 0 && (
                    <div className="Links">
                        {links}
                    </div>
                )}
            </div>

        </div>
    );
}

export default ProjectCard;

