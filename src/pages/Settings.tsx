import React from "react";
import Header from "@/components/Header";

const Settings = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-4xl font-bold mb-8 text-center">Settings</h1>
        <p className="text-center">This is the settings page.</p>
      </main>
    </div>
  );
};

export default Settings;