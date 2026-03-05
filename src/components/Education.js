import {useState} from "react"
import Icon from "./Icon"
import INFO from "../info.json"

const education = INFO.education

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [collapsed, setCollapsed] = useState(true)
    return <>
        <button className={collapsed ? ' collapsed' : ''} onClick={() => {setCollapsed(!collapsed)}}>
            <h1 className={'education--heading heading--body'}>
                {'Education'}
                <Icon icon={`arrow-${collapsed ? 'down' : 'up'}-s`} line/>
            </h1>
        </button>
        <div className={`mobile-section${collapsed ? ' collapsed' : ''}`}>
            <div className={'education--degree'}>{education.degree}</div>
            <p className={'education--minors'}>{education.minors}</p>
            <div className={'education--school'}>{education.school}</div>
            <div className={'education--years'}>{education.years}</div>
        </div>
    </>
}
