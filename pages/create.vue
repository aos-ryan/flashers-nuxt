<template>
<div>
  <form @submit.prevent="generateResponse">
    <input v-model="answer" />
    <button type="submit">Generate Name</button>
  </form>
</div>
<p></p>
<div>
<p>{{answer}}</p>
</div>
</template>

<script setup>
const answer = ref('');

async function generateResponse () {
  const { data } = await useFetch('/api/openai');
  answer.value = data.value.choices[0].text;
}
</script>