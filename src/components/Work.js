import Icon from "./Icon"
import PrinterLink from "./PrinterLink"
import {useState} from "react"
import INFO from '../info.json'
const jobs = INFO.experience

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [collapsed, setCollapsed] = useState(true)
    const makeContact = job => (
        <div className={'work--contact'}>
            <Icon icon={'contacts-book'}/>
            <div className={'work--contact-info'}>
                <div className={'work--contact-name'}>{`${job.contact} - ${job.contactTitle}`}</div>
                <PrinterLink className={'work--contact-email'} url={'mailto:' + job.contactEmail}/>
            </div>
        </div>
    )
    const jobComponents = jobs.map((job, i) => {
        const list = job.items.map((item, j) => {
            return <p key={j}>{item}</p>
        })
        return <div className={'work--job'}>
            <h2 className={'work--job-company'}>{job.company + ' - ' + job.location}</h2>
            <div className={'work--job-title'}>{job.title}</div>
            {job.contact ? makeContact(job) : undefined}
            {list}
        </div>
    })
    return <div className={'work'}>
        <button className={collapsed ? ' collapsed' : ''} onClick={() => {setCollapsed(!collapsed)}}>
            <h1 className={'work--heading heading--body'}>
                {'Experience'}
                <Icon icon={`arrow-${collapsed ? 'down' : 'up'}-s`} line/>
            </h1>
        </button>
        <div className={`mobile-section${collapsed ? ' collapsed' : ''}`}>
            {jobComponents}
        </div>
    </div>
}
