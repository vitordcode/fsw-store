import Image from 'next/image'
import { AspectRatio } from './aspect-ratio'
import { ProductWithTotalPrice } from '@/helpers/product'
import { Badge } from './badge'
import { ArrowDown } from 'lucide-react'

interface ProductItemProps {
  product: ProductWithTotalPrice
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex flex-col">
      <div className="bg-accent rounded-lg w-full h-[170px] relative flex justify-center items-center">
        <AspectRatio ratio={16 / 9} className='flex justify-center items-center'>
          <Image
            src={product.imageUrls[0]}
            width={0}
            height={0}
            className="h-auto w-full object-contain max-w-[80%]"
            alt={product.name}
          />
        </AspectRatio>

        {product.discountPercent > 0 && (
          <Badge className="absolute top-3 left-3">
            <ArrowDown size={14} /> {product.discountPercent}%
          </Badge>
        )}
      </div>

      <div className='flex flex-col gap-1'>
        <p className="text-sm overflow-hidden whitespace-nowrap text-ellipsis">
          {product.name}
        </p>
        <div className="flex items-center gap-2">
          {product.discountPercent > 0 ? (
            <>
              <p className="font-semibold">
                R$ {product.totalPrice.toFixed(2)}
              </p>

              <p className="opacity-75 text-xs line-through">
                R$ {Number(product.basePrice).toFixed(2)}
              </p>
            </>
          ) : (
            <p className="font-semibold text-sm">
              R$ {Number(product.basePrice.toFixed(2))}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductItem
