<script lang="ts">
  import { locale, t } from '$lib/stores/i18n';
  
  interface OpenSourceProject {
    name: string;
    description: string;
    technologies: string[];
    icon: string;
    githubUrl: string;
    stars?: number;
  }
  
  interface Service {
    name: string;
    description: string;
    isOpenSource?: boolean;
    githubUrl?: string;
    link?: string;
    tags?: string[];
    dots?: string[];
  }

  const services: Service[] = [
    {
      name: 'Production Django Docker Example',
      description: 'Готовый пример для быстрого старта Django проектов. Создан для ускорения разработки и уменьшения времени на запуск проекта.',
      isOpenSource: true,
      githubUrl: 'https://github.com/bubaley/production-django-docker-example',
      tags: ['Python 3.13', 'Django + DRF', 'Celery', 'CI/CD', 'Dockerhub']
    },
    {
      name: 'Air DRF Relation',
      description: 'Библиотека для Django REST Framework для упрощения работы с Serializers.',
      dots: [
        'Автоматические select_related, prefetch_related при репрезентации объектов',
        'Предзагрузка связанных объектов перед валидацией и сохранением',
        'Возможность работать со связанным сериализатором как с PrimaryKeyRelatedField',
      ],

      isOpenSource: true,
      githubUrl: 'https://github.com/bubaley/air-drf-relation',
      tags: ['Django + DRF', 'Python', 'Package', 'Optimization']
    },
    {
      name: 'UV Versions Manager',
      description: 'Возможность проверять и обновлять версии установленных пакетов в VS Code при работе с UV',
      isOpenSource: true,
      githubUrl: 'https://github.com/bubaley/uv-versions-manager',
      tags: ['VS Code', 'Python', 'UV', 'Package']
    },
    {
      name: 'Websocket Service',
      description: 'Сервис для простого управления websocket каналами. Все настройки задаются в yaml файле. Включает в себя: авторизацию, подписку на каналы, отправку сообщений в каналы.',
      tags: ['Go', 'Service']
    },
    {
      name: 'Discount Service',
      description: 'Сервис для расчета скидок на товары. Используется в нескольких больших проектах.',
      dots: [
        'Фиксированные цены, скидки на товары и категории',
        'Индивидуальные схемы ценовой политики на компанию или группу',
        'Наследование схемы ценовой политики с возможность переопределния',
      ],
      tags: ['Go', 'Service']
    },
    {
      name: 'PUSH Service',
      description: 'Сервис для массовой отправки PUSH уведомлений с контролем доставки.',
      tags: ['Django', 'DRF', 'Celery']
    },
    {
      name: 'Times Calculation Service',
      description: 'Сервис для поиска оптимальных свободных временных слотов с учетом нагрузки и занятости оборудования, с целью предоставить клиенту реальное время выполнения работ.',
      tags: ['Go', 'Service', 'Optimization', 'Hignload']
    },
  ];
</script>

<section class="py-20 bg-gradient-to-b from-gray-900 to-black">
  <div class="container mx-auto px-6">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold mb-6">
        <span class="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Services
        </span>
      </h2>
      <p class="text-xl text-gray-400 max-w-3xl mx-auto">
        Еще немного проектов и сервисов
      </p>
    </div>
    
    <div class="max-w-4xl mx-auto space-y-4">
      {#each services as service}
        <div class="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 card-glow hover:border-gray-600 transition-all duration-300">
          <div class="flex items-start justify-between">
            <div class="flex-1">
              <div class="flex items-center space-x-3 mb-2">
                <h3 class="text-lg font-bold text-white">
                  {service.name}
                </h3>
                {#if service.isOpenSource}
                  <span class="px-2 py-1 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded text-xs text-green-300">
                    Open Source
                  </span>
                {/if}
              </div>
              <p class="text-gray-400 leading-relaxed mb-3">
                {service.description}
              </p>
              {#if service.dots}
                <ul class="list-disc list-inside text-gray-400 mb-3">
                  {#each service.dots as dot}
                    <li>{dot}</li>
                  {/each}
                </ul>
              {/if}
              {#if service.tags}
                <div class="flex flex-wrap gap-2">
                  {#each service.tags as tag}
                    <span class="px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded text-xs text-blue-300">
                      {tag}
                    </span>
                  {/each}
                </div>
              {/if}
            </div>
            {#if service.githubUrl}
              <a 
                href={service.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                class="ml-4 text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="View on GitHub"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            {/if}
          </div>
        </div>
      {/each}
    </div>
    <div class="flex justify-center mt-5 text-gray-600">
      etc.
    </div>
  </div>
</section> 