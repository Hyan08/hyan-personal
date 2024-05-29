import type { RouteNamedMap } from 'vue-router/auto/routes'

export interface MenuItem {
  name: string
  icon?: string
  routeName: keyof RouteNamedMap
  children?: MenuItem[]
}

export const menuItems: MenuItem[] = [{
  name: 'about',
  routeName: 'about',
}, {
  name: 'travel',
  routeName: 'travel',
}]
