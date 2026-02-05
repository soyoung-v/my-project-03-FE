<script setup>
import { reactive, onMounted} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import httpService from '@/services/httpService';

const route = useRoute();
const router = useRouter();

const state = reactive({
    data:{
      id: 0,
      title: '',
      createdAt: '',
      contents: ''
    }
});

onMounted(async () => {
  const id = route.params.id;
  state.data = await httpService.findById(id);
});

const doDelete = async () => {
    if( !confirm('삭제하시겠습니까') ) {
        return;
    }
  const result = await httpService.delete(state.data.id);
  if(result == 1) {router.push('/');}
}
</script>

<template>
  <div class="meta id">번호: {{ state.data.id }}</div>
  <div class="title">제목: {{ state.data.title }}</div>
  <div class="meta createdat">작성일: {{ state.data.createdAt }}</div>

  <div class="contents">
    {{ state.data.contents }}
  </div>

  <div class="btn-wrap">
    <router-link :to="`/mod/${state.data.id}`">
      <button class="btn-edit">수정</button>
    </router-link>
    <button class="btn-delete" @click="doDelete">삭제</button>
  </div>
</template>

<style scoped>
.meta {
  font-size: 13px;
  color: #777;
  margin-bottom: 8px;
}

.title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
}

.contents {
  padding: 20px;
  background-color: #fafafa;
  border-radius: 6px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.btn-wrap {
  display: flex;
  justify-content: flex-end; 
  gap: 8px;
}

button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.btn-edit {
  background-color: #555;
  color: #fff;
}

.btn-delete {
  background-color: #c0392b;
  color: #fff;
}

.btn-edit:hover {
  background-color: #333;
}

.btn-delete:hover {
  background-color: #a93226;
}

</style>