import styled from "styled-components";

export const Div = ({
  margin,
  children,
  width,
  justifyContent,
  background,
  alignItems,
  bord,
  borderRadius,
  display,
  textAlign,
  maxWidth,
  className,
  position,
  top,
  left,
  right,
  bottom,
  onMouseLeave,
  onMouseEnter,
  height,
}) => {
  return (
    <DIV
      background={background}
      display={display}
      bord={bord}
      borderRadius={borderRadius}
      width={width}
      textAlign={textAlign}
      margin={margin}
      maxWidth={maxWidth}
      className={className}
      position={position}
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      height={height}
    >
      {children}
    </DIV>
  );
};

const DIV = styled.div`
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  border: ${(props) => props.bord};
  border-radius: ${(props) => props.borderRadius};
  width: ${(props) => props.width};
  background: ${(props) => props.background};
  text-align: ${(props) => props.textAlign};
  display: ${(props) => props.display};
  margin: ${(props) => props.margin};
  max-width: ${(props) => props.maxWidth};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  height: ${(props) => props.height};
  &.container {
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
    padding: 0 20px;
  }
`;
