import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Hero = () => {
	return (
		<section className='bg-emerald-100 py-24'>
			<div className='align-element grid md:grid-cols-2 items-center gap-8'>
				<article>
					<h1 className='text-7xl font-bold tracking-wide'>I'm John</h1>
					<p className='capitalize mt-4 text-3xl text-slate-700 tracking-wide'>
						front-end developer
					</p>
					<p className='capitalize mt-2 text-lg text-slate-700 tracking-wide'>
						turning ideas into interactive reality
					</p>
					<div className='flex gap-x-4 mt-4'>
						<a href='#'>
							<FaGithubSquare className='hero-icon'/>
						</a>
						<a href='#'>
							<FaLinkedin className='hero-icon'/>
						</a>
						<a href='#'>
							<FaTwitterSquare className='hero-icon'/>
						</a>
					</div>
				</article>
				<article className='hidden md:block'>
					<img src={heroImg} className='h-80 lg:h-96'/>
				</article>
			</div>
		</section>
	);
};

export default Hero;