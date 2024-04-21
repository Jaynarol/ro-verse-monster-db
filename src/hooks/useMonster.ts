import monsters from '@/db/monsters.json'
import { Monster } from '@/types/types'
import { create } from 'zustand'
import { uniq } from 'lodash-es'

type MonsterData = {
  monsters: Monster[]

  searchItem: string
  filterItemIds: number[]
  setItemidsBySearch: (searchItem: string) => void
}

const useMonster = create<MonsterData>((set, get) => ({
  monsters: monsters,

  searchItem: '',
  filterItemIds: [],
  setItemidsBySearch: (searchItem) => {
    const itemIds: number[] = []
    monsters.forEach((monster) =>
      monster.drops.forEach((drop) => {
        if (drop.item_name.toLowerCase().includes(searchItem.toLowerCase())) {
          itemIds.push(drop.item_id)
        }
      }),
    )

    set({
      searchItem,
      filterItemIds: uniq(itemIds),
      monsters: monsters.filter((monster) =>
        monster.drops.some((drop) => itemIds.includes(drop.item_id)),
      ),
    })
  },
}))

export default useMonster
