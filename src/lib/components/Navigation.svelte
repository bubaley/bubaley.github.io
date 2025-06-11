<script lang="ts">
  import { page } from '$app/stores';
  import { locale, t } from '$lib/stores/i18n';
  import LanguageSwitcher from './LanguageSwitcher.svelte';
  
  $: currentPath = $page.url.pathname;
  
  $: navItems = [
    {
      href: '/',
      label: ''
    },
    
  ];
</script>

<nav class="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
  <div class="container mx-auto px-6 py-4">
    <div class="flex items-center justify-between">
      <!-- Logo/Name -->
      <a href="/" class="text-2xl font-bold text-glow">
        <span class="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          @bubaley
        </span>
      </a>
      
      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-8">
        {#each navItems as item}
          <a 
            href={item.href}
            class="relative text-gray-300 hover:text-white transition-colors duration-300 group"
            class:text-white={currentPath === item.href}
          >
            {item.label}
            <span 
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"
              class:w-full={currentPath === item.href}
            ></span>
          </a>
        {/each}
        
        <!-- Social Links -->
        <div class="flex items-center space-x-4">
          <a 
            href="https://github.com/bubaley" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-gray-300 hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a 
            href="https://t.me/bubaley" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-gray-300 hover:text-white transition-colors duration-200"
            aria-label="Telegram"
          >
            <svg class="w-5 h-5 ml-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.789l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"/>
            </svg>
          </a>
        </div>
        
        <!-- Language Switcher -->
        <!-- <LanguageSwitcher /> -->
      </div>
      
      <!-- Mobile Navigation -->
      <div class="md:hidden flex items-center space-x-4">
        <!-- Mobile Language Switcher -->
        <!-- <LanguageSwitcher /> -->
        
        <button class="text-white" aria-label="Toggle menu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</nav> 