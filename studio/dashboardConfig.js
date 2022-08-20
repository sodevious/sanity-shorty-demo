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
                  buildHookId: '630044be99e37868f91e1b65',
                  title: 'Sanity Studio',
                  name: 'sanity-shorty-demo-studio',
                  apiId: '2c0a0cfe-5ac5-41c8-a5ab-a3015d7276f3'
                },
                {
                  buildHookId: '630044be330a646e171b9939',
                  title: 'Blog Website',
                  name: 'sanity-shorty-demo',
                  apiId: '3ab08634-91c5-4fd9-acb4-64e24b4bb18d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sodevious/sanity-shorty-demo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-shorty-demo.netlify.app', category: 'apps'}
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
