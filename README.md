# Sorting Visualizer

A **Sorting Visualizer** built using **React 17.0.2**, designed to help users understand different sorting algorithms through animations.

## Features
- **Sorting Algorithms:** Bubble Sort, Merge Sort, Insertion Sort, Selection Sort and Quick Sort.
- **Dynamic Range Control:** Adjust the number of elements in the array.
- **Speed Control:** Modify the speed of sorting animations.
- **Color Selection:** Customize the color of the bars.
- **Responsive UI:** Adjusts the maximum array size based on screen width.
- **Pause & Play Feature:** Start or stop the sorting process as needed.

## Tech Stack
- **Frontend:** React 17.0.2
- **State Management:** Redux
- **UI Components:** Material UI (Slider)
- **Styling:** CSS

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/sorting-visualizer.git
   cd sorting-visualizer
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Application:**
   ```bash
   npm start
   ```

The app will be available at `http://localhost:3000/`.

## Usage
1. Select a sorting algorithm from the dropdown.
2. Adjust the **range** (number of elements) using the slider.
3. Choose a **bar color** from the dropdown.
4. Set the sorting **speed** (Slow, Medium, Fast, etc.).
5. Click **Play** to start sorting.
6. Click **Change Values** to generate a new random array.

## Project Structure
```
📂src/
│── 📂components/
│   ├── 📂Algorithm/
│   │   ├── BubbleSort.js
│   │   ├── InsertionSort.js
│   │   ├── MergeSort.js
│   │   ├── QuickSort.js
│   │   ├── SelectionSort.js
│   ├── Header.js
│   ├── Header.css
│   ├── Home.js
│   ├── Home.css
│   ├── Sidebar.js
│   ├── Sidebar.css
│   ├── Visuals.js
│   ├── Visuals.css
│
│── 📂reducer/
│   ├── index.js
│   ├── updateProps.js
│
│── store.js
│── App.js
│── App.css
│── index.js
│── index.css
```

## Contributing
Feel free to fork this repository and contribute to improving the visualizer! If you find a bug or have suggestions, open an issue or create a pull request.

---

🚀 **Happy Sorting!**

