import React from "react";
import HeroBgAnimation from "../HeroBgAnimation";
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  SocialMediaIcons,
  SocialMediaIcon,
  ResumeButton,
} from "./HeroStyle";
import ProfileImg from "../../images/profileImage.jpg";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import { Button, Link } from "@mui/material";

const HeroSection = () => {
  return (
    <div style={{paddingTop: '40px'}} id="about">
      <HeroContainer>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>
              Hi, I am <br /> {Bio.name}
            </Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle style={{color: 'black'}}>{Bio.description}</SubTitle>
            <Button
              component={Link}
              variant="contained"
              color="secondary"
              href={Bio.resume}
              target="display"
            >
              Check Resume Here
            </Button>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <Img src={ProfileImg} alt="hero-image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
