import Icon from "./Icon"
import PrinterLink from "./PrinterLink"

const jobs = [
    {
        company: 'Psyop',
        location: 'Los Angeles, CA',
        title: 'Data Wrangler & AR Developer',
        contact: 'Matthew Seymour',
        contactTitle: 'GM/EP, Free Range Games',
        contactEmail: 'matthew@freerangegames.com',
        items: [
            'Worked in the Real-time Interactive group at renowned commercial & game content studio Psyop\'s LA division.',
            'Data wrangler for mocap data on a AAA video game project. Attended mocap shoots and processed all data for use in animation, client review, and Unreal development. Solo developer on various AR proof-of-concepts using a variety of technologies including Unity, 8th Wall, and ARKit.',
        ]
    },
    {
        company: 'Myplanet',
        location: 'Toronto, ON',
        title: 'Software Developer',
        contact: 'Yashar Rassoulli',
        contactTitle: 'CTO & Co-Founder, Myplanet',
        contactEmail: 'yashar@myplanet.com',
        items: [
            'Front-end lead on a project for a national telecom company developing a high profile medical web application. Worked onsite at client\'s headquarters as primary liaison for front-end implementation.',
            'DevOps lead launching a new eCommerce website. Set up and maintained a CD pipeline using GitHub and AWS. Researched and integrated headless eCommerce platforms.'
        ]
    },
    {
        company: 'mPulse',
        location: 'Tuscon, AZ',
        contact: 'Zachary Elinson',
        title: 'Software Engineer',
        contactEmail: 'zachary.elinson@mpulse.com',
        contactTitle: 'Software Engineer Team Lead, mPulse',
        items: [
            'Currently employed as a UI engineer for mPulse\'s portals division. I build and maintain responsive web and mobile UIs personalized for dozens of healthcare clients. Working on project teams to develop new applications and features.'
        ]
    },
    // {
    //     company: 'TestTunes',
    //     location: 'Senior Project at RIT',
    //     title: 'Developer',
    //     items: [
    //         'Worked with a small team of other students to develop and integrate a survey platform into a mobile app for students to listen to music during exams.',
    //         'Implemented new features into an existing codebase built on React Native with a Rust back-end.',
    //     ]
    // }
]

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
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
        <h1 className={'work--heading heading--body'}>{'Work Experience'}</h1>
        {jobComponents}
    </div>
}
