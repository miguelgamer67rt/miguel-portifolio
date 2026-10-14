import { site, tools, video, contact } from "./config/site.js";
import ToolIcon from "./components/ToolIcons.jsx";
import VideoPlayer from "./components/VideoPlayer.jsx";

const nav = [
  ["ferramentas", "Ferramentas"],
  ["trabalho", "Trabalho"],
  ["sobre", "Sobre"],
  ["contato", "Contato"],
];

const contactLinks = [
  contact.email && { label: "E-mail", text: contact.email, href: `mailto:${contact.email}` },
  contact.whatsapp && { label: "WhatsApp", text: contact.whatsappDisplay || contact.whatsapp, href: `https://wa.me/${contact.whatsapp}` },
  contact.instagram && { label: "Instagram", text: `@${contact.instagram}`, href: `https://instagram.com/${contact.instagram}` },
].filter(Boolean);

export default function App() {
  return (
    <>
      <header className="header">
        <a href="#inicio" className="header__brand">{site.name}</a>
        <nav aria-label="Principal">
          {nav.map(([id, label]) => (
            <a key={id} href={`#${id}`}>{label}</a>
          ))}
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero">
          <p className="label">{site.role}</p>
          <h1>{site.name}</h1>
          <p className="hero__tagline">{site.tagline}</p>
          <p className="hero__intro">{site.intro}</p>
          <div className="actions">
            <a className="btn btn--solid" href="#trabalho">Ver meu trabalho</a>
            <a className="btn" href="#contato">Entrar em contato</a>
          </div>
        </section>

        <section id="ferramentas" className="section">
          <h2>Softwares de edição</h2>
          <ul className="tools">
            {tools.map((t) => (
              <li key={t.name} className="tool">
                <ToolIcon tool={t} />
                <span className="label">{t.name}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="trabalho" className="section">
          <h2>Meu trabalho</h2>
          <VideoPlayer video={video} />
          <p className="caption">
            <span className="label">{video.title}</span>
            {video.description && <span>{video.description}</span>}
          </p>
        </section>

        <section id="sobre" className="section about">
          <h2>Sobre mim</h2>
          <div className="about__body">
            {site.about.map((p) => <p key={p}>{p}</p>)}
            <dl className="facts">
              {site.facts.map((f) => (
                <div key={f.label}>
                  <dt className="label">{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
            <ul className="formats">
              {site.formats.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </div>
        </section>

        <section id="contato" className="section contact">
          <h2>Vamos trabalhar juntos?</h2>
          <ul className="contact__list">
            {contactLinks.map((c) => (
              <li key={c.label}>
                <span className="label">{c.label}</span>
                <a href={c.href} target={c.label === "E-mail" ? undefined : "_blank"} rel="noopener noreferrer">{c.text}</a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span className="label">{site.role}</span>
      </footer>
    </>
  );
}
