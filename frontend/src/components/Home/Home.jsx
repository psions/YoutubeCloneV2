import React from "react";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import Comment from "../Comment/Comment";
import { Container, Row, Col } from "react-bootstrap";

const Home = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="col-3">
           
            <RelatedVideos
              listRelatedVideos={props.listRelatedVideos}
              setVideoId={props.setVideoId}
              videoId={props.videoId}
            />
          </Col>
          <Col md={9}>
            
            {/* <VideoPlayer videoId={props.videoId} />
            <CommentForm
              user={props.user}
              videoId={props.videoId}
              setUser={props.setUser}
            /> */}
            <Comment
              user={props.user}
              videoId={props.videoId}
              storedUserName={props.storedUserName}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;