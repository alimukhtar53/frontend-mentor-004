"use client";
import React from "react";
import CardDetails from "./components/CardDetails";
import Form from "./components/Form";

export type CreditCardInfo = {
  cardNumber: string;
  name: string;
  expiryMonth: number;
  expiryYear: number;
  cvv: number;
};

export default function Home() {
  const [userCardDetails, setUserCardDetails] = React.useState<CreditCardInfo>({
    cardNumber: "0000 0000 0000 0000",
    name: "Ali Mukhtar",
    expiryMonth: 0,
    expiryYear: 0,
    cvv: 123,
  });

  const handleChange = (key: string) => {
    return function (e: React.ChangeEvent<HTMLInputElement>) {
      setUserCardDetails({ ...userCardDetails, [key]: e.target.value });
    };
  };

  return (
    <>
      <CardDetails userCardDetails={userCardDetails} />
      <Form handleChange={handleChange}></Form>
    </>
  );
}
