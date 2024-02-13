import React, { useState } from "react";
import allProjects from "../allProjects";
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";

export default function Portfolio() {
  const [selected, setSelected] = useState("All");
  const [projects, setProjects] = useState(allProjects);
  const filters = ["All", "Websites", "Flayers", "Business Cards"];

  function onSelectFilter(filter) {
    setSelected(filter);
    const currentProjects =
      filter === "All"
        ? allProjects
        : allProjects.filter((el) => el.category === filter);
    setProjects(currentProjects);
  }

  return (
    <div className="container">
      <Toolbar
        filters={filters}
        selected={selected}
        onSelectFilter={onSelectFilter}
      />
      <ProjectList projects={projects}/>
    </div>
  );
}
