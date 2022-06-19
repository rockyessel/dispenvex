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
    <div className={css.container}>
      <div className={css.categoryAndDate}>
        <Link href={`/category/${category.slug.current}`}>
          <span className={css.categoryName}>{category.name}</span>
        </Link>

        <span className={css.date}>
          {moment(publishedAt).format('MMM Do YY')}
        </span>
      </div>

      <div>
        <Zoom>
          <div className={css.imageContainer}>
            <Image
              className={css.image}
              src={image}
              width={300}
              height={200}
              layout='responsive'
            />
          </div>
        </Zoom>
        <h3>{title}</h3>
        <p>{short_description}</p>
      </div>

      <div>
        <Link href={`/posts/${slug.current}`}>
          <button className={css.btn}>Read more</button>
        </Link>
        {featured_post && <button className={css.featured}>Featured</button>}
        {recommended_post && (
          <button className={css.featured}>Recommended</button>
        )}
      </div>
    </div>
  );
};

export default PostCard;
