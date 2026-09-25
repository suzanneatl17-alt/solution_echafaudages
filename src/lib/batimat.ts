// Salon Batimat 2026 — contenu éphémère, à retirer après l'événement.
// La bannière d'accueil et la page dédiée disparaissent automatiquement
// dès qu'un nouveau build est généré après cette date (le site étant
// statique, la disparition n'est pas "en direct" : elle prend effet au
// prochain déploiement — voir .github/workflows/expire-batimat.yml).
export const batimatEventEnd = new Date('2026-10-02T00:00:00+02:00');

export function isBatimatLive(): boolean {
  return new Date() <= batimatEventEnd;
}
