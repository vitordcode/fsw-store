import { Badge } from '@/components/ui/badge'
import { Category } from '@prisma/client'
import {
  HeadphonesIcon,
  KeyboardIcon,
  MonitorIcon,
  MouseIcon,
  SpeakerIcon,
  SquareIcon,
} from 'lucide-react'

interface CategoryItemProps {
  category: Category
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  const categoryIcon = {
    keyboards: <KeyboardIcon size={18}/>,
    mouses: <MouseIcon size={18}/>,
    headphones: <HeadphonesIcon size={18}/>,
    mousepads: <SquareIcon size={18}/>,
    monitors: <MonitorIcon size={18}/>,
    speakers: <SpeakerIcon size={18}/>,
  }

  return (
    <Badge
      variant="outline"
      className="flex p-4 gap-4 rounded-xl justify-center"
    >
      {categoryIcon[category.slug as keyof typeof categoryIcon]}
      <span className="text-xs font-medium flex-1 max-w-[40%]">
        {category.name}
      </span>
    </Badge>
  )
}

export default CategoryItem
