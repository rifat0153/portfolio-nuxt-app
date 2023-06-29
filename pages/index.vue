<script setup lang="ts">
useSeoMeta({
  title: "Mahbubur Rahman | Typescript, Dart and C# Developer",
  description:
    "I am a versatile developer with 2+ years of experience in Typescript, C#, Dart, VueJs, .Net Core, and Flutter. Strong in both front-end and back-end development, with a proven ability to deliver high-quality solutions.",
  ogTitle: "[og:title]",
  ogDescription: "[og:description]",
  ogImage: "[og:image]",
  ogUrl: "[og:url]",
  twitterTitle: "[twitter:title]",
  twitterDescription: "[twitter:description]",
  twitterImage: "[twitter:image]",
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
});
</script>

<template>
  <div class="mx-auto w-full max-w-5xl px-4 pb-40 dark:text-gray-200">
    <div class="py-10 text-center">
      <p class="text-5xl font-medium text-cyan-600">Mahbubur Rahman</p>
      <p class="mt-2 text-2xl dark:text-gray-100">
        Typescript, Dart and C# Developer
      </p>
      <p class="mt-5 text-md leading-8 text-gray-800 dark:text-gray-300">
        I am a versatile developer with 2+ years of experience in Typescript,
        C#, Dart, VueJs, .Net Core, and Flutter. Strong in both front-end and
        back-end development, with a proven ability to deliver high-quality
        solutions.
      </p>
    </div>

    <SocialLinks />

    <ProfileImage />
  </div>
</template>
