import styled from "styled-components";

const AboutContainer = styled.section`
  background-color: #ffffff;
  padding: 4rem;
  height: 25rem;
  margin-left: 8rem;
  margin-right: 8rem;
  margin-top: 5rem;
  margin-bottom: 5rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
`;

const AboutTitleContainer = styled.div`
  width: 40%;
  padding-right: 2rem;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const AboutDescriptionContainer = styled.div`
  width: 60%;
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
const AboutItem = styled.li`
  list-style: none;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const AboutContents = () => {
  return (
    <div>
      <AboutContainer>
        <AboutTitleContainer>
          <h2>About</h2>
        </AboutTitleContainer>
        <AboutDescriptionContainer>
          <AboutItem>
            <p>フロントエンド学習中</p>
            <p>現在はアルバイトで、ソフトウェアエンジニアとして活動中</p>
            <p>今のタスクはCypressを用いたE2Eテストの自動化</p>
            <p>ぼちぼち楽しくがモットーです</p>
          </AboutItem>
        </AboutDescriptionContainer>
      </AboutContainer>
    </div>
  );
};
