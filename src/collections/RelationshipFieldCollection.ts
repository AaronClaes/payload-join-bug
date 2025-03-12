import type { CollectionConfig } from 'payload'

export const RelationshipFieldCollection: CollectionConfig = {
  slug: 'relationship-field-collection',
  fields: [
    {
      type: 'relationship',
      name: 'defaultPost',
      relationTo: 'posts',
      filterOptions: ({ data }) => {
        if (!data.posts?.length) return false
        return {
          id: { in: data.posts },
        }
      },
    },
    {
      name: 'posts',
      type: 'relationship',
      relationTo: 'posts',
      hasMany: true,
    },
  ],
  timestamps: true,
}
