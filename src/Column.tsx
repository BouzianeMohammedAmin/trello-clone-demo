import { CardContainer, ColumnContainer, ColumnTitle } from "./styles";

type ColumnProps = {
    text: string; 
}

export  const  Column = ({text} : ColumnProps) =>{
  return (
      <ColumnContainer>
          <ColumnTitle>{text}</ColumnTitle>
          <CardContainer>First Container </CardContainer>
          <CardContainer>Sacend Container </CardContainer>
          <CardContainer>third Container </CardContainer>
      </ColumnContainer>
      
  )
}
