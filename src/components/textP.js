import styled from "styled-components";

export const TextP = ({
  children,
  display,
  textAlign,
  justifyContent,
  alignItems,
  fontSize,
  color,
  width,
  margin,
  padding,
  fontWeight,
  bord,
  borderRadius,
  lineHeight,
  fontFamily,
  cursor,
  letterSpacing,
  textDecoration,
  hoverBackgroundColor,
  hovercolor,
  hoverborder,
  hovertransition,
  position,
  textStroke,
  textTransform,
  beforeContent,
  beforePosition,
  beforeTop,
  beforeLeft,
  beforeWidth,
  beforeHeight,
  beforeColor,
  beforebackground,
  beforeborderRadius,
  beforeTextStroke,
  beforeBorderRight,
  beforeOverflow,
  beforeAnimation,
  dataText,
  top,
  left,
  right,
  bottom,
  textShadow,
  onClick,
  onMouseEnter,
  onMouseLeave,
  height,
  overflow,
  whiteSpace,
  textOverflow,
}) => {
  return (
    <P
      display={display}
      height={height}
      justifyContent={justifyContent}
      alignItems={alignItems}
      fontSize={fontSize}
      color={color}
      width={width}
      margin={margin}
      padding={padding}
      fontWeight={fontWeight}
      bord={bord}
      href={children}
      lineHeight={lineHeight}
      borderRadius={borderRadius}
      fontFamily={fontFamily}
      textAlign={textAlign}
      letterSpacing={letterSpacing}
      cursor={cursor}
      textDecoration={textDecoration}
      hoverBackgroundColor={hoverBackgroundColor}
      hovercolor={hovercolor}
      hoverborder={hoverborder}
      hovertransition={hovertransition}
      position={position}
      textStroke={textStroke}
      textTransform={textTransform}
      textShadow={textShadow}
      beforeColor={beforeColor}
      beforebackground={beforebackground}
      beforeborderRadius={beforeborderRadius}
      beforeTextStroke={beforeTextStroke}
      beforeBorderRight={beforeBorderRight}
      beforeOverflow={beforeOverflow}
      beforeAnimation={beforeAnimation}
      beforeLeft={beforeLeft}
      beforeContent={beforeContent}
      beforePosition={beforePosition}
      beforeWidth={beforeWidth}
      beforeHeight={beforeHeight}
      beforeTop={beforeTop}
      data-text={dataText}
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      overflow={overflow}
      whiteSpace={whiteSpace}
      textOverflow={textOverflow}
    >
      {children}
    </P>
  );
};

const P = styled.p`
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  text-align: ${(props) => props.textAlign};
  font-size: ${(props) => props.fontSize};
  font-family: ${(props) => props.fontFamily};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  line-height: ${(props) => props.lineHeight};
  letter-spacing: ${(props) => props.letterSpacing};
  text-shadow: ${(props) => props.textShadow};
  cursor: ${(props) => props.cursor};
  text-decoration: ${(props) => props.textDecoration};
  position: ${(props) => props.position};
  -webkit-text-stroke: ${(props) => props.textStroke};
  text-transform: ${(props) => props.textTransform};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  height: ${(props) => props.height};
  overflow: ${(props) => props.overflow};
  text-overflow: ${(props) => props.textOverflow};
  white-space: ${(props) => props.whiteSpace};

  &:hover {
    background: ${(props) => props.hoverBackground};
    color: ${(props) => props.hovercolor};
    border: ${(props) => props.hoverborder};
    transition: ${(props) => props.hovertransition};
    text-shadow: ${(props) => props.hovertextShadow};
  }

  &::before {
    content: ${(props) => props.beforeContent};
    position: ${(props) => props.beforePosition};
    top: ${(props) => props.beforeTop};
    left: ${(props) => props.beforeLeft};
    width: ${(props) => props.beforeWidth};
    height: ${(props) => props.beforeHeight};
    color: ${(props) => props.beforeColor};
    background: ${(props) => props.beforebackground};
    border-radius: ${(props) => props.beforeborderRadius};
    -webkit-text-stroke: ${(props) => props.beforeTextStroke};
    border-right: ${(props) => props.beforeBorderRight};
    overflow: ${(props) => props.beforeOverflow};
    animation: ${(props) => props.beforeAnimation};
  }

  @keyframes animate {
    0%,
    10%,
    100% {
      width: 0;
    }
    70%,
    90% {
      width: 100%;
    }
  }
`;
