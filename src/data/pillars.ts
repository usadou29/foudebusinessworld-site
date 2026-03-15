export interface PillarData {
    id: string;
    title: string;
    description: string;
    icon: string;
    points: string[];
}

export const PILLARS: PillarData[] = [
    {
        id: 'training',
        title: 'Formation en ligne',
        description: 'Des programmes modulaires par pays et par thématique. Contenus pédagogiques clairs, structurés et progressifs.',
        icon: '🎓',
        points: [
            'Modules vidéo & Supports',
            'Parcours guidés',
            'Mises à jour régulières'
        ]
    },
    {
        id: 'strategy',
        title: 'Accompagnement Stratégique',
        description: 'Du conseil personnalisé pour choisir votre juridiction et structurer votre business model (Holding, E-com).',
        icon: '♟️',
        points: [
            'Choix du pays',
            'Structuration Juridique',
            'Optimisation Fiscale'
        ]
    },
    {
        id: 'premium',
        title: 'Offres Premium Terrain',
        description: 'Une présence physique et un réseau solide pour accélérer vos résultats sur place (Chine, Dubaï, Géorgie).',
        icon: '🤝',
        points: [
            'Mise en relation partenaires',
            'Accompagnement Foire de Canton',
            'Ouverture compte bancaire sur place'
        ]
    }
];
