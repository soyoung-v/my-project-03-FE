<script setup>
import httpService from '@/services/httpService';
import { onMounted, reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const state = reactive ({
  mode : ' 등록',
  memo : {
    id : 0,
    title : '',
    contents : ''
  }
});

const submit = async () => {
  if(!state.memo.title){
    alert('제목을 입력해 주세요!')
    return;
  } else if(!state.memo.contents){
    alert('내용을 입력해 주세요!')
    return;
  }

  const result = await state.memo.id ? 
                httpService.update(state.memo) :
                httpService.save(state.memo);
  
  if( !result ){ alert(`글${state.memo.id ? '수정' : '등록'}에 실패하였습니다.`)
    return;
  };

  const path = state.memo.id ? `/detail/${state.memo.id}` : '/';
  router.push(path);

}

onMounted (async () => {
  if(route.params.id){
    state.mode = ' 수정';
    const id = route.params.id;
    state.memo = await httpService.findById(id);
  }
}) ;

</script>

<template>
<h3>글 {{state.mode}}</h3>
<div>
    <label>제목: <input type="text" v-model="state.memo.title"></label>
</div>
<div>
    <label>내용: <textarea v-model="state.memo.contents"></textarea></label>
</div>
<div class="btn-wrap">
  <button @click="submit">저장</button>
</div>
</template>

<style scoped>
h3 {
  margin-bottom: 20px;
}

div {
  margin-bottom: 15px;
}

input[type="text"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

textarea {
  min-height: 150px;
  resize: vertical;
}

button {
  padding: 10px 16px;
  background-color: #222;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-wrap {
  display: flex;
  justify-content: flex-end;
}

.btn-wrap button {
  background-color: #222;
}

.btn-wrap button:hover {
  background-color: #000;
}
</style>