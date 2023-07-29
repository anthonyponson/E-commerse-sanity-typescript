import { defineField, defineType } from "sanity"

export const banner = {
  name: "banner",
  title: "Banner",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "name",
      type: "string",
    }),
    {
      name: "title",
      tilte: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "images",
      title: "Iamges",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
}
