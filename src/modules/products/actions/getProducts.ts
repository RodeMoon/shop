import { tesloApi } from '@/api/tesloAPI';
import type { Product } from '../interfaces/product';
import { getProductImage } from './getProductImg';

export const getProducts = async (page: number = 1, limit: number = 10) => {
  try {
    const { data } = await tesloApi.get<Product[]>(
      `/products?limit=${limit}&offset=${page * limit}`,
    );

    //  return data.map((product) =>{
    //      return{
    //          ...product,
    //          images:product.images.map(getProductsImage)
    //      };
    //  });

    return data.map((product) => ({
      ...product,
      images: product.images.map(getProductImage),
    }));
  } catch (error) {
    console.log(error);
    throw new Error('Error getting products');
  }
};
