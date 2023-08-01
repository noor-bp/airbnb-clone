import React from "react";
import PostComp from "../../components/PostComp";
import feed from "../../../config/data/feed";

const post1 = feed[1];

interface PostPageProps {}

const PostPage: React.FC<PostPageProps> = () => {
  return (
    <>
      <PostComp post={post1} />
    </>
  );
};

export default PostPage;
