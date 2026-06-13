<script lang="ts">
	interface Job {
		title: string;
		company: string;
		period: string;
		current: boolean;
		responsibilities: string[];
	}

	interface Education {
		institution: string;
		degree: string;
		period: string;
		type: 'formal' | 'additional';
		description?: string;
	}

	const experiences: Job[] = [
		{
			title: 'Руководитель отдела разработки',
			company: 'ООО Корекс',
			period: 'октябрь 2020 — по настоящее время',
			current: true,
			responsibilities: [
				'Веду разработку экосистемы SaaS-продуктов: архитектура, команда, процессы, релизы',
				'Соединяю технические решения с бизнес-ограничениями, сроками и бюджетом',
				'Нанимаю, обучаю, провожу код-ревью и помогаю разработчикам расти',
				'Проектирую инфраструктуру, интеграции и внутренние инструменты под реальные процессы'
			]
		},
		{
			title: 'Фриланс (Fullstack разработка)',
			company: 'удалённо',
			period: 'декабрь 2018 — сентябрь 2020',
			current: false,
			responsibilities: [
				'Делал проекты под ключ: архитектура, backend, frontend, деплой',
				'Работал напрямую с заказчиками: вытаскивал требования, планировал, доводил до результата'
			]
		},
		{
			title: 'Разработчик / Внедрение 1С',
			company: 'Первый Бит',
			period: 'март 2018 — ноябрь 2018',
			current: false,
			responsibilities: [
				'Автоматизировал бизнес-процессы и видел, как софт влияет на работу компаний изнутри',
				'Разрабатывал и кастомизировал конфигурации 1С под конкретные операционные задачи'
			]
		}
	];

	const education: Education[] = [
		{
			institution: 'КГТУ, Калининград',
			degree: 'Прикладная информатика в экономике',
			period: '2014–2018',
			type: 'formal'
		},
		{
			institution: 'Конференции',
			degree: '',
			period: 'постоянно',
			type: 'additional',
			description:
				'Выступал на четырёх профильных конференциях: представлял продукты и рассказывал, как они решают прикладные задачи клиентов.'
		}
	];

	const additionalSkills = [
		'Управление командой и найм',
		'Архитектура SaaS-продуктов',
		'Код-ревью и менторинг',
		'Планирование релизов',
		'Техническая коммуникация с бизнесом'
	];
</script>

<section class="bg-gradient-to-b from-black to-[#0d0d0f] py-24">
	<div class="container mx-auto px-6">
		<div class="mb-16 max-w-5xl">
			<p class="mb-4 text-sm tracking-[0.28em] text-gray-500 uppercase">Путь</p>
			<h2 class="mb-6 text-4xl leading-none font-black tracking-[-0.04em] text-white md:text-6xl">
				Сначала писал руками. Потом начал собирать системы, команды и продукты.
			</h2>
			<p class="max-w-3xl text-xl leading-relaxed text-gray-400">
				Мне повезло пройти разные уровни IT: внедрение бизнес-систем, разработку под заказ,
				продуктовую разработку, архитектуру и управление командой.
			</p>
		</div>

		<div class="mx-auto max-w-6xl">
			<div class="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.8fr]">
				<div>
					<div
						class="relative space-y-6 before:absolute before:top-6 before:bottom-6 before:left-4 before:w-px before:bg-[#f07a5b]/25"
					>
						{#each experiences as job, index (job.title)}
							<div class="relative pl-10">
								<div
									class="absolute top-6 left-2 h-4 w-4 rounded-full border border-[#f07a5b]/50 bg-black shadow-[0_0_30px_rgba(240,122,91,0.25)]"
								></div>
								<div
									class="{job.current
										? 'warm-card'
										: 'border border-white/10 bg-white/[0.035]'} rounded-[1.5rem] p-6"
								>
									<div
										class="mb-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between"
									>
										<div class="flex-1">
											<h4 class="mb-2 text-2xl font-bold text-white">{job.title}</h4>
											<div class="mb-2 font-medium text-gray-300">{job.company}</div>
											<p class="text-sm text-gray-500">{job.period}</p>
										</div>
										<div>
											<span
												class="rounded-full px-3 py-1 text-xs font-medium {job.current
													? 'bg-[#f07a5b] text-black'
													: 'bg-black/45 text-gray-300'}"
											>
												{job.current ? 'сейчас' : `этап 0${index + 1}`}
											</span>
										</div>
									</div>

									<div class="space-y-2">
										{#each job.responsibilities as responsibility (responsibility)}
											<div class="flex items-start gap-3">
												<div class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/45"></div>
												<p class="text-sm leading-relaxed text-gray-300">{responsibility}</p>
											</div>
										{/each}
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>

				<div>
					<div class="space-y-6">
						{#each education as edu (edu.institution)}
							<div class="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6">
								<h4 class="mb-2 text-xl font-bold text-white">{edu.institution}</h4>
								{#if edu.degree}
									<p class="mb-2 font-medium text-gray-300">{edu.degree}</p>
								{/if}
								<p class="mb-3 text-sm text-gray-500">{edu.period}</p>
								{#if edu.description}
									<div class="text-sm leading-relaxed text-gray-400">{edu.description}</div>
								{/if}
							</div>
						{/each}

						<div class="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6">
							<h4 class="mb-4 text-xl font-bold text-white">Что добавилось поверх кода</h4>
							<div class="space-y-2">
								{#each additionalSkills as skill (skill)}
									<div class="flex items-center gap-2">
										<div class="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/45"></div>
										<p class="text-sm text-gray-300">{skill}</p>
									</div>
								{/each}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
