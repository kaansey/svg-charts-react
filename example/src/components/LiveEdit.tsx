import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0.5rem;
  background: #f4f5f7;
  border-radius: 4px;
  margin: 1rem 0;
  box-shadow: rgba(9, 30, 66, 0.31) 0px 0px 1px, rgba(9, 30, 66, 0.3) 0px 8px 16px -8px;
  .live-preview {
    background: #eeeeee;
    border-radius: 4px 4px 0 0;
  }
  .live-editor {
    font-size: 12px;
    text-align: left;
    textarea {
      background: #313b48 !important;
    }
  }
`;

const ReactLive = (props: any) => {
  return (
    <div>
      <Wrapper>
        <LiveProvider
          className="provider"
          code={props.code}
          scope={props.scope}
          noInline={props.noInline || false}
          theme={props.theme}
        >
          <LiveEditor className="live-editor" />
          <LivePreview className="live-preview" />
          <LiveError />
        </LiveProvider>
      </Wrapper>
    </div>
  );
};

export default ReactLive;
