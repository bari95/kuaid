'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Post from './Post2';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

// Dummy data for testing
const dummyPosts = [
  {
    _id: '1',
    title: 'First Dummy Post',
    content: 'This is the content of the first dummy post.',
    author: {
      _id: 'author1',
      username: 'AuthorOne',
      verified: 'true',
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
      verified: 'false',
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
      verified: 'true',
    },
    media: 'https://via.placeholder.com/400',
    createdAt: '2024-11-01T14:00:00Z',
    tags: ['tag4', 'tag5'],
    upvotes: [],
    downvotes: [],
    answers: [],
  },
];

const FeaturedBlogPosts: React.FC = () => {
  const [questions, setQuestions] = useState<any[]>(dummyPosts); // Use dummy data
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false); // No pagination needed
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  // Simulate loading state
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      setHasMore(false); // No more posts to load since we're using static data
    }, 1000); // Simulate loading time

    return () => clearTimeout(timer); // Clean up the timeout
  }, []);

  return (
    <section className="py-6 px-3 pt-3 mt-3">
      <h2 className="text-lg font-bold"></h2>
    
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
        <div className="col-span-3">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Display Skeletons while loading */}
              {[...Array(3)].map((_, index) => (
                <div key={index} className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                  <Skeleton height={200} /> {/* Height for image skeleton */}
                  <div className="py-2">
                    <Skeleton height={20} width={`80%`} /> {/* Title skeleton */}
                    <Skeleton height={15} width={`60%`} /> {/* Author skeleton */}
                  </div>
                  <Skeleton count={3} /> {/* Content skeleton */}
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {questions.length > 0 ? (
                questions.map((question, index) => (
                  <div key={question._id} data-index={index}>
                    <Post post={question} />
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-600">
                  <div>No posts available.</div>
                </div>
              )}
            </div>
          )}

          {/* Remove load more ref since we're using dummy data */}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogPosts;
