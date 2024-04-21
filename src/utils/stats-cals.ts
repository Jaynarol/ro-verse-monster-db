import { Monster } from '@/types/types'

export const toCapitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export const getSureHit = (monster: Monster) => {
  return 200 + monster.level + monster.agi
}

export const getSureFree = (monster: Monster) => {
  return 170 + monster.level + monster.dex
}
