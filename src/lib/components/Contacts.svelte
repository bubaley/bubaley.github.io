<script lang="ts">
	const reasons = [
		'нужен продукт от идеи до релиза',
		'есть сложная интеграция или внутренний сервис',
		'хочется обсудить архитектуру, команду или open source'
	];
</script>

<section class="bg-black py-24">
	<div class="container mx-auto px-6">
		<div class="warm-card relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] p-8 md:p-12">
			<div
				class="pointer-events-none absolute -top-28 right-0 h-72 w-72 rounded-full bg-[#f07a5b]/20 blur-3xl"
			></div>
			<div
				class="pointer-events-none absolute bottom-0 left-0 h-56 w-56 rounded-full bg-white/[0.06] blur-3xl"
			></div>

			<div class="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
				<div>
					<p class="mb-4 text-sm tracking-[0.28em] text-[#f07a5b] uppercase">Связь</p>
					<h2
						class="mb-6 text-4xl leading-none font-black tracking-[-0.04em] text-white md:text-6xl"
					>
						Если есть задача, которую пора довести до работающего продукта.
					</h2>
					<p class="mb-8 max-w-3xl text-xl leading-relaxed text-gray-400">
						Напишите в Telegram. Без формы и прогрева: коротко разберём контекст, поймём
						ограничения и решим, есть ли смысл идти дальше.
					</p>

					<div class="flex flex-wrap gap-4">
						<a
							href="https://t.me/bubaley"
							target="_blank"
							rel="noopener noreferrer"
							class="rounded-full bg-[#f07a5b] px-6 py-3 font-bold text-black shadow-[0_0_40px_rgba(240,122,91,0.22)] hover:bg-[#ffd0a7]"
						>
							Написать в Telegram →
						</a>
						<a
							href="https://github.com/bubaley"
							target="_blank"
							rel="noopener noreferrer"
							class="rounded-full border border-white/15 px-6 py-3 font-semibold text-white hover:border-white/40 hover:bg-white/[0.04]"
						>
							Сначала посмотреть GitHub
						</a>
					</div>
				</div>

				<div class="rounded-[1.5rem] border border-white/10 bg-black/45 p-5">
					<p class="mb-4 text-sm tracking-[0.2em] text-gray-500 uppercase">с чем можно прийти</p>
					<div class="space-y-3">
						{#each reasons as reason, index (reason)}
							<div class="flex items-start gap-3 rounded-2xl bg-white/[0.035] p-4">
								<span class="font-black text-[#f07a5b]/70">0{index + 1}</span>
								<p class="text-sm leading-relaxed text-gray-300">{reason}</p>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
