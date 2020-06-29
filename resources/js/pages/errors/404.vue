<template>
  <card class="text-center">
    <h3 class="mb-4">
        Страница не найдена
    </h3>

    <div class="links">
      <router-link :to="{ name: 'main' }">
        На главную страницу
      </router-link>
    </div>
  </card>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>
