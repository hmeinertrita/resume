const skills = [
    {
        name: 'Unreal',
        lang: false,
        proficiency: 3.5
    },
    {
        name: 'Unity',
        lang: false,
        proficiency: 5
    },
    {
        name: 'Godot',
        lang: false,
        proficiency: 3.5
    },
    {
        name: 'Git',
        lang: false,
        proficiency: 4.5
    },
    {
        name: 'SQL',
        lang: false,
        proficiency: 2
    },
    {
        name: 'HTML 5 & CSS',
        lang: false,
        proficiency: 5
    },
    {
        name: 'Node.js',
        lang: false,
        proficiency: 5
    },
    {
        name: 'React & React Native',
        lang: false,
        proficiency: 5
    },
    {
        name: 'AWS',
        lang: false,
        proficiency: 3
    },
    {
        name: 'C++',
        lang: true,
        proficiency: 3.5
    },
    {
        name: 'C#',
        lang: true,
        proficiency: 4
    },
    {
        name: 'C',
        lang: true,
        proficiency: 3
    },
    {
        name: 'Javascript/Typescript',
        lang: true,
        proficiency: 5
    },
    {
        name: 'Python',
        lang: true,
        proficiency: 3
    },
    {
        name: 'Ruby',
        lang: true,
        proficiency: 2
    },
    {
        name: 'Java',
        lang: true,
        proficiency: 3.5
    }
]

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
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
        <h1 className={'skills--heading'}>{'Skills'}</h1>
        <div className={'skills--scale'}>
            {scaleTicks}
        </div>
        {skillComponents}
    </div>
}