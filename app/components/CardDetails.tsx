"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import bgCardBack from "/public/assets/images/bg-card-back.png";
import bgCardFront from "/public/assets/images/bg-card-front.png";
import cardLogo from "/public/assets/images/card-logo.svg";
import { CreditCardInfo } from "../page";

interface Props {
  userCardDetails: CreditCardInfo;
}

function CardDetails({ userCardDetails }: Props) {
  const bgmobile = "/assets/images/bg-main-mobile.png";
  const bgdesktop = "/assets/images/bg-main-desktop.png";
  const bgfront = "/assets/images/bg-card-front.png";
  const bgback = "/assets/images/bg-card-back.png";

  const { cardNumber, name, expiryMonth, expiryYear, cvv } = userCardDetails;

  const formattedExpiry = (expiry: number) => {
    return expiry < 10 ? `0${expiry}` : expiry;
  };

  return (
    <>
      <CardWrapper>
        <Header bgmobile={bgmobile} bgdesktop={bgdesktop}>
          <CardsContainer>
            <CardBack bgback={bgback}>
              <Cvv>{cvv}</Cvv>
            </CardBack>
            <CardFront bgfront={bgfront}>
              <Image src={cardLogo} height={30} alt="bg"></Image>
              <Details>
                <CardNumber>{cardNumber}</CardNumber>
                <CardFooter>
                  <Name>{name}</Name>
                  <Expiry>
                    {formattedExpiry(expiryMonth)}/{formattedExpiry(expiryYear)}
                  </Expiry>
                </CardFooter>
              </Details>
            </CardFront>
          </CardsContainer>
        </Header>
      </CardWrapper>
    </>
  );
}

const CardWrapper = styled.div`
  font-family: Space Grotesk;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

const Header = styled.div<{ bgmobile: string; bgdesktop: string }>`
  height: 240px;
  width: 100%;
  border: 1px solid;
  background-image: url(${(props) => props.bgmobile});
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 1024px) {
    min-height: 100vh;
    min-width: max-content;
    background-image: url(${(props) => props.bgdesktop});
  }
`;

const CardsContainer = styled.div`
  padding: 32px 16px;
  @media screen and (min-width: 1024px) {
    padding: 0;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    height: 100%;
    position: relative;
    margin: 0;
    gap: 22px;
  }
`;

const CardBack = styled.div<{ bgback: string }>`
  background-image: url(${(props) => props.bgback});
  position: relative;
  width: 285px;
  height: 156.208px;
  margin-left: auto;
  overflow: clip;
  border-radius: 6px;
  padding: 1rem;
  background-size: cover;
  display: flex;
  align-items: center;

  @media screen and (min-width: 1024px) {
    left: 50%;
    filter: drop-shadow(0px 39px 60px rgba(0, 0, 0, 0.14));
  }
`;

const Cvv = styled.p`
  color: white;
  text-align: right;
  font-size: 9px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1.286px;
  text-transform: uppercase;
  margin-left: auto;
  padding-right: 1rem;

  @media screen and (min-width: 1024px) {
    position: relative;
  }
`;

const CardFront = styled.div<{ bgfront: string }>`
  background-image: url(${(props) => props.bgfront});
  position: relative;
  width: 285px;
  height: 156.208px;
  margin-right: auto;
  top: -68px;
  overflow: clip;
  border-radius: 6px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  filter: drop-shadow(0px 39px 60px rgba(0, 0, 0, 0.14));

  @media screen and (min-width: 1024px) {
    top: 0;
    left: 35%;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const CardNumber = styled.div`
  color: var(--White, #fff);
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 2.2px;
`;
const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Name = styled.div`
  color: var(--White, #fff);
  font-size: 9px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1.286px;
  text-transform: uppercase;
`;

const Expiry = styled(Name)``;

export default CardDetails;
