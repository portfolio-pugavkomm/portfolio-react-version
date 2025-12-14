import type { LandingActiveSkill } from '@entities/landing-active-skills';
import { faker } from '@faker-js/faker';

export const getLandingActiveSkill = (data: Partial<LandingActiveSkill>): LandingActiveSkill => {
  return Object.assign(
    {
      name: faker.word.adjective(),
      id: faker.number.int(),
      skillType: faker.helpers.arrayElement(['primary', 'secondary', 'info', 'danger', null]),
    },
    data,
  );
};
