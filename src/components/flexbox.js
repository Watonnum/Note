import { styled } from "styled-components";

export const Flex = ({
  children,
  display,
  cursor,
  justifyContent,
  maxWidth,
  alignItems,
  bord,
  borderRadius,
  width,
  flexDirection,
  background,
  margin,
  padding,
  borderTop,
  position,
  top,
  left,
  right,
  bottom,
  height,
  color,
  fontSize,
  boxShadow,
  hoverfontSize,
  hovercolor,
  hoverBord,
  gap,
  hoverBorderRadius,
  hoverBackground,
  hoverboxShadow,
  hovertextShadow,
  hoverBackgroundFilter,
  webkitURLBackdropFilter,
  className,
  flexWrap,
  onClick,
  overflow,
}) => {
  return (
    <Flox
      gap={gap}
      flexWrap={flexWrap}
      className={className}
      display={display}
      justifyContent={justifyContent}
      alignItems={alignItems}
      bord={bord}
      borderRadius={borderRadius}
      width={width}
      flexDirection={flexDirection}
      background={background}
      margin={margin}
      padding={padding}
      maxWidth={maxWidth}
      borderTop={borderTop}
      position={position}
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      height={height}
      cursor={cursor}
      color={color}
      fontSize={fontSize}
      boxShadow={boxShadow}
      hovercolor={hovercolor}
      hoverfontSize={hoverfontSize}
      hoverBord={hoverBord}
      hoverBorderRadius={hoverBorderRadius}
      hoverBackground={hoverBackground}
      hoverboxShadow={hoverboxShadow}
      hovertextShadow={hovertextShadow}
      hoverBackgroundFilter={hoverBackgroundFilter}
      webkitURLBackdropFilter={webkitURLBackdropFilter}
      onClick={onClick}
      overflow={overflow}
    >
      {children}
    </Flox>
  );
};

const Flox = styled.div`
  display: flex;
  flex-wrap: ${(props) => props.flexWrap};
  gap: ${(props) => props.gap};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  border: ${(props) => props.bord};
  border-radius: ${(props) => props.borderRadius};
  width: ${(props) => props.width};
  flex-direction: ${(props) => props.flexDirection};
  background: ${(props) => props.background};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  max-width: ${(props) => props.maxWidth};
  border-top: ${(props) => props.borderTop};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  height: ${(props) => props.height};
  cursor: ${(props) => props.cursor};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  box-shadow: ${(props) => props.boxShadow};
  overflow: ${(props) => props.overflow};
  &:hover {
    color: ${(props) => props.hovercolor};
    font-size: ${(props) => props.hoverfontSize};
    background: ${(props) => props.hoverBackground};
    color: ${(props) => props.hovercolor};
    border: ${(props) => props.hoverborder};
    transition: ${(props) => props.hovertransition};
    text-shadow: ${(props) => props.hovertextShadow};
    box-shadow: ${(props) => props.hoverboxShadow};
    backdrop-filter: ${(props) => props.hoverBackgroundFilter};
    -webkit-backdrop-filter: ${(props) => props.webkitURLBackdropFilter};
  }
  &.container {
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
    padding: 0 20px;
  }

  &.shadow {
    box-shadow: 5px 2px 20px 3px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 5px 2px 20px 3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 5px 2px 20px 3px rgba(0, 0, 0, 0.75);
  }
`;
