import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <SectionTitle>I Am Available For Freelance</SectionTitle>
            <FlexWrapper justify={'center'}>
                <Button>Hire me</Button>
            </FlexWrapper>

        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
  min-height: 30vh;
  background-color: #d4f5cd;
  
  
`

