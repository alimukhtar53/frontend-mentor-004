import Image from "next/image";
import React from "react";
import styled from "styled-components";
import thankYou from "../../public/assets/images/icon-complete.svg";
import Button from "./ui-elements/Button";

interface Props {
  formReset: () => void;
}

function ThankYou({ formReset }: Props) {
  return (
    <ThankYouWrapper>
      <Image src={thankYou} alt="icon-thank-you" />
      <h1>Thank You!</h1>
      <p>We’ve added your card details</p>
      <Button onClick={formReset}>Continue</Button>
    </ThankYouWrapper>
  );
}

const ThankYouWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: var(--Deep-Violet, #21092f);
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;

    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 3.422px;

    margin-top: 35px;
    margin-bottom: 16px;
  }

  p {
    color: var(--Purplish-Grey, #8f8694);
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;

    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 48px;
  }
`;

export default ThankYou;
