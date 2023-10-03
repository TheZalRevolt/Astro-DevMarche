import { HeroAvatar, HeroSocial, Section } from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={<>Benvenuto sul sito di DevMarche</>}
      description={
        <>
          DevMarche è il network delle community marchigiane dedicate allo
          sviluppo software! Siamo una community delle Marche che si occupa di
          organizzare eventi dedicati al mondo dello sviluppo software (e del
          tech in generale), con rilevanza locale e nazionale.
        </>
      }
      avatar={
        <img
          src="/assets/images/marchio_DevMarche.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://twitter.com/devmarche">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="https://www.facebook.com/groups/developermarche">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="https://www.linkedin.com/company/devmarche/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
