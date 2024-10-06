"use client";

import { useState } from "react";
import ProjectHeader from "@/app/projects/project-header";
import BoardView from "../boardview/boardview";

type ProjectProps = {
  params: {
    id: string;
  };
};
const Project = ({ params }: ProjectProps) => {
  const { id } = params;
  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  return (
    <div>
      {/* Modal new task */}
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Board" && (
        <BoardView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
    </div>
  );
};
export default Project;
