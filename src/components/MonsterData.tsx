import { Monster } from '@/types/types'
import { getSureFree, getSureHit } from '@/utils/stats-cals'
import { get } from 'lodash-es'
import { FC } from 'react'

type Props = {
  monster: Monster
}

const MonsterData: FC<Props> = ({ monster }) => (
  <div className="grid grid-cols-2 gap-1">
    <span>Lv: {monster.level}</span>
    <span>HP: {Math.ceil(monster.hp).toLocaleString()}</span>
    <span>Hit: {getSureHit(monster)}</span>
    <span>Free: {getSureFree(monster)}</span>
    <span>Exp: {monster.base_exp}</span>
    <span>Job: {monster.job_exp}</span>
    <span>
      Atk: {monster.attack.min} ~ {monster.attack.max}
    </span>

    {get(monster, 'modes.Detector', false) && (
      <span className="text-red-500">Detector</span>
    )}
  </div>
)
export default MonsterData
