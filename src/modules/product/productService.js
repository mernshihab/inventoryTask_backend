import prisma from "../../config/db.js";

export const getAllProducts = async () => {
  return await prisma.product.findMany({
    include: {
      category: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getProductsByCategory = async (categoryId) => {
  return await prisma.product.findMany({
    where: {
      categoryId: Number(categoryId),
    },
    include: {
      category: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const createProduct = async (data) => {
  return await prisma.product.create({
    data,
  });
};

export const deleteProductById = async (id) => {
  return await prisma.product.delete({
    where: {
      id: Number(id),
    },
  });
};
