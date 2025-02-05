import { useFetchData } from './contentful';

const Projects = () => {
	const { loading, projects } = useFetchData();

	if(loading) {
		return <div className="loading"/>
	}

    return (
        <div className="projects">
			<div className='title'>
				<h2>Projects</h2>
				<div className='title-underline'></div>
			</div>
            <ul className="projects-center image-container">
                {projects.map((project) => {
					const {title, url, id, img} = project;

					return (
						<li key={id} className="project image-card">
							<a  href={url} 
								target='_blank' 
								rel='noreferrer'
								>
							<img src={img} alt ={title} className="img" />
							<h5>{title}</h5>
							</a>
						</li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Projects;