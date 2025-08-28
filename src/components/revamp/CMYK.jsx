import styled from "styled-components"

const Atom = styled.div({
    mixBlendMode: 'multiply',
    position: 'absolute',
    width: '24px',
    height: '24px'
})
const CyanAtom = styled(Atom)({
    backgroundColor: 'cyan'
})

const MagentaAtom = styled(Atom)({
    backgroundColor: 'magenta'
})

const YellowAtom = styled(Atom)({
    backgroundColor: 'yellow'
})

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    &:hover {
        & ${CyanAtom} {
            transform: translateX(24px);
        }
        & ${MagentaAtom} {
            transform: translateX(48px);
        }
    }
`

export const LinkCMYK = () => (
    <Wrapper>
        <CyanAtom/>
        <MagentaAtom/>
        <YellowAtom/>
    </Wrapper>
)