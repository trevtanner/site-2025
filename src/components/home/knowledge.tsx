"use client";

import React from "react";
import { knowledgeBase } from "@/utils/siteData";
import { ProgressBar } from "./knowledge/progressBar";

const Knowledge: React.FC = () => {
  return (
    <div className="bg-primary py-6">
      <h1 className="text-center text-5xl underline">Knowledge Base</h1>

      {knowledgeBase.map((pkg, index) => (
        <ProgressBar pkg={pkg} knowledgeIndex={index} key={index} />
      ))}
    </div>
  );
};

export default Knowledge;
