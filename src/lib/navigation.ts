export interface NavItem {
  label: string
  href: string
  icon: string
}

export const navigation: NavItem[] = [
  { label: "nav.home", href: "#hero", icon: "heroicons-outline:home" },
  { label: "nav.problem", href: "#problem", icon: "heroicons-outline:puzzle" },
  { label: "nav.solutions", href: "#solutions", icon: "heroicons-outline:light-bulb" },
  { label: "nav.proof", href: "#proof", icon: "heroicons-outline:check-circle" },
  { label: "nav.stack", href: "#architecture", icon: "heroicons-outline:server" },
  { label: "nav.method", href: "#method", icon: "heroicons-outline:cog" },
  { label: "nav.principles", href: "#principles", icon: "heroicons-outline:light-bulb" },
  { label: "nav.expertise", href: "#capabilities", icon: "heroicons-outline:academic-cap" },
  { label: "nav.contact", href: "#contact", icon: "heroicons-outline:mail" },
]