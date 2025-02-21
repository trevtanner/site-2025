"use client";

import React from "react";
import { knowledgeBase } from "@/utils/siteData";
import { ProgressBar } from "./knowledge/progressBar";

const Knowledge: React.FC = () => {
  return (
    <div className="bg-gray-600 py-16">
      <h1 className="text-center text-5xl underline pb-2 text-white">Knowledge Base</h1>

      {knowledgeBase.map((pkg, index) => (
        <ProgressBar pkg={pkg} knowledgeIndex={index} key={index} />
      ))}
    </div>
  );
};

export default Knowledge;
