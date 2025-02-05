import { useRouteError } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';

const SinglePageError = () => {
	const error = useRouteError();
	console.log(error);
	
	return (
		<Wrapper>
			<div>
				<h3>something went wrong. Sorry for the inconvenience</h3>
				<p>{error.message}</p>
			</div>
		</Wrapper>
	)
}

export default SinglePageError;