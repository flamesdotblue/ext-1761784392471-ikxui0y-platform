import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative">
      <div className="container mx-auto px-4 pt-12 pb-8 grid lg:grid-cols-2 gap-8 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-medium">
            <Rocket size={14} />
            Built for students
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Share ideas. Collaborate. Grow together.
          </h1>
          <p className="mt-4 text-slate-600 max-w-xl">
            IdeaSphere is a playful, vibrant social space where students post ideas, get feedback, and form study circles. Your campus, your creativity — in one place.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <button className="px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800">
              Get Started
            </button>
            <button className="px-5 py-3 rounded-xl border hover:bg-slate-50">
              Explore Feed
            </button>
          </div>
        </div>

        <div className="relative h-80 md:h-96 lg:h-[28rem] rounded-2xl overflow-hidden border shadow-xl">
          <Spline
            scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
