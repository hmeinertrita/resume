import Icon from "./Icon"
import PrinterLink from "./PrinterLink"
import {useState} from "react"
import INFO from '../info.json'

const about = INFO.about
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <div className={'about'}>
            <div className={'about--contact-heading'}>
                <button className={collapsed ? ' collapsed' : ''} onClick={() => {setCollapsed(!collapsed)}}>
                    <h1 className={'about--heading'}>
                        {'About Me'}
                        <Icon icon={`arrow-${collapsed ? 'down' : 'up'}-s`} line/>
                    </h1>
                </button>
                    <div className={'about--contact'}>
                        <PrinterLink className={'about--contact-item'} url={'https://www.github.com/hmeinertrita'} text={'GitHub Repositories'} appendIcon={'github'}/>
                        <PrinterLink className={'about--contact-item'} url={'https://www.linkedin.com/in/hmeinertrita'} text={'LinkedIn Profile'} appendIcon={'linkedin'}/>
                        <PrinterLink className={'about--contact-item'} url={'mailto:hmeinertrita@gmail.com'} appendIcon={'mail-send'}/>
                        <div className={'about--contact-item'}><span>{'1-289-691-6220'}</span><Icon icon={'phone'}/></div>
                    </div>
            </div>
            <div className={`mobile-section${collapsed ? ' collapsed' : ''}`}>
                <p className={'about--description'}>{about}</p>
            </div>
        </div>
    )
}