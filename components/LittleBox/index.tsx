import styled from "styled-components";

export const LittleBox = ({ mediaUrl }: { mediaUrl?: string }) => {
  const GridLayout = styled.div`
    display: grid;
    grid-template-areas:
      "nav nav nav"
      "asideLeft main asideRight"
      "footer footer footer";
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
  `;

  const Nav = styled.nav`
    grid-area: nav;
  `;
  const AsideLeft = styled.aside`
    grid-area: asideLeft;
  `;
  const AsideRight = styled.aside`
    grid-area: asideRight;
  `;
  const Main = styled.main`
    grid-area: main;
  `;
  const Footer = styled.footer`
    grid-area: footer;
  `;

  return (
    <GridLayout>
      <Nav>
        <img src={mediaUrl} alt="logo for icon" />
      </Nav>
      <AsideLeft />
      <Main>
        <img src={mediaUrl} alt="logo for icon" />
      </Main>
      <AsideRight />
      <Footer>
        <img src={mediaUrl} alt="logo for icon" />
      </Footer>
    </GridLayout>
  );
};
