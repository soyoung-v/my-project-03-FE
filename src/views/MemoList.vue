<script setup>
import { reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import httpService from '@/services/httpService';

const router = useRouter();

const state = reactive({
  list: []
});

onMounted(async () => {
  const result = await httpService.findAll();
  state.list = result;
});

const moveToDetail = (id) => {
  router.push(`/detail/${id}`);
};


</script>

<template>
     <router-link to="/write" class="btn">
      추가하기
    </router-link>
  <form @submit.prevent="search">
    <input
      type="search"
      v-model="keyword"
      placeholder="메모 검색"
    />
    <button type="submit">검색</button>
  </form>
<div v-if="state.list.length === 0">작성된 글이 없습니다.</div>
<table v-else>
    <tr>
        <th>번호</th>
        <th>제목</th>
        <th>작성일</th>
    </tr>
    
    <tr v-for="item in state.list" :key="item.id" @click="moveToDetail(item.id)">        
        <td>{{ item.id }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.createdAt }}</td>
    </tr>
    
</table>
</template>

<style scoped>

</style>