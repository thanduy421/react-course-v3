import {useGlobalContext} from './context';

const Gallery = () => {
	const {isLoading, isError, data:photos, query} = useGlobalContext();
	
    // display for the first mount
	if(!query) {
		return (<div className='image-container'>
					<div className="message">
						<h4>welcome!</h4>
					</div>
				</div>)
	}

	if(isLoading) {
		return <div className="loading"></div>
	}
	
	if(isError) {
		return <p>Error, sorry for your inconvinience</p>
	}

	if(photos.length === 0) {
		return (<div className='image-container'>
					<div className="message">
						<h4>No results found...</h4>
					</div>
				</div>)
	}

    return (
		<ul className='image-container'>
			{photos.map((photo) => {
				const {id, title, url} = photo;

				return (
					<li key={id}>
						<img 
							src={url}
							alt={title}
						/>
					</li>
				)
			})}
		</ul>
    );
};

export default Gallery;
