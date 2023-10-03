import { Newsletter, Section } from 'astro-boilerplate-components';

const CTA = () => (
  <Section>
    <Newsletter
      title={<>Iscritivi alla Newsletter!</>}
      description="Iscrivendoti alla Newsletter riceverai tutte le comunicazioni relative ai prossimi eventi!"
    />
  </Section>
);

export { CTA };
