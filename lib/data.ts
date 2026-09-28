import { IProject, IStackItem } from '@/types';

export const GENERAL_INFO = {
    name: 'Sarthak Lal',
    firstName: 'Sarthak',
    email: 'sarthaklal5@gmail.com',

    emailSubject: "Let's work together",
    emailBody: 'Hi Sarthak, I am reaching out to you because...',

    github: 'https://github.com/sarthaklal',
    linkedin: 'https://www.linkedin.com/in/sarthaklal',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: GENERAL_INFO.github },
    { name: 'linkedin', url: GENERAL_INFO.linkedin },
    { name: 'email', url: `mailto:${GENERAL_INFO.email}` },
];

// `invert` is for dark logos that would disappear on the dark background.
// Items without an icon render as a text badge.
export const MY_STACK: Record<string, IStackItem[]> = {
    languages: [
        { name: 'Java', icon: '/logo/java.svg' },
        { name: 'Python', icon: '/logo/python.svg' },
        { name: 'JavaScript', icon: '/logo/js.png' },
        { name: 'TypeScript', icon: '/logo/ts.png' },
        { name: 'C++', icon: '/logo/cplusplus.svg' },
        { name: 'SQL', icon: '/logo/mysql.svg' },
    ],
    frontend: [
        { name: 'HTML', icon: '/logo/html5.svg' },
        { name: 'CSS', icon: '/logo/css3.svg' },
        { name: 'React', icon: '/logo/react.png' },
        { name: 'Tailwind CSS', icon: '/logo/tailwind.png' },
    ],
    backend: [
        { name: 'Microservices' },
        { name: 'API Gateway' },
        { name: 'FastAPI', icon: '/logo/fastapi.svg' },
        { name: 'Streamlit', icon: '/logo/streamlit.svg' },
        { name: 'REST APIs' },
        { name: 'WebSockets' },
    ],
    'ai / ml': [
        { name: 'LLMs' },
        { name: 'RAG' },
        { name: 'AI Agents' },
        { name: 'MCP' },
        { name: 'Multimodal AI' },
        { name: 'Ollama' },
        { name: 'ChromaDB' },
        { name: 'SentenceTransformers' },
        { name: 'NumPy', icon: '/logo/numpy.svg' },
        { name: 'Pandas', icon: '/logo/pandas.svg' },
        { name: 'Scikit-learn', icon: '/logo/scikitlearn.svg' },
        { name: 'Matplotlib', icon: '/logo/matplotlib.svg' },
        { name: 'Jupyter', icon: '/logo/jupyter.svg' },
    ],
    'data & messaging': [
        { name: 'MySQL', icon: '/logo/mysql.svg' },
        { name: 'MongoDB', icon: '/logo/mongodb.svg' },
        { name: 'Firebase', icon: '/logo/firebase.svg' },
        { name: 'Supabase', icon: '/logo/supabase.svg' },
        { name: 'Redis', icon: '/logo/redis.svg' },
    ],
    'cloud & devops': [
        { name: 'AWS (EC2, S3)', icon: '/logo/aws.png' },
        { name: 'Docker', icon: '/logo/docker.svg' },
        { name: 'Kubernetes', icon: '/logo/kubernetes.svg' },
        { name: 'Linux', icon: '/logo/linux.svg' },
        { name: 'Nginx', icon: '/logo/nginx.svg' },
        { name: 'Jenkins', icon: '/logo/jenkins.svg' },
        { name: 'GitHub Actions', icon: '/logo/githubactions.svg' },
        { name: 'Vercel', icon: '/logo/vercel.svg', invert: true },
        { name: 'Git', icon: '/logo/git.png' },
        { name: 'GitHub', icon: '/logo/github.png' },
    ],
    'monitoring & testing': [
        { name: 'Prometheus', icon: '/logo/prometheus.svg' },
        { name: 'Grafana', icon: '/logo/grafana.svg' },
        { name: 'Zipkin' },
        { name: 'Pytest', icon: '/logo/pytest.svg' },
        { name: 'OAuth2', icon: '/logo/oauth.svg' },
        { name: 'SonarQube', icon: '/logo/sonarqube.svg' },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Argus',
        slug: 'argus',
        sourceCode: GENERAL_INFO.github,
        year: 2025,
        description: `
      An AI-powered IT ticket resolution platform that automates ticket triage and resolution. <br/><br/>

      Key Features:<br/>
      <ul>
        <li>🧠 LLM-based ticket classification and generation of resolution steps</li>
        <li>🔒 Isolated sandbox execution service that runs generated steps safely</li>
        <li>🧩 3-tier microservices architecture: React frontend, FastAPI REST backend, sandbox service</li>
      </ul><br/>

      Technical Highlights:
      <ul>
        <li>Every service containerized with Docker</li>
        <li>4 CI/CD pipelines in GitHub Actions for linting, type-checking and pytest suites</li>
        <li>Versioned image publishing to GHCR, cutting manual release effort</li>
      </ul>
      `,
        role: `
      Architect & Full-Stack Developer <br/>
      <ul>
        <li>✅ Designed the microservice boundaries and the REST contract between services</li>
        <li>🤖 Built the LLM classification and resolution pipeline</li>
        <li>🚀 Set up the Docker + GitHub Actions + GHCR release workflow</li>
      </ul>
      `,
        techStack: [
            'FastAPI',
            'React',
            'LLM',
            'Docker',
            'GitHub Actions',
            'Pytest',
            'GHCR',
        ],
        thumbnail: '/projects/thumbnail/argus.svg',
        longThumbnail: '/projects/long/argus.svg',
        images: ['/projects/images/argus-1.svg'],
    },
    {
        title: 'DocuBot',
        slug: 'docubot',
        year: 2024,
        description: `
      A RAG-based multimodal PDF chatbot built during my internship at PowerGrid Corporation of India. It answers questions over large internal PDF collections using context-aware retrieval. <br/><br/>

      Highlights:<br/>
      <ul>
        <li>🎯 93% retrieval accuracy on document question answering</li>
        <li>⚡ Semantic search pipeline with SentenceTransformers + Annoy that cut document analysis time by 80%</li>
        <li>🧠 Mistral-7B for grounded answer generation</li>
      </ul>
      `,
        role: `
      Software Development Intern, PowerGrid <br/>
      <ul>
        <li>Owned the module end-to-end, from architecture through deployment</li>
        <li>Built the embedding + vector index pipeline and the Flask/Streamlit app</li>
        <li>Optimized backend REST APIs and database queries</li>
      </ul>
      `,
        techStack: [
            'Python',
            'RAG',
            'Mistral-7B',
            'SentenceTransformers',
            'Annoy',
            'Flask',
            'Streamlit',
        ],
        thumbnail: '/projects/thumbnail/docubot.svg',
        longThumbnail: '/projects/long/docubot.svg',
        images: ['/projects/images/docubot-1.svg'],
    },
    {
        title: 'CreditWise',
        slug: 'creditwise',
        sourceCode: GENERAL_INFO.github,
        year: 2025,
        description: `
      An AI-powered credit risk assessment platform that automates loan eligibility evaluation. <br/><br/>

      Highlights:<br/>
      <ul>
        <li>📊 92% prediction accuracy on loan eligibility</li>
        <li>⚡ Batch scoring pipeline that processes 500+ loan applications in under 5 seconds</li>
        <li>🤖 Automated risk classification that cut manual evaluation effort by 85%</li>
      </ul>
      `,
        role: `
      Full-Stack & ML Developer <br/>
      <ul>
        <li>Trained and evaluated the risk classification model</li>
        <li>Built the FastAPI scoring service and batch pipeline</li>
        <li>Built the React dashboard with Supabase for auth and storage</li>
      </ul>
      `,
        techStack: [
            'React',
            'FastAPI',
            'Supabase',
            'Scikit-learn',
            'Pandas',
            'Machine Learning',
        ],
        thumbnail: '/projects/thumbnail/creditwise.svg',
        longThumbnail: '/projects/long/creditwise.svg',
        images: ['/projects/images/creditwise-1.svg'],
    },
    {
        title: 'TradeFlow',
        slug: 'tradeflow',
        sourceCode: GENERAL_INFO.github,
        year: 2025,
        description: `
      A full-stack AI trading platform with live market data for 50+ stocks and an AI financial assistant. <br/><br/>

      Highlights:<br/>
      <ul>
        <li>🔐 JWT-based authentication with role-based access control</li>
        <li>📈 15+ RESTful APIs serving live market data at 180 ms average latency</li>
        <li>🤖 AI financial assistant that handled 2,000+ user queries and cut stock research time by about 40%</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      <ul>
        <li>Designed the REST API layer, auth and RBAC</li>
        <li>Integrated the market data feeds and the LLM-powered assistant</li>
        <li>Built the React trading UI</li>
      </ul>
      `,
        techStack: ['React', 'REST APIs', 'JWT', 'RBAC', 'LLM', 'AI Assistant'],
        thumbnail: '/projects/thumbnail/tradeflow.svg',
        longThumbnail: '/projects/long/tradeflow.svg',
        images: ['/projects/images/tradeflow-1.svg'],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Software Development Intern',
        company: 'PowerGrid Corporation of India Limited',
        duration: 'May 2024 - Sept 2024',
    },
    {
        title: 'President',
        company: 'CloudX SRMIST',
        duration: '2024 - 2026',
    },
    {
        title: 'Creative Lead',
        company: 'Ramanujan Mathematics Club',
        duration: '2024 - 2026',
    },
    {
        title: 'Sponsorship Head',
        company: 'TPHxSRMIST',
        duration: '2024 - 2026',
    },
];

export const ACHIEVEMENTS = [
    { title: 'Smart India Hackathon', detail: 'Top 15 Teams (2023, 2024)' },
    { title: 'Finshield Hackathon, IIT Hyderabad', detail: 'Top 5 Finalist' },
    {
        title: 'DayZero National Hackathon',
        detail: '4th Position (3000+ participants)',
    },
    { title: 'AWS Cloud Practitioner', detail: 'AWS Certification' },
    { title: 'AWS AI Practitioner', detail: 'AWS Certification' },
    { title: 'Programming in Java', detail: 'NPTEL' },
    { title: 'Introduction to Machine Learning', detail: 'NPTEL' },
];
