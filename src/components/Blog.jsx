import React, { useEffect, useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const HASHNODE_API = "https://gql.hashnode.com";
const BLOG_HOST = "saachis-blog.hashnode.dev"; // Your actual Hashnode URL

export const BlogSection = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      // The GraphQL Query to get your posts
      const query = `
        query Publication {
          publication(host: "${BLOG_HOST}") {
            posts(first: 3) {
              edges {
                node {
                  title
                  brief
                  url
                  coverImage {
                    url
                  }
                  publishedAt
                }
              }
            }
          }
        }
      `;

      try {
        const response = await fetch(HASHNODE_API, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query }),
        });
        
        const data = await response.json();
        // Extract the posts from the messy GraphQL structure
        if (data.data.publication) {
            setPosts(data.data.publication.posts.edges.map(edge => edge.node));
        }
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div className="text-center text-gray-500 py-20">Loading articles...</div>;

  return (
    <section id="blog" className="py-24 max-w-6xl mx-auto px-6">
       <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold text-white">Technical Writing</h2>
        <div className="h-px bg-gray-800 flex-grow"></div>
        <a href={`https://${BLOG_HOST}`} target="_blank" className="text-violet-400 hover:text-violet-300 flex items-center gap-2 text-sm">
            View All <ExternalLink size={16}/>
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post, idx) => (
          <a 
            key={idx} 
            href={post.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group block bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:border-violet-500/50 transition-all hover:-translate-y-1"
          >
            {/* Image Section */}
            {post.coverImage && (
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.coverImage.url} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
            )}
            
            {/* Content Section */}
            <div className="p-6">
                <p className="text-xs text-violet-400 mb-2">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </p>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
                    {post.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                    {post.brief}
                </p>
                <div className="flex items-center text-violet-400 text-sm font-medium gap-1 group-hover:gap-2 transition-all">
                    Read Article <ArrowRight size={16} />
                </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};