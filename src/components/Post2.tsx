import React, { useState } from 'react';
import { FaRegComment } from 'react-icons/fa';
import { WhatsappShareButton, TwitterShareButton, FacebookShareButton } from 'react-share';
import { WhatsappIcon, FacebookIcon } from 'react-share';
import { Merriweather, Lora } from 'next/font/google';
import Link from 'next/link';
import { FiShare2 } from 'react-icons/fi';
import { BsTwitterX } from 'react-icons/bs';
import { useRouter } from 'next/navigation';

// Define the Answer interface
interface Answer {
  _id: string; // Unique identifier for the answer
  content: string; // The content of the answer
  author: {
    _id: string; // Author ID
    username: string; // Author's username
    verified: boolean; // Whether the author is verified
  };
  createdAt: string; // Timestamp of when the answer was created
}

// Define the PostType interface
interface PostType {
  _id: string;               
  title: string;             
  content: string;           
  media?: string;            
  tags: string[];            
  answers: Answer[]; // Use the defined Answer type
  upvotes?: string[];        
  downvotes?: string[];      
}

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const Post = ({ post }: { post: PostType }) => {
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

      {/* Content Section */}
      <div className={`text-gray-700 mb-4 ${merriweather.className}`}>
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
          {post.tags.map((tag, index) => (
            <span key={index} className="bg-blue-100 text-blue-500 px-2 py-1 text-xs rounded-md">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex justify-between text-gray-500 mb-4">
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
