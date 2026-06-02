import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const missions = [
  {
    depth: '00M',
    title: 'Baptême découverte',
    text: 'Première immersion encadrée, idéale pour découvrir la respiration sous l’eau et les sensations de flottabilité.',
    details: 'Briefing · Matériel inclus · Encadrement privé',
    duration: '2h30',
    price: '95€',
  },
  {
    depth: '12M',
    title: 'Exploration récif',
    text: 'Sortie guidée pour observer les coraux, poissons et paysages sous-marins dans une zone calme.',
    details: 'Petit groupe · Photos incluses · Niveau débutant accepté',
    duration: 'Demi-journée',
    price: '145€',
  },
  {
    depth: '30M',
    title: 'Immersion profonde',
    text: 'Expérience avancée pour plongeurs certifiés, avec gestion de profondeur, orientation et exploration encadrée.',
    details: 'Certification requise · Briefing technique · Guide expert',
    duration: '1 journée',
    price: '220€',
  },
];

const gallery = [
  {
    img: '/plonge3.jpg',
    title: 'Méduses lumineuses',
    desc: 'Une rencontre silencieuse dans une eau bleue profonde.',
    tag: 'Observation',
  },
  {
    img: '/plonge2.jpg',
    title: 'Banc de poissons',
    desc: 'Des mouvements synchronisés, presque hypnotiques.',
    tag: 'Faune marine',
  },
  {
    img: '/plonge1.jpg',
    title: 'Jardin de coraux',
    desc: 'Couleurs, textures et reliefs au cœur du récif.',
    tag: 'Récif',
  },
  {
    img: '/plonge4.jpg',
    title: 'Descente guidée',
    desc: 'Un plongeur accompagné dans une zone calme et profonde.',
    tag: 'Exploration',
  },
];

const destinations = [
  {
    slug: 'merrouge',
    name: 'Mer Rouge',
    meta: 'Récifs · 40m',
    image: '/merouge.png',
  },
  {
    slug: 'maldives',
    name: 'Maldives',
    meta: 'Mantas · 30m',
    image: '/maldives.png',
  },
  {
    slug: 'galapagos',
    name: 'Galápagos',
    meta: 'Requins · 50m',
    image: '/galapagos.png',
  },
];

function Home({ setPage, setSelectedSpot, setReturnSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="deep-home">
      <button
        className={`deep-sidebar-toggle ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`deep-sidebar ${menuOpen ? 'active' : ''}`}>
        <a href="#top" onClick={() => setMenuOpen(false)}>Accueil</a>
        <a href="#missions" onClick={() => setMenuOpen(false)}>Missions</a>
        <a href="#gallery" onClick={() => setMenuOpen(false)}>Galerie</a>
        <a href="#spots" onClick={() => setMenuOpen(false)}>Spots</a>
        <a href="#reserve" onClick={() => setMenuOpen(false)}>Réserver</a>
      </div>

      <section id="top" className="deep-hero">
        <video className="deep-hero__video" autoPlay muted loop playsInline>
          <source src="/ocean.mp4" type="video/mp4" />
        </video>

        <div className="deep-hero__shade" />

        <motion.nav
          className="deep-nav"
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="deep-nav__brand">DEEP</span>
        </motion.nav>

        <motion.div
          className="deep-hero__left"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <p className="deep-kicker">Journal d’expédition</p>

          <h1>
            Sous la surface,<br />
            le monde ralentit.
          </h1>

          <p>
            Plongées privées, formations certifiées et explorations guidées
            dans des territoires marins d’exception.
          </p>
        </motion.div>

        <motion.div
          className="deep-logbook"
          initial={{ opacity: 0, x: 45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35, duration: 1 }}
        >
          <div className="deep-logbook__head">
            <span>Expédition 04</span>
            <span>Active</span>
          </div>

          <div className="deep-logbook__main">
            <p>Site</p>
            <h2>Mer Rouge</h2>
          </div>

          <div className="deep-logbook__data">
            <div>
              <span>Profondeur</span>
              <strong>-32m</strong>
            </div>
            <div>
              <span>Visibilité</span>
              <strong>Claire</strong>
            </div>
            <div>
              <span>Courant</span>
              <strong>Faible</strong>
            </div>
            <div>
              <span>Niveau</span>
              <strong>PADI</strong>
            </div>
          </div>

          <button
            className="deep-logbook__link"
            onClick={() => setPage('reservation')}
          >
            Réserver cette expérience
          </button>
        </motion.div>
      </section>

      <section id="missions" className="deep-missions">
        <div className="deep-section-head">
          <p className="deep-kicker">Parcours d’immersion</p>
          <h2>Chaque descente suit un rythme.</h2>
        </div>

        <div className="deep-depth-list">
          {missions.map((m, i) => (
            <motion.article
              key={m.depth}
              className="deep-depth-row"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <span className="deep-depth-row__depth">{m.depth}</span>
              <div className="deep-depth-row__line" />
              <div className="deep-depth-row__content">
  <div className="deep-depth-row__top">
    <h3>{m.title}</h3>
    <strong>{m.price}</strong>
  </div>

  <p>{m.text}</p>

  <div className="deep-depth-row__meta">
    <span>{m.details}</span>
    <span>{m.duration}</span>
  </div>
</div>
            </motion.article>
          ))}
        </div>
      </section>

      <div className="deep-divider">
        <span />
        <p>Signal stable · Descente continue</p>
      </div>

      <section id="gallery" className="deep-gallery">
        <div className="deep-gallery__text">
          <p className="deep-kicker">Journal visuel</p>
          <h2>Fragments d’immersion.</h2>
          <p>
            Méduses, poissons, coraux et silhouettes de plongeurs : chaque image
            capture une sensation différente sous la surface.
          </p>
        </div>

        <div className="deep-pinterest">
          {gallery.map((item, i) => (
            <motion.article
              key={item.title}
              className={`deep-pin deep-pin--${i + 1}`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <div className="deep-pin__img">
                <img src={item.img} alt={item.title} />
              </div>

              <div className="deep-pin__body">
                <span>{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <div className="deep-divider">
        <span />
        <p>Transmission visuelle · Profondeur active</p>
      </div>

      <section id="spots" className="deep-destinations">
        <div className="deep-section-head">
          <p className="deep-kicker">Coordonnées</p>
          <h2>Territoires d’exploration.</h2>
        </div>

        <div className="deep-destination-grid">
          {destinations.map((d, i) => (
            <motion.article
              key={d.name}
              className="deep-destination"
              onClick={() => {
  setSelectedSpot(d.slug);
  setReturnSection('spots');
  setPage('spot');
}}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <img src={d.image} alt={d.name} />

              <div className="deep-destination__overlay">
                <span>0{i + 1}</span>
                <h3>{d.name}</h3>
                <p>{d.meta}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <div className="deep-divider">
        <span />
        <p>Coordonnées verrouillées · Retour surface</p>
      </div>

      <section id="reserve" className="deep-reserve">
        <video className="deep-reserve__video" autoPlay muted loop playsInline>
          <source src="/underwater.mp4" type="video/mp4" />
        </video>

        <div className="deep-reserve__overlay" />

        <motion.div
          className="deep-reserve__card"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="deep-kicker">Prochaine plongée</p>

          <h2>Prêt à entrer dans le bleu ?</h2>

          <p>
            Réservez votre immersion privée et commencez votre prochaine
            exploration avec un instructeur certifié.
          </p>

          <button
            className="deep-btn deep-btn--filled"
            onClick={() => setPage('reservation')}
          >
            Réserver une plongée
          </button>
        </motion.div>
      </section>

      <footer className="deep-footer">
        <div>
          <p className="deep-kicker">Signal final</p>
          <h2>DEEP</h2>
          <p>
            Expéditions sous-marines privées, formations certifiées
            et explorations guidées.
          </p>
        </div>

        <div className="deep-footer__data">
          <span>Latitude · 43°17’N</span>
          <span>Longitude · 005°22’E</span>
          <span>Depth · Standby</span>
          <span>Signal · Stable</span>
        </div>

        <p className="deep-footer__copy">
          © 2026 Deep — Tous droits réservés
        </p>
      </footer>
    </main>
  );
}

export default Home;