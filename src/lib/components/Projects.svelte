<script lang="ts">
	interface Project {
		id: string;
		name: string;
		description: string;
		accent: string;
		role: string;
		proofPoints: string[];
	}

	const projects: Project[] = [
		{
			id: 'loyalhub',
			name: 'Loyalhub',
			description:
				'SaaS-платформа для ресторанов: мобильные приложения, Telegram-боты, QR-меню, заказы и программы лояльности.',
			accent: 'SaaS / HoReCa',
			role: 'архитектура, backend, frontend, команда, продуктовые требования',
			proofPoints: ['мобильные приложения', 'Telegram-боты', 'QR-меню', 'лояльность']
		},
		{
			id: 'corex-tasks',
			name: 'Corex.Tasks',
			description:
				'Внутренний task tracker, который вырос из реальных процессов команды и заменил перегруженные внешние сервисы.',
			accent: 'Команда / процессы',
			role: 'инициатор, архитектор, fullstack-разработка, отчёты, интеграции',
			proofPoints: ['живые процессы', 'отчёты', 'интеграции', 'контроль команды']
		},
		{
			id: 'corex-market',
			name: 'Corex.Market',
			description:
				'B2B-маркетплейс для поставщиков и закупщиков в HoReCa: заказы, цены, прозрачность и интеграции.',
			accent: 'B2B / marketplace',
			role: 'ведущий разработчик, UX/UI, интеграции, проектный менеджмент',
			proofPoints: ['B2B-заказы', 'цены', 'интеграции', 'UX для HoReCa']
		},
		{
			id: 'domaestro',
			name: 'Domaestro',
			description:
				'Система управления доменами, DNS и SSL, которая убирает зависимость от внешних провайдеров.',
			accent: 'Инфраструктура',
			role: 'архитектор, backend/API, UI, DevOps-автоматизация',
			proofPoints: ['DNS', 'SSL', 'API', 'DevOps-автоматизация']
		}
	];
</script>

<section class="bg-gradient-to-b from-black to-[#0d0d0f] py-24">
	<div class="container mx-auto px-6">
		<div class="mb-16 max-w-5xl">
			<p class="mb-4 text-sm tracking-[0.28em] text-gray-500 uppercase">Доказательства</p>
			<h2 class="mb-6 text-4xl leading-none font-black tracking-[-0.04em] text-white md:text-6xl">
				Не “участвовал в проектах”. Собирал продукты, которыми реально пользуются.
			</h2>
			<p class="max-w-3xl text-xl leading-relaxed text-gray-400">
				Мне интересны задачи, где нужно соединить бизнес-логику, архитектуру, интерфейс и людей.
				Ниже — проекты, через которые это хорошо видно.
			</p>
		</div>

		<div class="grid gap-5 md:grid-cols-2">
			{#each projects as project, index (project.id)}
				<a
					href="/projects/{project.id}"
					class="group warm-card block rounded-[2rem] p-6 hover:border-[#f07a5b]/40"
				>
					<div class="mb-10 flex items-start justify-between gap-4">
						<span class="rounded-full bg-[#f07a5b]/10 px-3 py-1.5 text-sm text-[#ffd0a7]"
							>{project.accent}</span
						>
						<span class="text-5xl font-black tracking-[-0.08em] text-[#f07a5b]/20"
							>0{index + 1}</span
						>
					</div>
					<div>
						<h3
							class="mb-3 text-3xl font-black tracking-[-0.04em] text-white group-hover:text-[#ffd0a7]"
						>
							{project.name}
						</h3>
						<div class="mb-6 rounded-3xl border border-white/10 bg-black/35 p-4">
							<p class="mb-3 text-xs tracking-[0.18em] text-gray-500 uppercase">что внутри</p>
							<div class="flex flex-wrap gap-2">
								{#each project.proofPoints as point (point)}
									<span
										class="rounded-full border border-[#f07a5b]/20 bg-[#f07a5b]/10 px-3 py-1.5 text-xs font-semibold text-[#ffd0a7]"
										>{point}</span
									>
								{/each}
							</div>
						</div>
						<p class="mb-6 text-lg leading-relaxed text-gray-400">
							{project.description}
						</p>
						<p class="text-sm tracking-[0.16em] text-gray-500 uppercase">Моя роль</p>
						<p class="mt-2 leading-relaxed text-gray-300">{project.role}</p>
						<div class="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
							<span class="text-sm text-gray-500">подробнее о проекте</span>
							<span
								class="flex h-10 w-10 items-center justify-center rounded-full bg-[#f07a5b] text-xl font-black text-black transition-transform group-hover:translate-x-1"
							>
								→
							</span>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
