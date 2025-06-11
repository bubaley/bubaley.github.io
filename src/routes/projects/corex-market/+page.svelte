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
    'Celery',
    'Flutter'
  ];
</script>

<svelte:head>
  <title>Corex.Market - B2B-маркетплейс для HoReCa</title>
  <meta name="description" content="B2B-маркетплейс для автоматизации взаимодействия между поставщиками и покупателями в сфере HoReCa" />
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
        🛒 Corex.Market — B2B-маркетплейс для HoReCa
      </h1>
      <p class="text-xl text-gray-300 leading-relaxed mb-8">
        Corex.Market — это B2B-маркетплейс, созданный для автоматизации взаимодействия между поставщиками и покупателями 
        в сфере HoReCa (рестораны, кафе, гостиницы). Платформа упрощает и оцифровывает процесс формирования заказов, 
        делая его удобным, прозрачным и эффективным.
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
    <img src="/marketHome.jpeg" alt="Corex.Market" class="w-full h-auto rounded-lg mb-10">

    <!-- Content sections -->
    <div class="space-y-16">
      <!-- Project Goals -->
      <section>
        <h2 class="text-3xl font-bold mb-6 text-left text-white">
          🎯 Цели проекта
        </h2>
        <div class="prose prose-lg max-w-none">
          <p class="text-gray-300 leading-relaxed mb-4">
            Главная цель платформы — упростить и оцифровать процесс формирования заказов, сделать его удобным, 
            прозрачным и эффективным как для покупателей, так и для поставщиков.
          </p>
          <div class="grid md:grid-cols-2 gap-6 mt-6">
            <div class="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-4">
              <h3 class="text-lg font-bold mb-3 text-white">📋 Оцифровка процессов</h3>
              <p class="text-gray-300 text-sm">Электронный документооборот и автоматизация заказов</p>
            </div>
            <div class="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-4">
              <h3 class="text-lg font-bold mb-3 text-white">💰 Актуальные цены</h3>
              <p class="text-gray-300 text-sm">Предложения и цены всегда под рукой</p>
            </div>
            <div class="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-4">
              <h3 class="text-lg font-bold mb-3 text-white">🤝 Упрощение взаимодействия</h3>
              <p class="text-gray-300 text-sm">Между бизнесами в сфере HoReCa</p>
            </div>
            <div class="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-4">
              <h3 class="text-lg font-bold mb-3 text-white">🔍 Прозрачность</h3>
              <p class="text-gray-300 text-sm">Процессов закупок и формирования заказов</p>
            </div>
          </div>
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
              <span class="text-blue-400 font-medium">Ведущий разработчик:</span> проектирование архитектуры, написание бэкенда и фронтенда на старте проекта
            </p>
          </div>
          <div class="p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg">
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">Интеграции:</span> организовал подключения с внешними системами (iiko и другие учётные системы)
            </p>
          </div>
          <div class="p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg">
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">UX/UI дизайн:</span> работал над интерфейсом под реальные сценарии поставщиков и закупщиков
            </p>
          </div>
          <div class="p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg">
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">Проектный менеджмент:</span> координация команды, постановка задач, контроль сроков
            </p>
          </div>
          <div class="p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg">
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">Взаимодействие с бизнесом:</span> работа с заказчиками, партнёрами, проработка бизнес-логики
            </p>
          </div>
        </div>
      </section>
      <img src="/marketProduct.jpeg" alt="Corex.Market" class="w-full h-auto rounded-lg mb-10">

      <!-- Main Features -->
      <section>
        <h2 class="text-3xl font-bold mb-6 text-left text-white">
          📌 Основные возможности
        </h2>
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <div class="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">Двусторонняя регистрация:</span> работа как для поставщиков, так и для покупателей
            </p>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">Индивидуальное ценообразование:</span> каждый клиент видит свои персональные цены
            </p>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">Умный каталог:</span> удобный поиск, фильтрация и продвижение товаров
            </p>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">Интеграции с учётными системами:</span> Айка и другие системы поставщиков
            </p>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">Электронный документооборот:</span> счета, акты, товарные накладные через платформу
            </p>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">Автоматизация заказов:</span> упрощённый процесс формирования заказов
            </p>
          </div>
          <div class="flex items-start gap-3">
            <div class="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
            <p class="text-gray-300 leading-relaxed">
              <span class="text-blue-400 font-medium">Мобильное приложение:</span> быстрый доступ к заказам, история, push-уведомления
            </p>
          </div>
        </div>
      </section>

      <!-- Technical Features -->
      <img src="/marketCart.png" alt="Corex.Market" class="w-full h-auto rounded-lg mb-10">
      <section>
        <h2 class="text-3xl font-bold mb-6 text-left text-white">
          ⚙️ Особенности реализации
        </h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h3 class="text-xl font-bold mb-4 text-white">🔗 Интеграции</h3>
            <p class="text-gray-300 text-sm leading-relaxed">
              Сложная интеграция с различными учетными системами поставщиков для синхронизации данных о товарах и остатках
            </p>
          </div>
          <div class="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h3 class="text-xl font-bold mb-4 text-white">👤 Персонализация</h3>
            <p class="text-gray-300 text-sm leading-relaxed">
              Поддержка индивидуальных условий для каждого клиента — цены, скидки, условия доставки
            </p>
          </div>
          <div class="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h3 class="text-xl font-bold mb-4 text-white">🏗️ Масштабируемость</h3>
            <p class="text-gray-300 text-sm leading-relaxed">
              Гибкая архитектура позволяет расширение функционала и подключение новых участников рынка
            </p>
          </div>
        </div>
      </section>

      <!-- Results -->
      <section>
        <h2 class="text-3xl font-bold mb-6 text-left text-white">
          📈 Результаты проекта
        </h2>
        <div class="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <div class="space-y-4">
            <p class="text-gray-300 leading-relaxed">
              ✅ <span class="text-blue-400 font-medium">Активное использование:</span> платформой пользуются компании в Калининградской области
            </p>
            <p class="text-gray-300 leading-relaxed">
              ✅ <span class="text-blue-400 font-medium">Реальные заказы:</span> ежедневно формируются актуальные B2B заказы
            </p>
            <p class="text-gray-300 leading-relaxed">
              ✅ <span class="text-blue-400 font-medium">Довольные пользователи:</span> процесс закупки стал быстрее, удобнее, прозрачнее
            </p>
            <p class="text-gray-300 leading-relaxed">
              ✅ <span class="text-blue-400 font-medium">Развитие платформы:</span> продолжает расти, подключаются новые участники рынка
            </p>
            <p class="text-gray-300 leading-relaxed">
              ✅ <span class="text-blue-400 font-medium">Цифровая трансформация:</span> оцифровка процессов взаимодействия в HoReCa сегменте
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</article> 