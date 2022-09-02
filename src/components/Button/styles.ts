import styled from "styled-components";
import { shade } from 'polished';

export const Container = styled.button`
  background: #ffc107;
  width: 100%;
  height: 56px;
  border-radius: 10px;
  font-size: 12px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  font-weight: 700;
  margin-top: 20px;

  transform-origin: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#ffc107')};
    }
`