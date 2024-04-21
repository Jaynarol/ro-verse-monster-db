import { Monster } from '@/types/types'

export const getType = (monster: Monster) => {
  return (
    monster.type.charAt(0).toUpperCase() + monster.type.slice(1).toLowerCase()
  )
}

export const getSureHit = (monster: Monster) => {
  return 200 + monster.level + monster.agi
}

export const getSureFree = (monster: Monster) => {
  return 170 + monster.level + monster.dex
}
