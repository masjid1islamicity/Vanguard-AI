import React, { useState } from 'react';
import { Search, ArrowRight, BookOpen, Clock, Calendar, User, X } from 'lucide-react';
import { BLOG_POSTS } from '../data/siteData';
import { BlogPost, PageId } from '../types';

interface BlogPageProps {
  onNavigate: (page: PageId) => void;
}

export const BlogPage: React.FC<BlogPageProps> = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const categories = ['All', 'Engineering & Research', 'Cybersecurity & Compliance', 'Industry 4.0'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
          Islamicity Vanguard Research & Engineering Publications
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold text-white font-display text-balance">
          Peer-Reviewed Insights on Enterprise Autonomous AI
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Deep-dives into state machine determinism, zero-knowledge sovereign cloud topologies, and multi-agent consensus protocols.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white font-semibold'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative max-w-xs w-full">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search papers & articles..."
            className="w-full pl-9 pr-4 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-5"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="font-mono text-blue-400">{post.category}</span>
                <span aria-hidden="true">·</span>
                <span>{post.readTime}</span>
              </div>

              <h2 className="text-xl font-bold text-white font-display leading-snug hover:text-blue-300 transition-colors cursor-pointer" onClick={() => setSelectedPost(post)}>
                {post.title}
              </h2>

              <p className="text-xs text-slate-300 leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <div className="text-xs">
                <div className="text-slate-200 font-semibold">{post.author}</div>
                <div className="text-[11px] text-slate-400">{post.date}</div>
              </div>
              <button
                onClick={() => setSelectedPost(post)}
                className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1"
              >
                <span>Read Paper</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Full Article Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl p-6 sm:p-8 space-y-6 my-8 max-h-[85vh] overflow-y-auto">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <span className="text-xs font-mono text-blue-400">{selectedPost.category} · {selectedPost.readTime}</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">{selectedPost.title}</h3>
                <div className="text-xs text-slate-400 pt-1">
                  By {selectedPost.author} ({selectedPost.role}) · Published {selectedPost.date}
                </div>
              </div>
              <button
                onClick={() => setSelectedPost(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs italic text-slate-300 leading-relaxed">
              <strong>Executive Abstract:</strong> {selectedPost.excerpt}
            </div>

            <div className="text-sm text-slate-200 leading-relaxed space-y-4 font-sans">
              <p>{selectedPost.content}</p>
              <p>
                In high-reliability enterprise environments, neural inference pipelines cannot rely on naive ungrounded prompts. By coupling hierarchical planners with isolated tool sandboxes and state verification assertions, Islamicity Vanguard AI ensures that every generated output conforms to strict business invariants.
              </p>
              <p>
                Furthermore, empirical benchmarks across our 14 sovereign data centers validate that context compression algorithms yield up to 40% reductions in token expenditure while accelerating time-to-first-token by 2.4x.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedPost(null)}
                className="px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
