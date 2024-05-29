// @unocss-include

export enum MenuPositon {
  left,
  right,
}

export interface MenuItem {
  icon: string
  route?: string
  title?: string
  position?: MenuPositon
  cb?: Function
}

export const menus: MenuItem[] = [
  {
    icon: 'i-iconoir-home',
    route: '/',
    title: 'Home',
  },
  {
    icon: 'i-iconoir-book',
    route: '/about',
    title: 'About Me',
  },
  {
    icon: 'i-iconoir:people-tag',
    route: '/travel',
    title: 'Travel Log',
  },
  {
    icon: 'i-iconoir:sun-light dark:i-iconoir:half-moon',
    title: 'Toggle Theme',
    position: MenuPositon.right,
    cb() {
      const color = useColorMode()
      color.preference = color.value === 'dark' ? 'light' : 'dark'
    },
  },
]
