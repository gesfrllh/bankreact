import React from "react";
import { animateScroll as scroll } from "react-scroll";
import Icon1 from "../../images/svg-2.png";
import Icon2 from "../../images/svg-3.png";
import Icon3 from "../../images/svg-6.png";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./Services";

const Services = () => {
  const ScrollServices = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} onClick={ScrollServices} />
            <ServicesH2>Reduce Expenses</ServicesH2>
            <ServicesP>
              We help reduce your fess and increase your overall revenue.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} onClick={ScrollServices} />
            <ServicesH2>Virtual Offices</ServicesH2>
            <ServicesP>
              You can acces our platform online anywhere in the world.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} onClick={ScrollServices} />
            <ServicesH2>Premium Benefits</ServicesH2>
            <ServicesP>
              Unlock our special membership card that return 5% cash back.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
