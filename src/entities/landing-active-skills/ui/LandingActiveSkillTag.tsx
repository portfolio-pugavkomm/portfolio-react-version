import type { LandingActiveSkill } from '@entities/landing-active-skills';
import { METag } from '@shared/ui/METag';
import * as React from 'react';

export interface LandingActiveSkillTagProps {
  data: LandingActiveSkill;
}
export const LandingActiveSkillTag: React.FC<LandingActiveSkillTagProps> = ({ data }) => {
  return (
    <METag size={'xxl'} variant={data.skillType}>
      {data.name}
    </METag>
  );
};
