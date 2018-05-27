import React from 'react'
import styled from 'styled-components'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Menu from 'material-ui/svg-icons/navigation/menu'

const StayVisible = styled.div`
	position: absolute;
	margin-left: ${(props) => (props.open) ? `${props.width}px` : 'none'};
	transition: margin .2s;
`

export const NavToggleButton = (props) => {
	return (
		<StayVisible
      open={props.open}
      width={props.width}
			{...props}
		>
			<FloatingActionButton
				onTouchTap={props.toggle}
			>
				<Menu/>
			</FloatingActionButton>
		</StayVisible>
	)
}
