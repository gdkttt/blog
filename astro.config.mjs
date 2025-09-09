// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'http://dany.life',
  trailingSlash: 'never',
  prefetch: true,

  // 输出目录
  outDir: './dist',

  // 静态资源配置
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto',
  },

  // Markdown 配置
  markdown: {
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },

  // 图片优化
  image: {
    responsiveStyles: true,
  },

  integrations: [
    mdx({
      shikiConfig: {
        theme: 'github-dark',
        wrap: true,
      },
    }),
    sitemap(),
  ],

  // 开发服务器配置
  server: {
    port: 4321,
    host: true,
  },

  // Vite 配置
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash][extname]',
          chunkFileNames: 'assets/[name].[hash].js',
          entryFileNames: 'assets/[name].[hash].js',
        },
      },
    },
    optimizeDeps: {
      include: ['@astrojs/mdx'],
    },
  },

  experimental: {
    contentIntellisense: true,
  },
});
