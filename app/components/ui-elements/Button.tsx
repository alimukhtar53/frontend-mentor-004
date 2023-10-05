import React from "react";
import styled from "styled-components";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

function Button({ children, ...restProps }: Props) {
  return <ButtonWrapper {...restProps}>{children}</ButtonWrapper>;
}

const ButtonWrapper = styled.button`
  border-radius: 8px;
  background: var(--Deep-Violet, #21092f);
  text-align: center;
  width: 100%;
  padding: 15px 0;
  cursor: pointer;

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
