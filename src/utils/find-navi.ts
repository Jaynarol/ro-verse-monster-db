import navigations from '@/db/navi.json'

export const getNavi = (map_id: string) => {
  const navi = navigations.find((n) => n.mapid === map_id)
  if (!navi) {
    return '/invalid navi'
  }

  return `/navi ${map_id} ${navi?.x}/${navi?.y}`
}
