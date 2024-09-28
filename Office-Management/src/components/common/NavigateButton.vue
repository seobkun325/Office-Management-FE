<template>
  <button @click="navigate" :class="buttonClass">
    {{ buttonText }}
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router' // vue-router의 useRouter 훅 임포트
import { defineProps } from 'vue'

// props 정의
const props = defineProps({
  to: {
    type: String,
    required: true // 라우트 경로는 필수
  },
  buttonText: {
    type: String,
    default: 'Navigate' // 버튼의 기본 텍스트
  },
  buttonClass: {
    type: String,
    default: '' // 추가적인 CSS 클래스를 전달받을 수 있음
  }
})

// vue-router 훅 사용
const router = useRouter()

// navigate 함수 정의
const navigate = () => {
  router.push(props.to) // 클릭 시 지정된 라우트로 이동
}
</script>

<style scoped>
/* 기본 버튼 스타일 */
button {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

/* 버튼 hover 스타일 */
button:hover {
  background-color: #0056b3;
}

/* 추가적으로 buttonClass에 정의된 스타일이 적용될 수 있도록 함 */
</style>
