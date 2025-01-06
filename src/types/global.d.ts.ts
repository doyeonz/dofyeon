export type NavItemType = 'home' | 'hustle' | 'create' | 'more'

interface NavItem {
	id: NavItemType
	icon: string
	label: string
	activityName: string
}
