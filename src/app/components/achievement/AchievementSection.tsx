import { SectionWrapper } from '../shared/SectionWrapper'
import { SectionTitle } from '../shared/SectionTitle'

import { AchievementList } from './AchievementList'

export const  AchievementSection = () => {
  return (
    <SectionWrapper>
      <SectionTitle title="Achievement" subtitle=""></SectionTitle>
      <AchievementList></AchievementList>
    </SectionWrapper>
  )
}
