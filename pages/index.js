import Head from 'next/head';
import { client } from '../library/client';
import styles from '../styles/Home.module.css';

import { PostCard, Navbar } from '../components';

export default function Home({ post_card }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>EoinDev Blog | Home</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />

      {post_card.map((post, index) => (
        <PostCard post={post} key={index} />
      ))}
    </div>
  );
}

export const getServerSideProps = async () => {
  const post = `*[_type == "post"]{
  author->{
  name,
 "image": image.asset->url,
  slug,
},
  slug,
  "image": mainImage.asset->url,
  short_description,
  title,
  featured_post,
  recommended_post,
  publishedAt,
  category->{
    name,
    slug,
  },
}`;

  const post_card = await client.fetch(post);

  if (!post_card) {
    return {
      error: true,
      data: [],
    };
  } else {
    return {
      props: {
        post_card,
      },
    };
  }
};
