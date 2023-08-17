"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("82c423e4-fddb-4257-bb9c-1d837f041cb6");
  }, []);

  return null;
};
