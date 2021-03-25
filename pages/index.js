import Head from "next/head";
import styles from "../styles/Home.module.css";
import styled from "styled-components";

const HomeContainer = styled.div`
  font-family: "Poppins", sans-serif;

  p {
    font-weight: 400;
    color: #2d3748;
    font-size: 1.125rem;
  }

  li {
    color: #2d3748;
    margin: 4px 0px;
    font-size: 1.125rem;
  }

  a {
    border-bottom: 1px solid #2296f3;
  }
`;

const TopStrip = styled.div`
  background: linear-gradient(
    270deg,
    #2296f3 25.28%,
    #99cef7 59.7%,
    #0e00ee 97.75%
  );
  width: 100%;
  height: 15px;
`;

const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 32px;
  background-color: #fbfbfb;
`;

const NavbarDiv = styled.div`
  display: flex;
  max-width: 800px;
  width: 100%;
  padding: 1rem;
  background-color: #fbfbfb;
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #fbfbfb;
  padding: 0px 32px;
  padding-bottom: 6rem;
`;
const Header = styled.div`
  max-width: 600px;
  flex: 1;
`;

const Title = styled.h1`
  line-height: 60px;
  color: #1a202c;
  font-weight: 700;
  @media screen and (min-width: 48em) {
    font-size: 3rem;
  }
`;

const TitleMark = styled.mark`
  background-color: #99cef75e;
  padding: 3px 6px;
`;

const Desc = styled.p`
  font-size: 1.125rem;
  line-height: 27px;
  color: #2d3748;
  margin-bottom: 36px;
`;

const Button = styled.a`
  background-color: #2296f3;
  border: none;
  padding: 12px 16px;
  min-width: 2.5rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  color: white;
  font-weight: 700;
  cursor: pointer;
`;

const AboutCourseContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  padding: 4px 32px;
`;
const AboutCourse = styled.div`
  max-width: 600px;
`;

const AboutCourseTitle = styled.h3`
  font-size: 1.65rem;
`;

const DividerContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Divider = styled.div`
  border-bottom: 0.0625rem solid #e2e8f0;
  width: 100%;
  margin: 4rem 0px;
  max-width: 600px;
`;

const CourseOverviewContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 2rem 0px;
`;
const CourseOverviewDiv = styled.div`
  max-width: 600px;
`;

const VideosContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 2rem 0px;
`;
const Videos = styled.div`
  max-width: 600px;
`;
const VideoTile = styled.div`
  cursor: pointer;
  margin-bottom: 3rem;
`;
const VideoTileImage = styled.img`
  width: 100%;
  max-width: 600px;
  object-fit: cover;
  border-radius: 16px;
`;

const VideoTileImagePlayIcon = styled.img`
  height: 60px;
  position: absolute;
  padding-left: 270px;
  margin-top: 135px;
`;

const VideoTileIcon = styled.a`
  margin-right: 18px;
  img {
    background-color: #2296f3;
    height: 45px;
    width: 45px;
    padding: 8px;
    border-radius: 24px;
    cursor: pointer;
  }
`;

const WhatPeopleAreSayingContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 2rem 0px;
`;

const WhatPeopleAreSayingDiv = styled.div`
  max-width: 600px;
`;

const AboutMeContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 2rem 0px;
  margin-bottom: 6rem;
`;

const AboutMeDiv = styled.div`
  max-width: 600px;
  width: 100%;
`;

const AboutMe = styled.div`
  display: flex;
  img {
    height: 4rem;
    width: 4rem;
    border-radius: 2rem;
    margin-right: 16px;
  }
`;

export default function Home() {
  return (
    <HomeContainer>
      <Head>
        <title>Learn & Master Flutter</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <TopStrip></TopStrip>
      <NavbarContainer>
        <NavbarDiv></NavbarDiv>
      </NavbarContainer>
      <HeaderContainer>
        <Header>
          <Title>
            Learn & Master Flutter{" "}
            <div>
              today <TitleMark>100% free.</TitleMark>
            </div>
          </Title>
          <Desc>
            A free video course for building apps for android, ios and web with
            flutter and firebase. Starting from scratch to deploying it live
            with 5 Projects.
          </Desc>
          <Button href='#courseOverview'>Watch Now →</Button>
        </Header>
      </HeaderContainer>
      {/* About Course */}
      <AboutCourseContainer>
        <AboutCourse>
          <AboutCourseTitle>
            Hundreds of customers, thousands of views.
          </AboutCourseTitle>
          <p>
            After teaching hundreds of developers around the world, I've made
            this course free. Why? Learning Next.js will transform your career
            as a front-end developer.
          </p>

          <p>
            With almost five hours of content, this course will kickstart your
            career as a modern front-end developer. If you're familiar with
            basic HTML/CSS, JavaScript, and React – you've found the right
            course.
          </p>

          <ol>
            <li>Somthign awesome</li>
            <li>More awesome</li>
            <li>Make money</li>
          </ol>
        </AboutCourse>
      </AboutCourseContainer>
      <DividerContainer>
        <Divider></Divider>
      </DividerContainer>
      <CourseOverviewContainer id='courseOverview'>
        <CourseOverviewDiv>
          <AboutCourseTitle>Course Overview</AboutCourseTitle>
          <p>
            All videos are 100% free. If you'd like to support me, you can
            pay-what-you-want on{" "}
            <a
              href='https://www.buymeacoffee.com/sanskartiwari'
              target='_blank'
            >
              buymeacoffee
            </a>
          </p>
        </CourseOverviewDiv>
      </CourseOverviewContainer>
      {/* Videos */}
      <VideosContainer>
        <Videos>
          <VideoTile>
            <VideoTileImagePlayIcon src='https://firebasestorage.googleapis.com/v0/b/memorygame247.appspot.com/o/play-button.svg?alt=media&token=a9681e4c-143f-44ee-b45f-26ab9db0ab9d' />
            <VideoTileImage src='https://user-images.githubusercontent.com/55942632/112434695-e059dc00-8d69-11eb-9a5b-93cbcfa5a482.jpg' />
            <AboutCourseTitle>
              Build a Flutter News App with NewsApi Org
            </AboutCourseTitle>
            <p>
              Let's start day 1 with learning how to use Api with a flutter app
              by creating a news application which will fetch news multiple
              sources via newsapi.org
            </p>

            <div>
              <VideoTileIcon
                href='http://github.com/theindianappguy/FlutterNewsApp'
                target='_blank'
              >
                <img src='https://firebasestorage.googleapis.com/v0/b/memorygame247.appspot.com/o/github-white.svg?alt=media&token=9372cc8a-3752-473d-aabb-55f4b831dc19' />
              </VideoTileIcon>

              <VideoTileIcon href='youtu.be/aagcer1uuoe' target='_blank'>
                <img src='https://firebasestorage.googleapis.com/v0/b/memorygame247.appspot.com/o/youtube.svg?alt=media&token=b24a4fa1-ca6d-4fc9-b86d-ea11591541c5' />
              </VideoTileIcon>
            </div>
          </VideoTile>

          <VideoTile>
            <VideoTileImagePlayIcon src='https://firebasestorage.googleapis.com/v0/b/memorygame247.appspot.com/o/play-button.svg?alt=media&token=a9681e4c-143f-44ee-b45f-26ab9db0ab9d' />
            <VideoTileImage src='https://user-images.githubusercontent.com/55942632/112438936-814a9600-8d6e-11eb-881e-d3235114e0e6.jpeg' />
            <AboutCourseTitle>
              Build a Flutter Firebase Blog App
            </AboutCourseTitle>
            <p>
              So how was building the News App yesterday, today we will learn
              about databases specifically firebase, It's one of most popular
              database and its totally free to get started so lets learn.
            </p>

            <div>
              <VideoTileIcon
                href='https://github.com/theindianappguy/flutter_blog'
                target='_blank'
              >
                <img src='https://firebasestorage.googleapis.com/v0/b/memorygame247.appspot.com/o/github-white.svg?alt=media&token=9372cc8a-3752-473d-aabb-55f4b831dc19' />
              </VideoTileIcon>

              <VideoTileIcon href='youtu.be/kzbdhx8inya' target='_blank'>
                <img src='https://firebasestorage.googleapis.com/v0/b/memorygame247.appspot.com/o/youtube.svg?alt=media&token=b24a4fa1-ca6d-4fc9-b86d-ea11591541c5' />
              </VideoTileIcon>
            </div>
          </VideoTile>

          <VideoTile>
            <VideoTileImagePlayIcon src='https://firebasestorage.googleapis.com/v0/b/memorygame247.appspot.com/o/play-button.svg?alt=media&token=a9681e4c-143f-44ee-b45f-26ab9db0ab9d' />
            <VideoTileImage src='https://user-images.githubusercontent.com/55942632/112452073-38014300-8d7c-11eb-921d-1b376a89ae2d.jpg' />
            <AboutCourseTitle>
              Build a Wallpaper App with Flutter
            </AboutCourseTitle>
            <p>
              Do you use default wallpaper in you mobile most probably not we
              all like to use custom images well today we are going to make
              wallpaper app where we will be able to browse wallpaper by search
              and categories or the explore page.
            </p>

            <div>
              <VideoTileIcon
                href='https://github.com/theindianappguy/wallpaperhub'
                target='_blank'
              >
                <img src='https://firebasestorage.googleapis.com/v0/b/memorygame247.appspot.com/o/github-white.svg?alt=media&token=9372cc8a-3752-473d-aabb-55f4b831dc19' />
              </VideoTileIcon>

              <VideoTileIcon
                href='https://www.youtube.com/watch?v=EKdAU3l_0gA&list=PLBxWkM8PLHcpeDOAkvzH5ROrE4uJ9fa7Q&index=3'
                target='_blank'
              >
                <img src='https://firebasestorage.googleapis.com/v0/b/memorygame247.appspot.com/o/youtube.svg?alt=media&token=b24a4fa1-ca6d-4fc9-b86d-ea11591541c5' />
              </VideoTileIcon>
            </div>
          </VideoTile>

          {/*  */}
          <VideoTile>
            <VideoTileImagePlayIcon src='https://firebasestorage.googleapis.com/v0/b/memorygame247.appspot.com/o/play-button.svg?alt=media&token=a9681e4c-143f-44ee-b45f-26ab9db0ab9d' />
            <VideoTileImage src='https://user-images.githubusercontent.com/55942632/81176283-938adc80-8fc2-11ea-8d59-7392205a1ed0.png' />
            <AboutCourseTitle>
              Build Chat App with Flutter & Firebase Firestore
            </AboutCourseTitle>
            <p>
              For chatting do you use Messenger, whatsapp, telegram, wechat..etc
              well we love chatting being able to instantly message and reply is
              a amazing thing connecting people all over the world So today
              let's build a chat app with flutter and firebase.
            </p>

            <div>
              <VideoTileIcon
                href='https://github.com/theindianappguy/FlutterChatAppTutorial'
                target='_blank'
              >
                <img src='https://firebasestorage.googleapis.com/v0/b/memorygame247.appspot.com/o/github-white.svg?alt=media&token=9372cc8a-3752-473d-aabb-55f4b831dc19' />
              </VideoTileIcon>

              <VideoTileIcon
                href='https://www.youtube.com/watch?v=FTju8w4zEno&list=PLBxWkM8PLHcpeDOAkvzH5ROrE4uJ9fa7Q&index=4'
                target='_blank'
              >
                <img src='https://firebasestorage.googleapis.com/v0/b/memorygame247.appspot.com/o/youtube.svg?alt=media&token=b24a4fa1-ca6d-4fc9-b86d-ea11591541c5' />
              </VideoTileIcon>
            </div>
          </VideoTile>

          {/*  */}
          <VideoTile>
            <VideoTileImagePlayIcon src='https://firebasestorage.googleapis.com/v0/b/memorygame247.appspot.com/o/play-button.svg?alt=media&token=a9681e4c-143f-44ee-b45f-26ab9db0ab9d' />
            <VideoTileImage src='https://user-images.githubusercontent.com/55942632/112452816-08066f80-8d7d-11eb-99fa-49bfe26da6ff.png' />
            <AboutCourseTitle>
              Build ToDo Web App Made with Flutter & Firebase
            </AboutCourseTitle>
            <p>
              Do you know we can build web apps with flutter well let's make
              that reality, Today we will learn how to build a todo web app with
              Flutter and firebase.
            </p>

            <div>
              <VideoTileIcon
                href='https://github.com/theindianappguy/todowebappp'
                target='_blank'
              >
                <img src='https://firebasestorage.googleapis.com/v0/b/memorygame247.appspot.com/o/github-white.svg?alt=media&token=9372cc8a-3752-473d-aabb-55f4b831dc19' />
              </VideoTileIcon>

              <VideoTileIcon
                href='https://www.youtube.com/watch?v=M7z-Zctu6vA&list=PLBxWkM8PLHcqtJvdYz0rR23XblqiHHtaT'
                target='_blank'
              >
                <img src='https://firebasestorage.googleapis.com/v0/b/memorygame247.appspot.com/o/youtube.svg?alt=media&token=b24a4fa1-ca6d-4fc9-b86d-ea11591541c5' />
              </VideoTileIcon>
            </div>
          </VideoTile>
        </Videos>
      </VideosContainer>

      <WhatPeopleAreSayingContainer>
        <WhatPeopleAreSayingDiv>
          <AboutCourseTitle>What people are saying.</AboutCourseTitle>
          <p>
            "Bought 3 paid popular courses on Flutter and none of them were even
            close to how great this tutorial is! Thank you so much for
            uploading! Keep going Sanskar! :)" - Parithi
          </p>

          <p>
            "I tried to learn flutter but not growing but when i found u and tge
            way u teaching trust me i loving flutter"
          </p>
        </WhatPeopleAreSayingDiv>
      </WhatPeopleAreSayingContainer>
      <AboutMeContainer>
        <AboutMeDiv>
          <AboutMe>
            <img
              src='https://user-images.githubusercontent.com/55942632/112448635-9e846200-8d78-11eb-8d3c-a7e6a68d8e57.jpeg'
              alt='sanskar tiwari software developer indianappguy'
            />
            <p>
              I'm{" "}
              <a href='https://github.com/theindianappguy'>Sanskar Tiwari</a> --
              developer, writer, and educator
            </p>
          </AboutMe>
        </AboutMeDiv>
      </AboutMeContainer>
    </HomeContainer>
  );
}
