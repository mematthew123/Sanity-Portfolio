export default {
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },


    


  
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },

    
  },
};
