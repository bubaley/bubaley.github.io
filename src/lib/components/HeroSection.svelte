<script lang="ts">
	const focusAreas = ['разработка', 'архитектура', 'команда', 'продукт', 'релиз'];
</script>

<section class="relative min-h-screen overflow-hidden bg-[#11100d] pt-28 pb-20">
	<div
		class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(240,122,91,0.22),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(255,208,167,0.12),transparent_30%)]"
	></div>
	<div class="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent"></div>

	<div class="relative z-10 container mx-auto px-6">
		<div class="grid min-h-[calc(100vh-9rem)] items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
			<div>
				<div class="mb-8 flex flex-wrap gap-3 text-sm tracking-[0.28em] text-gray-500 uppercase">
					<span>Кирилл Целищев</span>
					<span class="text-gray-700">/</span>
					<span>@bubaley</span>
				</div>

				<h1
					class="mb-8 max-w-5xl text-5xl leading-[0.95] font-black tracking-[-0.06em] text-white md:text-7xl lg:text-8xl"
				>
					Запускаю цифровые продукты <span class="warm-text">от идеи</span> до работающего релиза
				</h1>

				<p class="mb-10 max-w-3xl text-xl leading-relaxed text-gray-300 md:text-2xl">
					Я не выбираю между кодом, архитектурой, менеджментом и продуктом. Собираю всё в одну
					систему: понимаю задачу бизнеса, проектирую решение, пишу критичный код, веду команду и
					довожу продукт до пользователей.
				</p>

				<div class="mb-12 flex flex-wrap gap-3">
					{#each focusAreas as area (area)}
						<span
							class="rounded-full border border-[#f07a5b]/25 bg-[#f07a5b]/10 px-4 py-2 text-sm text-gray-200"
						>
							{area}
						</span>
					{/each}
				</div>

				<div class="flex flex-wrap items-center gap-4">
					<a
						href="https://t.me/bubaley"
						target="_blank"
						rel="noopener noreferrer"
						class="rounded-full bg-[#f07a5b] px-6 py-3 font-semibold text-black hover:bg-[#ff9475]"
					>
						Написать в Telegram
					</a>
					<a
						href="https://github.com/bubaley"
						target="_blank"
						rel="noopener noreferrer"
						class="rounded-full border border-white/15 px-6 py-3 font-semibold text-white hover:border-white/40 hover:bg-white/[0.04]"
					>
						GitHub
					</a>
				</div>
			</div>

			<aside class="warm-card rounded-[2rem] p-5 backdrop-blur">
				<div class="relative mb-5 overflow-hidden rounded-[1.5rem] bg-black/45 p-3">
					<div
						class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(240,122,91,0.32),transparent_34%)]"
					></div>
					<div class="relative overflow-hidden rounded-[1.2rem]">
						<img
							src="/profile.jpg"
							class="aspect-square w-full object-cover grayscale"
							alt="Кирилл Целищев"
						/>
						<div
							class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent"
						></div>
					</div>

					<div class="absolute right-6 bottom-6 left-6">
						<p class="text-sm tracking-[0.22em] text-[#ffd0a7] uppercase">developer / architect</p>
						<p class="mt-1 text-3xl font-black tracking-[-0.04em] text-white">Кирилл Целищев</p>
					</div>
				</div>

				<div class="space-y-5">
					<div>
						<p class="text-sm tracking-[0.22em] text-gray-500 uppercase">Сейчас</p>
						<p class="mt-2 text-2xl font-bold text-white">Руководитель разработки в Corex</p>
					</div>
					<div class="grid grid-cols-2 gap-3">
						<div class="rounded-2xl bg-black/35 p-4">
							<p class="text-3xl font-black text-white">6+</p>
							<p class="text-sm text-gray-400">лет в IT</p>
						</div>
						<div class="rounded-2xl bg-black/35 p-4">
							<p class="text-3xl font-black text-white">4</p>
							<p class="text-sm text-gray-400">роли в одной голове</p>
						</div>
					</div>
					<p class="text-gray-400">
						Разработчик, архитектор, менеджер и фаундерский тип мышления: меньше презентаций, больше
						работающих систем.
					</p>
				</div>
			</aside>
		</div>
	</div>
</section>
