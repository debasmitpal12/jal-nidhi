import React from "react";
import AuthForm from "./AuthForm";

export default function AuthPage() {
  return (
    <div className="font-sans text-gray-900 antialiased min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 via-sky-200 to-sky-400 px-6">
      <AuthForm />
    </div>
  );
}
