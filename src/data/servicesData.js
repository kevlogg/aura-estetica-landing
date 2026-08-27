export const SERVICES_DATA = [
  {
    id: 'faciales',
    title: 'Tratamientos Faciales Premium',
    subtitle: 'Rejuvenecimiento, Luminosidad & Glow Inmediato',
    badge: '⭐ TOP Meta Ads 2026',
    tagline: 'Limpia profundamente, estimula el colágeno y devuelve la vitalidad a tu rostro desde la 1ª sesión.',
    description: 'Protocolos dermocosméticos combinados con microagujas (Dermapen), higiene con espátula ultrasónica y mascarillas bio-inteligentes para un cutis radiante.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80',
    duration: '60 min',
    price: '$24.900',
    installments: '3 cuotas sin interés de $8.300',
    steps: [
      { number: '01', title: 'Diagnóstico Cosmiátrico', desc: 'Análisis de biotipo cutáneo e hidratación con luz de Wood.' },
      { number: '02', title: 'Higiene Ultrasónica + Peeling Soft', desc: 'Eliminación de impurezas, puntos negros y células muertas sin irritación.' },
      { number: '03', title: 'Infusión Bio-Activa & Fototerapia LED', desc: 'Penetración profunda de Ácido Hialurónico y suero regenerador con luz LED.' },
    ],
    benefits: [
      'Piel 100% visiblemente más luminosa e hidratada',
      'Atenúa poros dilatados y finas líneas de expresión',
      'Estimulación natural de colágeno y elastina',
      'Sin dolor ni tiempo de recuperación'
    ],
    treatments: [
      { id: 'facial-glow', name: 'Glow Facial & Dermapen Multavitamínico', price: '$24.900' },
      { id: 'facial-higiene', name: 'Higiene Profunda Ultrasónica + Alta Frecuencia', price: '$19.500' },
      { id: 'facial-lifting', name: 'Lifting Facial Sin Cirugía (Radiofrecuencia Tridimensional)', price: '$28.000' }
    ]
  },
  {
    id: 'depilacion',
    title: 'Depilación Definitiva Láser Soprano',
    subtitle: 'Piel Suave, Sin Vello y Libre de Foliculitis',
    badge: '🔥 50% OFF en Packs',
    tagline: 'Tecnología Trío de diodo, alejandrita y neodimio-yag. Efectiva en todo tipo de pieles durante todo el año.',
    description: 'Sistema cabezal ICE ultra refrigerado que congela el folículo piloso para sesiones 100% indoloras, rápidas y efectivas desde la primera sesión.',
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=1000&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&w=800&q=80',
    duration: '30 a 45 min',
    price: '$18.900',
    installments: '6 cuotas de $3.150',
    steps: [
      { number: '01', title: 'Evaluación del Fototipo Cutáneo', desc: 'Calibración personalizada de potencia y longitud de onda según piel.' },
      { number: '02', title: 'Aplicación Gel Conductor Frío', desc: 'Protección epidérmica para máxima comodidad durante el disparo.' },
      { number: '03', title: 'Barrido Láser Soprano ICE', desc: 'Pasadas rápidas e indoloras en la zona deseada con enfriamiento continuo.' },
    ],
    benefits: [
      'Elimina hasta el 95% del vello de forma definitiva',
      'Adiós foliculitis y encarnamiento de vello',
      'Tecnología segura para pieles bronceadas o sensibles',
      'Sesiones cada 30-45 días con resultados progresivos'
    ],
    treatments: [
      { id: 'depi-cuerpo-entero', name: 'Pack Cuerpo Entero (Piernas completas + Cavado + Axilas)', price: '$35.900' },
      { id: 'depi-combo-chico', name: 'Combo Zonas Médicas (Axilas + Bozo + Cavado Profundo)', price: '$18.900' },
      { id: 'depi-masculino', name: 'Depilación Láser Masculino (Espalda + Hombros + Pecho)', price: '$29.000' }
    ]
  },
  {
    id: 'corporales',
    title: 'Modelado Corporal & Reafirmante',
    subtitle: 'Reduce Medidas, Celulitis y Tonifica Tejidos',
    badge: '⚡ Velashape III + Criolipólisis',
    tagline: 'Combinación médica no invasiva para moldear tu silueta, destruir adiposidad localizada y reafirmar.',
    description: 'Protocolos combinados de Criolipólisis plana (sin succión dolorosa), Velashape III y Presoterapia Secuencial para drenar toxinas y combatir celulitis rebelde.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    duration: '60 min',
    price: '$26.500',
    installments: '3 cuotas sin interés de $8.833',
    steps: [
      { number: '01', title: 'Medición & Diagnóstico Antropométrico', desc: 'Evaluación del grado de celulitis y flacidez cutánea.' },
      { number: '02', title: 'Sesión Velashape III / Criolipólisis', desc: 'Infrarrojo, radiofrecuencia y masajes de vacío para disolver grasa.' },
      { number: '03', title: 'Drenaje Linfático Mecánico (Presoterapia)', desc: 'Botas neumáticas para eliminar toxinas y líquidos retenidos.' },
    ],
    benefits: [
      'Reducción comprobada de 2 a 5 cm por zona',
      'Mejora la textura "piel de naranja" drásticamente',
      'Reafirma abdomen, glúteos, flancos y piernas',
      'Activa la circulación venosa y linfática'
    ],
    treatments: [
      { id: 'corp-velashape', name: 'Velashape III Redactor & Anticelulítico (2 Zonas)', price: '$26.500' },
      { id: 'corp-crio', name: 'Criolipólisis Plana de Alta Gama (Reducción Adiposidad)', price: '$32.000' },
      { id: 'corp-preso', name: 'Presoterapia Secuencial + Electroestimulación (Tonificación)', price: '$21.000' }
    ]
  },
  {
    id: 'peeling',
    title: 'Peeling Médico & Renovación Celular',
    subtitle: 'Adiós Manchas, Marcas de Acné y Opacidad',
    badge: '✨ Ácidos de Nueva Generación',
    tagline: 'Renueva las capas superficiales de la piel para homogeneizar el tono y devolver la juventud cutánea.',
    description: 'Tratamiento a base de ácido glicólico, mandélico y salicílico para eliminar hiperpigmentación solar o melasma y mejorar la textura de la piel.',
    image: 'https://images.unsplash.com/photo-1512290900673-3e117a2fb5eb?auto=format&fit=crop&w=1000&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    duration: '45 min',
    price: '$22.000',
    installments: '3 cuotas sin interés de $7.333',
    steps: [
      { number: '01', title: 'Desengrasado & Preparación Cutánea', desc: 'Higienización profunda para permitir la penetración uniforme de ácidos.' },
      { number: '02', title: 'Aplicación de Ácido Específico', desc: 'Combinación química calibrada según el fototipo y nivel de pigmentación.' },
      { number: '03', title: 'Neutralización & Máscara Descongestiva', desc: 'Calma instantánea con manzanilla, aloe vera y pantalla solar SPF 50+.' },
    ],
    benefits: [
      'Atenúa manchas solares, melasma y pecas',
      'Suaviza marcas residuales de acné y textura irregular',
      'Aporta luminosidad y tono homogéneo al rostro',
      'Ideal para preparar la piel antes de eventos especiales'
    ],
    treatments: [
      { id: 'peeling-despigmentante', name: 'Peeling Despigmentante Antimanchas (Mandelico + Kójico)', price: '$22.000' },
      { id: 'peeling-acne', name: 'Peeling Purificante Control Acné & Rosácea', price: '$20.000' },
      { id: 'peeling-hollywood', name: 'Hollywood Peel Láser (Carbón Activado + Q-Switched)', price: '$31.000' }
    ]
  },
  {
    id: 'cejas',
    title: 'Cejas & Pestañas Design Studio',
    subtitle: 'Mirada Impactante, Definida y Natural',
    badge: '💖 Mirada Soñada 24/7',
    tagline: 'Lifting de pestañas con keratina, laminado de cejas y perfilado con tinte vegetal de alta duración.',
    description: 'Resalta tus rasgos naturales sin necesidad de maquillaje diario. Pestañas arqueadas y cejas peinadas y tupidas con nutrición profunda.',
    image: 'https://images.unsplash.com/photo-1583001809873-a1284a5da527?auto=format&fit=crop&w=1000&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1583001809873-a1284a5da527?auto=format&fit=crop&w=800&q=80',
    duration: '60 min',
    price: '$16.900',
    installments: '2 pagos de $8.450',
    steps: [
      { number: '01', title: 'Diseño según Visagismo Facial', desc: 'Medición matemática de tus facciones para diseñar la ceja perfecta.' },
      { number: '02', title: 'Lifting & Curvado con Silicona', desc: 'Arqueado natural de tus propias pestañas desde la raíz.' },
      { number: '03', title: 'Tinte Vegano + Botulinum Lash Nutritivo', desc: 'Oscurecimiento y nutrición con keratina y ácido hialurónico.' },
    ],
    benefits: [
      'Duración entre 6 a 8 semanas intactas',
      'Pestañas visiblemente más largas y tupidas',
      'Cejas ordenadas y rellenas de aspecto 100% natural',
      'Resistente al agua, gimnasio y piscina'
    ],
    treatments: [
      { id: 'eyelash-lifting', name: 'Combo Full: Lifting de Pestañas + Laminado de Cejas', price: '$22.500' },
      { id: 'eyelash-only-lifting', name: 'Lifting de Pestañas con Tinte & Nutrición Lash Plex', price: '$16.900' },
      { id: 'brow-microblading', name: 'Microblading / Microshading Pelo a Pelo (Semicompuesto)', price: '$45.000' }
    ]
  },
  {
    id: 'masajes',
    title: 'Masajes & Ritual Spa Holístico',
    subtitle: 'Relajación Profunda, Desconexión & Alivio Muscular',
    badge: '🌿 Experiencia Spa Boutique',
    tagline: 'Libera tensiones acumuladas en contracturas cervicales y lumbares en un ambiente aromático único.',
    description: 'Masajes descontracturantes, drenaje linfático manual y masajes con piedras volcánicas calientes acompañados de aromaterapia de lavanda y cuencos sonoros.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
    duration: '50 a 80 min',
    price: '$21.500',
    installments: '3 cuotas de $7.166',
    steps: [
      { number: '01', title: 'Aromaterapia & Bienvenida Relax', desc: 'Elección de aceite esencial (Lavanda, Eucalipto o Naranja dulce).' },
      { number: '02', title: 'Terapia Manual Descontracturante', desc: 'Presión firme y focalizada en zonas de estrés (Espalda, Cuello y Hombros).' },
      { number: '03', title: 'Calor Terapéutico con Piedras Calientes', desc: 'Termoterapia con basalto volcánico para liberar la rigidez muscular.' },
    ],
    benefits: [
      'Alivio inmediato del dolor y tensión cervical o lumbar',
      'Reduce significativamente el cortisol (estrés)',
      'Mejora la calidad del sueño y la energía vital',
      'Incluye infusión herbal orgánica al finalizar'
    ],
    treatments: [
      { id: 'massage-descontracturante', name: 'Masaje Descontracturante Espalda & Cuello (50 min)', price: '$21.500' },
      { id: 'massage-hot-stones', name: 'Ritual Spa Piedras Volcánicas + Aromaterapia (70 min)', price: '$27.000' },
      { id: 'massage-drenaje-manual', name: 'Drenaje Linfático Manual Post-Quirúrgico o Estético', price: '$23.000' }
    ]
  }
];

export const SPECIALISTS = [
  {
    id: 'valeria',
    name: 'Dra. Valeria Martínez',
    role: 'Médica Estética (MN 142.890)',
    experience: '12 años de experiencia',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80',
    specialties: ['Faciales Premium', 'Peeling Médico', 'Láser Soprano']
  },
  {
    id: 'sofia',
    name: 'Lic. Sofía González',
    role: 'Cosmiatra Superior & Dermatofuncional',
    experience: '8 años de experiencia',
    image: 'https://images.unsplash.com/photo-1594824813566-788536790146?auto=format&fit=crop&w=400&q=80',
    specialties: ['Glow Facial', 'Diseño de Cejas', 'Depilación Definitiva']
  },
  {
    id: 'camila',
    name: 'Lic. Camila Rossi',
    role: 'Kinesióloga Dermatofuncional',
    experience: '10 años de experiencia',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&q=80',
    specialties: ['Modelado Corporal', 'Presoterapia', 'Masajes Spa']
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Mariana Gomez',
    treatment: 'Tratamiento Glow Facial + Dermapen',
    rating: 5,
    date: 'Hace 3 días',
    comment: '¡Mi piel quedó literalmente brillante e hidratada! Venía sufriendo por manchas del sol y después de la 2da sesión la diferencia es impresionante. El lugar es hermoso y la atención de la Dra. Valeria un 10.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    verified: true,
    tag: 'Meta Ads Instagram Traffic'
  },
  {
    id: 2,
    name: 'Carolina Fernández',
    treatment: 'Depilación Definitiva Láser Soprano',
    rating: 5,
    date: 'Hace 1 semana',
    comment: 'Superó mis expectativas. Es verdaderamente INDOLORO. Había probado en otros centros y me dolía un montón, pero la máquina de AURA es un viaje de ida. El sistema de agendamiento online por WhatsApp es súper rápido.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    verified: true,
    tag: 'Meta Ads Facebook Traffic'
  },
  {
    id: 3,
    name: 'Lucía Benítez',
    treatment: 'Modelado Corporal Velashape III',
    rating: 5,
    date: 'Hace 2 semanas',
    comment: 'Reduje 3 cm en abdomen en 4 sesiones y la celulitis en glúteos mejoró un 80%. Las chicas son súper profesionales y las instalaciones parecen de un hotel 5 estrellas en Palermo.',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
    verified: true,
    tag: 'Cliente Frecuente'
  }
];

export const FAQS = [
  {
    question: '¿Cómo funciona el agendamiento online de turnos?',
    answer: 'Es muy sencillo: seleccionas la categoría de tratamiento, eliges el día y horario que mejor te convenga y completas tus datos. Al confirmar, tu turno se bloquea automáticamente en nuestro sistema y recibirás una confirmación instantánea en tu WhatsApp con todos los detalles.'
  },
  {
    question: '¿Cuáles son los medios de pago disponibles?',
    answer: 'Aceptamos Tarjetas de Crédito y Débito (hasta 3 y 6 cuotas sin interés según la promo vigente), Mercado Pago, Transferencia bancaria y pago en efectivo al momento de asistir a tu sesión.'
  },
  {
    question: '¿Necesito una consulta previa antes de mi primera sesión?',
    answer: 'Todas nuestras sesiones incluyen una breve evaluación cosmiátrica/dermatológica previa sin costo adicional al inicio del turno, donde evaluamos tu tipo de piel para calibrar la aparatología o los productos a utilizar.'
  },
  {
    question: '¿Qué política tienen ante reprogramación o cancelación de turnos?',
    answer: 'Entendemos los imprevistos. Puedes reprogramar tu turno de forma 100% gratuita avisando con al menos 24 horas de anticipación desde el mismo chat de WhatsApp.'
  },
  {
    question: '¿La depilación láser Soprano realmente no duele?',
    answer: 'Así es. Utilizamos la tecnología Soprano ICE original de Alma Lasers. Su sistema de cabezal frío a -3°C amortigua la sensación de calor, logrando un tratamiento totalmente indoloro y placentero.'
  }
];
