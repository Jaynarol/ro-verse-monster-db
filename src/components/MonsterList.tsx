'use client'

import useMonster from '@/hooks/useMonster'
import { getSureFree, getSureHit, getType } from '@/utils/stats-cals'
import Link from 'next/link'

const MonsterList = () => {
  const { monsters, filterItemIds } = useMonster()

  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5"
    >
      {monsters.map((monster) => (
        <li
          key={monster.id}
          className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
        >
          <div className="flex w-full items-start justify-between space-x-6 p-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="truncate text-sm font-medium text-gray-900">
                  {monster.name}
                </h3>
                <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  {getType(monster)}
                </span>
              </div>
              <div className="text-sm text-gray-500">
                <p className="mb-3 mt-1 truncate">
                  {monster.element} | {monster.race} | {monster.size}
                </p>
                <div className="grid grid-cols-2 gap-1">
                  <span>Lv: {monster.level}</span>
                  <span>HP: {Math.ceil(monster.hp).toLocaleString()}</span>
                  <span>Hit: {getSureHit(monster)}</span>
                  <span>Free: {getSureFree(monster)}</span>
                  <span>Exp: {monster.base_exp}</span>
                  <span>Job: {monster.job_exp}</span>
                </div>
              </div>
            </div>
            <img
              className="h-10 w-10 flex-shrink-0 rounded-md bg-gray-300 object-contain"
              src={`https://cdn.maxion.gg/landverse/image/monster/${monster.id}.png`}
              alt=""
            />
          </div>

          {filterItemIds.length > 0 && (
            <div className="p-2 text-xs">
              <div className="flex flex-wrap gap-2">
                {monster.drops
                  .filter((drop) => filterItemIds.includes(drop.item_id))
                  .map((drop) => (
                    <div
                      className="flex items-center justify-center rounded-md bg-gray-500 py-1 pl-1 pr-2 text-white"
                      key={drop.item_id}
                    >
                      <img
                        src={`https://cdn.maxion.gg/landverse/image/item/${drop.item_id}.png`}
                        alt={drop.item_name}
                      />
                      <span>{drop.item_name}</span>
                      <span className="ml-2">{drop.rate / 100}%</span>
                    </div>
                  ))}
              </div>
            </div>
          )}

          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <a
                  target="_blank"
                  href={`https://landverse.maxion.gg/Monster/${monster.id}`}
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  Official
                </a>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <Link
                  target="_blank"
                  href={`/monster/${monster.id}`}
                  className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  Detail
                </Link>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default MonsterList
