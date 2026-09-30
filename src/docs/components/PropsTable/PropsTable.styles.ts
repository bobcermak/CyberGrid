import styled from 'styled-components';

export const Scroll = styled.div`
  overflow-x: auto;
  contain: inline-size;
  border: ${({ theme }) => theme.borderWidths.hairline} solid ${({ theme }) => theme.colors.colorDisabled};
`;

export const Table = styled.table`
  width: 100%;
  min-width: 560px;
  border-collapse: collapse;
  font-size: 15px;
  line-height: 1.4;

  th,
  td {
    padding: 10px 14px;
    text-align: left;
    vertical-align: top;
    border-bottom: ${({ theme }) => theme.borderWidths.hairline} solid
      ${({ theme }) => theme.colors.colorDisabled};
  }

  tr:last-child td {
    border-bottom: 0;
  }

  th {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.colorDisabled};
    background: ${({ theme }) => theme.colors.bgApp};
  }

  code {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 12.5px;
  }
`;

export const Name = styled.code`
  color: ${({ theme }) => theme.colors.colorCyan};
  white-space: nowrap;
`;

export const Type = styled.code`
  color: ${({ theme }) => theme.colors.colorMagenta};
`;