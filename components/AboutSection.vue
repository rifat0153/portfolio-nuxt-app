<template>
  <div class="tracking-tight leading-normal">
    <div class="flex gap-6 justify-start items-center">
      <img
        src="~/assets/my-passport-photo.jpg"
        alt="Logo"
        class="w-28 h-28 rounded-full object-cover"
      />

      <div class="space-y-0.5 font-semibold">
        <p class="text-xl lg:text-2xl">Mahbubur Rahman</p>

        <p class="text-gray-500">Product-focused Full-Stack Developer</p>

        <NuxtLink
          href="mailto:rifat0153@gmail.com"
          class="text-gray-400 text-sm"
        >
          rifat0153@gmail.com
        </NuxtLink>

        <div class="flex gap-4 pt-2">
          <template v-for="(social, index) in socials" :key="index">
            <NuxtLink
              :href="social.url"
              target="_blank"
              class="text-gray-500 hover:text-gray-800"
            >
              <Icon :name="social.icon" class="w-6 h-6" />
            </NuxtLink>
          </template>
        </div>
      </div>
    </div>

    <p class="mt-10 font-semibold">About</p>

    <p>
      I am a full-stack developer with a passion for building products that
      people love. I have 4+ years of experience in web and mobile app
      development.
    </p>
  </div>
</template>

<script setup lang="ts">
const socials = [
  {
    name: "LinkedIn",
    url: "http://linkedin.com/in/mahbubur2",
    icon: "mdi:linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/rifat0153",
    icon: "mdi:github",
  },
  {
    name: "Stack Overflow",
    url: "https://stackoverflow.com/users/10734390/mahbuburrahman-rifat",
    icon: "mdi:stackoverflow",
  },
] as const;
</script>
