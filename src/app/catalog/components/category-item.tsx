import { Category } from "@prisma/client"
import Image from "next/image"

interface CategoryItemProps {
  category: Category
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <div className="flex flex-col">
      <div className="w-full h-[150px] rounded-tl-lg rounded-tr-lg flex justify-center items-center bg-category-item-gradient">
        <Image 
          src={category.imageUrl}
          alt={category.name}
          width={0}
          height={0}
          sizes="100vw"
          style={{ objectFit: "contain"}}
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
        />
      </div>

      <div className="bg-accent rounded-br-lg rounded-bl-lg text-center py-3">
        <p className="font-sm font-semibold">{category.name}</p>
      </div>
    </div>
  )
}

export default CategoryItem