import type { LandingActiveSkill } from '@entities/landing-active-skills';
import { sleep } from '@shared/lib';
import { useQuery, type UseQueryResult } from '@tanstack/react-query';

const fetchActiveSkills = async () => {
  // TODO: update with axios
  const mockData: LandingActiveSkill[] = [
    {
      id: 1,
      name: 'Python',
      skillType: 'primary',
    },
    {
      id: 2,
      name: 'Django',
      skillType: 'secondary',
    },
    {
      id: 3,
      name: 'PostgreSQL',
      skillType: 'primary',
    },
  ];
  await sleep(Math.random() * 1000);
  return mockData;
};

export function useLandingActiveSkills(): UseQueryResult<LandingActiveSkill[], Error> {
  return useQuery({
    queryKey: ['landing', 'activeSkills'],
    queryFn: fetchActiveSkills,
    staleTime: 60 * 60 * 1000, // 60min
  });
}
