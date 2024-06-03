// Функція отримує елемент та повертає значення від верху сторінки
export const getValueTop = (element) => {
  if (element) {
    const rect = element.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const top = rect.top + scrollTop;
    return top;
  }
};
