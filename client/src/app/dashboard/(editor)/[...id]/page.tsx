'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import {
  defaultEditorProps,
  EditorRoot,
  EditorBubble,
  EditorCommand,
  EditorCommandItem,
  EditorCommandEmpty,
  EditorContent,
  type JSONContent,
} from 'novel';
import { ImageResizer } from 'novel/extensions';
import { defaultExtensions } from './extension';
import { Separator } from '@/components/ui/separator';
import { NodeSelector } from './node-selector';
import { LinkSelector } from './link';
import { ColorSelector } from './color';

import { TextButtons } from './text';
import { slashCommand, suggestionItems } from './slash';
import { defaultEditorContent } from '@/lib/utils/constants';
import { cn } from '@/lib/utils/helpers';

const extensions = [...defaultExtensions, slashCommand];

const EditorPage = () => {
  const [initialContent, setInitialContent] = useState<null | JSONContent>(
    null
  );
  const [saveStatus, setSaveStatus] = useState('Saved');

  const [showFullImage, setShowFullImage] = useState(false);

  const [openNode, setOpenNode] = useState(false);
  const [openColor, setOpenColor] = useState(false);
  const [openLink, setOpenLink] = useState(false);

  const debouncedUpdates = useDebouncedCallback(async (editor) => {
    const json = editor.getJSON();

    window.localStorage.setItem('novel-content', JSON.stringify(json));
    setSaveStatus('Saved');
  }, 500);

  useEffect(() => {
    const content = window.localStorage.getItem('novel-content');
    if (content) setInitialContent(JSON.parse(content));
    else setInitialContent(defaultEditorContent);
  }, []);

  if (!initialContent) return null;

  const handleShowFullImage = () => setShowFullImage((state) => !state);

  return (
    <div className='container mx-auto'>
      <textarea
        placeholder='Write very catchy title'
        className='w-full text-center placeholder:capitalize capitalize bg-transparent px-4 py-2 text-4xl resize-none h-24 font-bold outline-none break-words'
      />

      <div className='flex items-center justify-between'>
        <p className='inline-flex items-center gap-2 my-5'>
          <span className='bg-rose-600/20 rounded-[0.5rem] p-1 text-sm font-medium text-rose-600'>
            {`NTF's`}
          </span>
          <span className='bg-rose-600/20 rounded-[0.5rem] p-1 text-sm font-medium text-rose-600'>
            {`Technology`}
          </span>
          <span className='bg-rose-600/20 rounded-[0.5rem] p-1 text-sm font-medium text-rose-600'>
            {`opBNB`}
          </span>
          <span className='bg-rose-600/20 rounded-[0.5rem] p-1 text-sm font-medium text-rose-600'>
            5+
          </span>
        </p>

        <p className='inline-flex items-center gap-2 my-5'>
          <span className='bg-rose-600/20 rounded-[0.5rem] p-1 text-sm font-medium text-rose-600'>
            {`24th Feb 2024`}
          </span>
          <span className='bg-rose-600/20 rounded-[0.5rem] p-1 text-sm font-medium text-rose-600'>
            {`~`}
          </span>
          <span className='bg-rose-600/20 rounded-[0.5rem] p-1 text-sm font-medium text-rose-600'>
            {`08:57`}
          </span>
        </p>
      </div>
      <div className={cn(showFullImage ? '' : 'flex flex-col')}>
        <Image
          className={cn(
            'w-full object-cover object-center',
            showFullImage
              ? 'h-[40rem] rounded-[0.5rem]'
              : 'h-[10rem] rounded-t-[0.5rem]'
          )}
          priority={true}
          width={1000}
          height={1000}
          src='/mdjrny.png'
          alt='mdjrny'
        />
        {!showFullImage && (
          <button
            className='w-full rounded-b-[0.5rem] p-4 bg-rose-600/20 text-rose-rose-600'
            onClick={handleShowFullImage}
          >
            Show full Image
          </button>
        )}
      </div>
      <div className='mt-10 relative w-full'>
        <div className='absolute right-5 top-5 z-10 mb-5 rounded-lg bg-accent px-2 py-1 text-sm text-muted-foreground'>
          {saveStatus}
        </div>
        <EditorRoot>
          <EditorContent
            initialContent={initialContent}
            extensions={extensions}
            className='relative min-h-[500px] w-full bg-background border-none sm:mb-[calc(20vh)] sm:rounded-lg sm:border sm:shadow-lg'
            editorProps={{
              ...defaultEditorProps,
              attributes: {
                class: `prose-lg prose-stone dark:prose-invert prose-headings:font-title font-default focus:outline-none`,
              },
            }}
            onUpdate={({ editor }) => {
              debouncedUpdates(editor);
              setSaveStatus('Unsaved');
            }}
            slotAfter={<ImageResizer />}
          >
            <EditorCommand className='z-50 h-auto max-h-[330px]  w-72 overflow-y-auto rounded-md border border-muted bg-background px-1 py-2 shadow-md transition-all'>
              <EditorCommandEmpty className='px-2 text-muted-foreground'>
                No results
              </EditorCommandEmpty>
              {suggestionItems.map((item) => (
                <EditorCommandItem
                  value={item.title}
                  //@ts-ignore
                  onCommand={(val) => item.command(val)}
                  className={`flex w-full items-center space-x-2 rounded-md px-2 py-1 text-left text-sm hover:bg-accent aria-selected:bg-accent `}
                  key={item.title}
                >
                  <div className='flex h-10 w-10 items-center justify-center rounded-md border border-muted bg-background'>
                    {item.icon}
                  </div>
                  <div>
                    <p className='font-medium'>{item.title}</p>
                    <p className='text-xs text-muted-foreground'>
                      {item.description}
                    </p>
                  </div>
                </EditorCommandItem>
              ))}
            </EditorCommand>

            <EditorBubble
              tippyOptions={{
                placement: 'top',
              }}
              className='flex w-fit max-w-[90vw] overflow-hidden rounded border border-muted bg-background shadow-xl'
            >
              <Separator orientation='vertical' />
              <NodeSelector open={openNode} onOpenChange={setOpenNode} />
              <Separator orientation='vertical' />

              <LinkSelector open={openLink} onOpenChange={setOpenLink} />
              <Separator orientation='vertical' />
              <TextButtons />
              <Separator orientation='vertical' />
              <ColorSelector open={openColor} onOpenChange={setOpenColor} />
            </EditorBubble>
          </EditorContent>
        </EditorRoot>
      </div>
    </div>
  );
};

export default EditorPage;
