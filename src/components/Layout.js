import styled from 'styled-components';

export const Layout = styled.div`
  /* height: 700px; */
  width: 500px;
  display: flex;
  margin: 20px auto;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40;
  color: #010101;
  /* background-color: whitesmoke; */
  background: #5433ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #a5fecb,
    #20bdff,
    #5433ff
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #a5fecb,
    #20bdff,
    #5433ff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  border-radius: 10px;
  box-shadow: 25px 31px 40px 26px rgba(28, 28, 25, 0.76);
  -webkit-box-shadow: 25px 31px 40px 26px rgba(28, 28, 25, 0.76);
  -moz-box-shadow: 25px 31px 40px 26px rgba(28, 28, 25, 0.76);
`;
