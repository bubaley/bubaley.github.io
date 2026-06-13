<script lang="ts">
	const links = [
		{ href: 'https://github.com/bubaley', label: 'GitHub' },
		{ href: 'https://t.me/bubaley', label: 'Telegram' }
	];
</script>

<nav class="fixed top-0 right-0 left-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur-md">
	<div class="container mx-auto px-6 py-4">
		<div class="flex items-center justify-between">
			<a href="/" class="text-lg font-black tracking-[-0.03em] text-white">
				Кирилл Целищев
				<span class="ml-2 text-sm font-medium text-gray-500">@bubaley</span>
			</a>

			<div class="flex items-center gap-4">
				{#each links as link (link.href)}
					<a
						href={link.href}
						target="_blank"
						rel="noopener noreferrer"
						class="text-sm font-medium text-gray-400 hover:text-white"
					>
						{link.label}
					</a>
				{/each}
			</div>
		</div>
	</div>
</nav>
