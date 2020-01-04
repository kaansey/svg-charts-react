import React from 'react';
import styled from 'styled-components';

const CodeDiv = styled.div`
  padding: 10px;
  background-color: #ecf1f5;
`;

const Code = (props: any) => {
  return <CodeDiv>{props.children}</CodeDiv>;
};

export default Code;
