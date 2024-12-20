

import Link from "next/link";
import Image from "next/image";
import Title from "@/components/ui/title/Title";
import { initialData } from "@/seed/seed";
import QuantitySelector from "@/components/product/quantity-selector/QuantitySelector";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],

];

export default function CheckoutPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">

      <div className="flex flex-col w-[1000px]">
        <Title title="Verificar Orden" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl"> Ajustar Elementos</span>
            <Link href="/cart" className="underline mb-5">
              Editar Carrito
            </Link>


            {/* items de carrito */}
            {productsInCart.map((product) => (
              <div key={product.slug} className="flex mb-5">
                <Image
                  src={`/products/${product.images[0]}`}
                  alt={product.title}
                  width={100}
                  height={100}
                  style={{
                    width: "100px",
                    height: "100px"
                  }}
                  className="mr-5 rounded"
                />
                <div>
                  <p>{product.title}</p>
                  <p>{product.price}€ x 3</p>
                  <p className="font-bold">Subtotal: ${product.price * 3}</p>



                </div>
              </div>
            ))}
          </div>

          {/* Checkout */}
          <div className="bg-white rounded-xl drop-shadow-xl p-7 " >
            <h2 className="text-2xl font-bold mb-2">Direccion de entrega</h2>
            <div className="mb-10">
              <p className="text-xl">Lu Moon</p>
              <p>Av. siempre viva 123</p>
              <p>col.centro </p>
              <p>valencia</p>
              <p>46000</p>
              <p>españa</p>
            </div>

            <div className="w-full f-0.5 rounded bg-gray-200 mb-10" />

            <h2 className="text-2xl mb-2">Resumen de orden</h2>

            <div className="grid grid-cols-2">

              <span>No. Productos</span>
              <span className="text-right ">3 articulos</span>

              <span>Subtotal</span>
              <span className="text-right ">100€</span>

              <span>IVA (15%)</span>
              <span className="text-right ">100€</span>

              <span className="mt-5 text-2xl">Total:</span>
              <span className=" mt-5 text-2xl text-right ">100€</span>

            </div>

            <div className="mt-5 mb-2 w-full">

              <p className="mb-5">
                {/* Disclamer */}
                <span className="text-sm">
                  Al hacer clic en <span className="font-bold">Colocar Orden</span>, aceptas los <Link className="underline" href="/">Términos y condiciones</Link> y la <Link className="underline" href="/">Política de privacidad</Link> de Lu Moon.
                </span>

              </p>


              <Link
                className="flex btn-primary justify-center "
                href={'/orders/123'}>
                Colocar Orden
              </Link>
            </div>

          </div>




        </div>

      </div>

    </div>
  )
}

