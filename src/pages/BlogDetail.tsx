import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Share2, Twitter, Linkedin, Copy, ArrowRight } from 'lucide-react';
import { blogPostsData } from '../data/blog';

export const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPostsData.find((p) => p.slug === slug) || blogPostsData[0];

  const relatedPosts = blogPostsData.filter((p) => p.id !== post.id).slice(0, 3);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="w-full bg-white text-[#010e52]">
      {/* Header Banner */}
      <section className="bg-[#010e52] text-white pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#ffcc00] hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all articles
          </Link>

          <div className="flex items-center gap-3 mb-4 text-xs">
            <span className="px-3 py-1 bg-[#0025ff] text-white font-bold rounded-md">
              {post.category}
            </span>
            <span className="text-slate-300 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#ffcc00]" /> {post.readTime}
            </span>
            <span className="text-slate-300 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#ffcc00]" /> {post.publishedAt}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-black text-white leading-tight">
            {post.title}
          </h1>

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#ffcc00] text-[#010e52] font-black flex items-center justify-center text-sm">
                {post.author.avatarInitials}
              </div>
              <div>
                <span className="font-bold text-white block text-sm">{post.author.name}</span>
                <span className="text-xs text-slate-400">{post.author.role}</span>
              </div>
            </div>

            {/* Share buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Copy link"
              >
                <Copy className="w-4 h-4" />
              </button>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Share on X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
          {post.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Call to action inside blog */}
        <div className="mt-16 p-8 rounded-2xl bg-[#010e52] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-display font-bold text-white">
              Ready to stop reading and start building?
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Join thousands of Nigerian youth coding production solutions at BILDAHUB.
            </p>
          </div>
          <Link
            to="/community#join-form"
            className="px-5 py-2.5 bg-[#ffcc00] text-[#010e52] text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-[#e6b800] transition-colors shrink-0"
          >
            Join Community
          </Link>
        </div>

        {/* Related Posts */}
        <div className="mt-20 pt-12 border-t border-slate-200">
          <h3 className="text-xl font-display font-bold text-[#010e52] mb-6">
            Related Field Notes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((r) => (
              <Link
                key={r.id}
                to={`/blog/${r.slug}`}
                className="p-5 rounded-xl border border-slate-200 bg-slate-50 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold text-[#0025ff] uppercase block mb-1">
                    {r.category}
                  </span>
                  <h4 className="text-sm font-bold text-[#010e52] group-hover:text-[#0025ff] transition-colors line-clamp-2">
                    {r.title}
                  </h4>
                </div>
                <span className="text-xs font-bold text-[#0025ff] mt-4 inline-flex items-center gap-1">
                  Read article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
