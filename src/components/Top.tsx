import styled from "styled-components";

const TopContainer = styled.div`
  background-color: #dacb8d;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;
  margin-top: 7rem;
`;

const PortfolioText = styled.img`
  width: 70%;
  height: auto;
`;

export const Top = () => {
  return (
    <div>
      <TopContainer>
        <PortfolioText src="./images/portfolio-text.svg" alt="Text" />
      </TopContainer>
    </div>
  );
};
