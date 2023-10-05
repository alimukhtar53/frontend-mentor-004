"use client";
import React, { ChangeEvent } from "react";
import Spacer from "./ui-elements/Spacer";
import styled from "styled-components";
import Button from "./ui-elements/Button";
import ThankYou from "./ThankYou";
import { useMask } from "@react-input/mask";

interface Props {
  handleChange: (
    key: string
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Form({ handleChange }: Props) {
  const [isSuccess, setIsSuccess] = React.useState<boolean>(false);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const formReset = () => {
    setIsSuccess(false);
  };
  return (
    <FormWrapper onSubmit={onSubmitHandler}>
      <Spacer value={91} />
      {!isSuccess ? (
        <>
          <Label>Cardholder Name</Label>
          <InputWrapper
            id="name"
            onChange={handleChange("name")}
            placeholder="e.g. Jane Appleseed"
          />
          <Spacer value={20}></Spacer>
          <Label>Card Number</Label>
          <InputWrapper
            id="cardNumber"
            onChange={handleChange("cardNumber")}
            placeholder="e.g. 1234 5678 9123 0000"
          />
          <Spacer value={20}></Spacer>
          <div className="input-footer">
            <div className="expiry">
              <Label>Exp. Date (MM/YY)</Label>
              <div className="expiry-container">
                <InputWrapper
                  id="expiryMonth"
                  onChange={handleChange("expiryMonth")}
                  placeholder="MM"
                  max={2}
                />
                <InputWrapper
                  id="expiryYear"
                  onChange={handleChange("expiryYear")}
                  placeholder="YY"
                  max={2}
                />
              </div>
            </div>
            <div className="cvv" onChange={handleChange("cvv")}>
              <Label>CVC</Label>
              <InputWrapper placeholder="e.g. 123" />
            </div>
          </div>
          <Spacer value={28} />
          <Button>Confirm</Button>
        </>
      ) : (
        <ThankYou formReset={formReset} />
      )}
    </FormWrapper>
  );
}

const FormWrapper = styled.form`
  padding: 0 24px;
  width: max-content;
  display: flex;
  flex-direction: column;
  margin: auto;

  @media screen and (min-width: 1024px) {
    width: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
  }

  .input-footer {
    display: flex;
    gap: 12px;
  }

  .expiry {
    min-width: 152px;
  }
  .cvv {
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

  &.smooth-transition {
    transition: border 0.3s ease; /* Specify the properties you want to transition */
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
