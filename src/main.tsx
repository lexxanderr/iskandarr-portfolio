import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { ArrowUpRight, Github, Mail, Download, Code2, Database, ShieldCheck, Boxes, Linkedin, Sun, Moon } from 'lucide-react'
import './styles.css'

const projects = [
  {
    index: '01',
    title: 'RotaLand',
    kicker: 'Workforce scheduling & shift operations',
    description: 'A full-stack workforce scheduling platform evolved from a postgraduate scheduling concept inspired by real retail operations. Built around department-level rota management, employee workflows, time-off requests and controlled rota publishing, with scheduling intelligence and a staff portal currently in development.',
    stack: ['C#', 'ASP.NET Core', 'React', 'TypeScript', 'PostgreSQL', 'EF Core'],
    live: 'https://rotaland.vercel.app',
    repo: 'https://github.com/lexxanderr/rotaland',
    status: 'ACTIVE DEVELOPMENT',
    icon: Boxes,
  },
  {
    index: '02',
    title: 'ReleaseGuardian',
    kicker: 'Compliance & release control platform',
    description: 'A production-style full-stack platform for controlled releases, role-based review, evidence verification and tamper-evident audit history. Features responsive case workflows, approval controls and a polished light/dark interface.',
    stack: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'Prisma', 'REST APIs'],
    live: 'https://releaseguardian.vercel.app',
    repo: 'https://github.com/lexxanderr/releaseguardian',
    status: 'LIVE',
    icon: ShieldCheck,
  },
  {
    index: '03',
    title: 'ServiceFlow',
    kicker: 'Business operations platform',
    description: 'A .NET-first job and service management system for customers, work orders, assignments, status workflows and audit history. Currently being built as a production-style portfolio project.',
    stack: ['C#', 'ASP.NET Core', 'EF Core', 'SQL Server', 'React', 'Docker'],
    live: '#contact',
    repo: 'https://github.com/lexxanderr',
    status: 'BUILDING',
    icon: Boxes,
  },
]

const skills = [
  ['Backend', 'C# / .NET · Node.js / NestJS · REST APIs'],
  ['Frontend', 'React · TypeScript · JavaScript · HTML / CSS'],
  ['Data', 'SQL · PostgreSQL · Prisma · Database design'],
  ['Delivery', 'Git · Docker · Vercel · Render · AWS / Azure exposure']
]

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('portfolio-theme')
    if (saved === 'light' || saved === 'dark') return saved
    return 'dark'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(current => current === 'dark' ? 'light' : 'dark')
  }

  return <div className="app">
    <header className="nav wrap">
      <a className="brand" href="#top">AI<span>.</span></a>
      <nav aria-label="Primary navigation">
        <a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a>
      </nav>
      <div className="nav-actions">
        <button
          className="theme-toggle"
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          title={`${theme === 'dark' ? 'Light' : 'Dark'} mode`}
        >
          {theme === 'dark' ? <Sun size={17}/> : <Moon size={17}/>}
        </button>
        <a className="nav-cta" href="mailto:alexanderr.iskandarr@gmail.com">Let's talk <ArrowUpRight size={16}/></a>
      </div>
    </header>

    <main id="top">
      <section className="hero wrap">
        <div className="eyebrow"><span></span> AVAILABLE FOR SOFTWARE OPPORTUNITIES</div>
        <h1>I build software that<br/><em>solves real problems.</em></h1>
        <p className="hero-copy">I'm <strong>Alexander Iskandar</strong>, a software developer focused on practical full-stack products, secure APIs and data-driven systems.</p>
        <div className="actions">
          <a className="primary" href="#work">Explore my work <ArrowUpRight size={18}/></a>
          <a className="secondary" href="https://github.com/lexxanderr" target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a>
        </div>
        <div className="hero-meta">
          <div><small>CORE</small><b>C# · .NET · TypeScript · React · SQL</b></div>
          <div><small>BASED</small><b>United Kingdom</b></div>
          <div><small>FOCUS</small><b>Full-stack & business software</b></div>
        </div>
      </section>

      <section id="work" className="section wrap">
        <div className="section-head">
          <div><span className="num">01 /</span><h2>Selected work</h2></div>
          <p>Products built around real workflows, technical decisions and measurable outcomes — not tutorial clones.</p>
        </div>
        <div className="projects">
          {projects.map((p, i) => {
            const Icon = p.icon
            return <article className="project" key={p.title}>
              <div className="project-visual">
                <div className="visual-top"><span>{p.index}</span><span className={`status ${p.status === 'LIVE' ? 'live':''}`}>{p.status}</span></div>
                <Icon className="visual-icon" strokeWidth={1.2}/>
                <div className="visual-grid"></div>
              </div>
              <div className="project-body">
                <p className="kicker">{p.kicker}</p>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="tags">{p.stack.map(x => <span key={x}>{x}</span>)}</div>
                <div className="project-links">
                  <a href={p.repo} target="_blank" rel="noreferrer"><Github size={16}/> Source</a>
                  <a href={p.live} target={p.live.startsWith('http') ? '_blank' : undefined} rel="noreferrer">View project <ArrowUpRight size={16}/></a>
                </div>
              </div>
            </article>
          })}
        </div>
      </section>

      <section id="about" className="section about wrap">
        <div className="section-head">
          <div><span className="num">02 /</span><h2>Engineer, not just coder.</h2></div>
        </div>
        <div className="about-grid">
          <div className="about-copy">
            <p className="lead">I like understanding the process behind a problem before reaching for the framework.</p>
            <p>My background combines postgraduate computer science with hands-on operational problem solving. That perspective shapes how I build: understand the workflow, model the data clearly, keep the interface useful and make the system maintainable.</p>
            <p>I hold an MSc in Computer Science and a Bachelor of ICT - Software Major, and I'm now focused on moving fully into commercial software engineering.</p>
          </div>
          <div className="skill-list">
            {skills.map(([name, detail], i) => <div className="skill" key={name}><span>0{i+1}</span><div><b>{name}</b><p>{detail}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="section proof wrap">
        <div className="section-head">
          <div><span className="num">03 /</span><h2>How I work</h2></div>
        </div>
        <div className="principles">
          <div><Code2/><b>Build with intent</b><p>Start from the user and workflow, then choose the architecture.</p></div>
          <div><ShieldCheck/><b>Think beyond happy paths</b><p>Validation, roles, auditability and failure states are part of the product.</p></div>
          <div><Database/><b>Own the data</b><p>Clear models, useful APIs and deliberate database decisions.</p></div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="wrap contact-inner">
          <p className="kicker">LET'S BUILD SOMETHING USEFUL</p>
          <h2>Looking for a developer<br/>who gives a damn?</h2>
          <p>I'm open to software development opportunities and conversations with teams building useful products.</p>
          <a className="contact-email" href="mailto:alexanderr.iskandarr@gmail.com">alexanderr.iskandarr@gmail.com <ArrowUpRight/></a>
          <div className="socials">
            <a href="https://github.com/lexxanderr" target="_blank" rel="noreferrer"><Github/> GitHub</a>
            <a href="https://www.linkedin.com/in/lexxanderr" target="_blank" rel="noreferrer"><Linkedin/> LinkedIn</a>
          </div>
        </div>
      </section>
    </main>
    <footer className="wrap"><span>© 2026 Alexander Iskandar</span><span>Designed & built with intent.</span></footer>
  </div>
}

ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>)
