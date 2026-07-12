import styled from "styled-components";
 
const Panel = styled.div`
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #7a3a1f 0%, #4a2313 60%, #1c0d07 100%);
  min-height: 100%;
  display: flex;
  align-items: center;
`;
 
const Pattern = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.08;
  background-image: radial-gradient(circle at 20% 30%, #fff 0, #fff 2px, transparent 3px),
    radial-gradient(circle at 70% 65%, #fff 0, #fff 2px, transparent 3px),
    radial-gradient(circle at 40% 80%, #fff 0, #fff 2px, transparent 3px);
  background-size: 220px 220px;
`;
 
const Content = styled.div`
  position: relative;
  z-index: 1;
  padding: 3rem 3.5rem;
 
  @media (max-width: 768px) {
    padding: 2rem 1.75rem;
  }
`;
 
const Heading = styled.p`
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #f3d9b1;
  margin-bottom: 1rem;
  font-weight: 600;
`;
 
const Paragraph = styled.p`
  color: #f0e4d6;
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 1rem;
 
  &:last-child {
    margin-bottom: 0;
  }
 
  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.7;
  }
`;
 

const TextPanel = ({ heading, paragraphs = [] }) => {
  return (
    <Panel>
      <Pattern aria-hidden="true" />
      <Content>
        {heading && <Heading>{heading}</Heading>}
        {paragraphs.map((para, i) => (
          <Paragraph key={i}>{para}</Paragraph>
        ))}
      </Content>
    </Panel>
  );
};
 
export default TextPanel;