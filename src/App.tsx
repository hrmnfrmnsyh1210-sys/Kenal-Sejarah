/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import CulturalGallery from "./components/CulturalGallery";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HistoryTimeline from "./components/HistoryTimeline";
import QuizGame from "./components/QuizGame";

export default function App() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 selection:bg-fuchsia-600 selection:text-white">
      <Hero />
      <HistoryTimeline />
      <CulturalGallery />
      <QuizGame />
      <Footer />
    </main>
  );
}
