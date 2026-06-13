<script lang="ts">
	interface StackGroup {
		title: string;
		description: string;
		skills: string[];
	}

	interface RoleCard {
		role: string;
		label: string;
		result: string;
	}

	const categories: StackGroup[] = [
		{
			title: 'Бэкенд, где живёт логика',
			description:
				'Основной слой: API, данные, фоновые задачи, интеграции и архитектура, которая выдерживает рост продукта.',
			skills: ['Python', 'Django + DRF', 'PostgreSQL', 'Celery', 'Redis', 'Go + Gin', 'FastAPI']
		},
		{
			title: 'Интерфейсы, которыми пользуются',
			description:
				'Не “натянуть фронт”, а собрать понятный рабочий инструмент для админок, CRM, кабинетов и клиентских сценариев.',
			skills: ['Vue 2/3', 'TypeScript', 'Quasar', 'Vuetify', 'Tailwind CSS', 'Nuxt', 'PrimeVue']
		},
		{
			title: 'Инфраструктура без магии',
			description:
				'Деплой, наблюдаемость и автоматизация, чтобы продукт не зависел от ручных ритуалов и случайных героев.',
			skills: [
				'Docker',
				'Linux',
				'GitHub Actions',
				'Nginx',
				'Traefik',
				'Prometheus',
				'Grafana',
				'Loki'
			]
		}
	];

	const roleCards: RoleCard[] = [
		{ role: 'аналитик', label: 'контекст', result: 'понимаю бизнес-ограничения до кода' },
		{ role: 'архитектор', label: 'система', result: 'держу схему данных, API и границы модулей' },
		{ role: 'разработчик', label: 'реализация', result: 'собираю backend, frontend и интеграции' },
		{ role: 'DevOps', label: 'продакшен', result: 'довожу до деплоя, мониторинга и стабильности' }
	];

	const productSignals = [
		'меньше потерь на стыках',
		'быстрее путь от идеи до релиза',
		'понятнее ответственность за результат'
	];

	const highlightedSkills = new Set([
		'Python',
		'FastAPI',
		'TypeScript',
		'Nuxt',
		'Tailwind CSS',
		'Docker',
		'GitHub Actions',
		'PostgreSQL'
	]);

	const systemParts = [
		{ label: 'идея', position: 'top-0 left-1/2 -translate-x-1/2' },
		{ label: 'API', position: 'top-20 right-2' },
		{ label: 'интерфейс', position: 'right-0 bottom-24' },
		{ label: 'деплой', position: 'bottom-0 left-1/2 -translate-x-1/2' },
		{ label: 'метрики', position: 'bottom-24 left-0' },
		{ label: 'процессы', position: 'top-20 left-2' }
	];
</script>

<section class="bg-black py-24">
	<div class="container mx-auto px-6">
		<div class="mb-20 grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">
			<div class="rounded-[2rem] border border-white/10 bg-white/[0.025] p-6 md:p-8">
				<p class="mb-4 text-sm tracking-[0.24em] text-gray-500 uppercase">
					если разложить по ролям
				</p>
				<h3 class="mb-6 text-3xl leading-tight font-black tracking-[-0.04em] text-white">
					Обычно продукт распадается на зоны ответственности.
				</h3>
				<div class="space-y-3">
					{#each roleCards as card (card.role)}
						<div class="rounded-2xl border border-white/10 bg-black/45 p-4">
							<div class="mb-3 flex items-center justify-between gap-3">
								<span class="text-sm font-bold tracking-[0.12em] text-gray-300 uppercase"
									>{card.role}</span
								>
								<span
									class="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-gray-400"
									>{card.label}</span
								>
							</div>
							<p class="text-sm leading-relaxed text-gray-500">{card.result}</p>
						</div>
					{/each}
				</div>
				<div class="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5">
					{#each productSignals as signal (signal)}
						<span
							class="rounded-full border border-[#f07a5b]/20 bg-[#f07a5b]/10 px-3 py-1.5 text-xs font-medium text-[#ffd0a7]"
							>{signal}</span
						>
					{/each}
				</div>
			</div>

			<div class="hidden text-5xl text-[#f07a5b] lg:block">→</div>

			<div class="warm-card rounded-[2rem] p-6">
				<p class="mb-6 text-center text-sm tracking-[0.24em] text-[#f07a5b] uppercase">
					как я собираю продукт
				</p>
				<div class="relative mx-auto aspect-square max-w-md">
					<div class="absolute inset-9 rounded-full border border-[#f07a5b]/20"></div>
					<div
						class="absolute inset-20 rounded-full border border-dashed border-[#f07a5b]/25"
					></div>
					<div
						class="absolute top-1/2 left-1/2 z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#f07a5b] text-xl font-black text-black shadow-[0_0_60px_rgba(240,122,91,0.35)]"
					>
						продукт
					</div>
					{#each systemParts as part (part.label)}
						<div
							class="absolute {part.position} flex h-16 w-24 items-center justify-center rounded-2xl border border-[#f07a5b]/25 bg-black/75 px-2 text-center text-[11px] leading-tight font-bold tracking-[0.06em] text-[#ffd0a7] uppercase"
						>
							{part.label}
						</div>
					{/each}
				</div>
				<p class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-400">
					Не заменяю команду. Закрываю разрывы между ролями, чтобы идея не застревала на стыках.
				</p>
			</div>
		</div>

		<div class="mb-16 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
			<div>
				<p class="mb-4 text-sm tracking-[0.28em] text-gray-500 uppercase">Стек</p>
				<h2 class="text-4xl leading-none font-black tracking-[-0.04em] text-white md:text-6xl">
					Инструменты — не витрина. Это способ довести идею до продакшена.
				</h2>
			</div>
			<p class="max-w-3xl text-xl leading-relaxed text-gray-400">
				Я держу в руках весь путь продукта: от схемы данных и API до интерфейса, деплоя, мониторинга
				и процессов команды. Поэтому решения не разваливаются на границах “это не моя зона”.
			</p>
		</div>

		<div class="grid gap-5 lg:grid-cols-3">
			{#each categories as category (category.title)}
				<article
					class="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 first:border-[#f07a5b]/30 first:bg-[#f07a5b]/[0.045]"
				>
					<h3 class="mb-4 text-2xl font-bold text-white">{category.title}</h3>
					<p class="mb-6 leading-relaxed text-gray-400">{category.description}</p>
					<div class="flex flex-wrap gap-2">
						{#each category.skills as skill (skill)}
							<span
								class={highlightedSkills.has(skill)
									? 'rounded-full border border-[#f07a5b]/35 bg-[#f07a5b]/15 px-3 py-1.5 text-sm font-semibold text-[#ffd0a7] shadow-[0_0_24px_rgba(240,122,91,0.08)]'
									: 'rounded-full border border-white/10 bg-black/55 px-3 py-1.5 text-sm text-gray-300'}
								>{skill}</span
							>
						{/each}
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
