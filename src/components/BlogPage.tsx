import { useState } from 'react';
import { Calendar } from 'lucide-react';

/**
 * Blog component - supports Markdown content
 *
 * To add blog posts:
 * 1. Install markdown parser: npm install react-markdown
 * 2. Add blog posts to the blogPosts array below
 * 3. Uncomment the Blog button in App.tsx
 *
 * Example blog post format:
 * {
 *   id: 1,
 *   title: "Post Title",
 *   date: "Jan 1, 2025",
 *   excerpt: "Short description...",
 *   content: `# Markdown content here
 *
 * Your markdown content...`
 * }
 */

interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Add your blog posts here
  const blogPosts: BlogPost[] = [];

  if (selectedPost) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-12">
        <button
          onClick={() => setSelectedPost(null)}
          className="text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          ← Back to all posts
        </button>

        <article className="space-y-6">
          <div className="space-y-3">
            <h1>{selectedPost.title}</h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <time>{selectedPost.date}</time>
            </div>
          </div>

          <div className="prose prose-gray max-w-none">
            {/* TODO: Use ReactMarkdown component here when adding posts */}
            {selectedPost.content.split('\n').map((paragraph, index) => (
              <p key={index} className="text-foreground whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="space-y-2 mb-12">
        <h1>Blog</h1>
        <p className="text-muted-foreground">Coming soon...</p>
      </div>

      {blogPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No posts yet. Check back later!</p>
        </div>
      ) : (
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="space-y-2">
                <h2 className="group-hover:opacity-60 transition-opacity">
                  {post.title}
                </h2>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <time>{post.date}</time>
                </div>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
