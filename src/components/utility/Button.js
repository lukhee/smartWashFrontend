import styled from 'styled-components';

const Button = styled.button`
    color: white;
    font-weight: bold;
    background: ${p => p.secondary? '#3384f0' : 'Green'};
    padding: 8px;
    box-shadow: none;
    width: 100%;
    white-space: none;
    border: none;
    white-space: none;
    cursor: pointer;

    &:disabled{
        background: #eee;
        color: #666;
        cursor: not-allowed
    }
`;
export {Button}