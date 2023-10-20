import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image from 'next/image'
import { Categories } from './components/categories'
import { prismaClient } from '@/lib/prisma'
import ProductList from './components/product-list'

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercent: {
        gt: 0,
      },
    },
  })

  return (
    <div className="px-6">
      <AspectRatio ratio={16 / 9} className="">
        <Image
          src="/banner-home-01.png"
          fill
          className="rounded-md object-contain"
          alt="Até 55% de desconto esse mês!"
        />
      </AspectRatio>

      <Categories />

      <div className="mt-8">
        <p className='uppercase font-bold mb-3'>Ofertas</p>
        <ProductList products={deals} />
      </div>

      <AspectRatio ratio={16 / 9} className="">
        <Image
          src="/banner-home-02.png"
          fill
          className="rounded-md object-contain"
          alt="Até 55% de desconto em mouses!"
        />
      </AspectRatio>
    </div>
  )
}
