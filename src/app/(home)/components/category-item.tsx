import { Badge } from '@/components/ui/badge'
import { CATEGORY_ICON } from '@/constants/category-icon'
import { Category } from '@prisma/client'
import Link from 'next/link'

interface CategoryItemProps {
  category: Category
}

const CategoryItem = ({ category }: CategoryItemProps) => {

  return (
    <Link href={`/category/${category.slug}`}>
      <Badge
      variant="outline"
      className="flex p-4 gap-4 rounded-xl justify-center"
    >
      {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
      <span className="text-xs font-medium flex-1 max-w-[40%]">
        {category.name}
      </span>
    </Badge>
    </Link>
  )
}

export default CategoryItem
