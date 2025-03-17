function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        
        // Déplace les éléments de arr[0..i-1] qui sont plus grands que key d'une position vers la droite
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

// initialisation
let array = [12, 11, 13, 5, 6];
console.log("Tableau trié:", insertionSort(array));