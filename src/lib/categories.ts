export interface Category {
  slug: string;
  title: string;
  description: string;
}

export const categories: Category[] = [
  {
    slug: 'montant-dechafaudage',
    title: 'Montants et lisses',
    description:
      "Montants verticaux AFIXFAST et lisses de liaison : les éléments porteurs qui constituent l'ossature de l'échafaudage.",
  },
  {
    slug: 'garde-corps-mds',
    title: 'Garde-corps et protections',
    description:
      "Garde-corps de sécurité MDS pour façade et garde-corps intérieurs pour escaliers, installables dès les phases de montage.",
  },
  {
    slug: 'diagonale-dechafaudage',
    title: 'Diagonales d’échafaudage',
    description: "Éléments de contreventement qui assurent la stabilité et la rigidité de la structure.",
  },
  {
    slug: 'planchers',
    title: 'Planchers',
    description:
      'Planchers acier et planchers à trappe pour circuler et travailler en sécurité à chaque niveau.',
  },
  {
    slug: 'acces-circulation',
    title: 'Accès et circulation',
    description: "Escaliers en aluminium et poutres de franchissement pour circuler sur le chantier.",
  },
  {
    slug: 'embases-et-socles',
    title: 'Embases et socles',
    description: "Embases de départ et socles réglables (fixes, à rotule ou articulés) pour une implantation stable au sol.",
  },
  {
    slug: 'echafaudage-facade',
    title: 'Échafaudages de façade',
    description: "Configurations complètes AFIXFAST Série X37, prêtes à monter pour vos chantiers de façade.",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
