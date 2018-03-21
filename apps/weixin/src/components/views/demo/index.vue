<template>
    <div class="demo">
        <div class="search">
            <input
                :value="demoInput"
                @input="event => demoSetInput(event.target.value)"
                class="search-input"
                placeholder="请输入城市名称"/>
            <button
                @click="demoGetWeathers"
                class="search-btn"
                type="button">
                搜索
            </button>
        </div>
        <div class="results">
            <template v-if="demoResult.title">
                <p>{{ demoResult.title }}</p>
                <p>{{ demoResult.created }}</p>
                <hr/>
                <ul>
                    <li v-for="item in demoResult.item.forecast">
                        <p>日期：{{ item.day }}, {{ item.date }}</p>
                        <p>温度（华氏）：{{ item.low }} ~ {{ item.high }}</p>
                        <p>天气：{{ item.text }}</p>
                    </li>
                </ul>
            </template>
            <p v-else class="results-error">
                {{ demoResult.error }}
            </p>
        </div>
    </div>
</template>

<style src="./index.css"></style>

<script src="./index.js"></script>
