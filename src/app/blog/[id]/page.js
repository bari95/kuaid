// app/post/[id]/page.js

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Dummy data array
const dummyPosts = [
  {
    _id: '1',
    title: 'First Dummy Post',
    content: 'This is the content of the first dummy post.',
    author: {
      _id: 'author1',
      username: 'AuthorOne',
      verified: true,
    },
    media: 'https://via.placeholder.com/400',
    createdAt: '2024-10-30T10:00:00Z',
    tags: ['tag1', 'tag2'],
    upvotes: [],
    downvotes: [],
    answers: [],
  },
  {
    _id: '2',
    title: 'Second Dummy Post',
    content: 'This is the content of the second dummy post.',
    author: {
      _id: 'author2',
      username: 'AuthorTwo',
      verified: false,
    },
    media: '',
    createdAt: '2024-10-31T12:30:00Z',
    tags: ['tag3'],
    upvotes: [],
    downvotes: [],
    answers: [],
  },
  {
    _id: '3',
    title: 'Third Dummy Post',
    content: 'This is the content of the third dummy post.',
    author: {
      _id: 'author3',
      username: 'AuthorThree',
      verified: true,
    },
    media: 'https://via.placeholder.com/400',
    createdAt: '2024-11-01T14:00:00Z',
    tags: ['tag4', 'tag5'],
    upvotes: [],
    downvotes: [],
    answers: [],
  },
];

export async function generateMetadata({ params }) {
  const { id } = params;
  const post = dummyPosts.find((p) => p._id === id);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The post you are looking for does not exist.',
    };
  }

  return {
    title: post.title || 'Kuaid Post',
    description: post.content || 'Read the latest post on Kuaid.',
    openGraph: {
      title: post.title || 'Kuaid Post',
      description: post.content || 'Read the latest post on Kuaid.',
      images: [{ url: post.media || 'https://kuaid.com/images/logo.jpg' }],
      url: `https://kuaid.com/blog/${id}`,
      siteName: 'Kuaid',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@Kuaid',
      title: post.title || 'Kuaid blog',
      description: post.content || 'Read the latest blogs on Kuaid.',
      images: [post.media || 'https://kuaid.com/images/logo.jpg'],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// Server Component
const PostViewer = async ({ params }) => {
  const { id } = params;
  const post = dummyPosts.find((p) => p._id === id);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <div className="max-w-2xl mx-auto p-4 pt-20">
        <h2 className="text-4xl font-semibold text-gray-900">{post.title}</h2>
        {post.media && (
          <img
            src={post.media}
            alt={post.title}
            className="my-4 w-full h-auto rounded-lg shadow-md"
          />
        )}
        <div
          className="text-gray-700 text-lg leading-relaxed my-4"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="flex justify-between items-center mt-6">
          <p className="text-gray-600">
            Author: {post.author.username} {post.author.verified && '✔️'}
          </p>
          <p className="text-gray-500">Tags: {post.tags.join(', ')}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PostViewer;
