import styled from 'styled-components';

export const Wrapper = styled.nav`
	background: var(--white);
	.nav-center{
		width:var(--view-width);
		max-width:var(--max-width);
		margin:0 auto;
		display:flex;
		justify-content:space-between;
		padding:1.5rem 2rem;
	}

	.logo {
		font-size: clamp(1.5rem, 3vw, 3rem);
		color: var(--primary-500);
		font-weight: 700;
		letter-spacing: 2px;
	}
	
	.nav-links{
		display:flex;
		gap:0.5rem;
	}
`;