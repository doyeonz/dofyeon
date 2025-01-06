import { useState, useEffect } from 'react'
import { useActivity } from '@stackflow/react'
import { useFlow } from '../../stackflow'
import styled from 'styled-components'
import color from '../colors/color'
import type { NavItem, NavItemType } from '../../types/global.d.ts'

import btnHomeNormal from '../icons/btnHomeNormal.svg'
import btnFlagNormal from '../icons/btnFlagNormal.svg'
import btnAddNormal from '../icons/btnAddNormal.svg'
import btnMoreNormal from '../icons/btnMoreNormal.svg'

const NavigationBar = () => {
	const { push } = useFlow()
	const activity = useActivity()
	const [activeTab, setActiveTab] = useState<NavItemType>('home')

	const navItems: NavItem[] = [
		{ id: 'home', icon: btnHomeNormal, label: '홈', activityName: 'HomePage' },
		{ id: 'hustle', icon: btnFlagNormal, label: '허슬', activityName: 'HustlePage' },
		{ id: 'create', icon: btnAddNormal, label: '생성', activityName: 'CreatePage' },
		{ id: 'more', icon: btnMoreNormal, label: '더보기', activityName: 'MorePage' },
	]

	useEffect(() => {
		if (activity.isActive) {
			const currentItem = navItems.find((item) => item.activityName === activity.name)
			if (currentItem) {
				setActiveTab(currentItem.id)
			}
		}
	}, [activity])

	const handleNavigation = (id: NavItemType) => {
		const item = navItems.find((item) => item.id === id)
		if (item) {
			push(item.activityName as any, {})
		}
	}

	return (
		<BottomNav>
			{navItems.map((item) => (
				<NavItem key={item.id} $isActive={activeTab === item.id} onClick={() => handleNavigation(item.id)}>
					<img src={item.icon} alt={item.label} />
					<span>{item.label}</span>
				</NavItem>
			))}
		</BottomNav>
	)
}

export default NavigationBar

const BottomNav = styled.nav`
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(25, 25, 26, 0.8);
	display: flex;
	justify-content: space-around;
	padding: 16px;
	border-radius: 16px 16px 0 0;
	width: 100%;
	height: 100px;
`

const NavItem = styled.div<{ $isActive: boolean }>`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 4px;
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	span {
		font-size: 12px;
		color: ${(props) => (props.$isActive ? color.gray10 : color.gray50)};
		transition: color 0.2s ease-in-out;
	}

	img {
		width: 24px;
		height: 24px;
		transition: opacity 0.2s ease-in-out;
		opacity: ${(props) => (props.$isActive ? 1 : 0.5)};
		filter: ${(props) => (props.$isActive ? 'brightness(1) saturate(100%)' : 'brightness(0.8) saturate(0)')};
	}

	&:hover {
		img {
			opacity: 0.8;
			filter: ${(props) => (props.$isActive ? 'brightness(1.2) saturate(120%)' : 'brightness(0.9) saturate(20%)')};
		}
	}

	&:active {
		transform: scale(0.95);
		img {
			opacity: 1;
		}
		span {
			color: ${color.gray10};
		}
	}
`
