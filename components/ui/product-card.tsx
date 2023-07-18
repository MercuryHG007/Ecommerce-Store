'use client'

import { MouseEventHandler } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Expand, ShoppingCart } from "lucide-react"

import { Product } from "@/types"
import IconButton from "@/components/ui/icon-button"
import Currency from "@/components/ui/currency"
import usePreviewModal from "@/hooks/use-preview-modal"
import useCart from "@/hooks/use-cart"

interface ProductCardProps {
    data: Product
}

const ProductCard: React.FC<ProductCardProps> = ({
    data
}) => {

    const router = useRouter()
    const previewModal = usePreviewModal()
    const cart = useCart()

    const handleClick = () => {
        router.push(`/product/${data?.id}`)
    }

    const handlePreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation()
        previewModal.onOpen(data)
    }

    const handleAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation()
        cart.addItem(data)
    }

    return (
        <div
            className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
            onClick={handleClick}
        >
            <div
                className="aspect-square rounded-xl bg-gray-100 relative"
            >
                <Image
                    src={data?.images?.[0]?.url}
                    fill
                    alt="img"
                    className="aspect-square object-cover rounded-md "
                />
                <div
                    className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5"
                >
                    <div
                        className="flex gap-x-6 justify-center "
                    >
                        <IconButton
                            onClick={handlePreview}
                            icon={<Expand size={20} className="text-gray-600 " />}
                        />
                        <IconButton
                            onClick={handleAddToCart}
                            icon={<ShoppingCart size={20} className="text-gray-600 " />}
                        />
                    </div>
                </div>
            </div>
            <div>
                <p
                    className="font-semibold text-lg"
                >
                    {data.name}
                </p>
                <p
                    className="text-sm text-gray-500 "
                >
                    {data.category?.name}
                </p>
            </div>
            <div
                className="flex items-center justify-between "
            >
                <Currency
                    value={data?.price}
                />
            </div>
        </div>
    )
}

export default ProductCard