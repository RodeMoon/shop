import { tesloApi } from "@/api/tesloAPI"
import { getProductImage } from "./getProductImg"

export const getProductID = async (productId: string) => {
  try {
    const { data } = await tesloApi.get(`/products/${productId}`);
    return {
      ...data,
      images: data.images.map(getProductImage),
    }
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching product by ID");
  }
}
