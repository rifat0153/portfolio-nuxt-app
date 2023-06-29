<template>
  <div>
    <header>
      <Header />
    </header>

    <main
      class="mx-auto w-full px-4 pb-40 transition-colors duration-500 dark:bg-gray-900 dark:text-gray-200"
    >
      <slot />
    </main>

    <footer>Footer</footer>
  </div>
</template>
