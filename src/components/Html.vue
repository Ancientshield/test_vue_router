<template>
	<h3>Html</h3>
	<v-pre v-text="html"></v-pre>
</template>

<script setup>
	const html = `
      <div>
        <ul>
          <li></li>
        </ul>
      </div>
    `;
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	v-pre {
		width: 80%;
		max-height: 200px;
		text-align: left;
		background-color: #ddd;
		padding: 10px 0;
	}
</style>
