import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';

const mockPosts = [
  {
    id: '1',
    name: 'Ava Johnson',
    school: 'Stanford CS',
    avatar: 'https://i.pravatar.cc/100?img=5',
    content:
      'Building a study circle for "Intro to ML". Goal: weekly paper reviews + tiny projects. Anyone want to co-lead and curate papers? #machinelearning #studycircle',
    tags: ['ML', 'Papers', 'Projects'],
    likes: 42,
    comments: 8,
  },
  {
    id: '2',
    name: 'Liam Chen',
    school: 'UCLA Design',
    avatar: 'https://i.pravatar.cc/100?img=12',
    content:
      'Concept for a campus app that maps quiet study spots by time of day using crowdsourced data. Looking for a backend partner. #ux #maps #crowd',
    tags: ['UX', 'Campus', 'Backend'],
    likes: 29,
    comments: 5,
  },
  {
    id: '3',
    name: 'Maya Patel',
    school: 'MIT BioE',
    avatar: 'https://i.pravatar.cc/100?img=32',
    content:
      'Could we run a weekend ideathon around affordable lab tools? Let’s prototype open-source pipette calibrator and share BOMs. #bio #openhardware',
    tags: ['Bio', 'Open Hardware', 'Ideathon'],
    likes: 64,
    comments: 19,
  },
];

function PostCard({ post }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  const toggleLike = () => {
    setLiked((v) => !v);
    setLikes((n) => (liked ? n - 1 : n + 1));
  };

  return (
    <article className="rounded-2xl border bg-white p-4 sm:p-5 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        <img src={post.avatar} alt={post.name} className="h-10 w-10 rounded-full object-cover" />
        <div>
          <div className="flex items-center gap-2">
            <h4 className="font-semibold text-slate-900 leading-none">{post.name}</h4>
            <span className="text-xs text-slate-500">• {post.school}</span>
          </div>
          <p className="text-xs text-slate-500">Just now</p>
        </div>
      </div>

      <p className="mt-3 text-slate-800 whitespace-pre-line">{post.content}</p>

      {post.tags?.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700">
              #{t}
            </span>
          ))}
        </div>
      )}

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLike}
            className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border hover:bg-slate-50 text-sm ${
              liked ? 'text-rose-600 border-rose-200 bg-rose-50' : ''
            }`}
            aria-label="Like"
          >
            <Heart size={16} className={liked ? 'fill-rose-600 text-rose-600' : ''} />
            {likes}
          </button>

          <button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border hover:bg-slate-50 text-sm" aria-label="Comment">
            <MessageCircle size={16} />
            {post.comments}
          </button>

          <button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border hover:bg-slate-50 text-sm" aria-label="Share">
            <Share2 size={16} />
            Share
          </button>
        </div>

        <button
          onClick={() => setSaved((v) => !v)}
          className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border hover:bg-slate-50 text-sm ${
            saved ? 'text-indigo-600 border-indigo-200 bg-indigo-50' : ''
          }`}
          aria-label="Save"
        >
          <Bookmark size={16} className={saved ? 'fill-indigo-600 text-indigo-600' : ''} />
          {saved ? 'Saved' : 'Save'}
        </button>
      </div>
    </article>
  );
}

export default function Feed() {
  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-slate-900">Trending on IdeaSphere</h2>
        <div className="text-sm text-slate-500">For your campus</div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {mockPosts.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>
    </section>
  );
}
