import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "Currect Projects" ? (
            <ToggleButton
              active
              value="Currect Projects"
              onClick={() => setToggle("Currect Projects")}
            >
              Currect Projects
            </ToggleButton>
          ) : (
            <ToggleButton
              value="Currect Projects"
              onClick={() => setToggle("Currect Projects")}
            >
              Currect Projects
            </ToggleButton>
          )}
          <Divider />
          {toggle === "Collage Projects" ? (
            <ToggleButton
              active
              value="Collage Projects"
              onClick={() => setToggle("Collage Projects")}
            >
              Collage Projects
            </ToggleButton>
          ) : (
            <ToggleButton
              value="Collage Projects"
              onClick={() => setToggle("Collage Projects")}
            >
              Collage Projects
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
