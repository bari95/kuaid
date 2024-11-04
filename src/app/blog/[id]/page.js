// app/blog/[id]/page.js

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';

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

  const domain = "https://kuaid.vercel.app"; // Update to kuaid-cargo.com once live

  return {
    title: post.title || 'Kuaid Post',
    description: post.content || 'Read the latest post on Kuaid.',
    openGraph: {
      title: post.title || 'Kuaid Post',
      description: post.content || 'Read the latest post on Kuaid.',
      images: [{ url: post.media || `${domain}/images/logo.jpg` }],
      url: `${domain}/blog/${id}`,
      siteName: 'Kuaid',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@Kuaid',
      title: post.title || 'Kuaid Blog',
      description: post.content || 'Read the latest blogs on Kuaid.',
      images: [post.media || `${domain}/images/logo.jpg`],
    },
    robots: {
      index: true,
      follow: true,
    },
    // Adding JSON-LD structured data
    additionalMetadata: (
      <Script
        id='blog-script'
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.content,
            url: `${domain}/blog/${post._id}`,
            image: post.media || `${domain}/images/logo.jpg`,
            author: {
              '@type': 'Person',
              name: post.author.username,
              ...(post.author.verified && { sameAs: `${domain}/author/${post.author._id}` }),
            },
            datePublished: post.createdAt,
            genre: post.tags.join(', '),
          }),
        }}
      />
    ),
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
