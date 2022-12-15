import PropTypes from 'prop-types';
import { Section, Container, Title } from './Section.styled';

export function ContainerWrap({ title, children }) {
  return (<Section> <Container>
    {title && <Title>{title}</Title>}
    {children}
  </Container></Section>
   
  );
}

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
