import { Badge } from "@/components/ui/badge"
import { prismaClient } from "@/lib/prisma"
import { ShapesIcon } from "lucide-react"
import CategoryItem from "./components/category-item"

const CatalogPage = async () => {
  const categories = await prismaClient.category.findMany({})

  return (
    <div className="p-6">
      <Badge className="gap-2 uppercase text-base border-2 border-primary px-3 py-1.5" variant="outline">
        <ShapesIcon size={16} />
        Catálogo
      </Badge>

      <div className="grid grid-cols-2 gap-6 mt-4">
        {categories.map(category => <CategoryItem key={category.id} category={category} />)}
      </div>
    </div>
  )
}

export default CatalogPage