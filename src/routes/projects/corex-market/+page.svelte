<script lang="ts">
	import ProjectPageFrame from '$lib/components/ProjectPageFrame.svelte';

	const techStack = [
		'Django + DRF',
		'PostgreSQL',
		'Vue.js',
		'Quasar',
		'Docker',
		'Nginx',
		'Redis',
		'Celery',
		'Flutter'
	];
</script>

<svelte:head>
	<title>Corex.Market - B2B-маркетплейс для HoReCa</title>
	<meta
		name="description"
		content="B2B-маркетплейс для автоматизации взаимодействия между поставщиками и покупателями в сфере HoReCa"
	/>
</svelte:head>

<ProjectPageFrame
	title="Corex.Market — B2B-маркетплейс для HoReCa"
	description="B2B-маркетплейс для автоматизации взаимодействия между поставщиками и покупателями в HoReCa: заказы, цены, документы, интеграции и прозрачность закупок."
	{techStack}
	highlights={[
		'B2B-заказы, цены и документы собраны в одном рабочем сценарии',
		'индивидуальные условия для клиентов и интеграции с учётными системами',
		'интерфейс проектировался под поставщиков и закупщиков HoReCa'
	]}
	label="B2B / marketplace"
>
	<img src="/marketHome.jpeg" alt="Corex.Market" class="mb-10 h-auto w-full rounded-lg" />

	<!-- Content sections -->
	<div class="space-y-16">
		<!-- Project Goals -->
		<section>
			<h2 class="mb-6 text-left text-3xl font-bold text-white">🎯 Цели проекта</h2>
			<div class="prose prose-lg max-w-none">
				<p class="mb-4 leading-relaxed text-gray-300">
					Главная цель платформы — упростить и оцифровать процесс формирования заказов, сделать его
					удобным, прозрачным и эффективным как для покупателей, так и для поставщиков.
				</p>
				<div class="mt-6 grid gap-6 md:grid-cols-2">
					<div class="rounded-xl border border-gray-700 bg-gray-800/30 p-4 backdrop-blur-sm">
						<h3 class="mb-3 text-lg font-bold text-white">📋 Оцифровка процессов</h3>
						<p class="text-sm text-gray-300">Электронный документооборот и автоматизация заказов</p>
					</div>
					<div class="rounded-xl border border-gray-700 bg-gray-800/30 p-4 backdrop-blur-sm">
						<h3 class="mb-3 text-lg font-bold text-white">💰 Актуальные цены</h3>
						<p class="text-sm text-gray-300">Предложения и цены всегда под рукой</p>
					</div>
					<div class="rounded-xl border border-gray-700 bg-gray-800/30 p-4 backdrop-blur-sm">
						<h3 class="mb-3 text-lg font-bold text-white">🤝 Упрощение взаимодействия</h3>
						<p class="text-sm text-gray-300">Между бизнесами в сфере HoReCa</p>
					</div>
					<div class="rounded-xl border border-gray-700 bg-gray-800/30 p-4 backdrop-blur-sm">
						<h3 class="mb-3 text-lg font-bold text-white">🔍 Прозрачность</h3>
						<p class="text-sm text-gray-300">Процессов закупок и формирования заказов</p>
					</div>
				</div>
			</div>
		</section>

		<!-- My Role -->
		<section>
			<h2 class="mb-6 text-left text-3xl font-bold text-white">🧑‍💻 Моя роль в проекте</h2>
			<div class="space-y-4">
				<div class="rounded-lg border border-gray-700 bg-gray-800/30 p-4 backdrop-blur-sm">
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">Ведущий разработчик:</span> проектирование архитектуры,
						написание бэкенда и фронтенда на старте проекта
					</p>
				</div>
				<div class="rounded-lg border border-gray-700 bg-gray-800/30 p-4 backdrop-blur-sm">
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">Интеграции:</span> организовал подключения с внешними
						системами (iiko и другие учётные системы)
					</p>
				</div>
				<div class="rounded-lg border border-gray-700 bg-gray-800/30 p-4 backdrop-blur-sm">
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">UX/UI дизайн:</span> работал над интерфейсом под
						реальные сценарии поставщиков и закупщиков
					</p>
				</div>
				<div class="rounded-lg border border-gray-700 bg-gray-800/30 p-4 backdrop-blur-sm">
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">Проектный менеджмент:</span> координация команды,
						постановка задач, контроль сроков
					</p>
				</div>
				<div class="rounded-lg border border-gray-700 bg-gray-800/30 p-4 backdrop-blur-sm">
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">Взаимодействие с бизнесом:</span> работа с заказчиками,
						партнёрами, проработка бизнес-логики
					</p>
				</div>
			</div>
		</section>
		<img src="/marketProduct.jpeg" alt="Corex.Market" class="mb-10 h-auto w-full rounded-lg" />

		<!-- Main Features -->
		<section>
			<h2 class="mb-6 text-left text-3xl font-bold text-white">📌 Основные возможности</h2>
			<div class="space-y-4">
				<div class="flex items-start gap-3">
					<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400"></div>
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">Двусторонняя регистрация:</span> работа как для поставщиков,
						так и для покупателей
					</p>
				</div>
				<div class="flex items-start gap-3">
					<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400"></div>
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">Индивидуальное ценообразование:</span> каждый клиент
						видит свои персональные цены
					</p>
				</div>
				<div class="flex items-start gap-3">
					<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400"></div>
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">Умный каталог:</span> удобный поиск, фильтрация и
						продвижение товаров
					</p>
				</div>
				<div class="flex items-start gap-3">
					<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400"></div>
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">Интеграции с учётными системами:</span> Айка и другие
						системы поставщиков
					</p>
				</div>
				<div class="flex items-start gap-3">
					<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400"></div>
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">Электронный документооборот:</span> счета, акты,
						товарные накладные через платформу
					</p>
				</div>
				<div class="flex items-start gap-3">
					<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400"></div>
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">Автоматизация заказов:</span> упрощённый процесс
						формирования заказов
					</p>
				</div>
				<div class="flex items-start gap-3">
					<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400"></div>
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">Мобильное приложение:</span> быстрый доступ к заказам,
						история, push-уведомления
					</p>
				</div>
			</div>
		</section>

		<!-- Technical Features -->
		<img src="/marketCart.png" alt="Corex.Market" class="mb-10 h-auto w-full rounded-lg" />
		<section>
			<h2 class="mb-6 text-left text-3xl font-bold text-white">⚙️ Особенности реализации</h2>
			<div class="grid gap-6 md:grid-cols-3">
				<div class="rounded-xl border border-gray-700 bg-gray-800/30 p-6 backdrop-blur-sm">
					<h3 class="mb-4 text-xl font-bold text-white">🔗 Интеграции</h3>
					<p class="text-sm leading-relaxed text-gray-300">
						Сложная интеграция с различными учетными системами поставщиков для синхронизации данных
						о товарах и остатках
					</p>
				</div>
				<div class="rounded-xl border border-gray-700 bg-gray-800/30 p-6 backdrop-blur-sm">
					<h3 class="mb-4 text-xl font-bold text-white">👤 Персонализация</h3>
					<p class="text-sm leading-relaxed text-gray-300">
						Поддержка индивидуальных условий для каждого клиента — цены, скидки, условия доставки
					</p>
				</div>
				<div class="rounded-xl border border-gray-700 bg-gray-800/30 p-6 backdrop-blur-sm">
					<h3 class="mb-4 text-xl font-bold text-white">🏗️ Масштабируемость</h3>
					<p class="text-sm leading-relaxed text-gray-300">
						Гибкая архитектура позволяет расширение функционала и подключение новых участников рынка
					</p>
				</div>
			</div>
		</section>

		<!-- Results -->
		<section>
			<h2 class="mb-6 text-left text-3xl font-bold text-white">📈 Результаты проекта</h2>
			<div class="rounded-xl border border-gray-700 bg-gray-800/30 p-6 backdrop-blur-sm">
				<div class="space-y-4">
					<p class="leading-relaxed text-gray-300">
						✅ <span class="font-medium text-blue-400">Активное использование:</span> платформой пользуются
						компании в Калининградской области
					</p>
					<p class="leading-relaxed text-gray-300">
						✅ <span class="font-medium text-blue-400">Реальные заказы:</span> ежедневно формируются
						актуальные B2B заказы
					</p>
					<p class="leading-relaxed text-gray-300">
						✅ <span class="font-medium text-blue-400">Довольные пользователи:</span> процесс закупки
						стал быстрее, удобнее, прозрачнее
					</p>
					<p class="leading-relaxed text-gray-300">
						✅ <span class="font-medium text-blue-400">Развитие платформы:</span> продолжает расти, подключаются
						новые участники рынка
					</p>
					<p class="leading-relaxed text-gray-300">
						✅ <span class="font-medium text-blue-400">Цифровая трансформация:</span> оцифровка процессов
						взаимодействия в HoReCa сегменте
					</p>
				</div>
			</div>
		</section>
	</div>
</ProjectPageFrame>
