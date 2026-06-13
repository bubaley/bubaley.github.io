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
		'Celery'
	];
</script>

<svelte:head>
	<title>Corex.Tasks - Task Tracker для команды</title>
	<meta
		name="description"
		content="Собственный Task Tracker, созданный под реальные потребности команды разработки"
	/>
</svelte:head>

<ProjectPageFrame
	title="Corex.Tasks — трекер задач, который мы сделали для себя"
	description="Собственный task tracker, который вырос из реальной потребности команды: от простой системы “не забыть задачи” до полноценного трекера проектов, бюджета, отчётов и процессов."
	{techStack}
	highlights={[
		'сделан под реальные процессы команды, а не под абстрактный workflow',
		'задачи, бюджеты, отчёты и база знаний в одном интерфейсе',
		'заменил перегруженные внешние сервисы и продолжает развиваться'
	]}
	label="Команда / процессы"
>
	<!-- Content sections -->
	<img src="/tasksBoard.png" alt="Corex.Tasks" class="mb-10 h-auto w-full rounded-lg" />
	<div class="space-y-16">
		<!-- Project History -->
		<section>
			<h2 class="mb-6 text-left text-3xl font-bold text-white">📈 История проекта</h2>
			<div class="prose prose-lg max-w-none">
				<p class="mb-4 leading-relaxed text-gray-300">
					Когда мы только начинали работать командой, пробовали разные сервисы: ClickUp, Jira,
					Яндекс.Трекер — но всё было как-то не то. Где-то неудобно, где-то перегружено, где-то
					просто не подходило под наш подход к работе.
				</p>
				<p class="mb-4 leading-relaxed text-gray-300">
					В какой-то момент я решил: пора делать своё. Так появился Corex.Tasks — сервис для
					управления задачами, который мы писали с нуля, под свои процессы.
				</p>
				<p class="leading-relaxed text-gray-300">
					Сначала это была простая система, чтобы просто "не забыть" задачи, но постепенно она
					выросла в полноценную платформу, в которой мы ведём все проекты.
				</p>
			</div>
		</section>

		<!-- My Role -->
		<img src="/tasksDetail.png" alt="Corex.Tasks" class="mb-10 h-auto w-full rounded-lg" />
		<section>
			<h2 class="mb-6 text-left text-3xl font-bold text-white">🧑‍💻 Моя роль в проекте</h2>
			<div class="space-y-4">
				<div class="rounded-lg border border-gray-700 bg-gray-800/30 p-4 backdrop-blur-sm">
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">Инициатор и архитектор:</span> полностью разработал
						архитектуру от базы данных до интерфейса
					</p>
				</div>
				<div class="rounded-lg border border-gray-700 bg-gray-800/30 p-4 backdrop-blur-sm">
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">Fullstack разработка:</span> писал backend и frontend,
						проектировал UX под реальные процессы
					</p>
				</div>
				<div class="rounded-lg border border-gray-700 bg-gray-800/30 p-4 backdrop-blur-sm">
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">Интеграции:</span> подключил внешние сервисы — биллинг,
						отчёты, уведомления
					</p>
				</div>
				<div class="rounded-lg border border-gray-700 bg-gray-800/30 p-4 backdrop-blur-sm">
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">Аналитика:</span> разработал систему отчётов, чтобы
						видеть где проект "проседает"
					</p>
				</div>
				<div class="rounded-lg border border-gray-700 bg-gray-800/30 p-4 backdrop-blur-sm">
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">Менторинг команды:</span> наставлял коллег, помогал
						подключаться к проекту, код-ревью
					</p>
				</div>
			</div>
		</section>

		<!-- Technical Features -->
		<section>
			<h2 class="mb-6 text-left text-3xl font-bold text-white">📌 Что умеет Corex.Tasks</h2>
			<div class="space-y-4">
				<div class="flex items-start gap-3">
					<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400"></div>
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">Работа с задачами и проектами:</span> списки, канбан,
						спринты — всё, как мы любим
					</p>
				</div>
				<div class="flex items-start gap-3">
					<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400"></div>
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">Базы знаний и документация:</span> можно писать прямо
						в трекере — удобно, когда всё в одном месте
					</p>
				</div>
				<div class="flex items-start gap-3">
					<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400"></div>
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">Аналитика и отчёты:</span> нагрузка по сотрудникам,
						прогресс по задачам, эффективность спринтов
					</p>
				</div>
				<div class="flex items-start gap-3">
					<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400"></div>
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">Контроль бюджета:</span> трекаем время, бюджеты проектов
						и сравниваем с планами
					</p>
				</div>
				<div class="flex items-start gap-3">
					<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400"></div>
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">Интеграции:</span> подключили биллинг, чтобы видеть,
						как задачи влияют на выручку
					</p>
				</div>
				<div class="flex items-start gap-3">
					<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400"></div>
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">Работа с командой:</span> задачи можно назначать,
						делить, контролировать, настраивать роли и доступы
					</p>
				</div>
				<div class="flex items-start gap-3">
					<div class="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-400"></div>
					<p class="leading-relaxed text-gray-300">
						<span class="font-medium text-blue-400">Гибкий интерфейс:</span> борды, списки, фильтры —
						всё настраивается удобно и понятно
					</p>
				</div>
			</div>
		</section>

		<!-- Results -->
		<img src="/tasksDatabase.png" alt="Corex.Tasks" class="mb-10 h-auto w-full rounded-lg" />
		<section>
			<h2 class="mb-6 text-left text-3xl font-bold text-white">🤝 Зачем всё это?</h2>
			<div class="rounded-xl border border-gray-700 bg-gray-800/30 p-6 backdrop-blur-sm">
				<div class="space-y-4">
					<p class="leading-relaxed text-gray-300">
						✅ <span class="font-medium text-blue-400">Навели порядок:</span> все проекты проходят через
						единый трекер
					</p>
					<p class="leading-relaxed text-gray-300">
						✅ <span class="font-medium text-blue-400">Прозрачность:</span> команда видит свои задачи,
						сроки, нагрузку
					</p>
					<p class="leading-relaxed text-gray-300">
						✅ <span class="font-medium text-blue-400">Контроль результатов:</span> руководители видят
						цифры и прогресс в реальном времени
					</p>
					<p class="leading-relaxed text-gray-300">
						✅ <span class="font-medium text-blue-400">Наше решение:</span> сделано именно под наши задачи
						и продолжает развиваться
					</p>
				</div>
			</div>
		</section>
	</div>
</ProjectPageFrame>
