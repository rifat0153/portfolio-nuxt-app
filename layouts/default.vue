<template>
  <div>
    <header class="sticky top-0 z-50">
      <Header />
    </header>

    <main
      class="w-full pb-40 font-inter font-medium transition-colors duration-500 dark:bg-gray-900 dark:text-gray-200"
    >
      <slot />
    </main>

    <footer>Footer</footer>
  </div>
</template>
