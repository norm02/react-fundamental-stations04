import styled from "styled-components";

const SkillContainer = styled.section`
  background-color: #ffffff;
  padding: 4rem;
  height: 25rem;
  margin: 5rem 8rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
`;

const SkillTitleContainer = styled.div`
  width: 40%;
  padding-right: 2rem;
  font-size: 2rem;
  margin: 2rem 0;
`;

const SkillDescriptionContainer = styled.div`
  width: 60%;
  font-size: 1.5rem;
  margin: 2rem 0;
  display: flex;
  align-items: center;
`;

const SkillListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SkillList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const SkillListItem = styled.li`
  margin-left: 0.2rem;
  margin-bottom: 0.5rem;
`;

const SkillListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SkillListColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 4rem;
`;

export const SkillContents = () => {
  return (
    <SkillContainer>
      <SkillTitleContainer>
        <h2>Skill</h2>
      </SkillTitleContainer>
      <SkillDescriptionContainer>
        <SkillListContainer>
          <SkillListWrapper>
            <SkillListColumn>
              <SkillList>
                <li>
                  <h3>フロントエンド</h3>
                  <SkillList>
                    <SkillListItem>JavaScript</SkillListItem>
                    <SkillListItem>TypeScript</SkillListItem>
                    <SkillListItem>React.js</SkillListItem>
                  </SkillList>
                </li>
              </SkillList>
            </SkillListColumn>
            <SkillListColumn>
              <SkillList>
                <li>
                  <h3>AI</h3>
                  <SkillList>
                    <SkillListItem>Python</SkillListItem>
                    <SkillListItem>TensorFlow</SkillListItem>
                    <SkillListItem>PyTorch</SkillListItem>
                  </SkillList>
                </li>
                <li>
                  <h3>テスト</h3>
                  <SkillList>
                    <SkillListItem>Cypress</SkillListItem>
                  </SkillList>
                </li>
              </SkillList>
            </SkillListColumn>
            <SkillListColumn>
              <SkillList>
                <li>
                  <h3>クラウド</h3>
                  <SkillList>
                    <SkillListItem>GoogleCloud</SkillListItem>
                  </SkillList>
                </li>
              </SkillList>
            </SkillListColumn>
          </SkillListWrapper>
        </SkillListContainer>
      </SkillDescriptionContainer>
    </SkillContainer>
  );
};
