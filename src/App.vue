<template>
  <div id="app">
    <keep-alive :exclude="['CityDetail']">
      <router-view/>
    </keep-alive>
  </div>
</template>
