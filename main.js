function insertionSort(arr, low, high) {
	// Сортирует часть массива от индекса low до high методом сортировки вставками
	for (let i = low + 1; i <= high; i++) {
			let key = arr[i]; // Сохраняем текущий элемент в переменной key
			let j = i - 1; // Начинаем с предыдущего элемента
			// Перемещаем элементы, которые больше key, на одну позицию вправо
			while (j >= low && arr[j] > key) {
					arr[j + 1] = arr[j];
					j--;
			}
			// Вставляем key на правильное место
			arr[j + 1] = key;
	}
}

// Функция разделения массива на части
function partition(arr, low, high) {
	// Используем последний элемент в качестве опорного (pivot)
	let pivot = arr[high];
	let i = low - 1; // Индекс min
	// Перемещаем элементы, которые меньше pivot, влево
	for (let j = low; j < high; j++) {
			if (arr[j] < pivot) {
					i++;
					// Обмен значений
					[arr[i], arr[j]] = [arr[j], arr[i]];
			}
	}
	// Ставим pivot на правильное место
	[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
	return i + 1; // Возвращаем индекс опорного элемента
}

// Функция сортировки
function quicksort(arr, low, high) {
	if (low < high) {
			// Если размер фрагмента < 10, используем сортировку вставками
			if (high - low + 1 < 10) {
					insertionSort(arr, low, high);
			} else {
					// Разделяем массив и рекурсивно сортируем подмассивы
					let pivotIndex = partition(arr, low, high);
					quicksort(arr, low, pivotIndex - 1);
					quicksort(arr, pivotIndex + 1, high);
			}
	}
}

// debug
const data = [10, 7, 8, 9, 1, 5, 12, 3, 14, 6, 11, 4, 13, 15, 2, 100000000, -10, 0];
console.log("Исходный массив:", data);
quicksort(data, 0, data.length - 1);
console.log("Отсортированный массив:", data);
