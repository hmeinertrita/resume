import { useState } from "react"
import Icon from "./Icon"
import INFO from "../info.json"

const skills = INFO.skills

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [collapsed, setCollapsed] = useState(true)
    const skillComponents = skills.map(skill => (
        <div className={'skills--skill-item' + (skill.lang ? ' skills--lang' : '')}>
            <p className={'skills--skill-name'}>{skill.name}</p>
            <div className={'skills--proficiency-bar'}>
                <div className={'skills--proficiency-foreground'} style={{ '--proficiency': ((skill.proficiency - 1) / 4 * 100) + '%' }}></div>
            </div>
        </div>
    ))
    const scaleTicks = ([1, 2, 3, 4, 5]).map(label => (
        <div className={'skills--tick'}>
            <span className={'skills--tick-label'}>{label}</span>
        </div>
    ))
    return <div className={'skills'}>
        <button className={collapsed ? ' collapsed' : ''} onClick={() => {setCollapsed(!collapsed)}}>
            <h1 className={'skills--heading'}>
                {'Skills'}
                <Icon icon={`arrow-${collapsed ? 'down' : 'up'}-s`} line/>
            </h1>
        </button>
        <div className={`mobile-section${collapsed ? ' collapsed' : ''}`}>
            <div className={'skills--scale'}>
                {scaleTicks}
            </div>
            {skillComponents}
        </div>
    </div>
}