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
                  buildHookId: '6252844442a21d467ca10713',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-q5svat5d',
                  apiId: 'eae7cc80-445c-4cff-8fd0-b954148e2cd6'
                },
                {
                  buildHookId: '625284445c2ff52d22ad5640',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-hz6hmhsv',
                  apiId: '90e25ae8-7e95-4c2c-95f0-384a6a339c0a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thammarith/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-hz6hmhsv.netlify.app', category: 'apps'}
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
