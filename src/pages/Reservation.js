import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Reservation.css';

function Reservation({ setPage }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="reserve-page">
      <button className="reserve-back" onClick={() => setPage('home')}>
        ⟵
      </button>

      <video className="reserve-page__video" autoPlay muted loop playsInline>
        <source src="/underwater.mp4" type="video/mp4" />
      </video>

      <div className="reserve-page__overlay" />

      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.div
            key="form"
            className="reserve-card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30, filter: 'blur(8px)' }}
            transition={{ duration: 0.8 }}
          >
            <p className="reserve-kicker">Réservation privée</p>

            <h1>
              Entrer<br />
              dans le bleu
            </h1>

            <p className="reserve-text">
              Réservez votre prochaine immersion avec un instructeur certifié.
            </p>

            <form
              className="reserve-form"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="reserve-field">
                <label>Nom complet</label>
                <input type="text" placeholder="Votre nom" required />
              </div>

              <div className="reserve-field">
                <label>Email</label>
                <input type="email" placeholder="Votre email" required />
              </div>

              <div className="reserve-field">
                <label>Destination</label>
                <select>
                  <option>Mer Rouge</option>
                  <option>Maldives</option>
                  <option>Galápagos</option>
                </select>
              </div>

              <div className="reserve-field">
                <label>Niveau</label>
                <select>
                  <option>Débutant</option>
                  <option>Intermédiaire</option>
                  <option>Avancé</option>
                </select>
              </div>

              <div className="reserve-field">
                <label>Date souhaitée</label>
                <input type="date" required />
              </div>

              <button className="reserve-submit" type="submit">
                Confirmer l’immersion
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            className="reserve-card reserve-card--success"
            initial={{ opacity: 0, scale: 0.94, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="reserve-signal">
              <span />
              <span />
              <span />
            </div>

            <p className="reserve-kicker">Transmission reçue</p>

            <h1>
              Immersion<br />
              programmée
            </h1>

            <p className="reserve-text">
              Votre demande a bien été enregistrée. Un instructeur Deep vous
              contactera pour confirmer les détails de votre prochaine descente.
            </p>

            <div className="reserve-confirm-data">
              <span>Signal · Stable</span>
              <span>Status · Confirmé</span>
              <span>Depth · Standby</span>
            </div>

            <button
              className="reserve-submit"
              onClick={() => setPage('home')}
            >
              Retour à l’accueil
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default Reservation;