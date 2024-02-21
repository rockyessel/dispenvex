import { Fragment, useState } from 'react';
import ArticleFeed from './article';
import ShareFeed from './share';
import FavoriteFeed from './favorite';
import { cn } from '@/lib/utils/helpers';
import { Separator } from '@/components/ui/separator';

const DisperseFeed = () => {
  const [selectedFeedOption, setSelectedFeedOption] = useState('article');

  const handleFeedSelection = (option: string) => {
    setSelectedFeedOption(option.toLowerCase());
  };

  const isFeed = (feed: string) => selectedFeedOption === feed.toLowerCase();
  const feedOptions = ['Article', 'Share', 'Favorite'];

  return (
    <div className='w-full'>
      <ul className='flex gap-1.5 items-center text-opacity-60'>
        {feedOptions.map((feed, index) => (
          <Fragment key={index}>
            <li
              className={cn(
                'text-base font-semibold cursor-pointer w-fit',
                isFeed(feed) ? 'border-b border-rose-500 text-rose-500' : ''
              )}
              onClick={() => handleFeedSelection(feed)}
            >
              {feed}
            </li>
            <Separator className='mx-2 bg-white/10' orientation='vertical' />
          </Fragment>
        ))}
      </ul>

      <FeedDisplay feedOption={selectedFeedOption} />
    </div>
  );
};

export default DisperseFeed;

interface Props {
  feedOption: string;
}
const FeedDisplay = ({ feedOption }: Props) => {
  switch (feedOption) {
    case 'article':
      return <ArticleFeed />;
    case 'share':
      return <ShareFeed />;
    case 'favorite':
      return <FavoriteFeed />;

    default:
      return <>No FEED</>;
  }
};
