<template>
  <div>
    <header>
      <Header />
    </header>

    <main
      class="mx-auto w-full max-w-5xl px-4 pb-40 font-inter font-medium transition-colors duration-500 dark:bg-gray-900 dark:text-gray-200"
    >
      <slot />
    </main>

    <footer>Footer</footer>
  </div>
</template>
