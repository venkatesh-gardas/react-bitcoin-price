import styled from "styled-components";

export const Wrapper = styled.div`
  font-family: "Courier New", monospace;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  select {
    padding: 5px 10px;
    font-size: 1rem;
  }

  div {
    font-size: 2rem;
    background: #158cba;
    color: #fff;
    padding: 20px 40px;
    border-radius: 10px;
    margin-top: 40px;
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  }
`;
