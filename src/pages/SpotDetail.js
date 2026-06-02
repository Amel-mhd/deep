import React from 'react';
import { motion } from 'framer-motion';
import './SpotDetail.css';

const spotData = {
  merrouge: {
    name: 'Mer Rouge',
    location: 'Égypte',
    depth: '40m',
    level: 'Intermédiaire',
    visibility: 'Excellente',
    hero: '/merrouge.png',
    text: "Un spot mythique pour explorer des récifs colorés, des tombants profonds et une vie marine dense dans une eau claire.",
    photos: ['/Red Sea.jpeg', '/Egypt.jpeg', '/Red Sea _ Egypt.jpeg'],
  },
  maldives: {
    name: 'Maldives',
    location: 'Océan Indien',
    depth: '30m',
    level: 'Tous niveaux',
    visibility: 'Claire',
    hero: '/maldives.png',
    text: "Lagons turquoise, raies manta et plongées douces dans un décor presque irréel. Idéal pour une immersion premium.",
    photos: ['/Maldives.jpeg', '/_ (1).jpeg', '/Maldives3.jpeg'],
  },
  galapagos: {
    name: 'Galápagos',
    location: 'Équateur',
    depth: '50m',
    level: 'Avancé',
    visibility: 'Variable',
    hero: '/galapagos.png',
    text: "Une destination intense et sauvage, connue pour ses requins, ses courants puissants et ses plongées d’exception.",
    photos: ['/Galapagos.jpeg','/Master the Galapagos - 7 nights.jpeg','/_.jpeg'],
  },
};

function SpotDetail({ spot, setPage, returnSection }) {
  const data = spotData[spot];

  if (!data) return null;

  return (
    <main className="spot-page">
      <button
        className="spot-back"
        onClick={() => {
          setPage('home');

          setTimeout(() => {
            const section = document.getElementById(returnSection);

            if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
            }
          }, 120);
        }}
      >
        ⟵
      </button>

      <section className="spot-hero">
        <img src={data.hero} alt={data.name} />
        <div className="spot-hero__overlay" />

        <motion.div
          className="spot-hero__content"
          initial={{ opacity: 0, y: 42 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="spot-kicker">Spot de plongée</p>
          <h1>{data.name}</h1>
          <span>{data.location}</span>
        </motion.div>
      </section>

      <section className="spot-info">
        <div className="spot-info__text">
          <p className="spot-kicker">Exploration</p>
          <h2>Une descente dans un territoire vivant.</h2>
          <p>{data.text}</p>
        </div>

        <div className="spot-data">
          <div>
            <span>Profondeur</span>
            <strong>{data.depth}</strong>
          </div>
          <div>
            <span>Niveau</span>
            <strong>{data.level}</strong>
          </div>
          <div>
            <span>Visibilité</span>
            <strong>{data.visibility}</strong>
          </div>
        </div>
      </section>

      <section className="spot-gallery">
        {data.photos.map((photo, i) => (
          <motion.img
            key={photo}
            src={photo}
            alt={`${data.name} ${i + 1}`}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
          />
        ))}
      </section>

      <section className="spot-cta">
        <h2>Prête à explorer {data.name} ?</h2>

        <button onClick={() => setPage('reservation')}>
          Réserver cette plongée
        </button>
      </section>
    </main>
  );
}

export default SpotDetail;