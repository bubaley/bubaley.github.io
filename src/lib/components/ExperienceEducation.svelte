<script lang="ts">
  import { locale, t } from '$lib/stores/i18n';
  
  interface Job {
    title: string;
    company: string;
    location: string;
    period: string;
    current: boolean;
    responsibilities: string[];
  }
  
  interface Education {
    institution: string;
    degree: string;
    period: string;
    type: 'formal' | 'additional';
    description?: string;
  }
  
  const experiences: Job[] = [
    {
      title: 'Руководитель отдела разработки',
      company: 'ООО Корекс',
      location: '',
      period: 'октябрь 2020 — по настоящее время',
      current: true,
      responsibilities: [
        'Руководство разработкой экосистемы SaaS-продуктов',
        'Архитектура, наставничество, DevOps-процессы',
        'Найм и обучение сотрудников',
        'Контроль бюджета и сроков'
      ]
    },
    {
      title: 'Фриланс (Fullstack разработка)',
      company: 'удалённо',
      location: '',
      period: 'декабрь 2018 — сентябрь 2020',
      current: false,
      responsibilities: [
        'Ведение проектов под ключ: архитектура, backend/frontend, деплой',
        'Работа с заказчиками напрямую, гибкое планирование'
      ]
    },
    {
      title: 'Разработчик / Внедрение 1С',
      company: 'Первый Бит',
      location: '',
      period: 'март 2018 — ноябрь 2018',
      current: false,
      responsibilities: [
        'Автоматизация бизнес-процессов, кастомизация 1С',
        'Разработка конфигураций 1С с нуля',
      ]
    },
  ];
  
  const education: Education[] = [
    {
      institution: 'КГТУ, Калининград',
      degree: 'Прикладная информатика в экономике',
      period: '2014–2018',
      type: 'formal'
    },
    {
      institution: 'Конференции',
      degree: '',
      period: 'Ongoing',
      type: 'additional',
      description: 'Выступал на четырёх профильных конференциях, где представлял наши продукты и делился опытом их применения для решения актуальных задач клиентов. '
    }
  ];
</script>

<section class="py-20 bg-gradient-to-b from-black to-gray-900">
  <div class="container mx-auto px-6">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold mb-6">
        <span class="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Experience & Education
        </span>
      </h2>
    </div>
    
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        <!-- Experience Section -->
        <div>
          <h3 class="text-2xl font-bold text-white mb-8 text-center">
            <span class="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h3>
          
          <div class="space-y-6">
            {#each experiences as job}
              <div class="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 card-glow">
                <!-- Job Header -->
                <div class="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div class="flex-1">
                    <h4 class="text-xl font-bold text-white mb-2">{job.title}</h4>
                    <div class="flex items-center text-blue-400 font-medium mb-2">
                      <span>📍 {job.company}</span>
                      {#if job.location}
                        <span class="ml-2">, {job.location}</span>
                      {/if}
                    </div>
                    <p class="text-gray-400 text-sm">{job.period}</p>
                  </div>
                  <div class="mt-4 md:mt-0">
                    <span 
                      class="px-3 py-1 rounded-full font-medium text-xs {job.current ? 'bg-gradient-to-r from-green-400 to-blue-500 text-black' : 'bg-gray-600 text-white'}"
                    >
                      {job.current ? 'Текущая' : 'Завершено'}
                    </span>
                  </div>
                </div>
                
                <!-- Responsibilities -->
                <div class="space-y-2">
                  {#each job.responsibilities as responsibility}
                    <div class="flex items-start space-x-2">
                      <div class="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p class="text-gray-300 text-sm">{responsibility}</p>
                    </div>
                  {/each}
                </div>
              </div>
            {/each}
          </div>
        </div>
        
        <!-- Education Section -->
        <div>
          <h3 class="text-2xl font-bold text-white mb-8 text-center">
            <span class="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Education
            </span>
          </h3>
          
          <div class="space-y-6">
            {#each education as edu}
              <div class="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 card-glow">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 class="text-xl font-bold text-white mb-2">{edu.institution}</h4>
                    <p class="text-blue-400 font-medium">{edu.degree}</p>
                  </div>
                </div>
                {#if edu.description}
                    <div class="text-gray-400 text-sm">{edu.description}</div>
                  {/if}
              </div>
            {/each}
            
            <!-- Additional Skills Block -->
            <div class="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 card-glow">
              <h4 class="text-lg font-bold text-white mb-4">Дополнительные навыки</h4>
              <div class="space-y-2">
                {#each ['Team Leadership & Management', 'Software Architecture', 'Code Review & Mentoring', 'Project Planning', 'Technical Writing'] as skill}
                  <div class="flex items-center space-x-2">
                    <div class="w-1.5 h-1.5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex-shrink-0"></div>
                    <p class="text-gray-300 text-sm">{skill}</p>
                  </div>
                {/each}
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</section> 