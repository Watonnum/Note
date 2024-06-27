import styled from "styled-components";
export const IMG = ({
  src,
  width,
  height,
  borderRadius,
  maxWidth,
  bord,
  position,
}) => {
  return (
    <>
      <Img
        src={src}
        width={width}
        height={height}
        borderRadius={borderRadius}
        maxWidth={maxWidth}
        bord={bord}
        position={position}
      />
    </>
  );
};

const Img = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  max-width: ${(props) => props.maxWidth};
  border: ${(props) => props.bord};
  position: ${(props) => props.position};
`;
