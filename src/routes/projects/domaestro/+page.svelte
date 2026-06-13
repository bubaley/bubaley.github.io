<script lang="ts">
	import ProjectPageFrame from '$lib/components/ProjectPageFrame.svelte';

	const techStack = ['FastAPI', 'Docker', 'Traefik', 'YAML', 'REST API'];
</script>

<svelte:head>
	<title>Domaestro - Система управления DNS и SSL</title>
	<meta
		name="description"
		content="Внутренняя система для управления доменами, DNS-записями и выпуском SSL-сертификатов"
	/>
</svelte:head>

<ProjectPageFrame
	title="Domaestro — система управления DNS и SSL"
	description="Внутренняя система для управления доменами, DNS-записями и выпуском SSL-сертификатов: замена внешних сервисов, контроль инфраструктуры и понятный API-контур."
	{techStack}
	highlights={[
		'DNS, SSL и проксирование управляются из одного интерфейса',
		'конфигурации генерируются автоматически и обновляют инфраструктуру',
		'снижает зависимость от внешних провайдеров и ручных DevOps-операций'
	]}
	label="Инфраструктура"
	links={[{ href: 'https://github.com/bubaley/domaestro', label: 'GitHub Repository' }]}
>
	<!-- Content sections -->
	<div class="space-y-16">
		<!-- Project History -->
		<section>
			<h2 class="mb-6 text-left text-3xl font-bold text-white">📌 Предпосылки к созданию</h2>
			<div class="prose prose-lg max-w-none">
				<p class="mb-4 leading-relaxed text-gray-300">
					Ранее мы использовали Cloudflare — удобный сервис для управления DNS, проксированием и
					выпуском сертификатов. Но в определённый момент появилась потребность перейти на
					отечественное решение, чтобы полностью контролировать инфраструктуру и сократить
					зависимость от внешних провайдеров.
				</p>
				<p class="mb-4 leading-relaxed text-gray-300">
					После анализа доступных решений стало понятно, что готовых подходящих решений не было: нам
					нужно было что-то лёгкое, простое, понятное для пользователей, без лишнего функционала.
				</p>
				<p class="leading-relaxed text-gray-300">
					Так появился Domaestro — продукт, который мы написали под себя, чтобы решить эту проблему.
				</p>
			</div>
		</section>

		<!-- My Role -->
		<section>
			<h2 class="mb-6 text-left text-3xl font-bold text-white">🧑‍💻 Моя роль в проекте</h2>
			<div class="space-y-4">
				<div class="rounded-lg border border-gray-700 bg-gray-800/30 p-4 backdrop-blur-sm">
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">Архитектор проекта:</span> полностью разработал архитектуру
						проекта с нуля
					</p>
				</div>
				<div class="rounded-lg border border-gray-700 bg-gray-800/30 p-4 backdrop-blur-sm">
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">Backend разработка:</span> написал backend и API
						для взаимодействия с TriFig и другими сервисами
					</p>
				</div>
				<div class="rounded-lg border border-gray-700 bg-gray-800/30 p-4 backdrop-blur-sm">
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">UI/UX разработка:</span> разработал интерфейс панели
						управления, ориентированный на удобство пользователя
					</p>
				</div>
				<div class="rounded-lg border border-gray-700 bg-gray-800/30 p-4 backdrop-blur-sm">
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">DevOps автоматизация:</span> настроил процессы выпуска
						SSL-сертификатов и автоматическое обновление конфигураций
					</p>
				</div>
				<div class="rounded-lg border border-gray-700 bg-gray-800/30 p-4 backdrop-blur-sm">
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">Оптимизация процессов:</span> превратил сложные ручные
						процессы в нажим одной кнопки
					</p>
				</div>
			</div>
		</section>

		<!-- Technical Features -->
		<section>
			<h2 class="mb-6 text-left text-3xl font-bold text-white">⚙️ Что делает Domaestro</h2>
			<div class="space-y-4">
				<div class="flex items-start gap-3">
					<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400"></div>
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">Управление доменами:</span> DNS-записи через удобный
						интерфейс с валидацией
					</p>
				</div>
				<div class="flex items-start gap-3">
					<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400"></div>
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">Template-based конфигурация:</span> генерация шаблонов
						для автоматической настройки проксирования
					</p>
				</div>
				<div class="flex items-start gap-3">
					<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400"></div>
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">Интеграция с TriFig:</span> автоматическое проксирование
						трафика и выпуск SSL-сертификатов
					</p>
				</div>
				<div class="flex items-start gap-3">
					<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400"></div>
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">RESTful API:</span> простой HTTP API с token-based
						аутентификацией
					</p>
				</div>
				<div class="flex items-start gap-3">
					<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400"></div>
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">Автоматизация SSL:</span> после добавления домена
						система сама выпускает SSL и разворачивает конфиги
					</p>
				</div>
				<div class="flex items-start gap-3">
					<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400"></div>
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">Docker-ready:</span> полная контейнеризация с поддержкой
						Docker Compose
					</p>
				</div>
				<div class="flex items-start gap-3">
					<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400"></div>
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">Единый интерфейс:</span> всё из одного места — удобно,
						наглядно, просто, понятно
					</p>
				</div>
			</div>
		</section>

		<!-- Technical Architecture -->
		<section>
			<h2 class="mb-6 text-left text-3xl font-bold text-white">🏗️ Техническая архитектура</h2>
			<div class="grid gap-6 md:grid-cols-2">
				<div class="rounded-xl border border-gray-700 bg-gray-800/30 p-6 backdrop-blur-sm">
					<h3 class="mb-4 text-xl font-bold text-white">🚀 Основные компоненты</h3>
					<ul class="space-y-2 text-gray-300">
						<li>• FastAPI backend с высокой производительностью</li>
						<li>• Шаблонизатор для конфигураций</li>
						<li>• YAML-based конфигурации Traefik</li>
						<li>• Token-based аутентификация</li>
					</ul>
				</div>
				<div class="rounded-xl border border-gray-700 bg-gray-800/30 p-6 backdrop-blur-sm">
					<h3 class="mb-4 text-xl font-bold text-white">🔧 DevOps особенности</h3>
					<ul class="space-y-2 text-gray-300">
						<li>• Health checks для мониторинга</li>
						<li>• Автоматическая регенерация конфигов</li>
						<li>• Let's Encrypt интеграция</li>
						<li>• File watching для обновлений</li>
					</ul>
				</div>
			</div>
		</section>

		<!-- Results -->
		<section>
			<h2 class="mb-6 text-left text-3xl font-bold text-white">📈 Результат</h2>
			<div class="rounded-xl border border-gray-700 bg-gray-800/30 p-6 backdrop-blur-sm">
				<div class="space-y-4">
					<p class="leading-relaxed text-gray-300">
						✅ <span class="font-medium text-blue-400">Полный отказ от Cloudflare</span> и других зарубежных
						решений
					</p>
					<p class="leading-relaxed text-gray-300">
						✅ <span class="font-medium text-blue-400">Контроль инфраструктуры</span> на своей стороне
					</p>
					<p class="leading-relaxed text-gray-300">
						✅ <span class="font-medium text-blue-400">Упрощение работы с клиентами:</span> регистрация
						домена, выпуск SSL, проксирование — одна процедура
					</p>
					<p class="leading-relaxed text-gray-300">
						✅ <span class="font-medium text-blue-400">Снижение зависимости</span> от внешних сервисов,
						повышение безопасности и надёжности
					</p>
					<p class="leading-relaxed text-gray-300">
						✅ <span class="font-medium text-blue-400">Решена многолетняя боль</span> команды по управлению
						доменами и сертификатами
					</p>
				</div>
			</div>
		</section>
	</div>
</ProjectPageFrame>
