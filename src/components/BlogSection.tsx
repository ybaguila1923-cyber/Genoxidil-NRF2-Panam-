import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/content';
import { BookOpen, Calendar, Clock, ArrowRight, X, Sparkles } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<typeof BLOG_POSTS[0] | null>(null);

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Wireframe Page 9 Header: BLOG/ARTICULOS/EVENTOS/NOTICIAS */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/70 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Divulgación Científica y Salud Celular
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Artículos, Ciencia y Noticias NBN
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Aprende sobre la biología del envejecimiento, la proteína Nrf2 y las mejores prácticas para una nutrición mitocondrial profunda.
          </p>
        </div>

        {/* 3 Articles Grid as per Wireframe Page 9 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <article 
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div>
                {/* Visual Header */}
                <div className="h-48 bg-gradient-to-br from-slate-800 to-blue-950 p-6 flex flex-col justify-between text-white relative overflow-hidden">
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span className="bg-white/10 px-2.5 py-1 rounded-md font-semibold text-amber-300">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-[11px]">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block mb-1">Artículo #{idx + 1}</span>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </div>
                  <div className="absolute right-0 bottom-0 translate-x-4 translate-y-4 w-28 h-28 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {post.summary}
                  </p>
                </div>
              </div>

              {/* Read Action */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => setActiveArticle(post)}
                  className="w-full py-2.5 px-4 bg-slate-100 hover:bg-blue-50 text-blue-700 hover:text-blue-800 font-semibold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Leer Artículo Completo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Modal for full article reading */}
        {activeArticle && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-md">
                  {activeArticle.category} · {activeArticle.readTime}
                </span>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 cursor-pointer"
                  aria-label="Cerrar modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 mb-4">
                {activeArticle.title}
              </h3>

              <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
                <p className="font-medium text-slate-900 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  {activeArticle.summary}
                </p>
                <p className="whitespace-pre-line">
                  {activeArticle.content}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-6 py-2.5 bg-slate-900 text-white font-semibold rounded-xl text-xs hover:bg-slate-800 cursor-pointer"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
