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
  <ProfileSummary />

  <SocialLinks />

  <ProfileImage />

  <Experience />

  <TechnologyList />
</template>
