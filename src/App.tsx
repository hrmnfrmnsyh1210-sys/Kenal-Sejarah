/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import CulturalGallery from "./components/CulturalGallery";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HistoryTimeline from "./components/HistoryTimeline";

export default function App() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-stone-900 selection:bg-red-700 selection:text-white">
      <Hero />
      <HistoryTimeline />
      <CulturalGallery />
      <Footer />
    </main>
  );
}
