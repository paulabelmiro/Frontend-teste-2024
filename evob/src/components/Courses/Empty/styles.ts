import styled from 'styled-components';

export const EmptyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
    gap: 10px;
    width: 282px;
    margin: auto;
    height: 137px;
`

export const EmptyIcon = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px;
    gap: 10px;
    width: 40px;
    height: 40px;
    background: ${props => props.theme.white};
    border: 1px solid ${props => props.theme['gray-200']};
    border-radius: 9999999px;
    flex: none;
    order: 0;
    flex-grow: 0;
`

export const EmptyText = styled.p`
    width: 234px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 116%;
    text-align: center;
    color: ${props => props.theme['gray-400']};
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
`