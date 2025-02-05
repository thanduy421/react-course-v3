import { createClient } from 'contentful';
import { useState, useEffect } from 'react';

export const useFetchData = () => {
	const [loading, setLoading] = useState(true);
	const [projects, setProjects] = useState([]);

	const client = createClient({
	  space: 'pbbdwvcvqzbe',
	  environment: 'master', // defaults to 'master' if not set
	  accessToken: import.meta.env.VITE_API_KEY,
	});

	const getData = async () => {
		try {
			const response = await 	client.getEntries({ content_type: 'projects' });
			const projects = response.items.map((item) => {
				const {title, url, image} = item.fields;
				const id = item.sys.id;
				const img = image?.fields?.file?.url;
				return {title, url, id, img};
			})
			setProjects(projects);
		} catch(error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		getData();
	}, []);

	return { loading, projects };
}
