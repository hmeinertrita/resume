// eslint-disable-next-line import/no-anonymous-default-export
export default ({icon, line}) => (
    <i className={`icon ri-${icon}-${line ? 'line' : 'fill'}`}></i>
)