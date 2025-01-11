import styled from "styled-components";

export const TopBarMobileContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px 20px;
    gap: 30%;
    isolation: isolate;
    width: 100%;
    height: 68px;
    backdrop-filter: blur(5px);
`

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 20px;
    height: 20px;
`