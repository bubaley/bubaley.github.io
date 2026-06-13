<script lang="ts">
	interface Service {
		name: string;
		description: string;
		isOpenSource?: boolean;
		githubUrl?: string;
		link?: string;
		tags?: string[];
		dots?: string[];
		type?: string;
		signal?: string;
	}

	const services: Service[] = [
		{
			name: 'FastAPI + Nuxt Production Template',
			description:
				'Production-шаблон для внутренних SaaS и кабинетов: FastAPI API, Nuxt-фронтенд, организации, авторизация, CRUD-паттерны и Docker-контур.',
			isOpenSource: true,
			githubUrl: 'https://github.com/bubaley/production-fastapi-docker-template',
			tags: ['FastAPI', 'Nuxt 4', 'PostgreSQL', 'Redis', 'Docker', 'Tailwind CSS']
		},
		{
			name: 'Production Django Docker Example',
			description:
				'Готовый пример для быстрого старта Django-проектов: структура, Docker, Celery, CI/CD и понятный production-контур.',
			isOpenSource: true,
			githubUrl: 'https://github.com/bubaley/production-django-docker-example',
			tags: ['Python 3.13', 'Django + DRF', 'Celery', 'CI/CD', 'Dockerhub']
		},
		{
			name: 'Air DRF Relation',
			description:
				'Библиотека для Django REST Framework, которая убирает рутину вокруг связей, запросов и сериализаторов.',
			dots: [
				'Автоматические select_related, prefetch_related при репрезентации объектов',
				'Предзагрузка связанных объектов перед валидацией и сохранением',
				'Возможность работать со связанным сериализатором как с PrimaryKeyRelatedField'
			],

			isOpenSource: true,
			githubUrl: 'https://github.com/bubaley/air-drf-relation',
			tags: ['Django + DRF', 'Python', 'Package', 'Optimization']
		},
		{
			name: 'Pushkin',
			description:
				'FastAPI-сервис для единой отправки уведомлений: Firebase, push, мессенджеры и почта из одного контура.',
			type: 'Notifications',
			signal: 'одна точка для всех каналов',
			tags: ['FastAPI', 'Firebase', 'Push', 'Messengers', 'Email']
		},
		{
			name: 'Websocket Service',
			description:
				'Сервис для управления websocket-каналами через YAML: авторизация, подписки и отправка сообщений.',
			type: 'Realtime',
			signal: 'каналы описываются конфигом',
			tags: ['Go', 'Service', 'YAML']
		},
		{
			name: 'Discount Service',
			description:
				'Сервис расчёта скидок и ценовых политик, который используется в нескольких больших проектах.',
			dots: [
				'Фиксированные цены, скидки на товары и категории',
				'Индивидуальные схемы ценовой политики на компанию или группу',
				'Наследование схемы ценовой политики с возможностью переопределения'
			],
			type: 'Pricing engine',
			signal: 'сложные скидки без копипасты',
			tags: ['Go', 'Service', 'Rules']
		},
		{
			name: 'UV Versions Manager',
			description:
				'Расширение для VS Code, чтобы проверять и обновлять версии пакетов при работе с UV.',
			isOpenSource: true,
			githubUrl: 'https://github.com/bubaley/uv-versions-manager',
			type: 'IDE tooling',
			signal: 'быстрее контроль зависимостей',
			tags: ['VS Code', 'Python', 'UV', 'Package']
		},
		{
			name: 'Times Calculation Service',
			description:
				'Сервис поиска свободных временных слотов с учётом нагрузки, занятости оборудования и реального времени выполнения работ.',
			type: 'Scheduling',
			signal: 'слоты считаются с реальными ограничениями',
			tags: ['Go', 'Service', 'Optimization', 'Highload']
		}
	];

	const featuredServices = services.slice(0, 3);
	const otherServices = services.slice(3);

	const isWideServiceCard = (index: number) => index === 0;
</script>

<section class="bg-[#0d0d0f] py-24">
	<div class="container mx-auto px-6">
		<div class="mb-16 max-w-5xl">
			<p class="mb-4 text-sm tracking-[0.28em] text-gray-500 uppercase">Сервисы и open source</p>
			<h2 class="mb-6 text-4xl leading-none font-black tracking-[-0.04em] text-white md:text-6xl">
				Когда вижу повторяющуюся боль — выношу её в инструмент.
			</h2>
			<p class="max-w-3xl text-xl leading-relaxed text-gray-400">
				Часть решений становится внутренними сервисами, часть — open source. Для меня это нормальный
				способ не чинить одну и ту же проблему десятый раз.
			</p>
		</div>

		<div class="mb-6 grid gap-4 lg:grid-cols-3">
			{#each featuredServices as service, index (service.name)}
				<article class="warm-card rounded-[1.5rem] p-6">
					<div class="mb-8 flex items-start justify-between gap-4">
						<span class="rounded-full bg-[#f07a5b]/10 px-3 py-1 text-xs text-[#ffd0a7]">
							Открытый код
						</span>
						<span class="text-4xl font-black tracking-[-0.08em] text-[#f07a5b]/20"
							>0{index + 1}</span
						>
					</div>
					<h3 class="mb-3 text-2xl font-black tracking-[-0.04em] text-white">{service.name}</h3>
					<p class="mb-5 leading-relaxed text-gray-400">{service.description}</p>
					<div class="flex flex-wrap gap-2">
						{#each service.tags ?? [] as tag (tag)}
							<span class="rounded-full bg-black/45 px-2.5 py-1 text-xs text-gray-300">{tag}</span>
						{/each}
					</div>
					{#if service.githubUrl}
						<a
							href={service.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="mt-6 inline-flex text-sm font-semibold text-[#ffd0a7] hover:text-white"
						>
							Посмотреть на GitHub →
						</a>
					{/if}
				</article>
			{/each}
		</div>

		<div class="grid gap-3 md:grid-cols-2">
			{#each otherServices as service, index (service.name)}
				<article
					class="group rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 hover:border-[#f07a5b]/25 {isWideServiceCard(
						index
					)
						? 'md:col-span-2'
						: ''}"
				>
					<div class="mb-5 flex flex-wrap items-start justify-between gap-3">
						<div>
							{#if service.type}
								<p class="mb-2 text-xs tracking-[0.18em] text-[#f07a5b] uppercase">{service.type}</p>
							{/if}
							<h3 class="text-xl font-black tracking-[-0.03em] text-white group-hover:text-[#ffd0a7]">
								{service.name}
							</h3>
						</div>
						{#if service.githubUrl}
							<a
								href={service.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								class="rounded-full border border-white/10 px-3 py-1 text-sm font-semibold text-gray-500 hover:border-[#f07a5b]/30 hover:text-[#ffd0a7]"
							>
								GitHub →
							</a>
						{:else}
							<span class="text-4xl font-black tracking-[-0.08em] text-[#f07a5b]/15"
								>0{index + 4}</span
							>
						{/if}
					</div>
					<p class="mb-4 text-sm leading-relaxed text-gray-400">{service.description}</p>
					{#if service.signal}
						<div
							class="mb-4 rounded-2xl border border-[#f07a5b]/15 bg-[#f07a5b]/[0.07] px-4 py-3 text-sm font-medium text-[#ffd0a7]"
						>
							{service.signal}
						</div>
					{/if}
					{#if service.dots}
						<ul class="mb-4 space-y-1 text-sm text-gray-500">
							{#each service.dots as dot (dot)}
								<li>— {dot}</li>
							{/each}
						</ul>
					{/if}
					<div class="flex flex-wrap gap-2">
						{#each service.tags ?? [] as tag (tag)}
							<span class="rounded-full bg-black/45 px-2.5 py-1 text-xs text-gray-300">{tag}</span>
						{/each}
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
