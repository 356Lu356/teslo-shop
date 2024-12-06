'use client'
import QuantitySelector from '@/components/product/quantity-selector/QuantitySelector'
import SizeSelector from '@/components/product/size-selector/SizeSelector'
import { CartProduct, Product, Size } from '@/interfaces';
import { useCartStore } from '@/store';
import React, { useState } from 'react'


interface Props {
    product: Product;
}

export default function AddToCart({ product }: Props) {

    const addProductToCart = useCartStore(state => state.addProductToCart);

    const [size, setSize] = useState<Size | undefined>()
    const [quantity, setQuantity] = useState<number>(1)
    const [posted, setPosted] = useState<boolean>(false)

    const addToCart = () => {
        setPosted(true);

        if (!size) return;

        console.log({ size, quantity, product })
        
        const cartProduct: CartProduct = {
            id: product.id,
            slug: product.slug,
            title: product.title,
            price: product.price,
            image: product.images[0],
            quantity: quantity,
            size: size,
        }


        addProductToCart(cartProduct);
        setPosted(false)
        setQuantity(1)
        setSize(undefined)
    }

    return (
        <>
            {
                posted && !size && (
                    <span className='mt-2 text-red-500 fade-in'>
                        Debe de seleccionar una talla*
                    </span>
                )
            }
            {/* Selector de tallas */}
            <SizeSelector
                onSizeChange={(size) => setSize(size)}
                selectedSize={size}
                availableSizes={product.sizes} />

            {/* Selector de cantidad  */}
            <QuantitySelector
                quantity={quantity}
                onQuantityChange={(quantity) => setQuantity(quantity)}
            />

            {/* Button */}
            <button
                onClick={addToCart}
                className="btn-primary my-5">
                Agregar al carrito
            </button>
        </>
    )
}
