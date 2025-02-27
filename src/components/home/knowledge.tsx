"use client";

import React from "react";
import { knowledgeBase } from "@/utils/siteData";
import { ProgressBar } from "./knowledge/progressBar";
import { BsBook } from "react-icons/bs";

const Knowledge: React.FC = () => {
  return (
    <div className="bg-gray-600 py-12">
      <BsBook className="h-16 w-16 m-auto mb-4 text-white" />
      <h1 className="text-center text-5xl underline pb-12 text-white">
        Knowledge Base
      </h1>

      {knowledgeBase.map((pkg, index) => (
        <ProgressBar pkg={pkg} knowledgeIndex={index} key={index} />
      ))}
    </div>
  );
};

export default Knowledge;
