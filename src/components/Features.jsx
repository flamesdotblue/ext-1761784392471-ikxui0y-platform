import React from 'react';
import { School, Users, PenSquare, Bookmark } from 'lucide-react';

const features = [
  {
    title: 'Campus-first',
    desc: 'Follow classmates, join study groups, and discover ideas trending at your school.',
    icon: School,
    color: 'from-indigo-500 to-blue-500',
  },
  {
    title: 'Collaborative Posts',
    desc: 'Draft together in real time and co-author project proposals or notes.',
    icon: PenSquare,
    color: 'from-violet-500 to-fuchsia-500',
  },
  {
    title: 'Study Circles',
    desc: 'Create topic-based circles for courses, clubs, and hackathons.',
    icon: Users,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Save & Revisit',
    desc: 'Bookmark ideas and build your personal knowledge library.',
    icon: Bookmark,
    color: 'from-amber-500 to-orange-500',
  },
];

export default function Features() {
  return (
    <section className="py-10">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((f) => (
          <article
            key={f.title}
            className="group relative rounded-2xl border bg-white p-5 hover:shadow-lg transition-shadow"
          >
            <div className={`inline-flex items-center justify-center rounded-xl p-2 text-white bg-gradient-to-br ${f.color}`}>
              <f.icon size={18} />
            </div>
            <h3 className="mt-3 font-semibold text-slate-900">{f.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
