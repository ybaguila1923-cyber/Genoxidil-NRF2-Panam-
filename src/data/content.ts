export interface Product {
  id: string;
  name: string;
  subtitle: string;
  bottles: number;
  tablets: number;
  regularPrice: number;
  salePrice: number;
  savings: number;
  badge?: string;
  isPopular?: boolean;
  description: string;
  image: string;
  features: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: "genoxidil-1-pack",
    name: "Genoxidil 1 Pack",
    subtitle: "Iniciación y Cuidado Diario",
    bottles: 1,
    tablets: 30,
    regularPrice: 78.57,
    salePrice: 75.0,
    savings: 3.57,
    description: "Cuida tu bienestar cada día con 1 frasco de Genoxidil NRF2 (30 tabletas de 1200 mg c/u). Fórmula con más de 52 fitonutrientes bioasimilables para activar la proteína Nrf2.",
    image: "/src/assets/images/genoxidil_bottle_pack_1791002536511.jpg",
    features: [
      "1 Frasco (30 tabletas de 1200 mg)",
      "Suministro para 1 mes (1 tableta diaria)",
      "Activación celular de la vía NRF2",
      "52+ Ingredientes naturales orgánicos",
      "Envío a todo Panamá y sedes internacionales"
    ]
  },
  {
    id: "genoxidil-2-pack",
    name: "Genoxidil 2 Pack",
    subtitle: "Tratamiento Bimestral Recomendado",
    bottles: 2,
    tablets: 60,
    regularPrice: 157.14,
    salePrice: 150.0,
    savings: 7.14,
    badge: "Más Vendido",
    isPopular: true,
    description: "Lleva tu rutina de bienestar al siguiente nivel con 2 frascos de Genoxidil NRF2. Ideal para consolidar la respuesta antioxidante y desintoxicación celular.",
    image: "/src/assets/images/genoxidil_bottle_pack_1791002536511.jpg",
    features: [
      "2 Frascos (60 tabletas en total)",
      "Suministro para 2 meses",
      "Regeneración y refuerzo a los 5 sistemas",
      "Asesoría nutricional de acompañamiento",
      "Ahorro inmediato sobre precio regular"
    ]
  },
  {
    id: "genoxidil-5-pack",
    name: "Genoxidil 5 Pack",
    subtitle: "Paquete Familiar o Tratamiento Completo",
    bottles: 5,
    tablets: 150,
    regularPrice: 321.42,
    salePrice: 232.88,
    savings: 88.54,
    badge: "Mayor Ahorro (27% OFF)",
    description: "El paquete con la mejor relación costo-beneficio. 5 frascos de Genoxidil NRF2 para compartir en familia o asegurar tu protocolo de regeneración celular prolongado.",
    image: "/src/assets/images/genoxidil_bottle_pack_1791002536511.jpg",
    features: [
      "5 Frascos (150 tabletas en total)",
      "Ahorro extraordinario de $88.54 USD",
      "Suministro familiar o para 5 meses",
      "Prioridad en despacho logístico",
      "Certificado de autenticidad de laboratorio"
    ]
  }
];

export interface SystemDetail {
  id: string;
  name: string;
  subtitle: string;
  iconName: string;
  description: string;
  keyIngredients: string[];
  benefits: string[];
}

export const FIVE_SYSTEMS: SystemDetail[] = [
  {
    id: "antiedad",
    name: "Sistema Antiedad",
    subtitle: "Activación NRF2 y Longevidad",
    iconName: "Clock",
    description: "Favorece la transcripción de genes protectores que retardan el envejecimiento celular prematuro y protegen el ADN mitocondrial.",
    keyIngredients: ["Resveratrol", "Cúrcuma", "Té Verde", "Astaxantina"],
    benefits: [
      "Estimula enzimas antienvejecimiento como las sirtuinas",
      "Mejora la elasticidad celular y revitaliza tejidos",
      "Ayuda a contrarrestar el desgaste oxidativo por la edad"
    ]
  },
  {
    id: "antioxidante",
    name: "Sistema Antioxidante",
    subtitle: "Neutralización Radical",
    iconName: "ShieldAlert",
    description: "Activa los antioxidantes endógenos maestros (Glutatión, Superóxido Dismutasa y Catalasa), miles de veces más potentes que los antioxidantes ingeridos.",
    keyIngredients: ["Glutatión", "Semilla de Uva", "Licopeno", "Mangostán"],
    benefits: [
      "Combate el estrés oxidativo a nivel celular",
      "Protege membranas celulares y lípidos sanguíneos",
      "Aporte de polifenoles de alta bioactividad"
    ]
  },
  {
    id: "inmune",
    name: "Sistema Inmune",
    subtitle: "Defensas y Resiliencia Biológica",
    iconName: "HeartPulse",
    description: "Fortalece la respuesta inmune innata y adaptativa, mejorando la vigilancia y la respuesta ante agentes infecciosos e inflamatorios.",
    keyIngredients: ["Hongo Shiitake", "Astrágalus", "Noni", "Guanábana"],
    benefits: [
      "Propiedades antiinflamatorias e inmunomoduladoras",
      "Apoyo a la función de glóbulos blancos y macrófagos",
      "Aporte de polisacáridos péptidos y betaglucanos"
    ]
  },
  {
    id: "nutricion",
    name: "Sistema Nutrición Celular",
    subtitle: "Microalimentación con Nanotecnología",
    iconName: "Sparkles",
    description: "Provee aminoácidos esenciales, vitaminas de alta absorción y minerales quelados para nutrir cada célula de forma directa.",
    keyIngredients: ["Alga Espirulina", "Alga Cianofícea", "Chía", "Calcio de Coral"],
    benefits: [
      "Optimiza la producción de energía celular (ATP)",
      "Provee 12+ vitaminas y complejo mineral bioactivo",
      "Mejora la claridad mental, concentración y vigor físico"
    ]
  },
  {
    id: "desintoxicacion",
    name: "Sistema Desintoxicación",
    subtitle: "Depuración Hepática y Digestiva",
    iconName: "Droplets",
    description: "Promueve la eliminación natural de toxinas, metales pesados y residuos metabólicos a través del hígado, riñones y colon.",
    keyIngredients: ["Clorofila", "Diente de León", "Romero", "Rhodiola"],
    benefits: [
      "Favorece la fase I y II de desintoxicación hepática",
      "Equilibrio digestivo y efecto diurético natural",
      "Alcalinización y limpieza del torrente circulatorio"
    ]
  }
];

export const CERTIFICATIONS = [
  {
    id: "fda",
    title: "Registro FDA de USA",
    code: "Food and Drug Administration",
    description: "Certificación y registro que avala su libre venta, distribución y cumplimiento normativo en los Estados Unidos.",
    icon: "ShieldCheck",
    country: "Estados Unidos"
  },
  {
    id: "sagarpa",
    title: "Certificación SAGARPA",
    code: "Norma Oficial Mexicana",
    description: "Aval fitosanitario oficial que certifica el origen vegetal, inocuidad y máxima pureza de los ingredientes botánicos.",
    icon: "FileCheck2",
    country: "México"
  },
  {
    id: "usda",
    title: "USDA Organic & Herbolario",
    code: "Organic Certification",
    description: "Reconocimiento de cultivo orgánico libre de pesticidas y certificación internacional como remedio herbolario de vanguardia.",
    icon: "Award",
    country: "Internacional (75+ Países)"
  }
];

export const TESTIMONIALS = [
  {
    id: "1",
    name: "Lic. Carlos Mendoza",
    role: "Empresario",
    location: "Ciudad de Panamá, Panamá",
    text: "Empecé a tomar Genoxidil hace 6 meses por recomendación médica tras sentir fatiga crónica y dolores articulares. En 3 semanas noté un cambio drástico en mi vitalidad y digestión. La energía para mi jornada de trabajo es inigualable.",
    rating: 5,
    verified: true
  },
  {
    id: "2",
    name: "Dra. Patricia Arango",
    role: "Especialista en Salud Integral",
    location: "Chiriquí, Panamá",
    text: "Como profesional de la salud evalúo rigurosamente las fichas técnicas. Genoxidil reúne una sinergia celular única al activar la proteína Nrf2 con nanotecnología. Mis pacientes reportan mejoría notable en marcadores inflamatorios.",
    rating: 5,
    verified: true
  },
  {
    id: "3",
    name: "Rigoberto Valdés",
    role: "Ingeniero Civil (58 años)",
    location: "Panamá Oeste, Panamá",
    text: "El 2 Pack me cambió el ritmo de vida. Ya no me despierto cansado y mis niveles de glucosa y presión se han mantenido en equilibrio gracias al estilo de vida saludable que acompaño con 1 tableta diaria.",
    rating: 5,
    verified: true
  }
];

export interface Office {
  country: string;
  flag: string;
  name: string;
  address: string;
  phone?: string;
  whatsapp: string;
  schedule: string;
  googleMapsQuery: string;
  note?: string;
}

export const INTERNATIONAL_OFFICES: Office[] = [
  {
    country: "Panamá",
    flag: "🇵🇦",
    name: "NBN Living Panamá (Sede Principal)",
    address: "Vía Domingo Díaz, Frente a Parada del Metro Villa Lucre, Plaza Galápago, Local Nro. 5, Panamá",
    phone: "(+507) 374 5265",
    whatsapp: "+507 6974 7685",
    schedule: "Lunes a Viernes: 9:00 a.m. a 6:00 p.m.",
    googleMapsQuery: "Plaza Galapagos Via Domingo Diaz Villa Lucre Panama",
    note: "Punto oficial de retiro y centro de distribución para todo Panamá con envíos a provincias y comarcas."
  },
  {
    country: "México",
    flag: "🇲🇽",
    name: "NBN Living Corporativo Mundial",
    address: "Av. Patria #2052 - 3, Zapopan, Jalisco 45110, México",
    phone: "(+52) 33 3260 7070",
    whatsapp: "+52 33 3143 6751",
    schedule: "Lunes a Viernes: 9:00 a.m. a 6:00 p.m.",
    googleMapsQuery: "Av Patria 2052 Zapopan Jalisco Mexico"
  },
  {
    country: "Estados Unidos",
    flag: "🇺🇸",
    name: "NBN Living USA",
    address: "5060 California Ave, Suite 1075 Stockdale Tower, 10th Floor, Bakersfield, CA 93309, USA",
    phone: "(+1) 661 374 0850",
    whatsapp: "+52 1 33 2157 5305",
    schedule: "Lunes a Viernes: 9:00 a.m. a 6:00 p.m.",
    googleMapsQuery: "5060 California Ave Suite 1075 Bakersfield CA 93309"
  },
  {
    country: "España",
    flag: "🇪🇸",
    name: "NBN Living España",
    address: "C/ Sugranyes 10 14, 1-6, Barcelona, España",
    phone: "930 272 457",
    whatsapp: "+52 01 1564 7895",
    schedule: "Lunes a Viernes: 10:00 a.m. a 6:00 p.m.",
    googleMapsQuery: "Carrer de Sugranyes Barcelona Spain"
  },
  {
    country: "Brasil",
    flag: "🇧🇷",
    name: "NBN Living Brasil",
    address: "Av. Comendador Vicente de Paulo Penido #564, Jardim Aquarius, São José dos Campos, Brasil",
    whatsapp: "+55 12 3512 4275",
    schedule: "Lunes a Viernes: 10:00 a.m. a 6:00 p.m.",
    googleMapsQuery: "Av Comendador Vicente de Paulo Penido 564 Sao Jose dos Campos Brasil"
  },
  {
    country: "Ecuador",
    flag: "🇪🇨",
    name: "NBN Living Ecuador",
    address: "Edificio Professional Center, Av. Juan Tanca Marengo 2do piso, Oficina 216, Guayaquil, Ecuador",
    whatsapp: "+593 95 911 1795",
    schedule: "Lunes a Viernes: 9:00 a.m. a 6:00 p.m.",
    googleMapsQuery: "Av Juan Tanca Marengo Professional Center Guayaquil Ecuador"
  },
  {
    country: "Perú",
    flag: "🇵🇪",
    name: "NBN Living Perú",
    address: "José Gálvez #599, Miraflores, Lima, Perú",
    whatsapp: "+51 952 321 794",
    schedule: "Lunes a Viernes: 9:00 a.m. a 6:00 p.m.",
    googleMapsQuery: "Jose Galvez 599 Miraflores Lima Peru"
  },
  {
    country: "República Dominicana",
    flag: "🇩🇴",
    name: "NBN Living Rep. Dominicana",
    address: "Av. 27 de Febrero #323, Plaza central, Suite A-245, Piantini, Santo Domingo, República Dominicana",
    whatsapp: "+52 1 33 1911 1602",
    schedule: "Lunes a Viernes: 9:00 a.m. a 6:00 p.m.",
    googleMapsQuery: "Av 27 de Febrero 323 Plaza Central Santo Domingo"
  },
  {
    country: "Paraguay",
    flag: "🇵🇾",
    name: "NBN Living Paraguay",
    address: "Cruz del Defensor #473, 2do Piso, Oficinas B y C, Barrio Recoleta, Asunción, Paraguay",
    whatsapp: "+595 994 436010",
    schedule: "Lunes a Viernes: 9:00 a.m. a 6:00 p.m.",
    googleMapsQuery: "Cruz del Defensor 473 Asuncion Paraguay"
  },
  {
    country: "Centroamérica",
    flag: "🌎",
    name: "NBN Living Centroamérica",
    address: "Atención regional y coordinación de envíos en toda Centroamérica",
    whatsapp: "+52 1 33 1884 2012",
    schedule: "Lunes a Viernes: 9:00 a.m. a 6:00 p.m.",
    googleMapsQuery: "Centroamerica"
  }
];

export const PANAMA_PROVINCES = [
  "Panamá (Ciudad y Centro)",
  "Panamá Oeste (Arraiján, La Chorrera, Capira)",
  "Panamá Este (Chepo, Pacora, 24 de Diciembre)",
  "Panamá Norte (Las Cumbres, Alcalde Díaz)",
  "Chiriquí (David, Boquete, Bugaba)",
  "Coclé (Penonomé, Antón, Aguadulce)",
  "Colón",
  "Veraguas (Santiago, Soná)",
  "Herrera (Chitré, Pesé)",
  "Los Santos (Las Tablas, Guararé)",
  "Bocas del Toro (Changuinola, Isla Colón)",
  "Darién (La Palma, Metetí)",
  "Comarca Guna Yala",
  "Comarca Emberá-Wounaan",
  "Comarca Ngäbe-Buglé",
  "Comarca Naso Tjër Di",
  "Envío Internacional / Otro país"
];

export const ALL_INGREDIENTS = [
  { name: "Cúrcuma", category: "Fitonutrientes & Antioxidantes", role: "Potente antiinflamatorio y protector celular natural." },
  { name: "Té Verde", category: "Fitonutrientes & Antioxidantes", role: "Rico en epigalocatequina (EGCG) para el metabolismo." },
  { name: "Espirulina", category: "Algas & Superalimentos", role: "Superalimento rico en clorofila, proteínas y minerales." },
  { name: "Hongo Shiitake", category: "Hongos & Adaptógenos", role: "Inmunomodulador rico en lentinano y betaglucanos." },
  { name: "Romero", category: "Fitonutrientes & Antioxidantes", role: "Favorece la circulación cerebral y función hepática." },
  { name: "Chía", category: "Fitonutrientes & Antioxidantes", role: "Fuente vegetal de Omega-3 y fibra soluble." },
  { name: "Diente de León", category: "Fitonutrientes & Antioxidantes", role: "Apoya la depuración renal y hepática." },
  { name: "Rhodiola", category: "Hongos & Adaptógenos", role: "Adaptógeno para regular el estrés y la fatiga." },
  { name: "Guanábana", category: "Fitonutrientes & Antioxidantes", role: "Rica en acetogeninas con actividad celular." },
  { name: "Glutatión", category: "Antioxidantes Maestros", role: "El antioxidante maestro celular por excelencia." },
  { name: "Acai", category: "Fitonutrientes & Antioxidantes", role: "Fruto amazónico con alta capacidad ORAC." },
  { name: "Noni", category: "Fitonutrientes & Antioxidantes", role: "Regenerador celular y estimulante inmune." },
  { name: "Mangostán", category: "Fitonutrientes & Antioxidantes", role: "Rico en xantonas de alto poder antioxidante." },
  { name: "Astrágalus", category: "Hongos & Adaptógenos", role: "Apoyo a la integridad de los telómeros y defensas." },
  { name: "Alga Cianofícea", category: "Algas & Superalimentos", role: "Estimula la liberación de células madre en médula ósea." },
  { name: "Uva (Semilla y Piel)", category: "Fitonutrientes & Antioxidantes", role: "Proantocianidinas para la salud vascular y capilar." },
  { name: "Pygeum", category: "Fitonutrientes & Antioxidantes", role: "Bienestar del sistema prostático y urinario." },
  { name: "Extracto Seco de Licopeno", category: "Fitonutrientes & Antioxidantes", role: "Carotenoide protector del corazón y próstata." },
  { name: "Clorofila", category: "Algas & Superalimentos", role: "Oxigena la sangre y ayuda a eliminar metales pesados." },
  { name: "Calcio de Coral", category: "Minerales Esenciales", role: "Calcio orgánico de máxima asimilación bioactiva." },
  { name: "Polisacáridos Péptidos", category: "Aminoácidos & Péptidos", role: "Nutrición mitocondrial profunda." },
  { name: "Astaxantina", category: "Antioxidantes Maestros", role: "El antioxidante marino más potente del mundo." },
  { name: "Triptófano", category: "Aminoácidos & Péptidos", role: "Precursor natural de la serotonina y melatonina." },
  { name: "L-Teanina", category: "Aminoácidos & Péptidos", role: "Promueve relajación mental sin causar somnolencia." },
  { name: "L-Arginina", category: "Aminoácidos & Péptidos", role: "Precursor del óxido nítrico para la vasodilatación." },
  { name: "L-Leucina, L-Valina, L-Isoleucina", category: "Aminoácidos & Péptidos", role: "BCAAs indispensables para la reparación muscular." },
  { name: "L-Cisteína", category: "Aminoácidos & Péptidos", role: "Aminoácido limitante para la síntesis de glutatión." },
  { name: "Resveratrol", category: "Antioxidantes Maestros", role: "Polifenol que activa genes de la longevidad celular." },
  { name: "Vitaminas C, E, A, D3, K1, H", category: "Vitaminas Clave", role: "Complejo vitamínico antioxidante y osteoprotector." },
  { name: "Complejo B (B1, B2, B3, B5, B6, B12, Ácido Fólico)", category: "Vitaminas Clave", role: "Energía celular, metabolismo y sistema nervioso." },
  { name: "Zinc, Hierro, Magnesio, Potasio, Manganeso, Cobre", category: "Minerales Esenciales", role: "Minerales y electrolitos bioquelados." }
];

export const FAQS = [
  {
    q: "¿Qué es Genoxidil y por qué se le llama 'La tableta más completa del planeta'?",
    a: "Genoxidil NRF2 es una formulación avanzada de fitonutrientes que combina más de 52 ingredientes activos de 22 países distintos mediante nanotecnología. No solo aporta vitaminas y minerales, sino que estimula directamente la vía de la proteína Nrf2, el interruptor genético natural del cuerpo que comanda la producción de antioxidantes endógenos y la regeneración celular."
  },
  {
    q: "¿Cómo se debe consumir Genoxidil?",
    a: "Se recomienda tomar de 1 a 2 tabletas al día, preferiblemente por la mañana después del desayuno o comida principal, acompañada de un vaso con abundante agua. Es fundamental mantener una adecuada hidratación diaria consumiendo de 1 a 3 litros de agua durante el día (salvo indicaciones médicas específicas)."
  },
  {
    q: "¿Cuáles son los 5 sistemas biológicos que refuerza?",
    a: "Genoxidil apoya sinérgicamente como refuerzo a 5 sistemas clave: Sistema Inmunológico, Sistema Antioxidante, Sistema Antiedad (longevidad celular), Sistema de Nutrición Celular y Sistema de Desintoxicación profunda."
  },
  {
    q: "¿En cuánto tiempo se sienten los beneficios?",
    a: "A diferencia de suplementos convencionales que pueden tardar meses en manifestar efectos, gracias a la biodisponibilidad y nanotecnología de Laboratorios Herbolaris, la gran mayoría de personas reporta mayor vigor, claridad y equilibrio en pocas semanas."
  },
  {
    q: "¿Genoxidil es un medicamento?",
    a: "No. Genoxidil es un suplemento alimenticio y complemento nutricional orgánico. No es un medicamento y no está destinado a diagnosticar, tratar ni curar enfermedades. Se recomienda complementar su consumo con una alimentación variada, hidratación, actividad física regular y descanso adecuado."
  },
  {
    q: "¿Cómo puedo hacer mi pedido en Panamá o el extranjero?",
    a: "Puedes solicitarlo directamente a través del Formulario de Pedido de esta página web. Al presionar 'Confirmar Pedido' podrás gestionar la entrega a domicilio en cualquier provincia o comarca de Panamá (o coordinar vía WhatsApp directo al +507 6974 7685) con opción de pago contra entrega o transferencia bancaria."
  }
];

export const BLOG_POSTS = [
  {
    id: "nrf2-pathway",
    title: "La Vía Nrf2: El Interruptor Maestro de los Antioxidantes Endógenos",
    date: "Septiembre 2026",
    category: "Ciencia Celular",
    readTime: "4 min de lectura",
    summary: "Descubre cómo la estimulación de la proteína Nrf2 activa la síntesis de Glutatión y Superóxido Dismutasa desde el interior de tus mitocondrias.",
    content: "La proteína Nrf2 (Nuclear factor erythroid 2-related factor 2) reside en el citoplasma celular. Al detectar fitonutrientes bioactivos como el sulforafano, la curcumina y el resveratrol, Nrf2 se transloca al núcleo celular y se une a los Elementos de Respuesta Antioxidante (ARE), activando la producción de más de 500 genes citoprotectores. Esto significa que en lugar de consumir antioxidantes que neutralizan una sola molécula de radical libre y se agotan, una sola enzima endógena catalizada por Nrf2 neutraliza hasta un millón de radicales libres por segundo."
  },
  {
    id: "synergy-50-ingredients",
    title: "Sinergia Fitonutricional: Por qué 50+ Ingredientes Superan a Fórmulas Aisladas",
    date: "Agosto 2026",
    category: "Nutrición Integral",
    readTime: "3 min de lectura",
    summary: "La sinergia biológica permite que plantas como el Shiitake, el Mangostán y la Espirulina multipliquen su efecto regenerador.",
    content: "En la naturaleza ningún compuesto actúa en solitario. Cuando se combinan adaptógenos milenarios con antioxidantes de alta potencia y aminoácidos quelados mediante nanotecnología, las membranas celulares logran absorber los micronutrientes sin saturación enzimática. Laboratorios Herbolaris estudió durante años las proporciones exactas para que cada tableta aporte la cantidad precisa de nutrientes a nivel mitocondrial."
  },
  {
    id: "lifestyle-vitality",
    title: "7 Hábitos Clave para Maximizar tu Regeneración Celular Diaria",
    date: "Julio 2026",
    category: "Estilo de Vida",
    readTime: "5 min de lectura",
    summary: "Guía práctica de nutrición balanceada, hidratación de 1 a 3 litros y descanso reparador para acompañar tu suplemento.",
    content: "El bienestar óptimo es un compromiso integral. Beber agua suficiente facilita que la clorofila y el diente de león aceleren la excreción de metabolitos tóxicos. El ejercicio moderado promueve la biogénesis mitocondrial, y un sueño profundo entre las 10 p.m. y 6 a.m. permite la consolidación hormonal y la reparación de tejidos celulares dañados por el estrés cotidiano."
  }
];
