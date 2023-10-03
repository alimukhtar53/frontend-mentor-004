import React from "react";
import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
}

function Button({ children }: Props) {
  return <ButtonWrapper>{children}</ButtonWrapper>;
}

const ButtonWrapper = styled.button`
  border-radius: 8px;
  background: var(--Deep-Violet, #21092f);
  text-align: center;
  width: 100%;
  padding: 15px 0;

  color: var(--White, #fff);
  font-feature-settings: "clig" off, "liga" off;

  /* Heading (L) */
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  outline: unset;
  border: unset;
`;

export default Button;
