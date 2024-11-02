import React, { useState } from 'react';
import { FaRegComment } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import { WhatsappShareButton, TwitterShareButton, FacebookShareButton } from 'react-share';
import { WhatsappIcon, TwitterIcon, FacebookIcon } from 'react-share';
import { Merriweather, Lora } from 'next/font/google';
import Link from 'next/link';

import { FiShare2, FiThumbsDown, FiThumbsUp } from 'react-icons/fi';
import { HiOutlineHeart } from 'react-icons/hi'; // Importing engagement icon
import { BsTwitterX } from 'react-icons/bs';
import { useRouter } from 'next/navigation';

const formatDate = (timestamp: any) => {
  const postDate = new Date(timestamp);
  const options: any = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return postDate.toLocaleDateString(undefined, options);
};

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const Post = ({ post }: any) => {
  const router = useRouter();
  const [isContentExpanded, setIsContentExpanded] = useState(false);
  const [isSharePopupOpen, setIsSharePopupOpen] = useState(false);

  const toggleContent = () => {
    setIsContentExpanded(!isContentExpanded);
  };

  const toggleSharePopup = () => {
    setIsSharePopupOpen(!isSharePopupOpen);
  };

  return (
    <div className="bg-white p-4 mb-6 shadow-md transition duration-200 ease-in-out hover:shadow-xl">
      {/* Media Section */}
      {post.media && (
        <img
          src={post.media}
          alt={post.title}
          className="w-auto h-auto object-cover rounded-t-lg mb-4"
        />
      )}

      {/* Title Section */}
      <Link href={`/blog/${post._id}`}>
        <h2 className={`text-2xl mb-2 font-bold text-gray-800 ${lora.className}`}>
          {post.title}
        </h2>
      </Link>

      {/* Author Section - Removed as per your request */}
      {/* If you still want to keep it and handle undefined author, uncomment the following code */}
      {/* 
      {post.author && (
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <Link href={`/profileViewer/${post.author._id}`} className="flex flex-col">
              <div className="flex flex-row">
                <span className={`font-semibold text-sm ${merriweather.className}`}>{post.author.username}</span>
                {post.author.verified === "true" && <MdVerified size={16} className="text-blue-500 ml-1" title="Verified" />}
              </div>
              <div>
                <span className="text-xs text-gray-500">{formatDate(post.createdAt)}</span>
              </div>
            </Link>
          </div>
        </div>
      )}
      */}

      {/* Content Section */}
      <div className={`text-gray-700 mb-4 ${lora.className}`}>
        <Link href={`/blog/${post._id}`}>
          <span className="whitespace-normal break-words text-md">
            {isContentExpanded ? (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            ) : (
              <div dangerouslySetInnerHTML={{ __html: post.content.length > 150 ? post.content.slice(0, 150) + '...' : post.content }} />
            )}
          </span>
        </Link>
        {post.content.length > 150 && (
          <button
            onClick={toggleContent}
            className="text-blue-600 ml-2 text-xs bg-gray-100 px-2 py-1 rounded"
          >
            {isContentExpanded ? 'See Less' : 'Read More'}
          </button>
        )}
      </div>

      {/* Tags Section */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag: any, index: any) => (
            <span key={index} className="bg-blue-100 text-blue-500 px-2 py-1 text-xs rounded-md">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex justify-between text-gray-500 mb-4">
       {/* <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer">
            <FiThumbsUp size={24} />
          </div>
          <div>
            <span className="text-xs">{post.upvotes.length}</span>
          </div>
        </div>
       
        <div className="flex flex-col items-center">
         <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer">
            <FiThumbsDown size={24} />
          </div>
          <div>
            <span className="text-xs">{post.downvotes.length}</span>
          </div>
        </div>
        */}
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer" onClick={() => router.push(`/blogs/${post._id}`)}>
            <FaRegComment size={24} />
          </div>
          <span className="text-xs">{post.answers.length}</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer" onClick={toggleSharePopup}>
            <FiShare2 size={24} className='text-gray-500' />
          </div>
          <span className="text-xs">Share</span>
        </div>
      </div>

      {isSharePopupOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="mb-4 text-lg font-semibold text-center">Share this post</h3>
            <div className="flex space-x-4 justify-center">
              <WhatsappShareButton url={`https://kuaid.com/blog/${post._id}`} title={post.title}>
                <WhatsappIcon className="w-8 h-8 rounded-full" />
              </WhatsappShareButton>
              <FacebookShareButton url={`https://kuaid.com/blog/${post._id}`} title={post.title}>
                <FacebookIcon className="w-8 h-8 rounded-full" />
              </FacebookShareButton>
              <TwitterShareButton url={`https://kuaid.com/questions/${post._id}`} title={post.title}>
                <BsTwitterX className="w-8 h-8 rounded-full" />
              </TwitterShareButton>
            </div>
            <button
              onClick={toggleSharePopup}
              className="mt-4 px-4 py-2 bg-gray-100 text-gray-700 rounded-md block mx-auto"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
