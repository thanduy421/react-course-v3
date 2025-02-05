import { FaGithubSquare } from 'react-icons/fa';
import { TbWorldWww }  from 'react-icons/tb';

const ProjectsCard = ({projectInfo}) => {
	const { url, 
			img, 
			github='#', 
			title, 
			text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.' 
		} = projectInfo;

	return (
		<article className='bg-white rounded-lg shadow-md block hover:shadow-xl duration-300'>
			<img
				src={img}
				alt={title}
				className='w-full object-cover rounded-t-lg h-64 '
			/>
			<div className='capitalize p-8'>
				<h2 className='text-xl tracking-wide font-medium'>{title}</h2>
				<p className='mt-4 text-slate-700 leading-loose'>{text}</p>
				<div className='mt-4 flex gap-x-4'>
					<a href={url}>
						<TbWorldWww className='hero-icon w-6 h-6'/>
					</a>
					<a href={github}>
						<FaGithubSquare className='hero-icon w-6 h-6'/>
					</a>
				</div>
			</div>
		</article>
	);
};

export default ProjectsCard;