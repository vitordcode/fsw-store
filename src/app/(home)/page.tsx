import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image from 'next/image'
import { Categories } from './components/categories'
import { prismaClient } from '@/lib/prisma'
import ProductList from './components/product-list'
import SectionTitle from './components/section-title'
import BannerPromo from './components/banner-promo'

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercent: {
        gt: 0,
      },
    },
  })

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      }
    }
  })

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      }
    }
  })

  return (
    <div className="px-6 flex flex-col gap-8">
      <BannerPromo src="/banner-home-01.png" alt='Até 55% de desconto esse mês!' />

      <Categories />

      <div>
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>

      <BannerPromo src="/banner-home-02.png" alt='Até 55% de desconto em mouses!' />

      <div>
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>

      <BannerPromo src="/banner-home-03.png" alt='Até 55% de desconto em mouses!' />

      <div>
        <SectionTitle>Mouses</SectionTitle>
        <ProductList products={mouses} />
      </div>
    </div>
  )
}
