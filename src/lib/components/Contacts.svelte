<script lang="ts">
  import { locale, t } from '$lib/stores/i18n';
  
  interface Contact {
    name: string;
    link: string;
    icon: string;
    description: string;
  }
  
  const contacts: Contact[] = [
    {
      name: 'GitHub',
      link: 'https://github.com/bubaley',
      icon: 'github',
      description: 'Open source projects and code portfolio'
    },
    {
      name: 'Telegram',
      link: 'https://t.me/bubaley',
      icon: 'telegram',
      description: 'Quick messaging and communication'
    },
    // {
    //   name: 'Email',
    //   link: 'mailto:contact@bubaley.com',
    //   icon: 'email',
    //   description: 'Professional inquiries and collaboration'
    // },
    // {
    //   name: 'LinkedIn',
    //   link: 'https://linkedin.com/in/bubaley',
    //   icon: 'linkedin',
    //   description: 'Professional network and career updates'
    // }
  ];
</script>

<section class="py-20 bg-gradient-to-b from-gray-900 to-black">
  <div class="container mx-auto px-6">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold mb-6">
        <span class="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Contacts
        </span>
      </h2>
    </div>
    
    <div class="max-w-4xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {#each contacts as contact}
          <a 
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            class="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 card-glow hover:border-gray-600 transition-all duration-300 group"
          >
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {#if contact.icon === 'github'}
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                {:else if contact.icon === 'telegram'}
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.789l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"/>
                  </svg>
                {:else if contact.icon === 'email'}
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                {:else if contact.icon === 'linkedin'}
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                {/if}
              </div>
              
              <div class="flex-1">
                <h3 class="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {contact.name}
                </h3>
                <p class="text-gray-400 text-sm">
                  {contact.description}
                </p>
              </div>
              
              <div class="flex-shrink-0">
                <svg class="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </div>
            </div>
          </a>
        {/each}
      </div>
    </div>
  </div>
</section> 