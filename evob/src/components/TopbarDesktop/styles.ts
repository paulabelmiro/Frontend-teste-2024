import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 60px 0px;
    gap: 20px;
    isolation: isolate;
    height: 75px;
    width: 100%;
    backdrop-filter: blur(10px);  
`

export const TopbarContainer = styled.div`
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`