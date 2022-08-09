import React from 'react';
import css from '../styles/PostCard.module.css';
import moment from 'moment';
import Link from 'next/link';
import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const PostCard = ({ post }) => {
  console.log(post);
  const {
    author,
    category,
    image,
    featured_post,
    recommended_post,
    short_description,
    slug,
    title,
    publishedAt,
  } = post;
  // console.log(title);
  return (
    <div className='w-[320px]'>
      <div className={css.categoryAndDate}>
        <Link href={`/category/${category.slug.current}`}>
          <span className={css.categoryName}>{category.name}</span>
        </Link>
        {featured_post && (
          <button className='bg-blue-500 text-white px-2 hover:ring-2 hover:ring-gray-200 active:ring-4 active:ring-gray-300 py-1 text-xs font-thin rounded'>
            Featured
          </button>
        )}

        {recommended_post && (
          <button className='bg-violet-500 text-white px-2 hover:ring-2 hover:ring-gray-200 active:ring-4 active:ring-gray-300 py-1 text-xs font-thin rounded'>
            Recommended
          </button>
        )}

        <span className={css.date}>
          {moment(publishedAt).startOf('hour').fromNow()}
        </span>
      </div>

      <div className={css.body}>
        <h3>{title}</h3>
        <Zoom>
          <div className={css.imageContainer}>
            <Image
              className={css.image}
              src={image}
              width={300}
              height={200}
              layout='responsive'
              loading='lazy'
            />
          </div>
        </Zoom>
        <p>{short_description}</p>
      </div>

      <div className={css.buttonContainer}>
        <Link href={`/posts/${slug.current}`}>
          <button className={css.btn}>Read more</button>
        </Link>
        {/* {featured_post && <button className={css.featured}>Featured</button>}
        {recommended_post && (
          <button className={css.featured}>Recommended</button>
        )} */}
      </div>
    </div>
  );
};

export default PostCard;
