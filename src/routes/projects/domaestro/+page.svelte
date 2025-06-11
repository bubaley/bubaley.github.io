<script lang="ts">
  import { locale, t } from '$lib/stores/i18n';

  const techStack = [
    'FastAPI',
    'Docker',
    'Traefik',
    'YAML',
    'REST API',
  ];
</script>

<svelte:head>
  <title>Domaestro - Система управления DNS и SSL</title>
  <meta name="description" content="Внутренняя система для управления доменами, DNS-записями и выпуском SSL-сертификатов" />
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
        🌐 Domaestro — система управления DNS и SSL
      </h1>
      <p class="text-xl text-gray-300 leading-relaxed mb-8">
        Domaestro — это внутренняя система для управления доменами, DNS-записями и выпуском SSL-сертификатов, 
        созданная для замены зарубежных сервисов типа Cloudflare. Современный API-сервис для динамического 
        управления конфигурациями Traefik с template-based подходом.
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

      <!-- Project Links -->
      <div class="flex gap-4 flex-wrap">
        <a href="https://github.com/bubaley/domaestro" target="_blank" rel="noopener noreferrer" 
           class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
          📂 GitHub Repository
        </a>
      </div>
    </header>

    <!-- Content sections -->
    <div class="space-y-16">
      <!-- Project History -->
      <section>
        <h2 class="text-3xl font-bold mb-6 text-left text-white">
          📌 Предпосылки к созданию
        </h2>
        <div class="prose prose-lg max-w-none">
          <p class="text-gray-300 leading-relaxed mb-4">
            Ранее мы использовали Cloudflare — удобный сервис для управления DNS, проксированием и выпуском сертификатов. 
            Но в определённый момент появилась потребность перейти на отечественное решение, чтобы полностью контролировать 
            инфраструктуру и сократить зависимость от внешних провайдеров.
          </p>
          <p class="text-gray-300 leading-relaxed mb-4">
            После анализа доступных решений стало понятно, что готовых подходящих решений не было: нам нужно было что-то 
            лёгкое, простое, понятное для пользователей, без лишнего функционала.
          </p>
          <p class="text-gray-300 leading-relaxed">
            Так появился Domaestro — продукт, который мы написали под себя, чтобы решить эту проблему.
          </p>
        </div>
      </section>

      <!-- My Role -->
      <section>
        <h2 class="text-3xl font-bold mb-6 text-left text-white">
          🧑‍💻 Моя роль в проекте
        </h2>
        <div class="space-y-4">
          <div class="p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg">
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">Архитектор проекта:</span> полностью разработал архитектуру проекта с нуля
            </p>
          </div>
          <div class="p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg">
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">Backend разработка:</span> написал backend и API для взаимодействия с TriFig и другими сервисами
            </p>
          </div>
          <div class="p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg">
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">UI/UX разработка:</span> разработал интерфейс панели управления, ориентированный на удобство пользователя
            </p>
          </div>
          <div class="p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg">
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">DevOps автоматизация:</span> настроил процессы выпуска SSL-сертификатов и автоматическое обновление конфигураций
            </p>
          </div>
          <div class="p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg">
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">Оптимизация процессов:</span> превратил сложные ручные процессы в нажим одной кнопки
            </p>
          </div>
        </div>
      </section>

      <!-- Technical Features -->
      <section>
        <h2 class="text-3xl font-bold mb-6 text-left text-white">
          ⚙️ Что делает Domaestro
        </h2>
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <div class="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">Управление доменами:</span> DNS-записи через удобный интерфейс с валидацией
            </p>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">Template-based конфигурация:</span> генерация шаблонов для автоматической настройки проксирования
            </p>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">Интеграция с TriFig:</span> автоматическое проксирование трафика и выпуск SSL-сертификатов
            </p>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">RESTful API:</span> простой HTTP API с token-based аутентификацией
            </p>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">Автоматизация SSL:</span> после добавления домена система сама выпускает SSL и разворачивает конфиги
            </p>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">Docker-ready:</span> полная контейнеризация с поддержкой Docker Compose
            </p>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">Единый интерфейс:</span> всё из одного места — удобно, наглядно, просто, понятно
            </p>
          </div>
        </div>
      </section>

      <!-- Technical Architecture -->
      <section>
        <h2 class="text-3xl font-bold mb-6 text-left text-white">
          🏗️ Техническая архитектура
        </h2>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h3 class="text-xl font-bold mb-4 text-white">🚀 Основные компоненты</h3>
            <ul class="space-y-2 text-gray-300">
              <li>• FastAPI backend с высокой производительностью</li>
              <li>• Шаблонизатор для конфигураций</li>
              <li>• YAML-based конфигурации Traefik</li>
              <li>• Token-based аутентификация</li>
            </ul>
          </div>
          <div class="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h3 class="text-xl font-bold mb-4 text-white">🔧 DevOps особенности</h3>
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
        <h2 class="text-3xl font-bold mb-6 text-left text-white">
          📈 Результат
        </h2>
        <div class="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <div class="space-y-4">
            <p class="text-gray-300 leading-relaxed">
              ✅ <span class="text-blue-400 font-medium">Полный отказ от Cloudflare</span> и других зарубежных решений
            </p>
            <p class="text-gray-300 leading-relaxed">
              ✅ <span class="text-blue-400 font-medium">Контроль инфраструктуры</span> на своей стороне
            </p>
            <p class="text-gray-300 leading-relaxed">
              ✅ <span class="text-blue-400 font-medium">Упрощение работы с клиентами:</span> регистрация домена, выпуск SSL, проксирование — одна процедура
            </p>
            <p class="text-gray-300 leading-relaxed">
              ✅ <span class="text-blue-400 font-medium">Снижение зависимости</span> от внешних сервисов, повышение безопасности и надёжности
            </p>
            <p class="text-gray-300 leading-relaxed">
              ✅ <span class="text-blue-400 font-medium">Решена многолетняя боль</span> команды по управлению доменами и сертификатами
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</article> 