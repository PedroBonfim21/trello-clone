"use client";
import { SignOutButton, SignedIn } from "@clerk/nextjs";
import React from "react";

export default function ProtectedPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 40 }}>
      <h1>Área Protegida</h1>
      <SignedIn>
        <SignOutButton >
          <button style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
            Sair
          </button>
        </SignOutButton>
      </SignedIn>
    </div>
  );
}