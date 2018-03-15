import { withTheme } from 'styled-components';
import SiteLink from '~/components/layout/SiteLink';
import { Container, Title, Logo, LogoText, Blurb, CTA } from './styled';
import Link from 'next/link';

const Masthead = ({ theme }) => (
  <Container>
    <Title>
      <LogoText>{theme.name}</LogoText>
      <theme.Logo id="homepage-logo" {...theme.homepageLogoSize} />
    </Title>
    <Blurb>{theme.tagline}</Blurb>
    <CTA>
      <SiteLink href="/learn/get-started" prefetch>Quick start</SiteLink>
    </CTA>
  </Container>
);

export default withTheme(Masthead);
