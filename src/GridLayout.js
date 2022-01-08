import React from "react";
import styled from "styled-components";

import { ReflexContainer, ReflexSplitter, ReflexElement } from "react-reflex";

const GridLayout = () => {
  return (
    <Wrap>
      <Header>
        레이어도구
      </Header>
      <Container orientation="vertical">
        <Box maxSize={500} minSize={240}>
          프레임
        </Box>
        <SplitBar propagate={true} />
        <Box flex={1}>레이어 작업</Box>
        <SplitBar propagate={true} />
        <Box minSize={240} maxSize={500}>
          레이어 컨텐츠
        </Box>
      </Container>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #dddddd;
`;

const Container = styled(ReflexContainer)`
  display: flex;
  flex: 1;
  width: 100%;
`;

const SplitBar = styled(ReflexSplitter)`
  background-color: #fff;
  width: 3px;
  height: auto;
  border: solid #ddd;
  border-width: 0 1px;
  cursor: col-resize;
`;

const Box = styled(ReflexElement)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default React.memo(GridLayout);
