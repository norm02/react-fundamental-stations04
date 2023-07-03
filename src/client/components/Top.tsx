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
        <PortfolioText
          src="https://raw.githubusercontent.com/norm02/react-portfolio/8530023cf2f1ed24f595739d72abb15838d4be2c/public/images/portfolio-text.svg"
          alt="Text"
        />
      </TopContainer>
    </div>
  );
};
