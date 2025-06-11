<script lang="ts">
  import HeroSection from '$lib/components/HeroSection.svelte';
  import TechStack from '$lib/components/TechStack.svelte';
  import Projects from '$lib/components/Projects.svelte';
  import OpenSource from '$lib/components/OpenSource.svelte';
  import ExperienceEducation from '$lib/components/ExperienceEducation.svelte';
  import Contacts from '$lib/components/Contacts.svelte';
</script>

<svelte:head>
  <title>Bubaley - Python Developer & Technical Leader</title>
  <meta name="description" content="Разработчик и технический лидер с 6+ летним опытом. Специализируюсь на Python, Django, Vue.js. Руководитель команды разработки." />
</svelte:head>

<HeroSection />
<TechStack />
<Projects />
<OpenSource />
<ExperienceEducation />
<Contacts />


