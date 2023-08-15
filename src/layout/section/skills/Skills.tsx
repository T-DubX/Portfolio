import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
      <StyledSkills>
          <SectionTitle>My Skills</SectionTitle>
          <FlexWrapper wrap={'wrap'} justify={'space-between'}>
              <Skill iconId={'code'} title={'html5'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>

              <Skill iconId={'css'} title={'css3'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>

              <Skill iconId={'react'} title={'react'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>

              <Skill iconId={'ts'} title={'typescript'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>

              <Skill iconId={'styleComponent'} title={'styledcomponent'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>

              <Skill iconId={'figma'} title={'figma'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>

          </FlexWrapper>
      </StyledSkills>
    );
};

const StyledSkills = styled.section`
  background-color: #f6d0d0;
  min-height: 100vh;
  
`