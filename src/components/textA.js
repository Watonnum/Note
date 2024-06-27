import styled from "styled-components";
import { Link } from "react-router-dom";

export const TextA = ({
  children,
  display,
  justifyContent,
  alignItems,
  fontSize,
  color,
  margin,
  padding,
  fontWeight,
  bord,
  borderRadius,
  lineHeight,
  fontFamily,
  onClick,
  href,
  hovercolor,
  hoverfontSize,
  to,
}) => {
  return (
    <A
      display={display}
      justifyContent={justifyContent}
      alignItems={alignItems}
      fontSize={fontSize}
      color={color}
      margin={margin}
      padding={padding}
      fontWeight={fontWeight}
      bord={bord}
      href={href}
      lineHeight={lineHeight}
      borderRadius={borderRadius}
      fontFamily={fontFamily}
      onClick={onClick}
      hoverfontSize={hoverfontSize}
      hovercolor={hovercolor}
      to={to}
    >
      {children}
    </A>
  );
};

const A = styled(Link)`
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  font-size: ${(props) => props.fontSize};
  font-family: ${(props) => props.fontFamily};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border: ${(props) => props.bord};
  border-radius: ${(props) => props.borderRadius};
  cursor: pointer;
  text-decoration: none;
  line-height: ${(props) => props.lineHeight};
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 3px;
    bottom: 0;
    left: 0;
    background-color: #ff6464;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom right;
  }
`;
