import { styled, keyframes } from 'styled-components';
import { Button } from '../Button';
import { ButtonSegment } from '../Button/Button.styles';
import { ArrowSlot } from '../Button/ArrowIcon.styles';

const scan = keyframes`
  from { transform: translateX(-120%) skewX(-20deg); }
  to   { transform: translateX(220%) skewX(-20deg); }
`;

const AnimatedButton = styled(Button)`
  ${ButtonSegment} {
    position: relative;
    overflow: hidden;
  }

  ${ButtonSegment}:first-child::after {
    content: '';
    position: absolute;
    inset: 0 auto 0 0;
    width: 40%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.35), transparent);
    transform: translateX(-120%) skewX(-20deg);
    pointer-events: none;
  }

  &:hover:not(:disabled) ${ButtonSegment} {
    --btn-lift: -2px;
  }

  &:hover:not(:disabled) ${ButtonSegment}:first-child::after {
    animation: ${scan} 700ms ease-out;
  }

  &:hover:not(:disabled) ${ArrowSlot} {
    transform: translate(var(--arrow-nudge-x, 0), var(--arrow-nudge-y, 0));
  }

  &:active:not(:disabled) ${ButtonSegment} {
    --btn-lift: 0px;
    --btn-press: 0.97;
  }

  @media (prefers-reduced-motion: reduce) {
    ${ButtonSegment} {
      --btn-lift: 0px;
      --btn-press: 1;
    }

    ${ArrowSlot} {
      transform: none !important;
    }
  }
`;
export default AnimatedButton;