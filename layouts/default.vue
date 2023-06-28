<template>
  <div>
    <header>
      <Header />
    </header>
    <!-- <header>
      <nuxt-link to="/">Home</nuxt-link> |
      <nuxt-link to="/about">About</nuxt-link>
    </header> -->

    <main>
      <slot />
    </main>

    <footer>Footer</footer>
  </div>
</template>
