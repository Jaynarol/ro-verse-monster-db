import Locations from '@/components/Locations'
import MonsterData from '@/components/MonsterData'
import monsters from '@/db/monsters.json'
import { FC } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

export const generateStaticParams = () =>
  monsters.map((monster) => ({
    monster_id: monster.id.toString(),
  }))

type Props = {
  params: {
    monster_id: string
  }
}

const MonsterPage: FC<Props> = ({ params }) => {
  const monster = monsters.find((monster) => monster.id === +params.monster_id)

  return (
    <main className="px-10 py-5 pb-10">
      <div className="mb-10 gap-10">
        <h1 className=" text-4xl text-white">Monster Location</h1>
        {monster ? (
          <div>
            <div className="my-5 flex items-center justify-center gap-2 text-2xl text-white">
              <img
                className="flex-shrink-0 rounded-md border border-gray-300 bg-gray-300 object-contain"
                src={`https://cdn.maxion.gg/landverse/image/monster/${monster.id}.gif`}
                alt={monster.name}
              />
              <h2>{monster.name}</h2>
              <a
                target="_blank"
                href={`https://landverse.maxion.gg/Monster/${monster.id}`}
              >
                <FaExternalLinkAlt />
              </a>
            </div>
            <div className="mx-auto max-w-sm rounded-md bg-white px-5 py-3 text-center text-sm text-gray-500">
              <p className="mb-3 mt-1 truncate">
                {monster.element} | {monster.race} | {monster.size}
              </p>
              <MonsterData monster={monster} />
            </div>
          </div>
        ) : (
          <h2 className="text-2xl text-white">Monster not found</h2>
        )}
      </div>
      <Locations />
    </main>
  )
}

export default MonsterPage
