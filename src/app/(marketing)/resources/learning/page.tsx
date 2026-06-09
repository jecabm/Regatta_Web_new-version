import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { learningItemsQuery, videoTutorialsQuery } from "@/sanity/queries";
import { Section, SectionHeading } from "@/components/ui/section";
import { LearningFaq } from "@/components/marketing/learning-faq";
import { VideoTutorialsSection } from "@/components/marketing/video-tutorials-section";
import type { PortableTextBlock } from "@portabletext/types";

export const metadata: Metadata = {
  title: "Learning Centre",
  description:
    "Step-by-step video tutorials and answers to common questions to help you get the most out of Regatta Registers.",
};

type FaqItem = {
  _id: string;
  question: string;
  answer?: PortableTextBlock[];
  category?: string;
  order?: number;
  featured?: boolean;
};

type VideoTutorial = {
  _id: string;
  title: string;
  description?: string;
  videoUrl: string;
  thumbnail?: { asset?: { url?: string }; alt?: string };
  duration?: string;
  startTime?: number;
  endTime?: number;
  category?: string;
  order?: number;
  featured?: boolean;
};

export default async function LearningPage() {
  const [faqItems, videos] = await Promise.all([
    client.fetch(learningItemsQuery) as Promise<FaqItem[]>,
    client.fetch(videoTutorialsQuery) as Promise<VideoTutorial[]>,
  ]);

  return (
    <>
      {/* Hero */}
      <Section size="narrow" className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
          Resources
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
          Learning Centre
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-500">
          Video walkthroughs and answers to common questions — everything you need to get up and running.
        </p>
      </Section>

      {/* Video Tutorials */}
      <Section muted size="wide">
        <SectionHeading
          align="left"
          eyebrow="Video Tutorials"
          title="Watch and learn"
          description="Step-by-step walkthroughs of every key feature."
          className="mb-10"
        />

        {videos.length === 0 ? (
          <div className="py-12 text-center">
            <p className="text-ink-400">Video tutorials coming soon — check back shortly.</p>
          </div>
        ) : (
          <VideoTutorialsSection videos={videos} />
        )}
      </Section>

      {/* FAQ */}
      <Section size="wide">
        <SectionHeading
          align="left"
          eyebrow="FAQ"
          title="Frequently asked questions"
          className="mb-10"
        />
        <LearningFaq items={faqItems} />
      </Section>
    </>
  );
}
