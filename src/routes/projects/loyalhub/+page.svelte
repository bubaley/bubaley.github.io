<script lang="ts">
  import { locale, t } from '$lib/stores/i18n';

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
    'Nginx',
  ];
</script>

<svelte:head>
  <title>Loyalhub - SaaS Platform for Restaurants</title>
  <meta name="description" content="Universal SaaS platform for restaurants enabling quick launch of branded digital solutions" />
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
        🚀 Loyalhub — SaaS-платформа для ресторанов
      </h1>
      <p class="text-xl text-gray-300 leading-relaxed mb-8">
        Loyalhub — это универсальная SaaS-платформа для ресторанов, позволяющая за короткое время запускать брендированные цифровые решения: мобильные приложения, telegram-ботов, QR-меню и сайты. Платформа автоматизирует работу с клиентами, заказы, программы лояльности и коммуникации.
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
        <a href="https://loyalhub.ru" target="_blank" rel="noopener noreferrer" 
           class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
          🌐 Сайт проекта
        </a>
        <a href="https://docs.loyalhub.ru" target="_blank" rel="noopener noreferrer"
           class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
          📚 Документация
        </a>
      </div>
    </header>

    <!-- Content sections -->
    <img src="/loyalhubSite.png" alt="Loyalhub" class="w-full h-auto ">
    <div class="space-y-16">
      <!-- Project History -->
      <section>
        <h2 class="text-3xl font-bold mb-6 pt-20 text-left text-white">
          📈 История проекта
        </h2>
        <div class="prose prose-lg max-w-none">
          <p class="text-gray-300 leading-relaxed mb-4">
            Проект начинался практически с одного клиента и вырос в самостоятельный жизнеспособный продукт, к которому подключаются новые рестораны и сети.
          </p>
          <p class="text-gray-300 leading-relaxed">
            Благодаря гибкой архитектуре, активной доработке и партнерской лицензии с iiko, Loyalhub занял стабильное место на рынке решений для ресторанного бизнеса.
          </p>
        </div>
      </section>

      <!-- My Role -->
      <section>
        <h2 class="text-3xl font-bold mb-6 text-left text-white">
          🔑 Моя роль в проекте
        </h2>
        <div class="space-y-4">
          <div class="p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg">
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">Разработка основного бэкенда:</span> проектирование архитектуры, написание ключевых сервисов
            </p>
          </div>
          <div class="p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg">
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">Разработка фронтенда:</span> интерфейсы CRM, панели администратора, клиентские решения
            </p>
          </div>
          <div class="p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg">
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">Разработка панели администратора (CRM):</span> для управления контентом, заказами, программами лояльности
            </p>
          </div>
          <div class="p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg">
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">Ведение команды:</span> постановка задач, код-ревью, менторинг, координация работы разработчиков
            </p>
          </div>
          <div class="p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg">
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">Взаимодействие с бизнесом:</span> формирование требований, планирование фичей для роста продукта
            </p>
          </div>
        </div>
      </section>

      <!-- Technical Features -->
      <img src="/loyalhubMobile.png" alt="Loyalhub" class="w-full h-auto ">
      <section>
        <h2 class="text-3xl font-bold mb-6 pt-10 text-left text-white">
          ⚙️ Технологические особенности
        </h2>
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <div class="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">White-label решения:</span> полная кастомизация интерфейсов и функциональности под бренд ресторана
            </p>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">Интеграция с iiko</span> (официальный партнёр, в прайс-листе)
            </p>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">Гибкая API-интеграция</span> с внешними системами CRM/POS
            </p>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">Подключение онлайн-платежей,</span> SMS-провайдеров
            </p>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">Коммуникации</span> через push, SMS, email, мессенджеры
            </p>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">Масштабируемая архитектура,</span> позволяющая подключать новых клиентов без значительных изменений ядра
            </p>
          </div>
        </div>
      </section>

      <!-- Results -->
      <section>
        <h2 class="text-3xl font-bold mb-6 text-left text-white">
          🕒 Результаты
        </h2>
        <div class="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <div class="space-y-4">
            <p class="text-gray-300 leading-relaxed">
              ✅ От проекта "на заказ" — до готового SaaS-продукта
            </p>
            <p class="text-gray-300 leading-relaxed">
              ✅ Подключение новых клиентов через партнерские каналы
            </p>
            <p class="text-gray-300 leading-relaxed">
              ✅ Быстрый запуск решений для ресторанов — в среднем за <span class="text-blue-400 font-medium">2 недели</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</article>
