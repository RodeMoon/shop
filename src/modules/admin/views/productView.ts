import { getProductID } from "@/modules/products/actions";
import { useQuery } from "@tanstack/vue-query";
import { defineComponent, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { useForm } from "vee-validate";
import * as yup from "yup";
import customInput from "@/modules/common/components/customInput.vue";

const validationSchema = yup.object({
  title: yup.string().required("Title is required").min(3, "Title must be at least 3 characters long"),
  slug: yup.string().required("Slug is required").min(5, "Slug must be at least 5 characters long"),
  description: yup.string().required("Description is required"),
  price: yup.number().required("Price is required").positive("Price must be positive"),
  sizes: yup.array().of(yup.string().oneOf(['XS', 'S', 'M', 'L', 'XL', 'XXL'], "Invalid size")).required("At least one size is required"),
  stock: yup.number().required("Stock is required").integer("Stock must be an integer").min(0, "Stock cannot be negative"),
  images: yup.array().of(yup.string().url("Invalid image URL")).required("At least one image is required"),
});

export default defineComponent({
  components: {
    customInput,
  },
  props: {
    productId: {
      type: String,
      required: true,
    }
  },
  setup(props) {
    const router = useRouter();

    const { data: product, isError, isLoading } = useQuery({
      queryKey: ['product', props.productId],
      queryFn: () => getProductID(props.productId),
      retry: false,
    })

    const { values, defineField, errors } = useForm({ validationSchema });
    const [title, titleAttrs] = defineField('title');
    const [slug, slugAttrs] = defineField('slug');
    const [description, descriptionAttrs] = defineField('description');
    const [price, priceAttrs] = defineField('price');
    const [sizes, sizesAttrs] = defineField('sizes');
    const [stock, stockAttrs] = defineField('stock');
    const [images, imagesAttrs] = defineField('images');

    watchEffect(() => {
      if (isError.value && !isLoading.value) {
        router.replace('/admin/products');
      }
    });

    return {
      values,
      errors,
      title, titleAttrs,
      slug, slugAttrs,
      description, descriptionAttrs,
      price, priceAttrs,
      sizes, sizesAttrs,
      stock, stockAttrs,
      images, imagesAttrs,
      allSizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    };
  },
})
