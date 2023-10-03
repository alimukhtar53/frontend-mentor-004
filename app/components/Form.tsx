"use client";
import React from "react";
import Spacer from "./ui-elements/Spacer";
import styled from "styled-components";
import Button from "./ui-elements/Button";

function Form() {
  return (
    <FormWrapper>
      <Spacer value={91} />
      <Label>Cardholder Name</Label>
      <InputWrapper placeholder="e.g. Jane Appleseed"></InputWrapper>
      <Spacer value={20}></Spacer>
      <Label>Card Number</Label>
      <InputWrapper placeholder="e.g. 1234 5678 9123 0000"></InputWrapper>
      <Spacer value={20}></Spacer>
      <div className="input-footer">
        <div className="expiry">
          <Label>Exp. Date (MM/YY)</Label>
          <div className="expiry-container">
            <InputWrapper placeholder="MM"></InputWrapper>
            <InputWrapper placeholder="YY"></InputWrapper>
          </div>
        </div>
        <div className="cvc">
          <Label>CVC</Label>
          <InputWrapper placeholder="e.g. 123"></InputWrapper>
        </div>
      </div>
      <Spacer value={28} />
      <Button>Confirm</Button>
    </FormWrapper>
  );
}

const FormWrapper = styled.div`
  padding: 0 24px;

  .input-footer {
    display: flex;
    gap: 12px;
  }

  .expiry {
    min-width: 152px;
  }
  .cvc {
    width: 100%;
  }
  .expiry-container {
    display: flex;
    gap: 8px;

    input {
      width: 72px !important;
    }
  }
`;

const Label = styled.p`
  color: var(--Deep-Violet, #21092f);
  font-feature-settings: "clig" off, "liga" off;

  font-family: Space Grotesk;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 9px;
`;

const InputWrapper = styled.input`
  width: 100%;
  height: 45px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid var(--Light-Grey, #dfdee0);
  background: var(--White, #fff);
  padding: 12px 16px;
  color: var(--Deep-Violet, #21092f);
  font-feature-settings: "clig" off, "liga" off;

  /* Heading (L) */
  font-family: Space Grotesk;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &:focus {
    border: 1px solid #6348fe;
    outline: none;
  }

  &::placeholder {
    color: var(--Deep-Violet, #21092f);
    font-feature-settings: "clig" off, "liga" off;

    /* Heading (L) */
    font-family: Space Grotesk;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    opacity: 0.25;
  }
`;

export default Form;
