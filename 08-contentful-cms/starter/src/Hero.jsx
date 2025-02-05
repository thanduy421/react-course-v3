import hero from './assets/hero.svg';

const Hero = () => {
    return (
        <section className="hero">
			<div className='hero-center'>
				<div className="hero-title">
					<h1>contentful CMS</h1>
					<p>
						Snackwave man bun enamel pin hexagon vape, copper mug DIY kogi 
					    gochujang vegan tousled craft beer retro. Snackwave wolf 
						chicharrones synth la croix chartreuse plaid yuccie mlkshk. Ethical 
						small batch put a bird on it williamsburg, semiotics YOLO lo-fi brunch 
						offal copper mug. Copper mug fingerstache keffiyeh echo park taiyaki 
						jawn microdosing cornhole trust fund kale chips praxis.
					</p>
				</div>
				<div className="img-container">
					<img src={hero} alt="hero image" />
				</div>
			</div>
        </section>
    );
};

export default Hero;
