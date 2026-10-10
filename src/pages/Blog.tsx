import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Clock, Calendar, ArrowRight, BookOpen, Send, Check } from 'lucide-react';
import { FluidCanvas } from '../components/FluidCanvas';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { blogPostsData } from '../data/blog';
import { api } from '../lib/api';

export const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const categories = ['All', 'Careers', 'Engineering', 'Startups', 'AI & Data', 'Design', 'Community'];

  const featuredPost = blogPostsData.find((p) => p.featured) || blogPostsData[0];

  const filteredPosts = blogPostsData.filter((post) => {
    const matchesCat = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    await api.subscribeNewsletter(newsletterEmail);
    setSubscribed(true);
    setNewsletterEmail('');
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-center justify-center bg-[#010e52] pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden text-center">
        <FluidCanvas className="z-0 opacity-60" intensity={0.7} />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-[#ffcc00] text-xs font-bold uppercase tracking-widest border border-white/20 mb-6">
            Engineering Logs & Field Guides
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-black text-white leading-tight">
            Knowledge for the <span className="text-[#ffcc00]">ambitious.</span>
          </h1>
          <p className="mt-4 text-base sm:text-xl text-slate-200 max-w-2xl leading-relaxed">
            Practical playbooks, architectural post-mortems, and honest career perspectives written by African software craftspeople.
          </p>
        </div>
      </section>

      {/* Featured Post Banner */}
      <section className="py-12 bg-slate-50 border-b border-slate-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto bg-[#010e52] text-white rounded-3xl p-8 sm:p-12 border border-white/10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 text-xs font-bold bg-[#ffcc00] text-[#010e52] rounded-full uppercase">
                Featured Analysis
              </span>
              <span className="text-xs text-slate-300 font-semibold">{featuredPost.readTime}</span>
            </div>

            <Link
              to={`/blog/${featuredPost.slug}`}
              className="text-2xl sm:text-4xl font-display font-extrabold hover:text-[#ffcc00] transition-colors leading-tight block"
            >
              {featuredPost.title}
            </Link>

            <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed">
              {featuredPost.excerpt}
            </p>

            <div className="mt-6 flex items-center gap-4 text-xs text-slate-300">
              <div className="w-8 h-8 rounded-full bg-[#0025ff] text-white font-bold flex items-center justify-center">
                {featuredPost.author.avatarInitials}
              </div>
              <div>
                <span className="font-bold text-white block">{featuredPost.author.name}</span>
                <span>{featuredPost.publishedAt}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-end">
            <Link
              to={`/blog/${featuredPost.slug}`}
              className="px-6 py-3.5 bg-[#ffcc00] text-[#010e52] font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#e6b800] transition-all inline-flex items-center gap-2"
            >
              Read Article <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-24 bg-white text-[#010e52] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-slate-200">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#0025ff] text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#0025ff]"
              />
            </div>
          </div>

          {/* Post Grid (9 articles) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="flex flex-col justify-between p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:shadow-lg transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-bold text-[#0025ff] uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-slate-400 font-semibold">{post.readTime}</span>
                  </div>

                  <Link to={`/blog/${post.slug}`}>
                    <h3 className="text-lg font-bold font-display text-[#010e52] group-hover:text-[#0025ff] transition-colors leading-snug">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="mt-3 text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#010e52] text-[#ffcc00] text-[10px] font-black flex items-center justify-center">
                      {post.author.avatarInitials}
                    </div>
                    <span className="text-slate-700 font-medium">{post.author.name}</span>
                  </div>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="font-bold text-[#0025ff] hover:underline inline-flex items-center gap-1"
                  >
                    Read <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup Block */}
      <section className="py-20 bg-[#010e52] text-white px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-[#ffcc00]/20 text-[#ffcc00] flex items-center justify-center mb-6">
            <BookOpen className="w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white">
            Get the Weekly African Build Log
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl">
            No spam. Curated essays on building software in Nigeria, upcoming grant deadlines, open source bounties, and cohort dates.
          </p>

          <form onSubmit={handleSubscribe} className="mt-8 flex flex-col sm:flex-row gap-3 w-full max-w-md">
            <input
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 bg-[#04146a] text-white text-sm rounded-lg px-4 py-3 border border-white/20 focus:border-[#ffcc00] outline-none"
            />
            <Button type="submit" variant="primary" size="md">
              Subscribe
            </Button>
          </form>

          {subscribed && (
            <p className="text-xs text-[#ffcc00] mt-3">
              ✓ You are subscribed! Check your inbox for the welcome dispatch.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};
