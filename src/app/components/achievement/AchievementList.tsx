import { achievements } from './achievement'
import { AchievementListRow } from './AchievementListRow'

export const AchievementList = () => {
  return (
    <div className="mx-4 mt-4">
      {achievements.map((achievement) => {
        return <AchievementListRow key={achievement.companyName} achievement={achievement} />
      })}
    </div>
  )
}