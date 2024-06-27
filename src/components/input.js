import styled from "styled-components";
import { Flex } from "./flexbox";
export const Input = ({
  color,
  height,
  width,
  background,
  border,
  type,
  placeholder,
  margin,
  fsize,
  padding,
  className,
  name,
  onChange,
  value,
  textAlign,
  fontFamily,
  whiteSpace,
}) => {
  return (
    <div>
      <InputStyle
        type={type}
        value={value}
        placeholder={placeholder}
        border={border}
        width={width}
        height={height}
        color={color}
        background={background}
        margin={margin}
        fsize={fsize}
        padding={padding}
        className={className}
        name={name}
        onChange={onChange}
        textAlign={textAlign}
        fontFamily={fontFamily}
        whiteSpace={whiteSpace}
      />
    </div>
  );
};

export const InputArea = ({
  type,
  border,
  width,
  height,
  color,
  background,
  maxWidth,
  padding,
  resize,
  value,
  onChange,
  textAlign,
  margin,
  fontFamily,
  whiteSpace,
}) => {
  return (
    <InputAreaStyle
      type={type}
      border={border}
      width={width}
      height={height}
      color={color}
      background={background}
      padding={padding}
      maxWidth={maxWidth}
      resize={resize}
      value={value}
      onChange={onChange}
      textAlign={textAlign}
      margin={margin}
      fontFamily={fontFamily}
      whiteSpace={whiteSpace}
    />
  );
};

export const Submit = ({
  placeholder,
  border,
  color,
  background,
  margin,
  padding,
  className,
  name,
  onclickSubmit,
}) => {
  return (
    <Flex>
      <SubmitStyle
        type="submit"
        placeholder={placeholder}
        border={border}
        color={color}
        background={background}
        margin={margin}
        padding={padding}
        className={className}
        name={name}
        onClick={onclickSubmit}
      />
    </Flex>
  );
};

const InputStyle = styled.input`
  border: ${(props) => props.border};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  padding: ${(props) => props.padding};
  box-shadow: none;
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.fsize};
  text-align: ${(props) => props.textAlign};
  font-family: ${(props) => props.fontFamily};
  white-space: ${(props) => props.whiteSpace};
`;

const InputAreaStyle = styled.textarea`
  border: ${(props) => props.border};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  max-width: ${(props) => props.maxWidth};
  padding: ${(props) => props.padding};
  resize: ${(props) => props.resize};
  margin: ${(props) => props.margin};
  font-family: ${(props) => props.fontFamily};
  white-space: ${(props) => props.whiteSpace};
`;

const SubmitStyle = styled.input`
  border: ${(props) => props.border};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  background: ${(props) => props.background};
  padding: ${(props) => props.padding};
`;
