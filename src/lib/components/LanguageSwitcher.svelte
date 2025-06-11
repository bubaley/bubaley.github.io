<script lang="ts">
  import { locale, type Locale } from '$lib/stores/i18n';
  
  let showDropdown = false;
  
  const languages = [
    { code: 'ru' as Locale, name: 'Русский', flag: '🇷🇺' },
    { code: 'en' as Locale, name: 'English', flag: '🇺🇸' }
  ];
  
  $: currentLanguage = languages.find(lang => lang.code === $locale);
  
  function switchLanguage(lang: Locale) {
    locale.set(lang);
    showDropdown = false;
  }
  
  function toggleDropdown() {
    showDropdown = !showDropdown;
  }
  
  // Close dropdown when clicking outside
  function handleClickOutside() {
    showDropdown = false;
  }
</script>

<div class="relative">
  <button
    on:click={toggleDropdown}
    class="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50"
    aria-label="Switch language"
  >
    <span class="text-lg">{currentLanguage?.flag}</span>
    <span class="hidden sm:block text-sm font-medium">{currentLanguage?.code.toUpperCase()}</span>
    <svg 
      class="w-4 h-4 transition-transform duration-200" 
      class:rotate-180={showDropdown}
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </button>
  
  {#if showDropdown}
    <!-- Backdrop -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div 
      class="fixed inset-0 z-40"
      on:click={handleClickOutside}
    ></div>
    
    <!-- Dropdown -->
    <div class="absolute right-0 top-full mt-2 w-40 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-50 overflow-hidden">
      {#each languages as language}
        <button
          on:click={() => switchLanguage(language.code)}
          class="w-full flex items-center space-x-3 px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200"
          class:bg-gray-700={$locale === language.code}
          class:text-white={$locale === language.code}
        >
          <span class="text-lg">{language.flag}</span>
          <span class="font-medium">{language.name}</span>
          {#if $locale === language.code}
            <svg class="w-4 h-4 ml-auto text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          {/if}
        </button>
      {/each}
    </div>
  {/if}
</div> 