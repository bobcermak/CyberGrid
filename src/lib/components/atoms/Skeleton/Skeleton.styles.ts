import { styled } from '../../../theme/styled';
import { skeletonSurface } from '../../../utils/skeleton';

export const SkeletonRoot = styled.span<{ $radius: string }>`
  display: block;
  flex-shrink: 0;
  max-width: 100%;
  border-radius: ${({ $radius }) => $radius};
  ${skeletonSurface}
`;