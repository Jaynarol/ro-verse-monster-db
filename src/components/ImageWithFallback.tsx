import React, { FC, useState } from 'react'
import Image from 'next/image'

type Props = {
  src: string
  fallbackSrc: string
  alt: string
  className?: string
}

const ImageWithFallback: FC<Props> = (props) => {
  const { src, fallbackSrc, ...rest } = props
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <Image
      {...rest}
      width={128}
      height={128}
      unoptimized
      src={imgSrc}
      onError={() => {
        console.log('error')
        setImgSrc(fallbackSrc)
      }}
    />
  )
}

export default ImageWithFallback
