import styled from 'styled-components';

const Wrapper = styled.div`
  .cocktail-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }

  .not-found {
    text-align:center;
  }
`;

export default Wrapper;
