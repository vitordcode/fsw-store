import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image from 'next/image'
import { Categories } from './components/categories'

export default function Home() {
  return (
    <div className='px-6'>
      <AspectRatio ratio={16 / 9} className="">
        <Image
          src="/banner-home-01.png"
          fill
          className="rounded-md object-contain"
          alt="Até 55% de desconto esse mês!"
        />
      </AspectRatio>

      <Categories />
    </div>
  )
}
