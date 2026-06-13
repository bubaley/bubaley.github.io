<script lang="ts">
	import HeroSection from '$lib/components/HeroSection.svelte';
	import TechStack from '$lib/components/TechStack.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import OpenSource from '$lib/components/OpenSource.svelte';
	import ExperienceEducation from '$lib/components/ExperienceEducation.svelte';
	import Contacts from '$lib/components/Contacts.svelte';
</script>

<svelte:head>
	<title>Кирилл Целищев — цифровые продукты от идеи до релиза</title>
	<meta
		name="description"
		content="Персональная страница Кирилла Целищева: разработчик, архитектор, руководитель разработки и человек, который запускает цифровые продукты от идеи до работающего релиза."
	/>
</svelte:head>

<HeroSection />
<TechStack />
<Projects />
<OpenSource />
<ExperienceEducation />
<Contacts />
