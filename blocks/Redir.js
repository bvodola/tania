import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin-top: 30px;
  text-align: center;
  width: 100%;
`;

const Redir = (props) => {
  React.useEffect(() => {
    location.href = props.url;
  }, []);
  return <StyledDiv>Carregando...</StyledDiv>;
};

export default Redir;
