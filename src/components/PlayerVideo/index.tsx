import { DefaultUi, Player, Youtube } from '@vime/react'

interface PlayerVideoProps {
    videoId: string
}

export function PlayerVideo({videoId}: PlayerVideoProps) {
  return (
    <Player>
    <Youtube videoId={videoId} />
    <DefaultUi />
  </Player>
  )
}
