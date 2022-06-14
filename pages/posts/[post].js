import React from 'react';
import { useRouter } from 'next/router';
import { client, urlFor } from '../../library/client';

const Post = ({ result }) => {
  console.log(result);
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading</div>;
  } else {
    return <h1>Post</h1>;
  }
};

export default Post;

export const getStaticPaths = async () => {
  const query = `*[_type == "post"]{
  slug{
  current
}
}`;

  const post_paths = await client.fetch(query);

  const paths = post_paths.map((path) => ({
    params: {
      post: path.slug.current,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params: { post } }) => {
  const postDetails = `*[_type == "post" && slug.current == "${post}"][0]{
  _id,
  publishedAt,
  title,
  slug,
  mainImage,
  featured_post,
  recommended_post,
  body,
  category[0]->{
    name,
    slug,
    image,
  },
"topics": topic[]->{
  name,
  image,
  slug,
},
author->{
  name,
  slug,
  image
}
}
`;

  const result = await client.fetch(postDetails);

  if (!result) {
    return {
      error: true,
      data: [],
    };
  } else {
    return {
      props: {
        result,
      },
      revalidate: 10,
    };
  }
};
