'use client'

import { useParams } from 'next/navigation'
import { toCapitalize } from '@/utils/stats-cals'
import Link from 'next/link'
import fields from '@/db/fields.json'
import dungeons from '@/db/dungeons.json'
import { IoNavigateCircle } from 'react-icons/io5'
import { getNavi } from '@/utils/find-navi'
import ImageWithFallback from '@/components/ImageWithFallback'

const Locations = () => {
  const { monster_id } = useParams<{ monster_id: string }>()
  const filteredFileds = fields.filter((field) =>
    field.monsters?.some((monster) => monster.id === +monster_id ?? false),
  )
  const filteredDungeons = dungeons
    .map((dun_main) =>
      dun_main.dungeons.map((dun_sub) => ({
        ...dun_sub,
        map_id: dun_sub.field,
        map_name: dun_main.map_name,
      })),
    )
    .flat()
    .filter((field) =>
      field.monsters?.some((monster) => monster.id === +monster_id ?? false),
    )

  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
    >
      {[...filteredFileds, ...filteredDungeons].map((field) => (
        <li
          key={field.map_id}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
          <div className="flex flex-col p-8">
            <ImageWithFallback
              className="mx-auto h-32 w-32 flex-shrink-0 rounded-md border-2 border-gray-600 bg-gray-300 object-contain"
              src={`https://cdn.maxion.gg/landverse/image/map/${field.map_id}.jpg`}
              alt={field.map_id}
              fallbackSrc={`https://cdn.maxion.gg/landverse/image/map/${field.map_id}.gif`}
            />
            <h3 className="mt-6 text-sm font-medium text-gray-900">
              {field.map_name}
            </h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd
                className="flex cursor-pointer items-center justify-center gap-1 text-sm text-gray-500 duration-150 hover:text-blue-400"
                onClick={() =>
                  navigator.clipboard.writeText(getNavi(field.map_id))
                }
              >
                {field.map_id} <IoNavigateCircle />
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="mt-3 flex items-center justify-center gap-2">
                <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  {toCapitalize(field.type)}
                </span>
                {field.is_safezone && (
                  <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    Safe Zone
                  </span>
                )}
                {field.is_pk && (
                  <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    PK
                  </span>
                )}
                {field.is_mining && (
                  <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    Mining
                  </span>
                )}
              </dd>
            </dl>
          </div>
          <div className="flex-1 px-1 py-3">
            {field.monsters?.map((monster) => (
              <div
                key={monster.id}
                className={`flex items-start justify-start gap-2 p-2 text-xs ${monster.id === +monster_id ? 'text-blue-400' : ''}`}
              >
                <img
                  className="h-10 w-10 flex-shrink-0 rounded-md border border-gray-300 bg-gray-300 object-contain"
                  src={`https://cdn.maxion.gg/landverse/image/monster/${monster.id}.png`}
                  alt={monster.name}
                />
                <div className="flex flex-col items-start justify-start gap-1">
                  <p>
                    Lv.{monster.level}{' '}
                    <Link
                      target="_blank"
                      className="font-bold hover:underline"
                      href={`/monster/${monster.id}`}
                    >
                      {monster.name}
                    </Link>
                  </p>
                  <p>
                    {monster.amount}, After {monster.respawn / 1000} seconds
                  </p>
                </div>
              </div>
            ))}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Locations
