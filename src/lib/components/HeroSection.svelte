<script lang="ts">
  import { locale, t } from '$lib/stores/i18n';
  
  // Component for animated typing effect
  let typedText = '';
  const roles = ['Full Stack Developer', 'Technical Lead', 'Project Manager', 'DevOps Engineer'];
  let currentRoleIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;
  
  function typeEffect() {
    const currentRole = roles[currentRoleIndex];
    
    if (isDeleting) {
      typedText = currentRole.substring(0, currentCharIndex - 1);
      currentCharIndex--;
    } else {
      typedText = currentRole.substring(0, currentCharIndex + 1);
      currentCharIndex++;
    }
    
    if (!isDeleting && currentCharIndex === currentRole.length) {
      setTimeout(() => isDeleting = true, 2000);
    } else if (isDeleting && currentCharIndex === 0) {
      isDeleting = false;
      currentRoleIndex = (currentRoleIndex + 1) % roles.length;
    }
    
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
  
  // Start typing effect when component mounts
  import { onMount } from 'svelte';
  onMount(() => {
    typeEffect();
  });
</script>

<section class="min-h-screen flex items-center justify-center relative overflow-hidden">
  <!-- Background gradient -->
  <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
  <!-- Animated background particles -->
  <div class="absolute inset-0">
    {#each Array(50) as _, i}
      <div 
        class="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
        style="left: {Math.random() * 100}%; top: {Math.random() * 100}%; animation-delay: {Math.random() * 2}s;"
      ></div>
    {/each}
  </div>
  
  <div class="container mx-auto px-6 relative z-10">
    <div class="text-center max-w-4xl mx-auto">
      <!-- Greeting -->
      <div class="flex justify-center mb-8">
        <img src="/profile.jpg" class="grayscale border-1 border-white w-45 h-45 rounded-full" alt="profile"/>
      </div>
      <div class="mb-8">
        <span class="text-lg text-gray-400 font-medium">{t($locale, 'hero.greeting')}</span>
      </div>
      
      <!-- Main title with gradient -->
      <h1 class="text-5xl md:text-7xl font-bold mb-6 text-glow">
        <span class="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
          {t($locale, 'hero.title')}
        </span>
      </h1>
      
      <!-- Social Links under title -->
      <div class="flex justify-center space-x-6 mb-8">
        <a 
          href="https://github.com/bubaley" 
          target="_blank" 
          rel="noopener noreferrer"
          class="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
        >
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <span class="hidden sm:inline">GitHub</span>
        </a>
        <a 
          href="https://t.me/bubaley" 
          target="_blank" 
          rel="noopener noreferrer"
          class="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
        >
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.789l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"/>
          </svg>
          <span class="hidden sm:inline">Telegram</span>
        </a>
      </div>
      
      <!-- Animated subtitle -->
      <div class="text-2xl md:text-3xl text-gray-300 mb-8 h-12 flex items-center justify-center">
        <span class="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-semibold">
          {typedText}
        </span>
        <span class="animate-pulse text-blue-400 ml-1">|</span>
      </div>
      
      <!-- Description -->
      <p class="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
        <span class="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-bold">Developer и Tech Lead</span> с более чем 6-летним опытом в IT. Прошел путь от внедрения решений на базе 1С до руководства отделом разработки и построения SaaS-платформ с нуля. Специализируюсь на Python (Django/DRF) и Vue.js, проектирую архитектуру, <span class="text-blue-400 font-bold">управляю командой</span>. Берусь за задачи системно: от идеи до финального продукта. Умею не только писать код, но и строить процессы, развивать людей и закрывать <span class="text-purple-400 font-bold">бизнес-цели</span>.
        <!-- {t($locale, 'hero.description')} -->
      </p>
    
    </div>
  </div>
</section> 