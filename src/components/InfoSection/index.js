import React from 'react'
import { Button } from '../ButtonElement';
import { animateScroll as scroll } from 'react-scroll'; 
import {InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    SubTitle,
    BtnWrap,
    Column2, 
    ImgWrap,
    Svg 
} from './InfoElements';


const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText,
description, buttonLabel, svg, alt, primary, dark, dark2}) => {
    
    const toggleHome = () => {
        scroll.scrollToTop();
      };

    return (
    <>
    <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                    <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headline}</Heading>
                    <SubTitle darkText={darkText}>{description}</SubTitle>
                    <BtnWrap>
                        <Button to='/'
                        spy={true}
                        duration={500}
                        smooth={true}
                        exact="true"
                        offset={-80}
                        primary={primary ? 0 : 1}
                        dark={dark ? 1 : 0}
                        dark2={dark2 ? 1: 0} onClick={toggleHome}>
                            {buttonLabel}</Button>
                    </BtnWrap>
                    </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Svg src={svg} alt={alt}/>
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
    </>
  )
}

export default InfoSection;