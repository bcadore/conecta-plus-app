import styled from 'styled-components';

export const CardsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;

  > li {
    display: block;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;