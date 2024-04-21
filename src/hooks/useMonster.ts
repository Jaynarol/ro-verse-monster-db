import monsters from '@/db/monsters.json'
import { create } from 'zustand'

type MonsterData = {
  searchItem: string
  filterItemIds: number[]
  setItemidsBySearch: (searchItem: string) => void
}

const useMonster = create<MonsterData>((set, get) => ({
  searchItem: '',
  filterItemIds: [],
  setItemidsBySearch: (searchItem) => {
    const itemIds: number[] = []
    monsters.forEach((monster) =>
      monster.drops.forEach((drop) => {
        if (
          drop.item_name.toLowerCase().includes(searchItem.toLowerCase()) &&
          !itemIds.includes(drop.item_id)
        ) {
          itemIds.push(drop.item_id)
        }
      }),
    )

    set({
      searchItem,
      filterItemIds: itemIds,
    })
  },
}))

export default useMonster
