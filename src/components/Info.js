import {useState} from "react"
import CollapsibleHeading from "./CollapsibleHeading"
import Jobs from "./Jobs"
import Education from "./Education"
import Personal from "./Personal"

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [workCollapsed, setWorkCollapsed] = useState(true)
    return <>
        <div className={'info'}>
			<CollapsibleHeading heading={'Work Experience'} collapsed={workCollapsed} setCollapsed={setWorkCollapsed} />
			<div className={'columns'}>
				<Jobs collapsed={workCollapsed}/>
				<Education/>
				<Personal/>
			</div>
		</div>
    </>
}
