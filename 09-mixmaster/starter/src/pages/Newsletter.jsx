import { Form, useNavigation } from 'react-router-dom';

const Newsletter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
	<Form className='form' method='POST'>
		<h4 className='title'>
			our newsletter
		</h4>
		{/* first name */}
		<div className='form-row'>
			<label htmlFor='name' className='form-label'>
				name
			</label>
			<input 
				type='text'
				className='form-input'
				name='name'
				id='name'
				placeholder="john"
				required={true}
			/>
		</div>
		{/* last name */}
		<div className='form-row'>
			<label htmlFor='lastname' className='form-label'>
				last name
			</label>
			<input 
				type='text'
				className='form-input'
				name='lastName'
				id='lastName'
				placeholder="smith"
			/>
		</div>
		{/* email */}
		<div className='form-row'>
			<label htmlFor='email' className='form-label'>
				email
			</label>
			<input 
				type='email'
				className='form-input'
				name='email'
				id='email'
				placeholder="johnsmith@gmail.com"
			/>
		</div>
		<button
			type='submit'
			className='btn btn-block'
			disabled={isSubmitting}
		>
			{isSubmitting? 'submitting...' : 'submit'}
		</button>
	</Form>
  );
};

export default Newsletter;
