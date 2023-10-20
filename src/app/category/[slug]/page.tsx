import { Badge } from "@/components/ui/badge"
import ProductItem from "@/components/ui/product-item"
import { CATEGORY_ICON } from "@/constants/category-icon"
import computeProductTotalPrice from "@/helpers/product"
import { prismaClient } from "@/lib/prisma"

const CategoryProducts = async ({ params }: any) => {
  const category = await prismaClient.category.findFirst({
    where: {
      slug: params.slug
    },
    include: {
      products: true,
    }
  })

  if (!category) {
    return null
  }
  
  return (
    <div className="flex flex-col p-6">
      <Badge className="w-fit gap-2 uppercase text-base border-2 border-primary px-3 py-1.5" variant="outline">
        {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
        {category.name}
      </Badge>

      <div className="grid grid-cols-2 mt-4 gap-6">
        {category.products.map(product => <ProductItem key={product.id} product={computeProductTotalPrice(product)} />)}
      </div>
    </div>
  )
}

export default CategoryProducts