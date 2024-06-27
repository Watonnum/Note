import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkStyled = ({ children, cursor, textDecoration, to, color }) => {
  return (
    <Linked
      cursor={cursor}
      textDecoration={textDecoration}
      to={to}
      color={color}
    >
      {children}
    </Linked>
  );
};

const Linked = styled(Link)`
  color: ${(props) => props.color};
  cursor: ${(props) => props.cursor};
  text-decoration: ${(props) => props.textDecoration};
`;
