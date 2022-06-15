import React from 'react';
import { client, urlFor } from '../../library/client';
import { useRouter } from 'next/router';

const Topic = ({ result }) => {
  console.log(result);
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading</div>;
  } else {
    return <div>Category</div>;
  }
};

export default Topic;

export const getStaticPaths = async () => {
  const query = `*[_type == "category"]{
  slug{
  current,
}
}`;

  const query_paths = await client.fetch(query);

  const paths = query_paths.map((path) => ({
    params: {
      category: path.slug.current,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params: { category } }) => {
  const query = `*[_type == "category" && slug.current == "${category}"]{
  name,
  slug,
  image,
  body,
  _id,
  "post": *[_type == "post" && category->._id == ^._id][]{
  author->,
  slug,
  mainImage,
  category->,
  body,
  title,
  featured_post,
  recommended_post,
  publishedAt,
}
}`;

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
