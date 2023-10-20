import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image, { ImageProps } from "next/image"

const BannerPromo = ({ alt, ...props }: ImageProps) => {
  return (
    <AspectRatio ratio={16 / 9}>
        <Image
          fill
          className="rounded-md object-contain"
          alt={alt}
          {...props}
        />
      </AspectRatio>
  )
}

export default BannerPromo