"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import React, { FormEvent, useState } from "react";

const EditRoomInfo = () => {
  const [roomName, setRoomName] = useState("");
  const [roomSection, setRoomSection] = useState("");
  return (
    <>
      <Label htmlFor="roomName">Name:</Label>
      <Input
        type="text"
        name="roomName"
        id="roomName"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
      />
      <Label htmlFor="roomSection">Section:</Label>
      <Input
        type="text"
        name="roomSection"
        id="roomSection"
        value={roomSection}
        onChange={(e) => setRoomSection(e.target.value)}
      />
    </>
  );
};

const SheetsFields = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <EditRoomInfo />
      </form>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nihil
        commodi explicabo voluptates corrupti tenetur rem! Aut corporis soluta
        magnam.
      </p>
    </>
  );
};

export default SheetsFields;
