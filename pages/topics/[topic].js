import React from 'react';
import { client, urlFor } from '../../library/client';
import { useRouter } from 'next/router';

const Topic = () => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading</div>;
  } else {
    return <div>Hello</div>;
  }
};

export default Topic;

export const getStaticPaths = async () => {};

export const getStaticProps = async ({ params: { topic } }) => {
  const query = ``

  const result = await client.fetch(query);

  if (!result) {
    return {
      error: true,
      data: [],
    };
  } else {
    return {
      props: {
        topic,
      },
      revalidate: 10,
    };
  }
};
