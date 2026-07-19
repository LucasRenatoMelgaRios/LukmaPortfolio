type Language = 'es' | 'en';

const STORAGE_KEY = 'lucas-portfolio-language';

const translations: Record<string, string> = {
  // Global navigation and metadata
  'Saltar al contenido': 'Skip to content',
  'Sobre mí': 'About me',
  'Experiencia': 'Experience',
  'Proyectos': 'Projects',
  'Contacto': 'Contact',
  'Hablemos': "Let's talk",
  'Navegación principal': 'Main navigation',
  'Ir al inicio': 'Go to homepage',
  'Cambiar idioma': 'Change language',
  'Ver sitio en español': 'View site in Spanish',
  'Portfolio de Lucas Melgar, desarrollador Full Stack especializado en React, Laravel y productos digitales escalables.': 'Portfolio of Lucas Melgar, a Full Stack Developer specializing in React, Laravel and scalable digital products.',
  'Página no encontrada — Lucas Melgar': 'Page not found — Lucas Melgar',
  'Esta página se salió del cuaderno.': 'This page slipped out of the notebook.',
  'ups, hoja perdida': 'oops, missing page',
  'Volver al cuaderno': 'Back to the notebook',

  // Home — Hero and about
  'Tingo María, Perú': 'Tingo María, Peru',
  'Huánuco, Perú': 'Huánuco, Peru',
  'Desarrollo aplicaciones web completas con': 'I build complete web applications with',
  'React, Laravel y Tailwind CSS': 'React, Laravel and Tailwind CSS',
  ': interfaces, APIs, bases de datos y paneles administrativos.': ': interfaces, APIs, databases and admin dashboards.',
  'interfaces, APIs, bases de datos y paneles administrativos.': 'interfaces, APIs, databases and admin dashboards.',
  'Abrir mis proyectos': 'Explore my projects',
  'Escríbeme': 'Email me',
  '● Disponible para cualquier proyecto': '● Available for any projects',
  'Desde 2022': 'Since 2022',
  'Hola, soy Lucas 👋': "Hi, I'm Lucas 👋",
  'ese soy yo': "that's me",
  'trabajo full stack': 'full stack work',
  'Frontend, backend y base de datos.': 'Frontend, backend and databases.',
  'Ahora integrando flujo de trabajo con': 'Now integrating workflows with',
  'en modo código': 'coding mode',
  'así trabajo': 'how I work',
  'de idea a producto': 'from idea to product',
  'Diseño, código y decisiones conectadas.': 'Design, code and connected decisions.',
  'Primero entender.': 'Understand first.',
  'Luego construir.': 'Then build.',
  '02 — Sobre mí': '02 — About me',
  'Desarrollo de principio a fin.': 'End-to-end development.',
  'Soy desarrollador Full Stack freelance y profesor de inglés. Luego de concluir mi formación académica en SENATI, me dedico a crear soluciones web integrales.': 'I am a freelance Full Stack Developer and English teacher. After completing my studies at SENATI, I now focus on building complete web solutions.',
  'Trabajo principalmente con React, TypeScript, Laravel y MySQL. Me enfoco en interfaces claras, código mantenible, rendimiento y sistemas preparados para crecer y siempre estoy abierto a aprender nuevas tecnologías.': 'I mainly work with React, TypeScript, Laravel and MySQL. I focus on clear interfaces, maintainable code, performance and systems designed to scale, while staying open to learning new technologies.',
  'años creando': 'years building',
  'proyectos destacados': 'featured projects',
  'visión full stack': 'full stack perspective',

  // Home — Experience and education
  '03 — Experiencia y estudios': '03 — Experience and education',
  'Formación y trabajo.': 'Education and experience.',
  'Full Stack Developer · Socio cofundador': 'Full Stack Developer · Co-founder',
  '2025 — Actualidad': '2025 — Present',
  'Desarrollo de la plataforma B2B/B2C con React, TypeScript y Laravel.': 'Developed the B2B/B2C platform using React, TypeScript and Laravel.',
  'Implementación de marketplace, feed corporativo, validación empresarial y mensajería en tiempo real.': 'Implemented a marketplace, corporate feed, business verification and real-time messaging.',
  'Desarrollador Web Frontend Junior': 'Junior Frontend Web Developer',
  'Participación en el desarrollo de sistemas ERP y e-commerce utilizando React y Laravel.': 'Contributed to ERP and e-commerce systems using React and Laravel.',
  'Creación de interfaces adaptativas y optimización de la experiencia de usuario con Tailwind CSS.': 'Built responsive interfaces and optimized the user experience with Tailwind CSS.',
  'Soporte técnico: diagnóstico de laptops, reparación de hardware y mantenimiento de software.': 'Provided technical support, including laptop diagnostics, hardware repair and software maintenance.',
  'Soporte técnico': 'Technical Support',
  'Diagnóstico y reparación de laptops y computadoras.': 'Diagnosed and repaired laptops and desktop computers.',
  'Soporte de software e implementación de sistemas de gestión.': 'Provided software support and implemented management systems.',
  'Programador Junior': 'Junior Developer',
  'Estudios y certificaciones': 'Education and certifications',
  'SENATI · Instituto de Educación Superior Tecnológico Privado': 'SENATI · Private Institute of Higher Technological Education',
  'Profesional Técnico en Ingeniería de Software con Inteligencia Artificial': 'Professional Technical Degree in Software Engineering with Artificial Intelligence',
  'Título profesional técnico.': 'Professional technical degree.',
  'ICPNA · Instituto Cultural Peruano Norteamericano': 'ICPNA · Peruvian-North American Cultural Institute',
  'Inglés avanzado · Nivel B2': 'Advanced English · B2 level',
  'Diploma de nivel avanzado tras tres años de formación y nivel B2 acreditado mediante TOEFL ITP.': 'Advanced-level diploma after three years of study, with B2 proficiency certified through the TOEFL ITP.',
  'Especializaciones': 'Specializations',
  'Especialización en Desarrollo Frontend': 'Frontend Development Specialization',
  'Especialización en Desarrollo de Aplicaciones Móviles': 'Mobile Application Development Specialization',
  'Áreas de formación': 'Areas of study',
  'Desarrollo de software e IA': 'Software development and AI',
  'Estructuras de datos': 'Data structures',
  'Aplicaciones web y móviles': 'Web and mobile applications',

  // Home — Technologies, projects and GitHub
  '04 — Tecnologías': '04 — Technologies',
  'Stack principal.': 'Core stack.',
  'Tecnologías que uso para construir frontend, backend y datos.': 'Technologies I use to build frontend, backend and data layers.',
  'herramientas de trabajo': 'tools of the trade',
  'Habilidades técnicas': 'Technical skills',
  '13 tecnologías': '13 technologies',
  'Tecnologías principales': 'Core technologies',
  '05 — Proyectos': '05 — Projects',
  'Esto es lo que hago.': 'This is what I build.',
  'Resumen de los productos. Cada caso de estudio contiene el proceso, la arquitectura y las capturas completas.': 'A concise look at each product. Every case study includes the process, architecture and complete screenshots.',
  'Plataforma de eventos': 'Event platform',
  'Venta de entradas, pagos, códigos QR, liquidaciones y administración para organizadores.': 'Ticket sales, payments, QR codes, settlements and administration for organizers.',
  'Red corporativa, marketplace, validación empresarial y mensajería en tiempo real.': 'Corporate network, marketplace, business verification and real-time messaging.',
  'Plataforma institucional bilingüe': 'Bilingual institutional platform',
  'Sitio interactivo para comunicar 27 años de proyectos sociales, presencia territorial y donaciones en la Amazonía peruana.': 'Interactive website showcasing 27 years of social projects, territorial presence and donations in the Peruvian Amazon.',
  'Ver proyecto': 'View project',
  'Ver caso de estudio de Pillket': 'View Pillket case study',
  'Ver caso de estudio de Vericerbiz': 'View Vericerbiz case study',
  'Ver caso de estudio de EFOD': 'View EFOD case study',
  'Vista principal de Pillket': 'Pillket homepage',
  'Vista principal de Vericerbiz': 'Vericerbiz homepage',
  'Vista principal del sitio web de EFOD': 'EFOD website homepage',
  '06 — Código abierto': '06 — Open source',
  'Actividad en GitHub.': 'GitHub activity.',
  'Contribuciones públicas obtenidas desde mi perfil. Selecciona un año para explorar la actividad.': 'Public contributions retrieved from my profile. Select a year to explore the activity.',
  'Seleccionar año de actividad': 'Select activity year',
  'Contribuciones en': 'Contributions in',
  'Actividad pública': 'Public activity',
  'Datos públicos de GitHub': 'Public GitHub data',
  'Intensidad de contribuciones': 'Contribution intensity',
  'Menos': 'Less',
  'Más': 'More',
  'Ene': 'Jan',
  'Abr': 'Apr',
  'Ago': 'Aug',
  'Dic': 'Dec',

  // Home — Timeline, skills and process
  '07 — Trayectoria': '07 — Journey',
  '2022 — Actualidad.': '2022 — Present.',
  'Comienzo freelance': 'Freelance beginnings',
  'Primeros productos web de punta a punta.': 'First end-to-end web products.',
  'Más allá del frontend': 'Beyond frontend',
  'APIs, autenticación y datos se integran al proceso.': 'APIs, authentication and data become part of the process.',
  'Un ecosistema B2B/B2C de confianza, comercio y comunidad.': 'A B2B/B2C ecosystem for trust, commerce and community.',
  'Una plataforma real para eventos y entradas en Perú.': 'A real platform for events and ticketing in Peru.',
  'Ahora': 'Now',
  'Productos que escalan': 'Products built to scale',
  'Diseño, ingeniería y producto en una misma mesa.': 'Design, engineering and product at the same table.',
  '08 — Áreas de trabajo': '08 — Areas of expertise',
  'Qué puedo aportar.': 'What I bring.',
  'Arquitectura frontend': 'Frontend architecture',
  'Diseño de interfaces': 'Interface design',
  'Modelado de datos': 'Data modeling',
  'Rendimiento web': 'Web performance',
  'Accesibilidad': 'Accessibility',
  'SEO técnico': 'Technical SEO',
  'Sistemas de diseño': 'Design systems',
  'Autenticación y roles': 'Authentication and roles',
  'Integración frontend/backend': 'Frontend/backend integration',
  '09 — Proceso': '09 — Process',
  'Cómo trabajo.': 'How I work.',
  'Definir el alcance': 'Define the scope',
  'Flujos, usuarios, reglas de negocio y prioridades antes de comenzar a desarrollar.': 'Map flows, users, business rules and priorities before development begins.',
  'Construir por capas': 'Build in layers',
  'Interfaz, API y datos separados para mantener el código claro y fácil de extender.': 'Keep the interface, API and data layers separate so the code remains clear and easy to extend.',
  'Probar e iterar': 'Test and iterate',
  'Validar responsive, accesibilidad, rendimiento y casos críticos antes de publicar.': 'Validate responsiveness, accessibility, performance and critical cases before release.',

  // Home — CV and contact
  '10 — CV disponible': '10 — Resume available',
  'Mi experiencia, en una página.': 'My experience, on one page.',
  'Experiencia laboral, educación y stack tecnológico. Directo y fácil de revisar.': 'Work experience, education and technology stack. Concise and easy to review.',
  'Descargar CV': 'Download resume',
  '¿Qué estás construyendo?': 'What are you building?',
  'Cuéntame sobre tu producto, el problema que quieres resolver o la mejora que necesitas.': 'Tell me about your product, the problem you want to solve or the improvement you need.',
  'Tingo María, Perú · Trabajo remoto': 'Tingo María, Peru · Remote work',
  'Nombre': 'Name',
  'Correo': 'Email',
  'Mensaje': 'Message',
  'Tu nombre': 'Your name',
  'Cuéntame brevemente sobre tu proyecto...': 'Tell me briefly about your project...',
  'Responderé directamente al correo que indiques.': 'I will reply directly to the email address you provide.',
  'Enviar mensaje': 'Send message',
  'Nuevo mensaje desde el portfolio': 'New message from the portfolio',
  'Volver arriba': 'Back to top',

  // Project page shell
  'Caso de estudio · Lucas Melgar': 'Case study · Lucas Melgar',
  'Vericerbiz — Caso de estudio · Lucas Melgar': 'Vericerbiz — Case study · Lucas Melgar',
  'EFOD — Caso de estudio · Lucas Melgar': 'EFOD — Case study · Lucas Melgar',
  'Pillket — Caso de estudio · Lucas Melgar': 'Pillket — Case study · Lucas Melgar',
  'Caso de estudio ·': 'Case study ·',
  '← Volver a proyectos': '← Back to projects',
  'Tecnologías utilizadas': 'Technologies used',
  'Sitio web': 'Website',
  'Sitio web ↗': 'Website ↗',
  'Sitio web · enlace pendiente': 'Website · link pending',
  'Repositorio': 'Repository',
  'Repositorio ·': 'Repository ·',
  'Privado': 'Private',
  'Contenido del proyecto': 'Project contents',
  'En esta página': 'On this page',
  'Problema': 'Problem',
  'Solución': 'Solution',
  'Cómo funciona': 'How it works',
  'Stack tecnológico': 'Technology stack',
  'Decisiones técnicas': 'Technical decisions',
  'Desafíos': 'Challenges',
  'Capturas': 'Screenshots',
  '01 — Problema': '01 — Problem',
  'El contexto.': 'The context.',
  '02 — Solución': '02 — Solution',
  'La propuesta.': 'The solution.',
  '03 — Cómo funciona': '03 — How it works',
  'Flujo y arquitectura.': 'Flow and architecture.',
  '04 — Stack tecnológico': '04 — Technology stack',
  'Tecnologías y responsabilidades.': 'Technologies and responsibilities.',
  '05 — Decisiones técnicas': '05 — Technical decisions',
  'Por qué está construido así.': 'Why it is built this way.',
  '06 — Desafíos y aprendizajes': '06 — Challenges and lessons learned',
  'Problemas técnicos resueltos.': 'Technical problems solved.',
  'capturas del producto': 'product screenshots',
  '4 vistas reales': '4 real views',
  'ampliar': 'enlarge',
  'ampliar ↗': 'enlarge ↗',
  'Desliza para explorar las capturas': 'Swipe to explore the screenshots',
  'Desliza para explorar las capturas →': 'Swipe to explore the screenshots →',
  '← Todos los proyectos': '← All projects',
  'Siguiente:': 'Next:',

  // Shared stack labels
  'Arquitectura': 'Architecture',
  'Interfaz': 'Interface',
  'Estado': 'State',
  'Tiempo real': 'Real time',
  'Infraestructura': 'Infrastructure',
  'Autenticación': 'Authentication',
  'Animaciones': 'Animations',
  'Geografía': 'Geography',
  'Donaciones': 'Donations',
  'Pagos': 'Payments',
  'Reembolsos': 'Refunds',
  'Aplicación móvil': 'Mobile application',
  'App móvil nativa': 'Native mobile app',
  'Frontend web': 'Web frontend',
  'Interfaz web': 'Web interface',

  // Vericerbiz
  'Plataforma B2B y B2C': 'B2B and B2C platform',
  'Vericerbiz combina una red social corporativa, un marketplace de comercio electrónico y un sistema de validación empresarial gestionado por Cámaras de Comercio. Todo centralizado para fomentar transacciones seguras y conexiones comerciales reales.': 'Vericerbiz combines a corporate social network, an e-commerce marketplace and a business verification system managed by Chambers of Commerce. Everything is centralized to support secure transactions and genuine business connections.',
  'Página principal de Vericerbiz enfocada en compras seguras': 'Vericerbiz homepage focused on secure purchases',
  'Las empresas en crecimiento tienen dificultades para establecer confianza verificable con nuevos clientes y proveedores en línea y muchas caen en la informalidad. Las redes sociales tradicionales como facebook marketplace, no están enfocadas en la validación comercial B2B y los marketplaces comunes carecen del componente social necesario para construir relaciones a largo plazo. Con el fin de incentivar la formalización y la confianza, Vericerbiz propone un entorno donde la identidad social de una empresa está respaldada por una Cámara de Comercio.': 'Growing businesses struggle to establish verifiable trust with new customers and online suppliers, and many remain informal. Traditional social networks such as Facebook Marketplace are not designed for B2B verification, while conventional marketplaces lack the social layer needed to build long-term relationships. To encourage formalization and trust, Vericerbiz provides an environment where a company’s social identity is backed by a Chamber of Commerce.',
  'Desconfianza en las transacciones digitales por falta de respaldo oficial.': 'Distrust in digital transactions due to the lack of official validation.',
  'Desconexión entre la identidad social de la marca y sus operaciones comerciales.': 'A disconnect between a brand’s social identity and its commercial operations.',
  'Dependencia de varias plataformas: chat, ventas, comunidad y validación.': 'Dependence on separate platforms for chat, sales, community and verification.',
  'Vericerbiz propone un entorno unificado donde la identidad y las operaciones de una empresa están respaldadas por una Cámara de Comercio.': 'Vericerbiz provides a unified environment where a company’s identity and operations are backed by a Chamber of Commerce.',
  'Feed social interactivo para generar comunidad y conexiones B2B.': 'An interactive social feed for building community and B2B connections.',
  'Marketplace con compras, pedidos y centro de resolución de disputas mediante el uso de nuestra moneda virtual.': 'A marketplace with purchases, orders and a dispute resolution center powered by the platform’s virtual currency.',
  'Verificación de RUC y documentos legales delegada a Cámaras de Comercio.': 'Tax ID and legal document verification delegated to Chambers of Commerce.',
  'Programas de fidelización, misiones y moneda virtual mediante VeriTokens.': 'Loyalty programs, missions and virtual currency through VeriTokens.',
  'El producto utiliza una arquitectura desacoplada compuesta por una SPA y una API REST. Los procesos administrativos y la experiencia pública se mantienen separados según el rol del usuario.': 'The product uses a decoupled architecture consisting of an SPA and a REST API. Administrative processes and the public experience remain separated according to each user role.',
  'Panel administrativo para SuperAdmin y Cámaras de Comercio.': 'Admin dashboard for SuperAdmins and Chambers of Commerce.',
  'Interfaz pública y empresarial con red social, marketplace, chat y billetera.': 'Public and business interfaces with a social network, marketplace, chat and wallet.',
  'Procesamiento asíncrono de chats, compras, reacciones y notificaciones.': 'Asynchronous processing for chats, purchases, reactions and notifications.',
  'WebSockets para mensajes y actualizaciones instantáneas.': 'WebSockets for messages and instant updates.',
  'Caché de consultas para acelerar feeds y listados de gran volumen.': 'Query caching to accelerate feeds and high-volume listings.',
  'Estado separado': 'Separated state management',
  'Zustand gestiona la interfaz y React Query el estado del servidor. Esto reduce código repetitivo y permite actualizaciones optimistas.': 'Zustand manages interface state while React Query handles server state. This reduces repetitive code and enables optimistic updates.',
  'Arquitectura por eventos': 'Event-driven architecture',
  'Las tareas pesadas se envían a colas de Redis para no bloquear las respuestas de la API.': 'Heavy tasks are sent to Redis queues so API responses remain unblocked.',
  'WebSockets nativos': 'Native WebSockets',
  'Laravel Reverb mantiene sincronizados el chat, las notificaciones y las interacciones del feed sin long-polling.': 'Laravel Reverb keeps chat, notifications and feed interactions synchronized without long polling.',
  'Caché selectiva': 'Selective caching',
  'Las vistas costosas se almacenan por etiquetas y se invalidan únicamente cuando cambia la información relacionada.': 'Expensive views are cached by tags and invalidated only when related information changes.',
  'Medios mediante CDN': 'Media through a CDN',
  'Los documentos, imágenes y videos se almacenan en S3 y se distribuyen con CloudFront.': 'Documents, images and videos are stored in S3 and distributed through CloudFront.',
  'Sincronizar eventos WebSocket con la caché del cliente sin provocar renderizados innecesarios.': 'Synchronizing WebSocket events with the client cache without causing unnecessary renders.',
  'Diseñar una base de datos relacional de más de 70 tablas para billeteras, disputas, pedidos y roles dinámicos.': 'Designing a relational database with more than 70 tables for wallets, disputes, orders and dynamic roles.',
  'Configurar CORS, CSP, cookies SameSite y OAuth entre entornos locales y de producción.': 'Configuring CORS, CSP, SameSite cookies and OAuth across local and production environments.',
  'Mantener el rendimiento en catálogos, feeds infinitos y pantallas con microanimaciones.': 'Maintaining performance across catalogs, infinite feeds and screens with micro-animations.',
  'Confianza para comprar': 'Trust when buying',
  'Marketplace de productos': 'Product marketplace',
  'Catálogo de productos y categorías de Vericerbiz': 'Vericerbiz product and category catalog',
  'Perfil de empresa': 'Company profile',
  'Perfil empresarial verificado dentro de Vericerbiz': 'Verified business profile in Vericerbiz',
  'Mensajería por pedidos': 'Order messaging',
  'Sistema de mensajes y conversaciones de pedidos de Vericerbiz': 'Vericerbiz messaging and order conversation system',

  // EFOD
  'EFOD es una plataforma web interactiva y bilingüe que visibiliza 27 años de trabajo de una ONG en la Amazonía peruana. Centraliza proyectos de desarrollo, presencia territorial y donaciones para cooperantes internacionales.': 'EFOD is an interactive bilingual web platform that showcases 27 years of NGO work in the Peruvian Amazon. It centralizes development projects, territorial presence and donations for international partners.',
  'Página principal de EFOD sobre su trabajo en la Amazonía peruana': 'EFOD homepage showcasing its work in the Peruvian Amazon',
  'Las organizaciones que trabajan en zonas rurales de difícil acceso suelen tener poca visibilidad ante cooperantes internacionales. Sus sitios estáticos y reportes PDF no comunican de forma clara la escala territorial ni conectan las donaciones con resultados concretos.': 'Organizations working in hard-to-reach rural areas often have limited visibility among international partners. Their static websites and PDF reports fail to communicate their territorial scale clearly or connect donations with measurable outcomes.',
  'Desconfianza por falta de métricas visibles y rendición de cuentas accesible.': 'Limited trust due to a lack of visible metrics and accessible accountability.',
  'Dificultad para comprender la distribución geográfica de comunidades y proyectos.': 'Difficulty understanding the geographic distribution of communities and projects.',
  'Experiencias móviles deficientes provocadas por sitios pesados y documentos difíciles de consultar.': 'Poor mobile experiences caused by heavy websites and hard-to-read documents.',
  'EFOD presenta el trabajo institucional mediante una experiencia rápida, bilingüe y centrada en la transparencia territorial.': 'EFOD presents the organization’s work through a fast, bilingual experience centered on territorial transparency.',
  'Mapa SVG interactivo que conecta regiones, ciudades y proyectos de intervención.': 'An interactive SVG map connecting regions, cities and intervention projects.',
  'Selector de donaciones con PayPal y equivalencias de impacto medible.': 'A PayPal donation selector with measurable impact equivalents.',
  'Generación estática con Astro para mejorar SEO y tiempos de carga.': 'Static generation with Astro to improve SEO and loading times.',
  'Microinteracciones, transiciones y navegación adaptadas a escritorio y móvil.': 'Micro-interactions, transitions and navigation tailored to desktop and mobile.',
  'El sitio utiliza la arquitectura de islas de Astro y generación estática. Solo las interacciones necesarias envían JavaScript al navegador, reduciendo el peso de la página.': 'The site uses Astro’s islands architecture and static generation. Only essential interactions send JavaScript to the browser, reducing page weight.',
  'Contenido generado como HTML estático mediante Astro SSG.': 'Content generated as static HTML through Astro SSG.',
  'Cambio instantáneo entre español e inglés sin dependencias adicionales.': 'Instant switching between Spanish and English without additional dependencies.',
  'Mapa territorial sincronizado con ciudades y regiones vectoriales.': 'A territorial map synchronized with cities and vector regions.',
  'Scroll con inercia mediante requestAnimationFrame, desactivado en dispositivos táctiles.': 'Inertial scrolling through requestAnimationFrame, disabled on touch devices.',
  'Imágenes y video distribuidos mediante AWS S3 y CloudFront.': 'Images and video distributed through AWS S3 and CloudFront.',
  'Astro y generación estática': 'Astro and static generation',
  'Se eligió Astro en lugar de una SPA completa para priorizar SEO, HTML inicial y carga rápida con JavaScript mínimo.': 'Astro was chosen over a full SPA to prioritize SEO, initial HTML and fast loading with minimal JavaScript.',
  'Bilingüismo sin dependencias': 'Dependency-free bilingual support',
  'Las traducciones se obtienen desde atributos de datos y se almacenan en memoria para cambiar de idioma sin solicitudes adicionales.': 'Translations are read from data attributes and stored in memory, allowing instant language changes without additional requests.',
  'Mapa SVG coordinado': 'Coordinated SVG map',
  'Las regiones y marcadores comparten identificadores con los elementos de texto para sincronizar estados hover sin renderizados costosos.': 'Regions and markers share identifiers with text elements to synchronize hover states without expensive renders.',
  'Precarga de contenido crítico': 'Critical content preloading',
  'Las imágenes superiores se precargan y el navegador establece conexión anticipada con CloudFront para reducir el LCP.': 'Above-the-fold images are preloaded and the browser connects to CloudFront early to reduce LCP.',
  'Scroll adaptativo': 'Adaptive scrolling',
  'El efecto de inercia solo se ejecuta en escritorio; móviles y usuarios con movimiento reducido conservan el comportamiento nativo.': 'The inertial effect runs only on desktop; mobile devices and users who prefer reduced motion retain native scrolling.',
  'Servir un video HD en el Hero sin perjudicar batería, datos móviles ni rendimiento.': 'Serving HD video in the hero without compromising battery life, mobile data or performance.',
  'Sincronizar más de 20 regiones y marcadores SVG con elementos externos del contenido.': 'Synchronizing more than 20 SVG regions and markers with external content elements.',
  'Implementar scroll suave sin interferir con dispositivos táctiles o accesibilidad.': 'Implementing smooth scrolling without interfering with touch devices or accessibility.',
  'Mantener una experiencia bilingüe instantánea con una cantidad mínima de JavaScript.': 'Maintaining an instant bilingual experience with minimal JavaScript.',
  'Portada institucional': 'Institutional homepage',
  'Hero de EFOD sobre desarrollo humano en la Amazonía peruana': 'EFOD hero about human development in the Peruvian Amazon',
  'Transparencia y trayectoria': 'Transparency and track record',
  'Sección de EFOD sobre trayectoria, rendición de cuentas y equipo local': 'EFOD section covering its track record, accountability and local team',
  'Alcance territorial': 'Territorial reach',
  'Sección visual de EFOD sobre cuatro cuencas amazónicas intervenidas': 'EFOD visual section about four Amazon river basins',
  'Mapa interactivo': 'Interactive map',
  'Mapa de presencia territorial de EFOD en Huánuco y San Martín': 'Map of EFOD’s territorial presence in Huánuco and San Martín',

  // Pillket
  'E-ticketing y control de accesos': 'E-ticketing and access control',
  'Pillket es una plataforma integral de gestión de eventos, venta de entradas y control de accesos en tiempo real. Combina un marketplace para compradores, un panel para organizadores y una app móvil nativa con validación offline para el personal de puerta.': 'Pillket is a comprehensive platform for event management, ticket sales and real-time access control. It combines a buyer marketplace, an organizer dashboard and a native mobile app with offline validation for door staff.',
  'Landing de Pillket para crear y vender entradas de eventos': 'Pillket landing page for creating and selling event tickets',
  'Los organizadores y productores independientes pierden rentabilidad por las altas comisiones de las ticketeras tradicionales, que suelen absorber entre el 10% y 15% de cada venta. También deben enfrentar entradas clonadas, reembolsos manuales y accesos lentos en recintos con mala conectividad.': 'Independent organizers and producers lose profitability because traditional ticketing platforms often take between 10% and 15% of every sale. They must also deal with cloned tickets, manual refunds and slow entry processes at venues with poor connectivity.',
  'Pérdida de márgenes de ganancia por tarifas y comisiones elevadas.': 'Reduced profit margins due to high fees and commissions.',
  'Fraude y duplicidad de entradas mediante códigos QR estáticos o falsificados.': 'Ticket fraud and duplication through static or forged QR codes.',
  'Reembolsos manuales y burocráticos ante cancelaciones o postergaciones.': 'Manual and bureaucratic refunds after cancellations or postponements.',
  'Cuellos de botella al validar entradas en recintos masivos sin internet estable.': 'Entry bottlenecks at large venues without stable internet access.',
  'Pillket ofrece un entorno unificado de emisión, control y reembolso de boletos con una estructura de costos transparente.': 'Pillket provides a unified environment for issuing, validating and refunding tickets with a transparent cost structure.',
  'Comisiones competitivas, incluyendo campañas promocionales con 0% de comisión.': 'Competitive fees, including promotional campaigns with 0% commission.',
  'Marketplace con Culqi, autenticación 3D Secure 2.0 y reembolsos automatizados.': 'A marketplace with Culqi, 3D Secure 2.0 authentication and automated refunds.',
  'Boletos firmados criptográficamente para impedir falsificaciones y reutilización.': 'Cryptographically signed tickets that prevent forgery and reuse.',
  'App móvil nativa con validación offline, sincronización local y feedback háptico.': 'A native mobile app with offline validation, local synchronization and haptic feedback.',
  'Cancelaciones y reembolsos masivos procesados mediante colas en segundo plano.': 'Cancellations and bulk refunds processed through background queues.',
  'El producto utiliza una arquitectura desacoplada y multidispositivo. La SPA web, la API y la aplicación móvil comparten las reglas de negocio, pero mantienen responsabilidades independientes.': 'The product uses a decoupled, multi-device architecture. The web SPA, API and mobile app share business rules while maintaining independent responsibilities.',
  'SPA web con marketplace público y panel administrativo para organizadores.': 'A web SPA with a public marketplace and organizer dashboard.',
  'API REST con Laravel 12 y Redis para pagos, tickets y procesos asíncronos.': 'A REST API with Laravel 12 and Redis for payments, tickets and asynchronous processes.',
  'App móvil para iOS y Android construida con Expo y React Native.': 'A mobile app for iOS and Android built with Expo and React Native.',
  'Base de entradas sincronizada localmente para escanear con o sin conexión.': 'A locally synchronized ticket database for scanning online or offline.',
  'Control financiero con ventas, retenciones, comisiones y liquidaciones.': 'Financial control covering sales, holds, commissions and settlements.',
  'Firma criptográfica QR': 'Cryptographic QR signature',
  'Cada entrada se firma con HMAC-SHA256 utilizando un UUID v4 y una clave privada. El código no puede predecirse ni falsificarse.': 'Each ticket is signed with HMAC-SHA256 using a UUID v4 and a private key. The code cannot be predicted or forged.',
  'Validación offline descentralizada': 'Decentralized offline validation',
  'La app descarga las entradas al dispositivo y aplica la regla del primer escaneo. Los estados se sincronizan automáticamente cuando vuelve la conexión.': 'The app downloads tickets to the device and applies a first-scan rule. Statuses synchronize automatically when connectivity returns.',
  'Procesamiento asíncrono': 'Asynchronous processing',
  'Redis y Supervisor ejecutan reembolsos masivos, reintentos de Culqi y correos transaccionales sin bloquear la API.': 'Redis and Supervisor run bulk refunds, Culqi retries and transactional emails without blocking the API.',
  'Interfaz móvil optimizada': 'Optimized mobile interface',
  'Los eventos muestran estados dinámicos y acciones contextuales mediante componentes preparados para gestos y escaneo continuo.': 'Events display dynamic states and contextual actions through components designed for gestures and continuous scanning.',
  'Gestión de riesgo financiero': 'Financial risk management',
  'Un libro de balance registra retenciones, comisiones y débitos por cancelaciones para proteger los fondos de compradores y plataforma.': 'A balance ledger records holds, commissions and cancellation debits to protect buyer and platform funds.',
  'Resolver conflictos cuando varios porteros escanean entradas sin conexión de forma simultánea.': 'Resolving conflicts when multiple door staff scan tickets offline at the same time.',
  'Mantener idempotencia en pagos, cancelaciones y emisión de tickets bajo alta concurrencia.': 'Maintaining idempotency across payments, cancellations and ticket issuance under high concurrency.',
  'Gestionar fallas bancarias, tiempos de espera y métodos manuales dentro de los reembolsos de Culqi.': 'Handling bank failures, timeouts and manual methods within Culqi refund flows.',
  'Optimizar la cámara de Expo y la respuesta visual del escáner durante ingresos de alto tráfico.': 'Optimizing the Expo camera and scanner feedback during high-traffic entry periods.',
  'Landing para organizadores': 'Organizer landing page',
  'Detalle y compra de entradas': 'Event details and ticket purchase',
  'Página de un evento en Pillket con selección de entradas': 'Pillket event page with ticket selection',
  'Detalle de liquidación': 'Settlement details',
  'Modal de Pillket con el cálculo y recorrido de una liquidación': 'Pillket modal showing a settlement calculation and flow',
  'Panel de pagos': 'Payments dashboard',
  'Panel de organizador de Pillket con resumen de pagos y transferencias': 'Pillket organizer dashboard with payment and transfer summaries',
};

const originalText = new WeakMap<Text, string>();
const originalAttributes = new WeakMap<Element, Map<string, string>>();
const translatableAttributes = ['aria-label', 'alt', 'placeholder', 'title', 'content', 'value'];

function translateValue(value: string, language: Language) {
  if (language === 'es') return value;
  const trimmed = value.trim();
  let translation = translations[trimmed];
  if (!translation && trimmed.startsWith('Caso de estudio · ')) {
    const type = trimmed.slice('Caso de estudio · '.length);
    translation = `Case study · ${translations[type] ?? type}`;
  }
  if (!translation && trimmed.startsWith('Repositorio · ')) {
    const visibility = trimmed.slice('Repositorio · '.length);
    translation = `Repository · ${translations[visibility] ?? visibility}`;
  }
  if (!translation && trimmed.startsWith('Siguiente: ')) {
    translation = `Next: ${trimmed.slice('Siguiente: '.length)}`;
  }
  if (!translation && trimmed.startsWith('↳ ')) {
    const point = trimmed.slice(2);
    translation = `↳ ${translations[point] ?? point}`;
  }
  if (!translation && trimmed.startsWith('Abrir captura: ')) {
    const label = trimmed.slice('Abrir captura: '.length);
    translation = `Open screenshot: ${translations[label] ?? label}`;
  }
  if (!translation && trimmed.endsWith(', por dentro.')) {
    translation = `${trimmed.slice(0, -', por dentro.'.length)}, inside.`;
  }
  if (!translation) return value;
  const leading = value.match(/^\s*/)?.[0] ?? '';
  const trailing = value.match(/\s*$/)?.[0] ?? '';
  return `${leading}${translation}${trailing}`;
}

function translateTextNode(node: Text, language: Language) {
  if (!originalText.has(node)) originalText.set(node, node.nodeValue ?? '');
  const source = originalText.get(node) ?? '';
  const nextValue = translateValue(source, language);
  if (node.nodeValue !== nextValue) node.nodeValue = nextValue;
}

function translateAttributes(element: Element, language: Language) {
  let sourceAttributes = originalAttributes.get(element);
  if (!sourceAttributes) {
    sourceAttributes = new Map<string, string>();
    originalAttributes.set(element, sourceAttributes);
  }

  translatableAttributes.forEach((attribute) => {
    if (!element.hasAttribute(attribute)) return;
    if (!sourceAttributes!.has(attribute)) sourceAttributes!.set(attribute, element.getAttribute(attribute) ?? '');
    const source = sourceAttributes!.get(attribute) ?? '';
    const nextValue = translateValue(source, language);
    if (element.getAttribute(attribute) !== nextValue) element.setAttribute(attribute, nextValue);
  });
}

function translateTree(root: ParentNode, language: Language) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();
  while (node) {
    translateTextNode(node as Text, language);
    node = walker.nextNode();
  }

  if (root instanceof Element) translateAttributes(root, language);
  root.querySelectorAll('*').forEach((element) => translateAttributes(element, language));
}

function updateResumeLink(language: Language) {
  const resumeLink = document.querySelector<HTMLAnchorElement>('a[download][href^="/cv/lucas-melgar-cv"]');
  if (!resumeLink) return;
  if (language === 'en') {
    resumeLink.href = '/cv/lucas-melgar-cv-en.docx';
    resumeLink.download = 'Lucas-Melgar-Resume-EN.docx';
  } else {
    resumeLink.href = '/cv/lucas-melgar-cv.pdf';
    resumeLink.download = 'Lucas-Melgar-CV.pdf';
  }
}

function updateSwitch(language: Language) {
  document.querySelectorAll<HTMLButtonElement>('[data-language-option]').forEach((button) => {
    const active = button.dataset.languageOption === language;
    button.setAttribute('aria-pressed', String(active));
  });
}

function applyLanguage(language: Language, announce = false) {
  document.documentElement.lang = language;
  document.documentElement.dataset.language = language;
  translateTree(document, language);
  updateResumeLink(language);
  updateSwitch(language);

  const status = document.querySelector<HTMLElement>('#language-status');
  if (status && announce) status.textContent = language === 'en' ? 'Language changed to English' : 'Idioma cambiado a español';

  window.dispatchEvent(new CustomEvent('portfolio-language-change', { detail: { language } }));
}

function readLanguage(): Language {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'es';
  } catch {
    return 'es';
  }
}

let currentLanguage = readLanguage();
applyLanguage(currentLanguage);

document.addEventListener('click', (event) => {
  const button = (event.target as Element | null)?.closest<HTMLButtonElement>('[data-language-option]');
  if (!button) return;
  const language = button.dataset.languageOption === 'en' ? 'en' : 'es';
  if (language === currentLanguage) return;
  currentLanguage = language;
  try { localStorage.setItem(STORAGE_KEY, language); } catch {}
  applyLanguage(language, true);
});

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) translateTextNode(node as Text, currentLanguage);
      if (node instanceof Element) translateTree(node, currentLanguage);
    });
  });
  updateSwitch(currentLanguage);
});

observer.observe(document.body, { childList: true, subtree: true });
