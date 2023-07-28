import { defineField, defineType } from "sanity"

export const product = {
  name: "product",
  title: "products",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "name",
      type: "string",
    }),
    {
      name: "slug",
      title: "slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
    {
      name: "images",
      title: "Iamges",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "sizes",
      title: "Sizes",
      type: "array",
      of: [{ type: "string" }],
    },
    {
        name: "description",
        title: "Description",
        type: "string",
      },
      {
        name: "sku",
        title: "Sku",
        type: "string",
      },
      {
        name: "currency",
        title: "Currency",
        type: "string",
      },
      {
        name: "price",
        title: "Price",
        type: "number",
      },
  ],
}
