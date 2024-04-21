import monster from '@/db/monsters.json'

export type Monster = (typeof monster)[number]
