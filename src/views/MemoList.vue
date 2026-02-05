<script setup>
import { reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import httpService from '@/services/httpService';

const router = useRouter();
const state = reactive({
  list: []
});
const params = reactive({
  keyword: ''
});

onMounted(async () => {
  const result = await httpService.findAll();
  state.list = result;
});

const moveToDetail = (id) => {
  router.push(`/detail/${id}`);
};

const search = async () => {
  const result = await httpService.findSearch(params);
  state.list = result;
};



</script>

<template>
  <div class="toolbar">
    <form @submit.prevent="search" class="search-box">
      <input
        type="search"
        v-model="params.keyword"
        placeholder="검색"
      />
      <button type="submit" class="btn-search">검색</button>
    </form>

    <router-link to="/write" class="btn btn-add">
      글 추가
    </router-link>
  </div>
  <div v-if="state.list.length === 0">작성된 글이 없습니다.</div>
<table v-else>
  <thead>
    <tr>
      <th class="col-id">번호</th>
      <th class="col-title">제목</th>
      <th class="col-date">작성일</th>
    </tr>
  </thead>

  <tbody>
    <tr
      v-for="item in state.list"
      :key="item.id"
      @click="moveToDetail(item.id)"
    >
      <td class="col-id">{{ item.id }}</td>
      <td class="col-title">{{ item.title }}</td>
      <td class="col-date">{{ item.createdAt }}</td>
    </tr>
  </tbody>
</table>
</template>

<style scoped>

.toolbar {
  display: flex;
  justify-content: space-between; 
  align-items: center;
  margin-bottom: 20px;
}

.search-box {
  display: flex;
  align-items: center;
}

input[type="search"] {
  padding: 8px;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button,
.btn {
  padding: 8px 14px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.btn-search {
  margin-left: 6px;
  background-color: #555;
  color: #fff;
}

.btn-search:hover {
  background-color: #333;
}

.btn-add {
  background-color: #222;
  color: #fff;
  text-decoration: none;
}

.btn-add:hover {
  background-color: #000;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 12px;
  border-bottom: 1px solid #eee;
  text-align: left;
}

th {
  background-color: #fafafa;
  font-weight: 600;
}

tr:hover {
  background-color: #f5f5f5;
  cursor: pointer;
}

.col-id {
  width: 100px;
  text-align: center;
}

.col-title {
  text-align: left;
  padding-left: 20px; 
}

.col-date {
  text-align: right;
  font-size: 15px;
}
</style>