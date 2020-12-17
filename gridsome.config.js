// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');
const postcssNesting = require('postcss-nesting');
const purgecssConfig = require('./purgecss.config');

const postcssPlugins = [tailwind(), autoprefixer(), postcssNesting()];

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss(purgecssConfig));

module.exports = {
  siteName: 'Sealman Awesome Blog',
  siteDescription: 'Blog about awesome lists, collections of resources around a specific technology.',
  siteUrl: process.env.DEPLOY_URL || 'https://eager-turing-f1b292.netlify.app/',
  metadata: {
    author: 'Sealman',
    twitter: {
      site: '@sealman234',
      creator: '@sealman234',
    },
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './content/blog/**/*.md',
        remark: {
          plugins: [
            [
              'gridsome-plugin-remark-shiki',
              { theme: 'nord', skipInline: true },
            ],
          ],
        },
        // add this refs section so the BlogPosts are linked with the generated Tags pages
        refs: {
          tags: {
            typeName: 'Tag',
            create: true,
          },
        },
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        exclude: ['/privacy', '/legal'],
      },
    },
  ],
  templates: {
    BlogPost: '/:slug',
    // add the tags template
    Tag: '/tag/:id',
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
};
