// ============================================================
// PORTFOLIO TEMPLATE
// ============================================================
// Optimized for designers, developers, and creative professionals
// Focus: Work showcase, visual appeal, skill demonstration
// See docs/PRD-TEMPLATES.md for full requirements
// ============================================================

import Image from "next/image";
import porkDumplingImage from "../images/pork_dumpling.jpeg";
import vegetableDumplingImage from "../images/veg_dumpling.jpeg";
import porkBaoImage from "../images/porkbaozi.jpeg";
import vegetableBaoImage from "../images/vegbaozi.jpeg";
import eggPorkStickyRiceImage from "../images/eggpork.jpeg";
import sweetStickyRiceImage from "../images/sweet.jpg";
import handmadeChineseFoodImage from "../images/handmade_chinese_food.jpg";

export default function PortfolioTemplate() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
      {/* ============================================================ */}
      {/* NAVIGATION                                                    */}
      {/* ============================================================ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-sm md:text-base font-bold tracking-tight font-display text-slate-900 dark:text-white">
              A Taste of Home, Right Next Door
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#work" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-purple-600 transition-colors">Menu</a>
            <a href="#skills" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-purple-600 transition-colors">Services</a>
            <a href="#about" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-purple-600 transition-colors">About</a>
            <a href="#contact" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </nav>

      {/* ============================================================ */}
      {/* HERO - Creative Focus with Featured Work Preview              */}
      {/* ============================================================ */}
      <section className="relative pt-32 pb-8 md:pt-40 md:pb-12 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-purple-100/50 dark:bg-purple-900/10 rounded-full blur-3xl opacity-70 translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-pink-100/50 dark:bg-pink-900/10 rounded-full blur-3xl opacity-70 -translate-x-1/3 translate-y-1/4"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tight text-slate-900 dark:text-white mb-6">
              Handmade Chinese Food in San Jose
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Call 408 888 9999 to buy
              </span>
            </h1>

          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FEATURED WORK - Visual Portfolio Grid                         */}
      {/* ============================================================ */}
      <section id="work" className="pt-12 pb-20 md:pt-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
                Menu
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                handmade daily
              </p>
            </div>

            {/* Project Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Project 2 */}
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <Image src={porkDumplingImage} alt="Pork and napa cabbage dumplings" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-bold mb-1">Pork &amp; Napa Cabbage Dumpling</h3>
                      <p className="text-white/80 text-sm">Tasty and juicy filling wrapped with pleasantly chewy skin, Chinese pork dumpling with Napa cabbage is an absolute classic!</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded">$48/50pcs</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Pork &amp; Napa Cabbage Dumpling</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Tasty and juicy filling wrapped with pleasantly chewy skin, Chinese pork dumpling with Napa cabbage is an absolute classic!</p>
                </div>
              </div>

              {/* Project 3 */}
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <Image src={vegetableDumplingImage} alt="Chive and egg dumplings" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-bold mb-1">Chive &amp; Egg Dumpling</h3>
                      <p className="text-white/80 text-sm">Egg and Chive Vegetarian Dumplings are delicious Chinese appetizers made with fragrant chives, fluffy scrambled eggs, and seasonings.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                    <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded">$48/50pcs</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Chive &amp; Egg Dumpling</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Egg and Chive Vegetarian Dumplings are delicious Chinese appetizers made with fragrant chives, fluffy scrambled eggs, and seasonings.</p>
                </div>
              </div>

              {/* Project 4 */}
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <Image src={porkBaoImage} alt="Steamed pork bao" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-bold mb-1">Steamed Pork Bao</h3>
                      <p className="text-white/80 text-sm">Pillowy soft steamed buns filled with a sweet, savoury saucy pork filling.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-0.5 rounded">$48/25pcs</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Steamed Pork Bao</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Pillowy soft steamed buns filled with a sweet, savoury saucy pork filling.</p>
                </div>
              </div>

              {/* Project 5 */}
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <Image src={vegetableBaoImage} alt="Steamed bok choy bao" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-bold mb-1">Steamed Bok Choy Bao</h3>
                      <p className="text-white/80 text-sm">Pillow soft baozi with a vegetable-based filling – mushroom and bok choy.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                    <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-2 py-0.5 rounded">$48/25pcs</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Steamed Bok Choy Bao</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Pillow soft baozi with a vegetable-based filling – mushroom and bok choy.</p>
                </div>
              </div>

              {/* Sticky Rice Dumplings */}
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <Image src={eggPorkStickyRiceImage} alt="Egg yolk and pork sticky rice dumpling" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-bold mb-1">Egg yolk and pork sticky rice dumpling</h3>
                      <p className="text-white/80 text-sm">glutinous rice stuffed with marinated pork and salted egg yolk, wrapped in bamboo leaves</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                    <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded">$48/15pcs</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Egg yolk and pork sticky rice dumpling</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">glutinous rice stuffed with marinated pork and salted egg yolk, wrapped in bamboo leaves</p>
                </div>
              </div>

              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <Image src={sweetStickyRiceImage} alt="Sweet sticky rice dumpling" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-bold mb-1">Sweet sticky rice dumpling</h3>
                      <p className="text-white/80 text-sm">glutinous rice stuffed with honey date wrapped in bamboo leaves</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                    <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-2 py-0.5 rounded">$48/20pcs</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Sweet sticky rice dumpling</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">glutinous rice stuffed with honey date wrapped in bamboo leaves</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SKILLS - Technical Capabilities                               */}
      {/* ============================================================ */}
      <section id="skills" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
                Services
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Bring Your Own Ingredients
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Dumpling Service */}
              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Dumplings</h3>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">$50 for 100pcs</p>
                <p className="text-slate-600 dark:text-slate-400 mb-6">Labor only</p>
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">Recommend ingredients:</h4>
                <p className="text-slate-600 dark:text-slate-400">Flour, pork/beef, Napa cabbages, celery</p>
              </div>

              {/* Steamed Bao Service */}
              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Steamed Bao</h3>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">$50 for 60pcs</p>
                <p className="text-slate-600 dark:text-slate-400 mb-6">Labor only</p>
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">Recommend ingredients:</h4>
                <p className="text-slate-600 dark:text-slate-400">Flour, pork/beef, Napa cabbages, celery, or your favorite fillings</p>
              </div>

              {/* Sticky Rice Dumpling Service */}
              <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Sticky rice dumpling</h3>
                <p className="text-lg font-semibold text-slate-900 dark:text-white">$50 for 50pcs</p>
                <p className="text-slate-600 dark:text-slate-400 mb-6">Labor only</p>
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">Recommend ingredients:</h4>
                <p className="text-slate-600 dark:text-slate-400">Glutinous rice, pork, salty egg yolk, or your favorite fillings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* ABOUT - Personal Story                                        */}
      {/* ============================================================ */}
      <section id="about" className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image src={handmadeChineseFoodImage} alt="Handmade Chinese food" fill className="object-cover" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-6">
                  About Us
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
                  We are a family specializing in traditional Chinese cuisine. All our food is handcrafted with premium ingredients.
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CONTACT                                                       */}
      {/* ============================================================ */}
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
              Want Something Not Listed Here
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Have a recipe? Let us cook for you.
            </p>
            <a
              href="mailto:ying.wang@cstu.edu"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-purple-600 bg-white hover:bg-purple-50 rounded-xl transition-all shadow-lg"
            >
              ying.wang@cstu.edu
            </a>

            <div className="flex justify-center gap-4 mt-8">
              <a href="https://dribbble.com/yourusername" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/>
                </svg>
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-600 dark:text-slate-400">
              Designed & Built by Ying Wang © {new Date().getFullYear()}
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              Made with Next.js & Tailwind CSS
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
