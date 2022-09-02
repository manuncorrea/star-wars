import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.625rem;
  height: 100vh;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 0.063rem 0.125rem #0003;
  background-color: white;
  max-width: 21.875rem;
  padding:1.25rem;
  border-radius: 5px;
`;

export const Label = styled.label`
  font-size: 1.125rem;
  font-weight: 600;
  color: #676767;
`;

export const LabelSignup = styled.label`
  font-size: 16px;
  color: #676767;
`;

export const LabelError = styled.label`
  font-size: 0.875rem;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;
  a {
    text-decoration: none;
    color: #676767;
  }
`;