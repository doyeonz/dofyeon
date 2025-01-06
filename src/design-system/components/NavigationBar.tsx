import { useState } from 'react'
import styled from 'styled-components'
import type { NavItemType } from '../../types/design'
import color from '../colors/color'

import btnHomeNormal from '../icons/btnHomeNormal.svg'
import btnFlagNormal from '../icons/btnFlagNormal.svg'
import btnAddNormal from '../icons/btnAddNormal.svg'
import btnMoreNormal from '../icons/btnMoreNormal.svg'

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
	width: 375px;
	hight: 100px;
`
const NavItem = styled.div<{ isActive: boolean }>`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 4px;
	cursor: pointer;
	transition: all 0.2s ease-in-out;

	span {
		font-size: 12px;
		color: ${(props) => (props.isActive ? color.gray10 : color.gray50)};
		transition: color 0.2s ease-in-out;
	}

	img {
		width: 24px;
		height: 24px;
		transition: opacity 0.2s ease-in-out;
		opacity: ${(props) => (props.isActive ? 1 : 0.5)};
		filter: ${(props) => (props.isActive ? 'brightness(1) saturate(100%)' : 'brightness(0.8) saturate(0)')};
	}

	&:hover {
		img {
			opacity: 0.8;
			filter: ${(props) => (props.isActive ? 'brightness(1.2) saturate(120%)' : 'brightness(0.9) saturate(20%)')};
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

const NavigationBar = () => {
	const [activeTab, setActiveTab] = useState<NavItemType>('home')

	const navItems = [
		{ id: 'home' as NavItemType, icon: btnHomeNormal, label: '홈' },
		{ id: 'hustle' as NavItemType, icon: btnFlagNormal, label: '허슬' },
		{ id: 'create' as NavItemType, icon: btnAddNormal, label: '생성' },
		{ id: 'more' as NavItemType, icon: btnMoreNormal, label: '더보기' },
	]

	return (
		<BottomNav>
			{navItems.map((item) => (
				<NavItem key={item.id} isActive={activeTab === item.id} onClick={() => setActiveTab(item.id)}>
					<img src={item.icon} alt={item.label} />
					<span>{item.label}</span>
				</NavItem>
			))}
		</BottomNav>
	)
}

export default NavigationBar
