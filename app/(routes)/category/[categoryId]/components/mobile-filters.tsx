'use client'

import { useState } from "react"
import { Plus, X } from "lucide-react"
import { Dialog } from "@headlessui/react"

import IconButton from "@/components/ui/icon-button"
import Button from "@/components/ui/button"
import { Color, Size } from "@/types"
import Filter from "./filter"

interface MobileFiltersProps {
    sizes: Size[]
    colors: Color[]
}

const MobileFilters: React.FC<MobileFiltersProps> = ({
    sizes,
    colors
}) => {

    const [isOpen, setIsOpen] = useState(false)

    const onOpen = () => setIsOpen(true)
    const onClose = () => setIsOpen(false)

    return (
        <>
            <Button
                onClick={onOpen}
                className="flex items-center gap-x-3 lg:hidden "
            >
                Filters
                <Plus
                    size={20}
                />
            </Button>

            <Dialog
                as="div"
                open={isOpen}
                onClose={onClose}
                className="relative z-40 lg:hidden "
            >
                {/* BKGRND */}
                <div
                    className="fixed inset-0 bg-black bg-opacity-25"
                />

                {/* DIALOG BOX */}
                <div
                    className="fixed inset-0 z-40 flex "
                >
                    <Dialog.Panel
                        className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl"
                    >
                        {/* CLOSE BUTTON */}
                        <div
                            className="flex items-center justify-end px-4 "
                        >
                            <IconButton
                                icon={
                                    <X size={15} />
                                }
                                onClick={onClose}
                            />
                        </div>

                        <div
                            className="p-4 "
                        >
                            <Filter
                                valueKey="sizeId"
                                name="Sizes"
                                data={sizes}
                            />
                            <Filter
                                valueKey="colorId"
                                name="Colors"
                                data={colors}
                            />
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
    )
}

export default MobileFilters