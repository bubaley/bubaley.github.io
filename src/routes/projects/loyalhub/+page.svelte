<script lang="ts">
	import ProjectPageFrame from '$lib/components/ProjectPageFrame.svelte';

	const techStack = [
		'Django + DRF',
		'PostgreSQL',
		'Celery',
		'Redis',
		'Vue.js',
		'Go',
		'Quasar',
		'Flutter',
		'FastAPI',
		'Docker',
		'Nginx'
	];
</script>

<svelte:head>
	<title>Loyalhub — SaaS-платформа для ресторанов</title>
	<meta
		name="description"
		content="SaaS-платформа для ресторанов: мобильные приложения, Telegram-боты, QR-меню, заказы и программы лояльности."
	/>
</svelte:head>

<ProjectPageFrame
	title="Loyalhub — SaaS-платформа для ресторанов"
	description="Loyalhub позволяет быстро запускать брендированные цифровые решения для ресторанов: мобильные приложения, Telegram-ботов, QR-меню, сайты, заказы, программы лояльности и коммуникации."
	{techStack}
	highlights={[
		'white-label запуск ресторанных решений под бренд клиента',
		'единый контур: сайт, приложение, бот, QR-меню и лояльность',
		'партнёрская интеграция с iiko и быстрый запуск новых клиентов'
	]}
	label="SaaS / HoReCa"
	links={[
		{ href: 'https://loyalhub.ru', label: 'Сайт проекта' },
		{ href: 'https://docs.loyalhub.ru', label: 'Документация' }
	]}
>
	<!-- Content sections -->
	<div>
    <img src="/loyalhubSite.png" alt="Loyalhub" class="h-auto w-full" />
  </div>
	<div class="space-y-16">
		<!-- Project History -->
		<section>
			<h2 class="mb-6 text-left text-3xl font-bold text-white">📈 История проекта</h2>
			<div class="prose prose-lg max-w-none">
				<p class="mb-4 leading-relaxed text-gray-300">
					Проект начинался практически с одного клиента и вырос в самостоятельный жизнеспособный
					продукт, к которому подключаются новые рестораны и сети.
				</p>
				<p class="leading-relaxed text-gray-300">
					Благодаря гибкой архитектуре, активной доработке и партнерской лицензии с iiko, Loyalhub
					занял стабильное место на рынке решений для ресторанного бизнеса.
				</p>
			</div>
		</section>

		<!-- My Role -->
		<section>
			<h2 class="mb-6 text-left text-3xl font-bold text-white">🔑 Моя роль в проекте</h2>
			<div class="space-y-4">
				<div class="rounded-lg border border-gray-700 bg-gray-800/30 p-4 backdrop-blur-sm">
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">Разработка основного бэкенда:</span> проектирование
						архитектуры, написание ключевых сервисов
					</p>
				</div>
				<div class="rounded-lg border border-gray-700 bg-gray-800/30 p-4 backdrop-blur-sm">
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">Разработка фронтенда:</span> интерфейсы CRM, панели
						администратора, клиентские решения
					</p>
				</div>
				<div class="rounded-lg border border-gray-700 bg-gray-800/30 p-4 backdrop-blur-sm">
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">Разработка панели администратора (CRM):</span> для
						управления контентом, заказами, программами лояльности
					</p>
				</div>
				<div class="rounded-lg border border-gray-700 bg-gray-800/30 p-4 backdrop-blur-sm">
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">Ведение команды:</span> постановка задач, код-ревью,
						менторинг, координация работы разработчиков
					</p>
				</div>
				<div class="rounded-lg border border-gray-700 bg-gray-800/30 p-4 backdrop-blur-sm">
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">Взаимодействие с бизнесом:</span> формирование требований,
						планирование фичей для роста продукта
					</p>
				</div>
			</div>
		</section>

		<!-- Technical Features -->
		<img src="/loyalhubMobile.png" alt="Loyalhub" class="h-auto w-full" />
		<section>
			<h2 class="mb-6 text-left text-3xl font-bold text-white">
				⚙️ Технологические особенности
			</h2>
			<div class="space-y-4">
				<div class="flex items-start gap-3">
					<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400"></div>
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">White-label решения:</span> полная кастомизация интерфейсов
						и функциональности под бренд ресторана
					</p>
				</div>
				<div class="flex items-start gap-3">
					<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400"></div>
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">Интеграция с iiko</span> (официальный партнёр, в
						прайс-листе)
					</p>
				</div>
				<div class="flex items-start gap-3">
					<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400"></div>
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">Гибкая API-интеграция</span> с внешними системами
						CRM/POS
					</p>
				</div>
				<div class="flex items-start gap-3">
					<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400"></div>
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">Подключение онлайн-платежей,</span> SMS-провайдеров
					</p>
				</div>
				<div class="flex items-start gap-3">
					<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400"></div>
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">Коммуникации</span> через push, SMS, email, мессенджеры
					</p>
				</div>
				<div class="flex items-start gap-3">
					<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400"></div>
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">Масштабируемая архитектура,</span> позволяющая подключать
						новых клиентов без значительных изменений ядра
					</p>
				</div>
			</div>
		</section>

		<!-- Results -->
		<section>
			<h2 class="mb-6 text-left text-3xl font-bold text-white">🕒 Результаты</h2>
			<div class="rounded-xl border border-gray-700 bg-gray-800/30 p-6 backdrop-blur-sm">
				<div class="space-y-4">
					<p class="leading-relaxed text-gray-300">
						✅ От проекта "на заказ" — до готового SaaS-продукта
					</p>
					<p class="leading-relaxed text-gray-300">
						✅ Подключение новых клиентов через партнерские каналы
					</p>
					<p class="leading-relaxed text-gray-300">
						✅ Быстрый запуск решений для ресторанов — в среднем за <span
							class="font-medium text-blue-400">2 недели</span
						>
					</p>
				</div>
			</div>
		</section>
	</div>
</ProjectPageFrame>
