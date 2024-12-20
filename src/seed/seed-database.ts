import prisma from "../lib/prisma";
import { initialData } from "./seed";

async function main() {
  //1. Borrar registros previos
//   await Promise.all([
  await prisma.user.deleteMany();

   await prisma.productImage.deleteMany();
   await prisma.product.deleteMany();
   await prisma.category.deleteMany();
//   ]);

  const { categories, products, users } = initialData;

  await prisma.user.createMany({
    data: users,
  });

  //2. Crear categorias
  const categoriesData = categories.map((name) => ({ name }));

  await prisma.category.createMany({
    data: categoriesData,
  });

  const categoriesDB = await prisma.category.findMany();

  const categoriesMap = categoriesDB.reduce((map, category) => {
    map[category.name.toLowerCase()] = category.id;
    return map;
  }, {} as Record<string, string>); //{ 'name': 'id' }

  console.log(categoriesMap);

  //Products
  products.forEach(async (product) => {
    const { type, images, ...rest } = product;

    const dbProduct = await prisma.product.create({
      data: {
        ...rest,
        categoryId: categoriesMap[type],
      },
    });

    const imagesData = images.map( image => ({
        url: image,
        productId: dbProduct.id
    }))

    await prisma.productImage.createMany({
        data: imagesData
    })


  });
}

(() => {
  if (process.env.NODE_ENV === "production") return;

  main();
})();
