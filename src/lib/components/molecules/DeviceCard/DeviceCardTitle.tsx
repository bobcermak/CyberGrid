import type { ReactNode } from 'react';
import { Skeleton } from '../../atoms/Skeleton';
import { StatusDot, type DeviceStatus } from '../../atoms/StatusDot';
import { TitleHeading, TitleHidden, TitleIcon, TitleRoot, TitleStatus, TitleText } from './DeviceCard.styles';
import { useReveal } from '../../../hooks/useReveal';

export type HeadingLevel = 2 | 3 | 4 | 5 | 6;
const statusLabels: Record<DeviceStatus, string> = {
  on: 'Zapnuto',
  eco: 'Úsporný režim',
  off: 'Vypnuto',
};
export type DeviceCardTitleProps = {
  title: string;
  icon?: ReactNode;
  status?: DeviceStatus;
  statusText?: ReactNode;
  headingId?: string;
  headingLevel?: HeadingLevel;
  loading?: boolean;
};
const DeviceCardTitle = ({
  title,
  icon,
  status,
  statusText,
  headingId,
  headingLevel = 3,
  loading = false,
}: DeviceCardTitleProps) => {
  const reveal = useReveal(loading);
  if (loading) {
    return (
      <TitleRoot>
        <Skeleton width={40} height={40} />
        <TitleText style={{ flex: 1 }}>
          <TitleHeading as={`h${headingLevel}`} id={headingId}>
            <TitleHidden>{title}</TitleHidden>
            <Skeleton width="60%" height={20} style={{ margin: '2px 0' }} />
          </TitleHeading>
          <Skeleton width="80%" height={10} style={{ margin: '1px 0' }} />
        </TitleText>
      </TitleRoot>
    );
  }
  return (
    <TitleRoot $reveal={reveal}>
      {icon && <TitleIcon aria-hidden>{icon}</TitleIcon>}
      <TitleText>
        <TitleHeading as={`h${headingLevel}`} id={headingId} title={title}>
          {title}
        </TitleHeading>
        {(status || statusText) && (
          <TitleStatus>
            {status && (
              <StatusDot status={status} size={4} label={statusText ? undefined : statusLabels[status]} />
            )}
            {statusText && <span>{statusText}</span>}
          </TitleStatus>
        )}
      </TitleText>
    </TitleRoot>
  );
};
export default DeviceCardTitle;