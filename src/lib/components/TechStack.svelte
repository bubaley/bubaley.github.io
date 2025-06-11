<script lang="ts">
  import { locale, t } from '$lib/stores/i18n';
  
  interface Technology {
    name: string;
    icon: string;
    color: string;
    proficiency: number;
  }
  
  interface TechSkill {
    name: string;
    level: number; // 1, 2, or 3
  }
  
  const categories = [
    { 
      title: 'Backend', 
      skills: [
        { name: '🐍 Python', level: 3 },
        { name: '🌟 Django + DRF', level: 3 },
        { name: '🐘 PostgreSQL', level: 3 },
        { name: '🌾 Celery', level: 3 },
        { name: '🌀 Go + Gin', level: 2 },
        { name: '🔴 Redis', level: 2 },
        { name: '🏎️ FastAPI', level: 1 },
      ]
    },
    { 
      title: 'Frontend', 
      skills: [
        { name: '💚 Vue 2, 3', level: 3 },
        { name: '💛 JS + TS', level: 3 },
        { name: '🕌 Quasar', level: 3 },
        { name: '🫐 Vuetify', level: 3 },
        { name: '🎨 Tailwind CSS', level: 2 }
      ]
    },
    { 
      title: 'DevOps', 
      skills: [
        { name: '🐳 Docker + Compose', level: 3 },
        { name: '🐧 Linux', level: 3 },
        { name: '⚡ GitHub Actions', level: 2 },
        { name: '🌐 Nginx + Traefik', level: 2 },
        { name: '♻️ Loki + promtail', level: 2 },
        { name: '💽 Prometheus', level: 2 },
        { name: '📈 Grafana', level: 2 },
        { name: '🤖 N8N', level: 1 },
      ]
    }
  ];
  
  function renderSkillLevel(level: number): string {
    return '|'.repeat(level);
  }
</script>

<section class="py-20 ">
  <div class="container mx-auto px-6">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold mb-6">
        <span class="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>
      <p class="text-xl text-gray-400 max-w-3xl mx-auto">
        {t($locale, 'techStack.subtitle')}
      </p>
    </div>
    
    <!-- Categories -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each categories as category, index}
        <div 
          class="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 card-glow"
          class:md:col-span-2={index === 2}
          class:lg:col-span-1={index === 2}
        >
          <h3 class="text-2xl font-bold mb-6 text-center">
            <span class="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {category.title}
            </span>
          </h3>
          <div class="space-y-3">
            {#each category.skills as skill}
              <div class="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-colors">
                <span class="text-gray-300 font-medium">{skill.name}</span>
                <span class="text-blue-400 font-mono text-lg font-bold">{renderSkillLevel(skill.level)}</span>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section> 