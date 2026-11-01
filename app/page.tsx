"use client";

import { useState } from "react";

type Language = "en" | "de";

const copy = {
  en: {
    nav: ["About", "Experience", "Work", "Skills"],
    availability: "Open to relocation in Germany",
    eyebrow: "AI engineer · software developer",
    title: "I build thoughtful software for a more intelligent world.",
    intro:
      "I’m Syeda Zobia — an AI master’s student and software engineer blending product thinking with practical machine learning.",
    viewWork: "Explore my work",
    cv: "Download CV",
    scroll: "Scroll to explore",
    aboutLabel: "01 — Profile",
    aboutTitle: "Curious by nature. Precise by craft.",
    aboutText:
      "My work sits at the intersection of intelligent systems and human-friendly software. I enjoy taking a fuzzy problem, finding the useful signal, and shaping it into a product people can trust.",
    aboutText2:
      "Currently studying Artificial Intelligence at the University of Bologna, with an Erasmus exchange at Bielefeld University. I’m especially interested in applied AI, NLP, RAG, and reliable software systems.",
    education: "Education",
    educationItems: [
      ["2025 — now", "M.Sc. Artificial Intelligence", "University of Bologna · Italy"],
      ["2026 — 2027", "Erasmus exchange", "Bielefeld University · Germany"],
      ["2020 — 2024", "B.E. Computer Systems Engineering", "NED University · Pakistan"],
    ],
    expLabel: "02 — Experience",
    expTitle: "Shipping software with\\nclarity and care.",
    companies: [
      { date: "Feb 2025 — Oct 2025", role: "Software Engineer", company: "Techlogix", text: "Contributed to application development and maintenance using .NET and Angular, collaborating closely with the engineering team on features and implementation." },
      { date: "Aug 2024 — Feb 2025", role: "Software Engineer", company: "Data Science Dojo", text: "Supported a SaaS frontend migration from React to Next.js and developed workflows across Next.js, Angular, and .NET. Participated in UAT, bug bashes, and regression testing." },
    ],
    workLabel: "03 — Selected work",
    workTitle: "Technology with a\\nreason to exist.",
    projectName: "ServiceSwift",
    projectType: "RAG customer support assistant",
    projectText:
      "A document-grounded chatbot framework designed for OEM websites and 24/7 support. ServiceSwift uses Python, Azure services, and MongoDB to answer questions from product and support documentation.",
    projectMeta: "Final-year project · Empiric Technology, Canada",
    skillsLabel: "04 — Toolkit",
    skillsTitle: "The tools I reach for.",
    skills: [
      ["01", "Programming", "Python · C# · SQL · OOP · Data structures"],
      ["02", "AI & Cloud", "Machine learning · RAG · Microsoft Azure"],
      ["03", "Software", "Angular · React · Next.js · .NET · Testing"],
      ["04", "Data & design", "MySQL · MongoDB · SQL Server · Figma"],
    ],
    contactLabel: "Let’s build something useful.",
    contactText: "Have a problem worth solving? I’d love to hear about it.",
    email: "Email me",
    linkedin: "LinkedIn",
    footer: "Designed & built with curiosity · Bielefeld / Bologna",
  },
  de: {
    nav: ["Über mich", "Erfahrung", "Projekte", "Skills"],
    availability: "Offen für einen Umzug nach Deutschland",
    eyebrow: "KI-Ingenieurin · Softwareentwicklerin",
    title: "Ich entwickle durchdachte Software für eine intelligentere Welt.",
    intro:
      "Ich bin Syeda Zobia — KI-Masterstudentin und Softwareentwicklerin. Ich verbinde Produktdenken mit praxisnaher künstlicher Intelligenz.",
    viewWork: "Meine Projekte",
    cv: "Lebenslauf öffnen",
    scroll: "Scrollen zum Entdecken",
    aboutLabel: "01 — Profil",
    aboutTitle: "Neugierig im Denken. Präzise im Handwerk.",
    aboutText:
      "Meine Arbeit verbindet intelligente Systeme mit Software, die Menschen gerne nutzen. Ich nehme komplexe Fragen auseinander und forme daraus Produkte, denen man vertrauen kann.",
    aboutText2:
      "Derzeit studiere ich Künstliche Intelligenz an der Universität Bologna und absolviere ein Erasmus-Semester an der Universität Bielefeld. Besonders interessieren mich angewandte KI, NLP, RAG und zuverlässige Softwaresysteme.",
    education: "Ausbildung",
    educationItems: [
      ["2025 — heute", "M.Sc. Künstliche Intelligenz", "Universität Bologna · Italien"],
      ["2026 — 2027", "Erasmus-Austausch", "Universität Bielefeld · Deutschland"],
      ["2020 — 2024", "B.E. Computer Systems Engineering", "NED University · Pakistan"],
    ],
    expLabel: "02 — Erfahrung",
    expTitle: "Software mit Klarheit\\nund Sorgfalt entwickeln.",
    companies: [
      { date: "Feb 2025 — Okt 2025", role: "Software Engineer", company: "Techlogix", text: "Mitarbeit an der Entwicklung und Wartung von Anwendungen mit .NET und Angular sowie enge Zusammenarbeit im Engineering-Team." },
      { date: "Aug 2024 — Feb 2025", role: "Software Engineer", company: "Data Science Dojo", text: "Unterstützung bei der Migration eines SaaS-Frontends von React zu Next.js. Entwicklung von Workflows mit Next.js, Angular und .NET sowie UAT und Regressionstests." },
    ],
    workLabel: "03 — Ausgewähltes Projekt",
    workTitle: "Technologie mit einem\\nguten Grund.",
    projectName: "ServiceSwift",
    projectType: "RAG-Kundensupport-Assistent",
    projectText:
      "Ein dokumentengestütztes Chatbot-Framework für OEM-Websites und Support rund um die Uhr. ServiceSwift nutzt Python, Azure-Dienste und MongoDB, um Fragen aus Produkt- und Support-Dokumenten zu beantworten.",
    projectMeta: "Abschlussprojekt · Empiric Technology, Kanada",
    skillsLabel: "04 — Werkzeugkasten",
    skillsTitle: "Meine wichtigsten Werkzeuge.",
    skills: [
      ["01", "Programmierung", "Python · C# · SQL · OOP · Datenstrukturen"],
      ["02", "KI & Cloud", "Machine Learning · RAG · Microsoft Azure"],
      ["03", "Software", "Angular · React · Next.js · .NET · Testing"],
      ["04", "Daten & Design", "MySQL · MongoDB · SQL Server · Figma"],
    ],
    contactLabel: "Lass uns etwas Nützliches bauen.",
    contactText: "Du hast ein Problem, das gelöst werden möchte? Schreib mir gerne.",
    email: "E-Mail schreiben",
    linkedin: "LinkedIn",
    footer: "Mit Neugier gestaltet und entwickelt · Bielefeld / Bologna",
  },
} as const;

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const t = copy[language];

  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Syeda Zobia home"><span>z.</span>IRSHAD</a>
        <div className="nav-links">
          {t.nav.map((item, i) => <a key={item} href={["#about", "#experience", "#work", "#skills"][i]}>{item}</a>)}
        </div>
        <div className="nav-actions">
          <span className="status-dot" aria-hidden="true" />
          <span className="availability">{t.availability}</span>
          <div className="lang-switch" aria-label="Language selector">
            <button className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")}>EN</button>
            <span>/</span>
            <button className={language === "de" ? "active" : ""} onClick={() => setLanguage("de")}>DE</button>
          </div>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" />{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p className="hero-intro">{t.intro}</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">{t.viewWork}<span>↘</span></a>
            <a className="text-link" href="/Zobia_Irshad_Enhanced_CV_Germany.pdf" target="_blank">{t.cv}<span>↗</span></a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-core"><span>AI</span><small>01</small></div>
          <span className="art-label label-top">/ INTELLIGENT<br />SYSTEMS</span>
          <span className="art-label label-bottom">BUILDING WITH<br /><i>INTENTION</i></span>
          <span className="art-plus">+</span><span className="art-star">✳</span>
        </div>
        <div className="hero-foot"><span>01 / 04</span><span className="scroll-hint">↓ &nbsp; {t.scroll}</span><span>© 2026</span></div>
      </section>

      <section className="section shell about-grid" id="about">
        <div className="section-label">{t.aboutLabel}</div>
        <div className="section-content">
          <h2>{t.aboutTitle}</h2>
          <div className="two-col-copy"><p>{t.aboutText}</p><p>{t.aboutText2}</p></div>
          <div className="education"><h3>{t.education}</h3><div className="education-list">{t.educationItems.map(([year, title, place]) => <div className="education-item" key={title}><span className="muted">{year}</span><div><strong>{title}</strong><span>{place}</span></div></div>)}</div></div>
        </div>
      </section>

      <section className="section section-tint" id="experience"><div className="shell experience-grid"><div className="section-label">{t.expLabel}</div><div className="section-content"><h2 className="pre-line">{t.expTitle}</h2><div className="experience-list">{t.companies.map((item) => <article className="experience-item" key={item.company}><div className="experience-date">{item.date}</div><div><p className="role">{item.role} <span>↗</span></p><h3>{item.company}</h3><p className="body-copy">{item.text}</p></div></article>)}</div></div></div></section>

      <section className="section shell" id="work"><div className="section-label">{t.workLabel}</div><div className="section-content"><h2 className="pre-line">{t.workTitle}</h2><article className="project-card"><div className="project-visual"><div className="project-grid" /><div className="project-screen"><div className="screen-top"><span>ServiceSwift</span><span>● ● ●</span></div><div className="screen-line wide" /><div className="screen-line" /><div className="screen-line short" /><div className="screen-bubble">How can I help you today?</div></div><span className="project-number">AI / 01</span></div><div className="project-info"><p className="eyebrow">{t.projectType}</p><h3>{t.projectName}</h3><p>{t.projectText}</p><div className="project-meta"><span>{t.projectMeta}</span><span className="project-arrow">↗</span></div></div></article></div></section>

      <section className="section section-dark" id="skills"><div className="shell skills-grid"><div className="section-label">{t.skillsLabel}</div><div className="section-content"><h2>{t.skillsTitle}</h2><div className="skills-list">{t.skills.map(([number, title, list]) => <div className="skill-row" key={title}><span className="skill-number">{number}</span><h3>{title}</h3><p>{list}</p></div>)}</div></div></div></section>

      <footer className="footer shell"><div><p className="eyebrow">{t.contactLabel}</p><h2>{t.contactText}</h2><div className="footer-actions"><a className="button button-light" href="mailto:syedazobiairshad@gmail.com">{t.email}<span>↗</span></a><a className="text-link light-link" href="https://www.linkedin.com/in/syeda-zobia-i-230556214" target="_blank">{t.linkedin}<span>↗</span></a></div></div><div className="footer-bottom"><span>{t.footer}</span><span>© 2026 ZI</span></div></footer>
    </main>
  );
}
