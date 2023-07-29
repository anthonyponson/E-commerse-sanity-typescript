import { type SchemaTypeDefinition } from "sanity"
import { banner } from "./schemas/banner"
import { product } from "./schemas/product-schema"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product , banner],
}
