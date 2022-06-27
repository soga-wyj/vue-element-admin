import Layout from '@/layout'

const demon = {
  path: '/demon',
  component: Layout,
  redirect: '/demon',
  name: 'demon',
  meta: {
    title: 'demon',
    icon: 'table'
  },
  children: [
    {
      path: 'demon1',
      component: () => import('@/views/demon/demon1/index'),
      name: 'demon1',
      meta: { title: 'demon1', icon: 'icon', noCache: true }
    }
  ]
}
export default demon
