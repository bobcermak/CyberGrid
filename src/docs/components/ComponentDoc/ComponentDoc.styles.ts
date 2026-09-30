import styled from 'styled-components';

export const Section = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 16px;
  scroll-margin-top: 80px;
`;

export const Head = styled.header`
  display: grid;
  gap: 8px;
`;

export const TitleRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 12px;
`;

export const Description = styled.p`
  max-width: 64ch;
  line-height: 1.5;
  opacity: 0.8;

  code {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.85em;
  }
`;