import Icon from "./Icon"
import PrinterLink from "./PrinterLink"
import {useState} from "react"
import INFO from "../info.json"

const projects = INFO.personal

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [collapsed, setCollapsed] = useState(true)
    const projectComponents = projects.map((project, i) => {
        return <div key={i} className={'personal--project'}>
            <div className={'personal--repo-technologies'}>
                <h2 className={'personal--name'}>{project.name}</h2>
                <div className={'personal--links'}>
                    <PrinterLink className={'personal--link'} url={project.link} text={'GitHub'} prependIcon={'github'}/>
                    {project.demoLink ? <PrinterLink className={'personal--link'} url={project.demoLink} text={'Demo'} prependIcon={'links'}/> : undefined}
                </div>
            </div>
            <div className={'personal--technologies'}>{project.technologies.join(' • ')}</div>
            <p className={'personal--description'}>{project.description}</p>
        </div>
    })
    return <div className={'personal'}>
        <button className={collapsed ? ' collapsed' : ''} onClick={() => {setCollapsed(!collapsed)}}>
            <h1 className={'personal--heading heading--body'}>
                {'Other Experience'}
                <Icon icon={`arrow-${collapsed ? 'down' : 'up'}-s`} line/>
            </h1>
        </button>
        <div className={`mobile-section${collapsed ? ' collapsed' : ''}`}>
            {projectComponents}
        </div>
    </div>
}