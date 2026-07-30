import { useSpring, animated, config } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import ImageCarousel from "./ImageCarousel.jsx";

import hackathon2026_1 from "../assets/activities/hackathon-2026/hackathon-2026-1.jpg";
import hackathon2026_2 from "../assets/activities/hackathon-2026/hackathon-2026-2.jpg";
import hackathon2026_3 from "../assets/activities/hackathon-2026/hackathon-2026-3.jpg";
import hackathon2026_4 from "../assets/activities/hackathon-2026/hackathon-2026-4.jpg";
import hackathon2026_5 from "../assets/activities/hackathon-2026/hackathon-2026-5.jpg";
import hackathon2026_6 from "../assets/activities/hackathon-2026/hackathon-2026-6.jpg";
import hackathon2026_7 from "../assets/activities/hackathon-2026/hackathon-2026-7.jpg";
import hackathon2026_8 from "../assets/activities/hackathon-2026/hackathon-2026-8.jpg";

import hackathon2025_1 from "../assets/activities/hackathon-2025/hackathon-2025-1.jpg";
import hackathon2025_2 from "../assets/activities/hackathon-2025/hackathon-2025-2.jpg";
import hackathon2025_3 from "../assets/activities/hackathon-2025/hackathon-2025-3.jpg";
import hackathon2025_4 from "../assets/activities/hackathon-2025/hackathon-2025-4.jpg";
import hackathon2025_5 from "../assets/activities/hackathon-2025/hackathon-2025-5.jpg";
import hackathon2025_6 from "../assets/activities/hackathon-2025/hackathon-2025-6.jpg";

import openHouse1 from "../assets/activities/open-house/open-house-1.jpg";
import openHouse2 from "../assets/activities/open-house/open-house-2.jpg";
import openHouse3 from "../assets/activities/open-house/open-house-3.jpg";
import openHouse4 from "../assets/activities/open-house/open-house-4.jpg";
import openHouse5 from "../assets/activities/open-house/open-house-5.jpg";
import openHouse6 from "../assets/activities/open-house/open-house-6.jpg";

import taiwan1 from "../assets/activities/taiwan/taiwan-1.jpg";
import taiwan2 from "../assets/activities/taiwan/taiwan-2.jpg";
import taiwan3 from "../assets/activities/taiwan/taiwan-3.jpg";
import taiwan4 from "../assets/activities/taiwan/taiwan-4.jpg";

import indonesia1 from "../assets/activities/indonesia/indonesia-1.jpg";
import indonesia2 from "../assets/activities/indonesia/indonesia-2.jpg";
import indonesia3 from "../assets/activities/indonesia/indonesia-3.jpg";
import indonesia4 from "../assets/activities/indonesia/indonesia-4.jpg";
import indonesia5 from "../assets/activities/indonesia/indonesia-5.jpg";

import canada1 from "../assets/activities/canada/canada-1.jpg";
import canada2 from "../assets/activities/canada/canada-2.jpg";
import canada3 from "../assets/activities/canada/canada-3.jpg";
import canada4 from "../assets/activities/canada/canada-4.jpg";

import certHackathon2026 from "../assets/certificates/hackathon-2026-honorable-mention.png";
import certGoogleProjectManagement from "../assets/certificates/google-project-management.png";
import certAgileProjectManagement from "../assets/certificates/agile-project-management.png";
import certUxDesign from "../assets/certificates/ux-design-foundations.png";
import certThnca from "../assets/certificates/thnca-certificate.png";

const CertificationCard = ({ certification, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(30px)",
    delay: index * 100,
    config: config.gentle,
  });

  return (
    <animated.div
      ref={ref}
      style={springProps}
      className="group flex-shrink-0 w-64 snap-start bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-black/10 dark:border-white/10 hover:border-blue-500/30 transition-all duration-500"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-black/5 dark:bg-white/5">
        <img
          src={certification.image}
          alt={certification.title}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <h4 className="text-gray-900 dark:text-white font-medium">
          {certification.title}
        </h4>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
          {certification.issuer}
        </p>
      </div>
    </animated.div>
  );
};

const IndustryActivityCard = ({ activity, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(40px)",
    delay: index * 150,
    config: config.gentle,
  });

  const hoverProps = useSpring({
    transform: isHovered
      ? "scale(1.02) translateY(-6px)"
      : "scale(1) translateY(0)",
    boxShadow: isHovered
      ? "0 20px 25px -5px rgba(0, 0, 0, 0.2)"
      : "0 0 0 0 rgba(0, 0, 0, 0)",
    config: { tension: 300, friction: 20 },
  });

  return (
    <animated.div
      ref={ref}
      style={{ ...springProps, ...hoverProps }}
      className="group relative bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-black/10 dark:border-white/10 hover:border-blue-500/30 transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <ImageCarousel
          images={activity.images}
          alt={activity.title}
          imgClassName="group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5 space-y-2">
        <div>
          <h4 className="text-gray-900 dark:text-white font-semibold group-hover:text-blue-400 transition-colors duration-300">
            {activity.title}
          </h4>
          {activity.tag && (
            <span className="text-xs text-blue-500 dark:text-blue-400">
              {activity.tag}
            </span>
          )}
        </div>
        <p className="text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300 text-sm leading-relaxed">
          {activity.description}
        </p>
      </div>
    </animated.div>
  );
};

const ExchangeActivityCard = ({ activity, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(40px)",
    delay: index * 150,
    config: config.gentle,
  });

  const hoverProps = useSpring({
    transform: isHovered
      ? "scale(1.02) translateY(-6px)"
      : "scale(1) translateY(0)",
    boxShadow: isHovered
      ? "0 20px 25px -5px rgba(0, 0, 0, 0.2)"
      : "0 0 0 0 rgba(0, 0, 0, 0)",
    config: { tension: 300, friction: 20 },
  });

  return (
    <animated.div
      ref={ref}
      style={{ ...springProps, ...hoverProps }}
      className="group relative bg-black/5 dark:bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-black/10 dark:border-white/10 hover:border-purple-500/30 transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <ImageCarousel
          images={activity.images}
          alt={activity.title}
          imgClassName="group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5 space-y-2">
        <div>
          <h4 className="text-gray-900 dark:text-white font-semibold group-hover:text-blue-400 transition-colors duration-300">
            {activity.title}
          </h4>
          <span className="text-xs text-purple-500 dark:text-purple-400">
            {activity.location}
          </span>
        </div>
        <p className="text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300 text-sm leading-relaxed">
          {activity.description}
        </p>
      </div>
    </animated.div>
  );
};

const Activities = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const titleSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(20px)",
    config: config.gentle,
  });

  const carouselRef = useRef(null);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: direction * 280, behavior: "smooth" });
    }
  };

  // Slowly auto-scroll the certifications carousel, looping back to the
  // start once it reaches the end. Pauses while the user is interacting.
  useEffect(() => {
    const el = carouselRef.current;
    if (!el || isCarouselPaused) return undefined;

    let rafId;
    const speed = 0.4; // pixels per frame

    const step = () => {
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) {
        el.scrollLeft = 0;
      } else {
        el.scrollLeft += speed;
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isCarouselPaused]);

  const certifications = [
    {
      title: "BU Cyber Fortress Hackathon 2026 — Honorable Mention",
      issuer: "Bangkok University · NCSA Thailand · Feb 2026",
      image: certHackathon2026,
    },
    {
      title: "Google Project Management",
      issuer: "Google · Coursera · Dec 2024",
      image: certGoogleProjectManagement,
    },
    {
      title: "Agile Project Management",
      issuer: "Google · Coursera · Nov 2024",
      image: certAgileProjectManagement,
    },
    {
      title: "Foundations of User Experience (UX) Design",
      issuer: "Google · Coursera · Nov 2024",
      image: certUxDesign,
    },
    {
      title: "THNCA Certificate",
      issuer: "THNCA · Dec 2025",
      image: certThnca,
    },
  ];

  const industryActivities = [
    {
      title: "BU Cyber Fortress Hackathon 2026",
      tag: "Honorable Mention · Project Manager & Speaker",
      description:
        "Participated in a national-level hackathon hosted by Bangkok University with participants from several top universities in Thailand, as part of a 5-person team, and earned the Honorable Mention Award. The topic was AI for Cyber Defense — our pitch was a product aimed at protection against Shadow AI and data leaks within corporations due to unregulated AI use. I contributed as the project manager as well as one of the two main speakers for the team at the official pitching day.",
      images: [
        hackathon2026_1,
        hackathon2026_2,
        hackathon2026_3,
        hackathon2026_4,
        hackathon2026_5,
        hackathon2026_6,
        hackathon2026_7,
        hackathon2026_8,
      ],
    },
    {
      title: "BU Cyber Mini Hackathon 2025",
      tag: "3rd Place · Team Lead & Pitcher",
      description:
        "Got 3rd place in an internal hackathon hosted by the University on the topic of Cybersecurity and Operational Security, with over 50 teams participating. Our idea was regarding corporate data leak harm prevention using RAG technology and web crawling. I acted as the team lead as well as the pitcher for the team.",
      images: [
        hackathon2025_1,
        hackathon2025_2,
        hackathon2025_3,
        hackathon2025_4,
        hackathon2025_5,
        hackathon2025_6,
      ],
    },
    {
      title: "BU Open House Volunteer 2024",
      tag: "Presenter",
      description:
        "Volunteered at my University's open house event as a presenter, in charge of showcasing an alumnus's senior project to groups of prospective students and parents as well as other event attendees.",
      images: [openHouse1, openHouse2, openHouse3, openHouse4, openHouse5, openHouse6],
    },
  ];

  const exchangeActivities = [
    {
      title: "Huayu Enrichment Scholarship Program (HES) Recipient",
      location: "Taipei, Taiwan · 2026",
      description:
        "Awarded a Taiwan Government Ministry scholarship for a 3-month intensive Mandarin study program at National Taiwan Normal University (NTNU) in Taipei, Taiwan.",
      images: [taiwan1, taiwan2, taiwan3, taiwan4],
    },
    {
      title: "University Representative at Asia Summer Program (ASP)",
      location: "Surabaya, Indonesia · 2025",
      description:
        "Selected to represent Bangkok University in a 1-month international academic and cultural exchange hosted by Petra Christian University in Surabaya, Indonesia in partnership with several universities across Asia including Thailand, Indonesia, Japan, Korea, Malaysia, Philippines and India.",
      images: [indonesia1, indonesia2, indonesia3, indonesia4, indonesia5],
    },
    {
      title: "High School Cultural Exchange Program",
      location: "Ontario, Canada · 2018",
      description:
        "Attended a cultural exchange and immersion summer program focused on language fluency and cross-cultural communication.",
      images: [canada1, canada2, canada3, canada4],
    },
  ];

  return (
    <section
      id="activities"
      className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-blue-500/30 rounded-full filter blur-[100px] opacity-20 animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <animated.div
            ref={ref}
            style={titleSpring}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Activities & Certifications
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
          </animated.div>

          {/* Industry Related Activities */}
          <div className="mb-16">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                Industry Related Activities
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industryActivities.map((activity, index) => (
                <IndustryActivityCard
                  key={activity.title}
                  activity={activity}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* International Exchange & Activities */}
          <div className="mb-16">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                International Exchange & Activities
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {exchangeActivities.map((activity, index) => (
                <ExchangeActivityCard
                  key={activity.title}
                  activity={activity}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                Certifications
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            </div>
            <div
              className="relative"
              onMouseEnter={() => setIsCarouselPaused(true)}
              onMouseLeave={() => setIsCarouselPaused(false)}
              onTouchStart={() => setIsCarouselPaused(true)}
              onTouchEnd={() => setIsCarouselPaused(false)}
            >
              <button
                onClick={() => scrollCarousel(-1)}
                aria-label="Scroll left"
                className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-9 h-9 items-center justify-center rounded-full bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10 hover:border-blue-500/50 text-gray-600 dark:text-gray-300 hover:text-blue-400 shadow-lg transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div
                ref={carouselRef}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-hide"
              >
                {certifications.map((certification, index) => (
                  <CertificationCard
                    key={certification.title + index}
                    certification={certification}
                    index={index}
                  />
                ))}
              </div>
              <button
                onClick={() => scrollCarousel(1)}
                aria-label="Scroll right"
                className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-9 h-9 items-center justify-center rounded-full bg-white dark:bg-gray-900 border border-black/10 dark:border-white/10 hover:border-blue-500/50 text-gray-600 dark:text-gray-300 hover:text-blue-400 shadow-lg transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
