export const revalidate = 10080;// 7 dias

import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/actions";
import { titleFont } from "@/config/font";
import QuantitySelector from "@/components/product/quantity-selector/QuantitySelector";
import SizeSelector from "@/components/product/size-selector/SizeSelector";
import ProductMobileSlideshow from "@/components/product/slideshow/ProductMobileSlideshow";
import ProductSlideshow from "@/components/product/slideshow/ProductSlideshow";
import StockLabel from "@/components/product/stock-label/StockLabel";
import AddToCart from "./ui/AddToCart";

interface Props {
  params: {
    slug: string;
  }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug

  // fetch data
  const product = await getProductBySlug(slug);

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []

  return {
    title: product?.title ?? 'producto no encontrado',
    description: product?.description ?? ' ',
    openGraph: {
      title: product?.title ?? 'producto no encontrado',
      description: product?.description ?? ' ',
      images: [`/products/${ product?.images[1] }`],
    },
  }
}


export default async function ProductPage({ params }: Props) {

  const { slug } = params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3 ">

      {/* SlideShrow */}
      <div className="col-span-1 md:col-span-2 bg-re-300">

        {/* MOBILE SLIDESHOW */}
        <ProductMobileSlideshow
          images={product.images}
          title={product.title}
          className="block md:hidden"
        />

        {/* DESKTOP SLIDESHOW */}
        <ProductSlideshow
          images={product.images}
          title={product.title}
          className="hidden md:block"
        />

      </div>


      {/* Detalles */}
      <div className="col-span-1 px-5 ">

        <StockLabel slug={product.slug} />

        <h1 className={` ${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>

        <p className="text-lg mb-5">{product.price}€</p>

       <AddToCart product={product} />

        {/* description */}
        <h3 className="font-bold text-sm">
          Descripción
        </h3>
        <p className="font-light">
          {product.description}
        </p>



      </div>

    </div>
  )
}