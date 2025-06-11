<script lang="ts">
  import { locale, t } from '$lib/stores/i18n';

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
  <meta name="description" content="Собственный Task Tracker, созданный под реальные потребности команды разработки" />
</svelte:head>

<article class="pt-16 pb-20">
  <div class="container mx-auto px-6 max-w-4xl">
    <!-- Back to Home -->
    <nav class="mb-8">
      <a href="/" 
         class="inline-flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white transition-colors duration-300">
        ← Назад на главную
      </a>
    </nav>

    <!-- Header -->
    <header class="mb-12">
      <h1 class="text-4xl md:text-5xl font-bold mb-6 text-left text-white">
        🗂️ Corex.Tasks — трекер задач, который мы сделали для себя
      </h1>
      <p class="text-xl text-gray-300 leading-relaxed mb-8">
        Corex.Tasks — это наш собственный Task Tracker, который вырос из реальной потребности. 
        Когда стандартные решения не подходили под наши процессы, мы создали платформу с нуля — 
        от простой системы "не забыть задачи" до полноценного трекера проектов.
      </p>
      
      <!-- Tech Stack -->
      <div class="mb-8">
        <h3 class="text-xl font-bold mb-4 text-white">💻 Стек технологий</h3>
        <div class="flex flex-wrap gap-2">
          {#each techStack as tech}
            <span class="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-lg text-sm text-gray-300">{tech}</span>
          {/each}
        </div>
      </div>
    </header>

    <!-- Content sections -->
     <img src="/tasksBoard.png" alt="Corex.Tasks" class="w-full h-auto rounded-lg mb-10">
    <div class="space-y-16">
      <!-- Project History -->
      <section>
        <h2 class="text-3xl font-bold mb-6 text-left text-white">
          📈 История проекта
        </h2>
        <div class="prose prose-lg max-w-none">
          <p class="text-gray-300 leading-relaxed mb-4">
            Когда мы только начинали работать командой, пробовали разные сервисы: ClickUp, Jira, Яндекс.Трекер — но всё было как-то не то. 
            Где-то неудобно, где-то перегружено, где-то просто не подходило под наш подход к работе.
          </p>
          <p class="text-gray-300 leading-relaxed mb-4">
            В какой-то момент я решил: пора делать своё. Так появился Corex.Tasks — сервис для управления задачами, 
            который мы писали с нуля, под свои процессы.
          </p>
          <p class="text-gray-300 leading-relaxed">
            Сначала это была простая система, чтобы просто "не забыть" задачи, но постепенно она выросла в полноценную платформу, 
            в которой мы ведём все проекты.
          </p>
        </div>
      </section>

      <!-- My Role -->
      <img src="/tasksDetail.png" alt="Corex.Tasks" class="w-full h-auto rounded-lg mb-10">
      <section>
        <h2 class="text-3xl font-bold mb-6 text-left text-white">
          🧑‍💻 Моя роль в проекте
        </h2>
        <div class="space-y-4">
          <div class="p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg">
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">Инициатор и архитектор:</span> полностью разработал архитектуру от базы данных до интерфейса
            </p>
          </div>
          <div class="p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg">
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">Fullstack разработка:</span> писал backend и frontend, проектировал UX под реальные процессы
            </p>
          </div>
          <div class="p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg">
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">Интеграции:</span> подключил внешние сервисы — биллинг, отчёты, уведомления
            </p>
          </div>
          <div class="p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg">
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">Аналитика:</span> разработал систему отчётов, чтобы видеть где проект "проседает"
            </p>
          </div>
          <div class="p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg">
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">Менторинг команды:</span> наставлял коллег, помогал подключаться к проекту, код-ревью
            </p>
          </div>
        </div>
      </section>

      <!-- Technical Features -->
      <section>
        <h2 class="text-3xl font-bold mb-6 text-left text-white">
          📌 Что умеет Corex.Tasks
        </h2>
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <div class="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">Работа с задачами и проектами:</span> списки, канбан, спринты — всё, как мы любим
            </p>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">Базы знаний и документация:</span> можно писать прямо в трекере — удобно, когда всё в одном месте
            </p>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">Аналитика и отчёты:</span> нагрузка по сотрудникам, прогресс по задачам, эффективность спринтов
            </p>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">Контроль бюджета:</span> трекаем время, бюджеты проектов и сравниваем с планами
            </p>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">Интеграции:</span> подключили биллинг, чтобы видеть, как задачи влияют на выручку
            </p>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">Работа с командой:</span> задачи можно назначать, делить, контролировать, настраивать роли и доступы
            </p>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">Гибкий интерфейс:</span> борды, списки, фильтры — всё настраивается удобно и понятно
            </p>
          </div>
        </div>
      </section>

      <!-- Results -->
      <img src="/tasksDatabase.png" alt="Corex.Tasks" class="w-full h-auto rounded-lg mb-10">
      <section>
        <h2 class="text-3xl font-bold mb-6 text-left text-white">
          🤝 Зачем всё это?
        </h2>
        <div class="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <div class="space-y-4">
            <p class="text-gray-300 leading-relaxed">
              ✅ <span class="text-blue-400 font-medium">Навели порядок:</span> все проекты проходят через единый трекер
            </p>
            <p class="text-gray-300 leading-relaxed">
              ✅ <span class="text-blue-400 font-medium">Прозрачность:</span> команда видит свои задачи, сроки, нагрузку
            </p>
            <p class="text-gray-300 leading-relaxed">
              ✅ <span class="text-blue-400 font-medium">Контроль результатов:</span> руководители видят цифры и прогресс в реальном времени
            </p>
            <p class="text-gray-300 leading-relaxed">
              ✅ <span class="text-blue-400 font-medium">Наше решение:</span> сделано именно под наши задачи и продолжает развиваться
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</article> 