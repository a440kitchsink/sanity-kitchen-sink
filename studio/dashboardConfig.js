export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6203bfdc713d9b410ee5887c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-zf1rduj2',
                  apiId: 'c9cc5f25-7b65-40b3-8bb4-98076c446f96'
                },
                {
                  buildHookId: '6203bfdcabc23d3f3ca1098d',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-r3mv7ggf',
                  apiId: '0b405f52-bd83-4e85-9b8b-a1750f3c231b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/a440kitchsink/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-r3mv7ggf.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
