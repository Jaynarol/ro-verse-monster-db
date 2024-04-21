import monsters from '@/db/monsters.json'
import { Monster } from '@/types/types'
import { create } from 'zustand'

type MonsterData = {
  monsters: Monster[]
}

const useMonster = create<MonsterData>((set, get) => ({
  monsters: monsters,
}))

export default useMonster
