import React, { useState } from 'react'
import styled from 'styled-components'
import { ActionsPanel, FakeLink } from 'components'
import { Avatar, Paper } from 'shared'

const Posts: React.FC = () => {
  const [posts] = useState([
    {
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
    {
      userId: 1,
      id: 2,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
    {
      userId: 1,
      id: 3,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
    {
      userId: 1,
      id: 4,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
    {
      userId: 1,
      id: 5,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
  ])

  return (
    <Main>
      {posts.map(post => (
        <StyledPaper key={post.id}>
          <PostHeader>
            <Avatar
              src="https://randomuser.me/api/portraits/men/22.jpg"
              alt="Jhon Doe"
            />
            <PostInfo>
              <FakeLink>
                <UserName>Jhon Doe</UserName>
              </FakeLink>
              <Date>4:22 PM, yesterday</Date>
            </PostInfo>
          </PostHeader>
          <PostBody>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dolorem iure quibusdam aperiam exercitationem nisi molestiae voluptatum.
            Accusamus autem accusantium nisi corrupti aspernatur neque quaerat maiores?
            Natus inventore labore ipsam non.
          </PostBody>
          {post.id === 2 && (
            <ImagesContainer>
              <Img
                src="https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=180"
                alt="Maldives sea"
              />
              <Img
                src="https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=180"
                alt="Laamu Atoll, Maldives"
              />
              <Img
                src="https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=180"
                alt="Vaitāpē, French Polynesia"
              />
              <Img
                src="https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=180"
                alt="Maldives sea"
              />
              <Img
                src="https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=180"
                alt="Laamu Atoll, Maldives"
              />
              <Img
                src="https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=180"
                alt="Vaitāpē, French Polynesia"
              />
            </ImagesContainer>
          )}
          <PostFooter>
            <ActionsPanel />
          </PostFooter>
        </StyledPaper>
      ))}
    </Main>
  )
}

const Main = styled.main`
`

const ImagesContainer = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px,1fr));
  grid-gap: 1rem;
`

const Img = styled.img`
  cursor: pointer;
  max-width: 100%;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: 1px 3px 5px rgba(109, 109, 109, 0.4);
`

const StyledPaper = styled(Paper)`
  margin-bottom: 1rem;
  @media screen and (min-width: 900px) {
    margin-bottom: 2rem;
  }
`

const PostHeader = styled.header`
  display: flex;
  margin-bottom: 2rem;
`

const PostInfo = styled.div`
  margin-left: 1rem;
`

const UserName = styled.h6`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 0.25rem;
`

const Date = styled.span`
  font-size: 14px;
  opacity: 0.5;
`

const PostBody = styled.p`
  line-height: 1.5;
`

const PostFooter = styled.footer`
  display: flex;
  margin-top: 2rem;
`

export default Posts
