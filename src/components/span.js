import styled from "styled-components";

export const Span = ({
  children,
  display,
  textAlign,
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
  letterSpacing,
}) => {
  return (
    <SpanStyle
      display={display}
      justifyContent={justifyContent}
      alignItems={alignItems}
      fontSize={fontSize}
      color={color}
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
    >
      {children}
    </SpanStyle>
  );
};

const SpanStyle = styled.span`
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  text-align: ${(props) => props.textAlign};
  font-size: ${(props) => props.fontSize};
  font-family: ${(props) => props.fontFamily};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  line-height: ${(props) => props.lineHeight};
  letter-spacing: ${(props) => props.letterSpacing};
`;
