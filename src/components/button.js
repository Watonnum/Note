import styled from "styled-components";

export const Button = ({
  children,
  background,
  color,
  fontSize,
  width,
  padding,
  borderRadius,
  border,
  hoverborder,
  margin,
  hoverBackground,
  hovercolor,
  onClick,
  fontWeight,
  hovertextShadow,
  hovertransition,
  hoverboxShadow,
  boxShadow,
  transition,
  className,
  htmlFor,
  top,
  left,
  right,
  bottom,
  position,
  textAlign,
  height,
  fontFamily,
  textShadow,
}) => {
  return (
    <Buttoon
      background={background}
      textAlign={textAlign}
      color={color}
      fontSize={fontSize}
      width={width}
      padding={padding}
      borderRadius={borderRadius}
      border={border}
      margin={margin}
      hoverBackground={hoverBackground}
      hovercolor={hovercolor}
      hoverborder={hoverborder}
      onClick={onClick}
      fontWeight={fontWeight}
      hovertextShadow={hovertextShadow}
      hovertransition={hovertransition}
      hoverboxShadow={hoverboxShadow}
      boxShadow={boxShadow}
      transition={transition}
      className={className}
      htmlFor={htmlFor}
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      position={position}
      height={height}
      fontFamily={fontFamily}
      textShadow={textShadow}
    >
      {children}
    </Buttoon>
  );
};

const Buttoon = styled.button`
  background: ${(props) => props.background};
  height: ${(props) => props.height};
  border: ${(props) => props.border};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  border-radius: ${(props) => props.borderRadius};
  font-weight: ${(props) => props.fontWeight};
  font-family: ${(props) => props.fontFamily};
  box-shadow: ${(props) => props.boxShadow};
  transition: ${(props) => props.transition};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  position: ${(props) => props.position};
  text-align: ${(props) => props.textAlign};
  text-shadow: ${(props) => props.textShadow};
  &:hover {
    cursor: pointer;
    text-decoration: none;
    background: ${(props) => props.hoverBackground};
    color: ${(props) => props.hovercolor};
    border: ${(props) => props.hoverborder};
    transition: ${(props) => props.hovertransition};
    text-shadow: ${(props) => props.hovertextShadow};
    box-shadow: ${(props) => props.hoverboxShadow};
  }
`;
