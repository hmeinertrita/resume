import Icon from "./Icon"

// eslint-disable-next-line import/no-anonymous-default-export
export default ({collapsed, setCollapsed, heading}) => (<>
	<button className={collapsed ? ' collapsed' : ''} onClick={() => {setCollapsed(!collapsed)}}>
		<h1 className={'heading--body'}>
			{heading}
			<Icon icon={`arrow-${collapsed ? 'down' : 'up'}-s`} line/>
		</h1>
	</button>
</>)
