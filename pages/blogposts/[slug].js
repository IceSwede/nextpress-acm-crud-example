import { useRouter } from 'next/router';

import BlogpostBigCard from '@/components/blogposts/BlogpostBigCard';

import { client } from '@/lib/apolloClient';

import {
  GET_BLOGPOST_BY_SLUG,
  GET_BLOGPOSTS_PATHS,
} from '@/lib/blogposts/Queries';

export default function BlogpostPage({ blogpost }) {
  const router = useRouter();

  if (!router.isFallback && !blogpost.slug) {
    return <p>Ooppss... Post not found</p>;
  }

  if (router.isFallback) {
    return <p>Loading...</p>;
  }
  return <BlogpostBigCard blogpost={blogpost} />;
}

// getStaticPaths
export async function getStaticPaths() {
  const response = await client.query({
    query: GET_BLOGPOSTS_PATHS,
  });
  console.log('Response from getStaticPaths', response);
  return {
    paths:
      response.data.blogposts.edges.map(
        ({ node }) => `/blogposts/${node.slug} `
      ) || [],
    fallback: true,
  };
}

// getStaticProps
export async function getStaticProps({ params }) {
  const response = await client.query({
    query: GET_BLOGPOST_BY_SLUG,
    variables: { id: params.slug, idType: 'SLUG' },
  });
  console.log('Response get static props: ', response);
  return {
    props: {
      blogpost: response.data.blogpost,
    },
  };
}
