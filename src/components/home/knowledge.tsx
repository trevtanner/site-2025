"use client";

import React from "react";
import { knowledgeBase } from "@/utils/siteData";
import { ProgressBar } from "./knowledge/progressBar";
import { BsBook } from "react-icons/bs";

const Knowledge: React.FC = () => {
  return (
    <div className="bg-tertiary-100 py-12">
      {/* <BsBook className="h-16 w-16 m-auto mb-4 text-white" /> */}
      <h1 className="text-center md:text-left about-header pb-12 md:px-12">
        Knowledge Base
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-8">
          {knowledgeBase.map((pkg, index) => (
            <ProgressBar pkg={pkg} knowledgeIndex={index} key={index} />
          ))}
        </div>
        <div className="md:col-span-4"></div>
      </div>
    </div>
  );
};

export default Knowledge;
