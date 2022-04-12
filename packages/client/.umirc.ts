import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    {
      path: '/site/edit',
      component: '@/pages/site/edit',
    },
  ],
  fastRefresh: {},
});
