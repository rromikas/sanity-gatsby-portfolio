export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '61bf4e13d9a2690f617dc98c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-qbitpj7d',
                  apiId: '0a635b62-b924-4205-9f75-71e7122f8b88'
                },
                {
                  buildHookId: '61bf4e134fb2dbeb37c3ddc8',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-n6pr3ao9',
                  apiId: '25ddaaa1-95f6-4066-a243-0e43e2716899'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rromikas/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-n6pr3ao9.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
