import { LandingActiveSkillTag } from '@entities/landing-active-skills';
import { useLandingActiveSkills } from '@entities/landing-active-skills/api';
import { MEFlexContainer } from '@shared/ui/MEContainer';

export const LandingActiveSkillsList = () => {
  const { data, isLoading } = useLandingActiveSkills();
  if (isLoading) return <div>Loading...</div>;
  return (
    <MEFlexContainer direction={'row'} gap={'m'}>
      {data?.map((skill) => (
        <LandingActiveSkillTag data={skill} key={skill.id} />
      ))}
    </MEFlexContainer>
  );
};
