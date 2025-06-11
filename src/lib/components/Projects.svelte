<script lang="ts">
//   import { locale, t } from '$lib/stores/i18n';

  interface Project {
    id: string;
    name: string;
    description: string;
    emoji: string;
    gradient: string;
    category: string;
  }

  const projects: Project[] = [
    {
      id: 'loyalhub',
      name: 'Loyalhub',
      description: 'Универсальная SaaS-платформа для ресторанов с мобильными приложениями, чат-ботами и программами лояльности',
      emoji: '🚀',
      gradient: 'from-blue-500 to-purple-600',
      category: 'web'
    },
    {
      id: 'corex-tasks',
      name: 'Corex.Tasks',
      description: 'Собственный Task Tracker, созданный под реальные потребности команды разработки',
      emoji: '🗂️',
      gradient: 'from-green-500 to-teal-600',
      category: 'web'
    },
    {
      id: 'corex-market',
      name: 'Corex.Market',
      description: 'B2B-маркетплейс для автоматизации взаимодействия между поставщиками и покупателями в сфере HoReCa',
      emoji: '🛒',
      gradient: 'from-orange-500 to-red-600',
      category: 'web'
    },
    {
      id: 'domaestro',
      name: 'Domaestro',
      description: 'Система управления DNS и SSL для замены зарубежных сервисов и полного контроля инфраструктуры',
      emoji: '🌐',
      gradient: 'from-indigo-500 to-purple-600',
      category: 'infrastructure'
    }
  ];
</script>

<section class="py-20 bg-gradient-to-b from-black to-gray-900">
  <div class="container mx-auto px-6">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold mb-6">
        <span class="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Projects
        </span>
      </h2>
      <p class="text-xl text-gray-400 max-w-3xl mx-auto">
        <span class="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-bold">Проекты</span>, про которые хочется рассказать
      </p>
    </div>
    
    <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {#each projects as project}
        <a 
          href="/projects/{project.id}"
          class="group block bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden card-glow hover:border-gray-600 transition-all duration-300"
        >
          <!-- Project Emoji with Gradient Background -->
          <div class="relative h-48 overflow-hidden bg-gradient-to-br {project.gradient} flex items-center justify-center">
            <div class="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:border-white/40 group-hover:bg-white/20 transition-all duration-300">
              <div class="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                {project.emoji}
              </div>
            </div>
            <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
          </div>
          
          <!-- Project Info -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
              {project.name}
            </h3>
            <p class="text-gray-400 leading-relaxed">
              {project.description}
            </p>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section> 