<script lang="ts">
	interface ProjectLink {
		href: string;
		label: string;
	}

	export let title: string;
	export let description: string;
	export let techStack: string[];
	export let highlights: string[] = [];
	export let label = 'Кейс';
	export let links: ProjectLink[] = [];
</script>

<article class="bg-[#0d0d0f] pt-24 pb-24">
	<div class="container mx-auto max-w-6xl px-6">
		<nav class="mb-8">
			<a
				href="/"
				class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-4 py-2 text-sm font-medium text-gray-400 hover:border-[#f07a5b]/40 hover:text-white"
			>
				← Назад на главную
			</a>
		</nav>

		<header class="warm-card relative mb-12 overflow-hidden rounded-[2rem] p-6 md:p-10">
			<div
				class="pointer-events-none absolute -top-28 right-0 h-72 w-72 rounded-full bg-[#f07a5b]/20 blur-3xl"
			></div>
			<div
				class="pointer-events-none absolute bottom-0 left-0 h-52 w-52 rounded-full bg-white/[0.05] blur-3xl"
			></div>
			<div class="relative">
				<div class="mb-8 flex flex-wrap items-center justify-between gap-4">
					<span class="rounded-full bg-[#f07a5b]/10 px-3 py-1.5 text-sm text-[#ffd0a7]">
						{label}
					</span>
					<span class="text-sm tracking-[0.22em] text-gray-500 uppercase">от идеи до релиза</span>
				</div>

				<h1
					class="mb-6 max-w-4xl text-4xl leading-none font-black tracking-[-0.05em] text-white md:text-6xl"
				>
					{title}
				</h1>
				<p class="mb-8 max-w-3xl text-xl leading-relaxed text-gray-300">
					{description}
				</p>

				{#if highlights.length}
					<div class="mb-8 grid gap-3 md:grid-cols-3">
						{#each highlights as highlight, index (highlight)}
							<div class="rounded-2xl border border-white/10 bg-black/45 p-4">
								<p class="mb-3 text-xs font-black tracking-[0.18em] text-[#f07a5b]/70 uppercase">
									0{index + 1}
								</p>
								<p class="text-sm leading-relaxed text-gray-300">{highlight}</p>
							</div>
						{/each}
					</div>
				{/if}

				<div class="mb-8 rounded-[1.5rem] border border-white/10 bg-black/35 p-4">
					<p class="mb-3 text-sm tracking-[0.18em] text-gray-500 uppercase">Стек</p>
					<div class="flex flex-wrap gap-2">
						{#each techStack as tech (tech)}
							<span
								class="rounded-full border border-[#f07a5b]/20 bg-[#f07a5b]/10 px-3 py-1.5 text-sm font-medium text-[#ffd0a7]"
								>{tech}</span
							>
						{/each}
					</div>
				</div>

				{#if links.length}
					<div class="flex flex-wrap gap-3">
						{#each links as link (link.href)}
							<a
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								class="rounded-full bg-[#f07a5b] px-5 py-2.5 font-semibold text-black hover:bg-[#ff9475]"
							>
								{link.label}
							</a>
						{/each}
					</div>
				{/if}
			</div>
		</header>

		<div class="project-content space-y-16">
			<slot />
		</div>
	</div>
</article>

<style>

	:global(.project-content section) {
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 1.5rem;
		background:
			radial-gradient(circle at top right, rgba(240, 122, 91, 0.08), transparent 42%),
			rgba(255, 255, 255, 0.03);
		padding: 2rem;
	}

	:global(.project-content h2) {
		color: white;
		letter-spacing: -0.04em;
		line-height: 1;
	}

	:global(.project-content h2:first-letter) {
		color: #f07a5b;
	}

	:global(.project-content .rounded-lg),
	:global(.project-content .rounded-xl) {
		border-color: rgba(255, 255, 255, 0.1) !important;
		border-radius: 1rem !important;
		background: rgba(0, 0, 0, 0.28) !important;
	}

	:global(.project-content .text-blue-400) {
		color: #ffd0a7 !important;
	}

	:global(.project-content .bg-blue-400) {
		background-color: #f07a5b !important;
	}
</style>
