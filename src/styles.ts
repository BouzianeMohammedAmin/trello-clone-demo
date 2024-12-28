import styled from "styled-components"

export const AppContainer = styled.div`
  align-items: flex-start;
  background-color: #76B041;
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 20px;
  width: 100%;
`

export const ColumnContainer = styled.div`
  background-color:#639A88;
  width: 300px;
  min-height: 40px;
  margin-right: 20px;
  border-radius: 3px;
  padding: 8px 8px;
  flex-grow: 0;
`

export const ColumnTitle = styled.div`
  padding: 6px 16px 12px;
    color:white ;

  font-weight: bold;
`

export const CardContainer = styled.div`
  background-color: #76B041;
  color:white ;
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  max-width: 300px;
  border-radius: 3px;
  box-shadow: #639A88 0px 1g px 0px 0px;
`
