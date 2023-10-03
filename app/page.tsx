"use client";
import React from "react";
import CardDetails from "./components/CardDetails";
import Form from "./components/Form";

export type CreditCardInfo = {
  cardNumber: string;
  name: string;
  expiry: number;
  cvv: number;
};

export default function Home() {
  const [userCardDetails, setUserCardDetails] = React.useState<CreditCardInfo>({
    cardNumber: "0000 0000 0000 0000",
    name: "Ali Mukhtar",
    expiry: 0,
    cvv: 123,
  });
  return (
    <>
      <CardDetails userCardDetails={userCardDetails} />
      <Form></Form>
    </>
  );
}
