import type { CollectionConfig } from 'payload'

export const JoinFieldCollection: CollectionConfig = {
  slug: 'join-field-collection',
  fields: [
    {
      type: 'relationship',
      name: 'defaultPost',
      relationTo: 'posts',
      filterOptions: ({ data }) => {
        if (!data.posts?.docs?.length) return false
        return {
          id: { in: data.posts.docs },
        }
      },
    },
    {
      name: 'posts',
      type: 'join',
      collection: 'posts',
      on: 'category',
    },
  ],
  timestamps: true,
}
