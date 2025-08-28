import Icon from "./Icon"

// eslint-disable-next-line import/no-anonymous-default-export
export default ({url, prependIcon, appendIcon, text, className}) => {
    const cleanUrl = url.replace('https://', '').replace('www.', '').replace('mailto:', '')
    return (
        <a href={url} className={className}>
            {prependIcon && <Icon icon={prependIcon}/>}
            <span className={'printer--show'}>{cleanUrl}</span>
            <span className={'printer--hide'}>{text || cleanUrl}</span>
            {appendIcon && <Icon icon={appendIcon}/>}
        </a>
    )
}