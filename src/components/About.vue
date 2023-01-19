<template>
	<h2>About</h2>
	<div class="tab_box">
		<nav>
			<router-link to="/about/html">Html</router-link>
			<br />
			<router-link to="/about/css">CSS</router-link>
			<br />
			<router-link to="/about/javascript">JS</router-link>
		</nav>
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script setup></script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	.tab_box {
		width: 400px;
		height: 300px;
		background-color: slategrey;
		margin: 0 auto;
	}
	.content {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 270px;
	}
</style>
