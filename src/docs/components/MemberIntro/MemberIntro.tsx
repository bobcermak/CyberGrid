import { PageHeader } from '../PageHeader';
import type { TeamMember } from '../../content/team';

export const MemberIntro = ({ member, description }: { member: TeamMember; description: string }) => (
  <PageHeader eyebrow={`Student ${member.student} · ${member.area}`} title={member.name} description={description} />
);