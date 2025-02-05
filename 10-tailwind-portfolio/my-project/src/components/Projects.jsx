import ProjectsCard from './ProjectsCard';
import { projects } from '../data';
import SectionTitle from './SectionTitle';
import { useFetchData } from '../utils/contentful';

const Projects = () => {
	const { loading, projects:cmsStacks } = useFetchData();
	
	if(loading) {
		return (
			<div>Loading...</div>
		)
	} 

	return (
		<section className='py-20 align-element' id='projects'>
			<SectionTitle text='web creations' />
			<div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
				{projects.map((project) => (<ProjectsCard key={project.id} projectInfo={project}/>))}
				{cmsStacks.map((stack) => (<ProjectsCard key={stack.id} projectInfo={stack}/>))}
			</div>
		</section>
	)
};

export default Projects;