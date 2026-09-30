import styled from 'styled-components';

export const DeviceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr));
  gap: 24px;
  width: 100%;
`;