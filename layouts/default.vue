<template>
  <div>
    <header>
      <Header />
    </header>

    <main
      class="dark:bg-gray-900 dark:text-gray-200 w-full px-4 pb-40 font-inter font-medium transition-colors duration-500"
    >
      <div class="mx-auto max-w-5xl">
        <slot />
      </div>
    </main>

    <footer>Footer</footer>
  </div>
</template>
