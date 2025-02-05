import SkillsCard from './SkillsCard';
import SectionTitle from './SectionTitle';
import { skills } from '../data';

const Skills = () => {
	return (
		<section className='py-20 align-element' id='skills'>
			<SectionTitle text="tech stack"/>
			<div className='py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{skills.map((skill) => (<SkillsCard key={skill.id} skillInfo={skill} />))}
			</div>
		</section>
	)
};

export default Skills;