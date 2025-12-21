import { ref, onMounted } from 'vue'

const isAccessibilityMode = ref(false)

// Инициализация при загрузке модуля
if (typeof window !== 'undefined') {
  const saved = localStorage.getItem('accessibilityMode')
  if (saved === 'true') {
    isAccessibilityMode.value = true
    document.body.classList.add('accessibility-mode')
  }
}

export function useAccessibility() {
  // Загружаем состояние из localStorage при монтировании компонента
  onMounted(() => {
    const saved = localStorage.getItem('accessibilityMode')
    if (saved === 'true') {
      isAccessibilityMode.value = true
      document.body.classList.add('accessibility-mode')
    }
  })

  const toggleAccessibilityMode = () => {
    isAccessibilityMode.value = !isAccessibilityMode.value
    
    if (isAccessibilityMode.value) {
      document.body.classList.add('accessibility-mode')
      localStorage.setItem('accessibilityMode', 'true')
    } else {
      document.body.classList.remove('accessibility-mode')
      localStorage.setItem('accessibilityMode', 'false')
    }
  }

  return {
    isAccessibilityMode,
    toggleAccessibilityMode
  }
}

