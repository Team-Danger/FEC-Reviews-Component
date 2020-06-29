import styled from 'styled-components';

// Modal
const ModalDisplay = styled.div`
  background: rgba(0, 0, 0, 0.6);  
  display: ${(props) => (props.modalOpen ? 'block' : 'none')};
  font-family: Arial, Helvetica, sans-serif;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
`;
// Bar
const Bar = styled.div`
  margin-top: ${(props) => (props.margin ? props.margin : 0)};
  width: ${(props) => props.width ? props.width : '33%'};
  height: ${(props) => props.height ? props.height : '0.25em'};
  float: left;
  border-radius: 15%;
  background-color: ${(props) => props.color ? props.color : '#B3B3B3'};
  margin-right: 5px;
`;

export { Bar, ModalDisplay };
