import React from 'react'
import { animateScroll as scroll} from 'react-scroll'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FooterContainer, FooterWarp, FooterLinksContainer, FooterLinksWrap, FooterLinksItems, FooterLinksTitle, FooterLink, SocialMedia, SocialMediaWarp, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
      };

  return (
    <>
        <FooterContainer>
            <FooterWarp>
                <FooterLinksContainer>
                    <FooterLinksWrap>
                        <FooterLinksItems>
                            <FooterLinksTitle>About us</FooterLinksTitle>
                                <FooterLink to="/sign">How it works</FooterLink>
                                <FooterLink to="/">Testimonials</FooterLink>
                                <FooterLink to="/">Careers</FooterLink>
                                <FooterLink to="/">Investors</FooterLink>
                                <FooterLink to="/">Terms of services</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinksTitle>Contact Us</FooterLinksTitle>
                                <FooterLink to="/">Contact</FooterLink>
                                <FooterLink to="/">Support</FooterLink>
                                <FooterLink to="/">Destinations</FooterLink>
                                <FooterLink to="/">Sponsorship</FooterLink>
                        </FooterLinksItems>                        
                    </FooterLinksWrap>
                    <FooterLinksWrap>
                        <FooterLinksItems>
                            <FooterLinksTitle>Videos</FooterLinksTitle>
                                <FooterLink to="/">Submit Videos</FooterLink>
                                <FooterLink to="/">Ambassadors</FooterLink>
                                <FooterLink to="/">Agency</FooterLink>
                                <FooterLink to="/">Influencer</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinksTitle>Social Media</FooterLinksTitle>
                                <FooterLink to="/">Instagram</FooterLink>
                                <FooterLink to="/">Facebook</FooterLink>
                                <FooterLink to="/">Twitter</FooterLink>
                                <FooterLink to="/">Youtube</FooterLink>
                        </FooterLinksItems>               
                    </FooterLinksWrap>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWarp>
                        <SocialLogo to='/' onClick={toggleHome}>Holla</SocialLogo>
                        <WebsiteRights>Holla Ⓒ {new Date().getFullYear()} All rights reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWarp>
                </SocialMedia>
            </FooterWarp>
        </FooterContainer>
    </>
  )
}

export default Footer