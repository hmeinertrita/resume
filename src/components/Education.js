const education = {
    school: 'Rochester Institute of Technology',
    location: 'Rochester, NY',
    degree: 'BS Software Engineering',
    minors: 'Minored in Game Design & Development, Woman & Gender Studies',
    years: 'August 2016 - May 2021'
}

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return <div className={'education'}>
        <h1 className={'education--heading heading--body'}>{'Education'}</h1>
        <div className={'education--degree'}>{education.degree}</div>
        <p className={'education--minors'}>{education.minors}</p>
        <div className={'education--school'}>{education.school}</div>
        <div className={'education--years'}>{education.years}</div>
    </div>
}
