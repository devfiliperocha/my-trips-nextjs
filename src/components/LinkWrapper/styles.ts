import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  z-index: 1100; // maior que o z-index do mapa
  top: var(--medium);
  right: var(--medium);
  cursor: pointer;
  color: var(--white);

  svg {
    transition: color 0.3 ease-in-out;
  }

  &:hover {
    color: var(--highlight);
  }
`
