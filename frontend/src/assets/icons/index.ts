export const TECH_ICONS = {
  python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  django: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
  typescript:
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  react: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  scala: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg',
  play: 'https://www.playframework.com/assets/images/logos/play_full_color.svg',

  // Version Control
  git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',

  // Cloud & Infrastructure
  aws: 'aws.svg',
  kafka: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg',

  // Monitoring & Error Tracking
  datadog: 'dd_icon_rgb.svg',
  splunk: 'splunk.svg',
  sentry: 'sentry.svg',

  // AI Platforms
  chatgpt: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
  claude: 'claude.svg',
} as const;

export type TechIcon = keyof typeof TECH_ICONS;
