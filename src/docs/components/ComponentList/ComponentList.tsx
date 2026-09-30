import { Badge, levelLabel } from '../Badge';
import { FadeIn } from '../FadeIn';
import { SectionTitle, Stack } from '../Typography';
import type { TeamComponent } from '../../content/team';
import { Card, Description, Grid, Name, SkeletonContent } from './ComponentList.styles';

export const ComponentList = ({ components, loading = false }: { components: TeamComponent[]; loading?: boolean }) => (
  <Stack $gap="16px">
    <SectionTitle>Komponenty</SectionTitle>
    <Grid>
      {components.map((component) => {
        const content = (
          <>
            <Name>{component.name}</Name>
            <div>
              <Badge $tone={component.level}>{levelLabel[component.level]}</Badge>
            </div>
            <Description>{component.description}</Description>
          </>
        );

        return (
          <Card key={component.name} aria-busy={loading || undefined}>
            {loading ? (
              <SkeletonContent aria-hidden>{content}</SkeletonContent>
            ) : (
              <FadeIn style={{ display: 'grid', gap: 10 }}>{content}</FadeIn>
            )}
          </Card>
        );
      })}
    </Grid>
  </Stack>
);