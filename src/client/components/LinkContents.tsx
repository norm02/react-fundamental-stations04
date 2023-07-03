import styled from "styled-components";

const LinkContainer = styled.section`
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

const LinkTitleContainer = styled.div`
  width: 40%;
  padding-right: 2rem;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const LinkDescriptionContainer = styled.div`
  width: 60%;
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
const LinkItem = styled.li`
  list-style: none;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Linkurl = styled.a``;
export const LinkContents = () => {
  return (
    <div>
      <LinkContainer>
        <LinkTitleContainer>
          <h2>Link</h2>
        </LinkTitleContainer>
        <LinkDescriptionContainer>
          <LinkItem>
            <Linkurl href="https://bonomodel.hatenablog.com/">Blog</Linkurl>
          </LinkItem>
          <LinkItem>
            <Linkurl href="href=https://github.com/norm02">GitHub</Linkurl>
          </LinkItem>
          <LinkItem>
            <Linkurl href="https://twitter.com/bonomodel">Twitter</Linkurl>
          </LinkItem>
        </LinkDescriptionContainer>
      </LinkContainer>
    </div>
  );
};
