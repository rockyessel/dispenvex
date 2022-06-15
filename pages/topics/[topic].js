import React from 'react';
import { client, urlFor } from '../../library/client';
import { useRouter } from 'next/router';

const Topic = ({ result }) => {
  console.log(result);
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading</div>;
  } else {
    return <div>Hello</div>;
  }
};

export default Topic;

export const getStaticPaths = async () => {
  const query = `*[_type == "topic"]{
  slug{
 current, 
}
}`;

  const query_paths = await client.fetch(query);

  const paths = query_paths.map((path) => ({
    params: {
      topic: path.slug.current,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params: { topic } }) => {
  const query = `*[_type == "topic" && slug.current == "${topic}"]{
  name,
  slug,
  image,
  body,
  _id,
  "post": *[_type == "post" && topic[0]->._id == ^._id][]{
  _id,
  author->,
  slug,
  topic[0]->,
  mainImage,
  category->,
  body,
  title,
  recommended_post,
  featured_post,
  publishedAt,
}
}

`;

  const result = await client.fetch(query);

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
