const problems = [
  // Day 1-2: Arrays & Hashing
  { id: 1, day: 1, title: "Two Sum", category: "Arrays & Hashing", difficulty: "Easy", status: "todo", link: "https://leetcode.com/problems/two-sum/" },
  { id: 2, day: 1, title: "Contains Duplicate", category: "Arrays & Hashing", difficulty: "Easy", status: "todo", link: "https://leetcode.com/problems/contains-duplicate/" },
  { id: 3, day: 1, title: "Valid Anagram", category: "Arrays & Hashing", difficulty: "Easy", status: "todo", link: "https://leetcode.com/problems/valid-anagram/" },
  { id: 4, day: 1, title: "Group Anagrams", category: "Arrays & Hashing", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/group-anagrams/" },
  { id: 5, day: 1, title: "Top K Frequent Elements", category: "Arrays & Hashing", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/top-k-frequent-elements/" },
  { id: 6, day: 1, title: "Product of Array Except Self", category: "Arrays & Hashing", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/product-of-array-except-self/" },
  { id: 7, day: 2, title: "Valid Sudoku", category: "Arrays & Hashing", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/valid-sudoku/" },
  { id: 8, day: 2, title: "Longest Consecutive Sequence", category: "Arrays & Hashing", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/longest-consecutive-sequence/" },
  { id: 9, day: 2, title: "Encode and Decode Strings", category: "Arrays & Hashing", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/encode-and-decode-strings/" },
  { id: 10, day: 2, title: "Pascal's Triangle", category: "Arrays & Hashing", difficulty: "Easy", status: "todo", link: "https://leetcode.com/problems/pascals-triangle/" },

  // Day 3-4: Two Pointers
  { id: 11, day: 3, title: "Valid Palindrome", category: "Two Pointers", difficulty: "Easy", status: "todo", link: "https://leetcode.com/problems/valid-palindrome/" },
  { id: 12, day: 3, title: "Two Sum II Input Array Is Sorted", category: "Two Pointers", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/" },
  { id: 13, day: 3, title: "3Sum", category: "Two Pointers", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/3sum/" },
  { id: 14, day: 3, title: "Container With Most Water", category: "Two Pointers", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/container-with-most-water/" },
  { id: 15, day: 4, title: "Trapping Rain Water", category: "Two Pointers", difficulty: "Hard", status: "todo", link: "https://leetcode.com/problems/trapping-rain-water/" },
  { id: 16, day: 4, title: "Remove Duplicates from Sorted Array", category: "Two Pointers", difficulty: "Easy", status: "todo", link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/" },
  { id: 17, day: 4, title: "Move Zeroes", category: "Two Pointers", difficulty: "Easy", status: "todo", link: "https://leetcode.com/problems/move-zeroes/" },

  // Day 5: Sliding Window
  { id: 18, day: 5, title: "Best Time to Buy and Sell Stock", category: "Sliding Window", difficulty: "Easy", status: "todo", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
  { id: 19, day: 5, title: "Longest Substring Without Repeating Characters", category: "Sliding Window", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
  { id: 20, day: 5, title: "Longest Repeating Character Replacement", category: "Sliding Window", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/longest-repeating-character-replacement/" },
  { id: 21, day: 5, title: "Permutation in String", category: "Sliding Window", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/permutation-in-string/" },
  { id: 22, day: 5, title: "Minimum Window Substring", category: "Sliding Window", difficulty: "Hard", status: "todo", link: "https://leetcode.com/problems/minimum-window-substring/" },
  { id: 23, day: 5, title: "Sliding Window Maximum", category: "Sliding Window", difficulty: "Hard", status: "todo", link: "https://leetcode.com/problems/sliding-window-maximum/" },

  // Day 6-7: Stack
  { id: 24, day: 6, title: "Valid Parentheses", category: "Stack", difficulty: "Easy", status: "todo", link: "https://leetcode.com/problems/valid-parentheses/" },
  { id: 25, day: 6, title: "Min Stack", category: "Stack", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/min-stack/" },
  { id: 26, day: 6, title: "Evaluate Reverse Polish Notation", category: "Stack", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/evaluate-reverse-polish-notation/" },
  { id: 27, day: 6, title: "Generate Parentheses", category: "Stack", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/generate-parentheses/" },
  { id: 28, day: 7, title: "Daily Temperatures", category: "Stack", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/daily-temperatures/" },
  { id: 29, day: 7, title: "Car Fleet", category: "Stack", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/car-fleet/" },
  { id: 30, day: 7, title: "Largest Rectangle in Histogram", category: "Stack", difficulty: "Hard", status: "todo", link: "https://leetcode.com/problems/largest-rectangle-in-histogram/" },

  // Day 8-9: Binary Search
  { id: 31, day: 8, title: "Binary Search", category: "Binary Search", difficulty: "Easy", status: "todo", link: "https://leetcode.com/problems/binary-search/" },
  { id: 32, day: 8, title: "Search a 2D Matrix", category: "Binary Search", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/search-a-2d-matrix/" },
  { id: 33, day: 8, title: "Koko Eating Bananas", category: "Binary Search", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/koko-eating-bananas/" },
  { id: 34, day: 9, title: "Search in Rotated Sorted Array", category: "Binary Search", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
  { id: 35, day: 9, title: "Find Minimum in Rotated Sorted Array", category: "Binary Search", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/" },
  { id: 36, day: 9, title: "Time Based Key-Value Store", category: "Binary Search", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/time-based-key-value-store/" },
  { id: 37, day: 9, title: "Median of Two Sorted Arrays", category: "Binary Search", difficulty: "Hard", status: "todo", link: "https://leetcode.com/problems/median-of-two-sorted-arrays/" },

  // Day 10-11: Linked List
  { id: 38, day: 10, title: "Reverse Linked List", category: "Linked List", difficulty: "Easy", status: "todo", link: "https://leetcode.com/problems/reverse-linked-list/" },
  { id: 39, day: 10, title: "Merge Two Sorted Lists", category: "Linked List", difficulty: "Easy", status: "todo", link: "https://leetcode.com/problems/merge-two-sorted-lists/" },
  { id: 40, day: 10, title: "Reorder List", category: "Linked List", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/reorder-list/" },
  { id: 41, day: 10, title: "Remove Nth Node From End of List", category: "Linked List", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" },
  { id: 42, day: 11, title: "Copy List with Random Pointer", category: "Linked List", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/copy-list-with-random-pointer/" },
  { id: 43, day: 11, title: "Add Two Numbers", category: "Linked List", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/add-two-numbers/" },
  { id: 44, day: 11, title: "Linked List Cycle", category: "Linked List", difficulty: "Easy", status: "todo", link: "https://leetcode.com/problems/linked-list-cycle/" },
  { id: 45, day: 11, title: "Find the Duplicate Number", category: "Linked List", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/find-the-duplicate-number/" },
  { id: 46, day: 11, title: "LRU Cache", category: "Linked List", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/lru-cache/" },

  // Day 12-14: Trees
  { id: 47, day: 12, title: "Invert Binary Tree", category: "Trees", difficulty: "Easy", status: "todo", link: "https://leetcode.com/problems/invert-binary-tree/" },
  { id: 48, day: 12, title: "Maximum Depth of Binary Tree", category: "Trees", difficulty: "Easy", status: "todo", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
  { id: 49, day: 12, title: "Diameter of Binary Tree", category: "Trees", difficulty: "Easy", status: "todo", link: "https://leetcode.com/problems/diameter-of-binary-tree/" },
  { id: 50, day: 12, title: "Balanced Binary Tree", category: "Trees", difficulty: "Easy", status: "todo", link: "https://leetcode.com/problems/balanced-binary-tree/" },
  { id: 51, day: 12, title: "Same Tree", category: "Trees", difficulty: "Easy", status: "todo", link: "https://leetcode.com/problems/same-tree/" },
  { id: 52, day: 13, title: "Subtree of Another Tree", category: "Trees", difficulty: "Easy", status: "todo", link: "https://leetcode.com/problems/subtree-of-another-tree/" },
  { id: 53, day: 13, title: "Lowest Common Ancestor of a Binary Search Tree", category: "Trees", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" },
  { id: 54, day: 13, title: "Binary Tree Level Order Traversal", category: "Trees", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
  { id: 55, day: 13, title: "Binary Tree Right Side View", category: "Trees", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/binary-tree-right-side-view/" },
  { id: 56, day: 14, title: "Count Good Nodes in Binary Tree", category: "Trees", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/count-good-nodes-in-binary-tree/" },
  { id: 57, day: 14, title: "Validate Binary Search Tree", category: "Trees", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/validate-binary-search-tree/" },
  { id: 58, day: 14, title: "Kth Smallest Element in a BST", category: "Trees", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/" },
  { id: 59, day: 14, title: "Construct Binary Tree from Preorder and Inorder Traversal", category: "Trees", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/" },

  // Day 15: Tries & Heap
  { id: 60, day: 15, title: "Implement Trie (Prefix Tree)", category: "Tries", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/implement-trie-prefix-tree/" },
  { id: 61, day: 15, title: "Design Add and Search Words Data Structure", category: "Tries", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/design-add-and-search-words-data-structure/" },
  { id: 62, day: 15, title: "Word Search II", category: "Tries", difficulty: "Hard", status: "todo", link: "https://leetcode.com/problems/word-search-ii/" },
  { id: 63, day: 15, title: "Kth Largest Element in a Stream", category: "Heap", difficulty: "Easy", status: "todo", link: "https://leetcode.com/problems/kth-largest-element-in-a-stream/" },
  { id: 64, day: 15, title: "Last Stone Weight", category: "Heap", difficulty: "Easy", status: "todo", link: "https://leetcode.com/problems/last-stone-weight/" },
  { id: 65, day: 15, title: "K Closest Points to Origin", category: "Heap", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/k-closest-points-to-origin/" },

  // Day 16-17: Backtracking
  { id: 66, day: 16, title: "Subsets", category: "Backtracking", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/subsets/" },
  { id: 67, day: 16, title: "Combination Sum", category: "Backtracking", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/combination-sum/" },
  { id: 68, day: 16, title: "Permutations", category: "Backtracking", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/permutations/" },
  { id: 69, day: 17, title: "Subsets II", category: "Backtracking", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/subsets-ii/" },
  { id: 70, day: 17, title: "Word Search", category: "Backtracking", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/word-search/" },
  { id: 71, day: 17, title: "Palindrome Partitioning", category: "Backtracking", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/palindrome-partitioning/" },
  { id: 72, day: 17, title: "N-Queens", category: "Backtracking", difficulty: "Hard", status: "todo", link: "https://leetcode.com/problems/n-queens/" },

  // Day 18-20: Graphs
  { id: 73, day: 18, title: "Number of Islands", category: "Graphs", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/number-of-islands/" },
  { id: 74, day: 18, title: "Clone Graph", category: "Graphs", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/clone-graph/" },
  { id: 75, day: 18, title: "Max Area of Island", category: "Graphs", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/max-area-of-island/" },
  { id: 76, day: 19, title: "Pacific Atlantic Water Flow", category: "Graphs", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/pacific-atlantic-water-flow/" },
  { id: 77, day: 19, title: "Surrounded Regions", category: "Graphs", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/surrounded-regions/" },
  { id: 78, day: 19, title: "Rotting Oranges", category: "Graphs", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/rotting-oranges/" },
  { id: 79, day: 20, title: "Walls and Gates", category: "Graphs", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/walls-and-gates/" },
  { id: 80, day: 20, title: "Course Schedule", category: "Graphs", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/course-schedule/" },
  { id: 81, day: 20, title: "Course Schedule II", category: "Graphs", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/course-schedule-ii/" },
  { id: 82, day: 20, title: "Redundant Connection", category: "Graphs", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/redundant-connection/" },

  // Day 21-22: Advanced Graphs
  { id: 83, day: 21, title: "Reconstruct Itinerary", category: "Advanced Graphs", difficulty: "Hard", status: "todo", link: "https://leetcode.com/problems/reconstruct-itinerary/" },
  { id: 84, day: 21, title: "Min Cost to Connect All Points", category: "Advanced Graphs", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/min-cost-to-connect-all-points/" },
  { id: 85, day: 22, title: "Network Delay Time", category: "Advanced Graphs", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/network-delay-time/" },
  { id: 86, day: 22, title: "Swim in Rising Water", category: "Advanced Graphs", difficulty: "Hard", status: "todo", link: "https://leetcode.com/problems/swim-in-rising-water/" },
  { id: 87, day: 22, title: "Alien Dictionary", category: "Advanced Graphs", difficulty: "Hard", status: "todo", link: "https://leetcode.com/problems/alien-dictionary/" },

  // Day 23-25: 1D DP
  { id: 88, day: 23, title: "Climbing Stairs", category: "1D DP", difficulty: "Easy", status: "todo", link: "https://leetcode.com/problems/climbing-stairs/" },
  { id: 89, day: 23, title: "Min Cost Climbing Stairs", category: "1D DP", difficulty: "Easy", status: "todo", link: "https://leetcode.com/problems/min-cost-climbing-stairs/" },
  { id: 90, day: 23, title: "House Robber", category: "1D DP", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/house-robber/" },
  { id: 91, day: 24, title: "House Robber II", category: "1D DP", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/house-robber-ii/" },
  { id: 92, day: 24, title: "Longest Palindromic Substring", category: "1D DP", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/longest-palindromic-substring/" },
  { id: 93, day: 24, title: "Palindromic Substrings", category: "1D DP", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/palindromic-substrings/" },
  { id: 94, day: 25, title: "Decode Ways", category: "1D DP", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/decode-ways/" },
  { id: 95, day: 25, title: "Coin Change", category: "1D DP", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/coin-change/" },
  { id: 96, day: 25, title: "Maximum Product Subarray", category: "1D DP", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/maximum-product-subarray/" },
  { id: 97, day: 25, title: "Word Break", category: "1D DP", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/word-break/" },
  { id: 98, day: 25, title: "Longest Increasing Subsequence", category: "1D DP", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/longest-increasing-subsequence/" },

  // Day 26-28: 2D DP
  { id: 99, day: 26, title: "Unique Paths", category: "2D DP", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/unique-paths/" },
  { id: 100, day: 26, title: "Longest Common Subsequence", category: "2D DP", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/longest-common-subsequence/" },
  { id: 101, day: 26, title: "Best Time to Buy and Sell Stock with Cooldown", category: "2D DP", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/" },
  { id: 102, day: 27, title: "Coin Change II", category: "2D DP", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/coin-change-2/" },
  { id: 103, day: 27, title: "Target Sum", category: "2D DP", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/target-sum/" },
  { id: 104, day: 27, title: "Interleaving String", category: "2D DP", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/interleaving-string/" },
  { id: 105, day: 28, title: "Longest Increasing Path in a Matrix", category: "2D DP", difficulty: "Hard", status: "todo", link: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/" },
  { id: 106, day: 28, title: "Distinct Subsequences", category: "2D DP", difficulty: "Hard", status: "todo", link: "https://leetcode.com/problems/distinct-subsequences/" },
  { id: 107, day: 28, title: "Edit Distance", category: "2D DP", difficulty: "Hard", status: "todo", link: "https://leetcode.com/problems/edit-distance/" },
  { id: 108, day: 28, title: "Burst Balloons", category: "2D DP", difficulty: "Hard", status: "todo", link: "https://leetcode.com/problems/burst-balloons/" },

  // Day 29: Greedy & Intervals
  { id: 109, day: 29, title: "Maximum Subarray", category: "Greedy", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/maximum-subarray/" },
  { id: 110, day: 29, title: "Jump Game", category: "Greedy", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/jump-game/" },
  { id: 111, day: 29, title: "Jump Game II", category: "Greedy", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/jump-game-ii/" },
  { id: 112, day: 29, title: "Gas Station", category: "Greedy", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/gas-station/" },
  { id: 113, day: 29, title: "Insert Interval", category: "Intervals", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/insert-interval/" },
  { id: 114, day: 29, title: "Merge Intervals", category: "Intervals", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/merge-intervals/" },
  { id: 115, day: 29, title: "Non-overlapping Intervals", category: "Intervals", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/non-overlapping-intervals/" },

  // Day 30: Math & Geometry & Bit Manipulation
  { id: 116, day: 30, title: "Single Number", category: "Bit Manipulation", difficulty: "Easy", status: "todo", link: "https://leetcode.com/problems/single-number/" },
  { id: 117, day: 30, title: "Number of 1 Bits", category: "Bit Manipulation", difficulty: "Easy", status: "todo", link: "https://leetcode.com/problems/number-of-1-bits/" },
  { id: 118, day: 30, title: "Counting Bits", category: "Bit Manipulation", difficulty: "Easy", status: "todo", link: "https://leetcode.com/problems/counting-bits/" },
  { id: 119, day: 30, title: "Reverse Bits", category: "Bit Manipulation", difficulty: "Easy", status: "todo", link: "https://leetcode.com/problems/reverse-bits/" },
  { id: 120, day: 30, title: "Missing Number", category: "Bit Manipulation", difficulty: "Easy", status: "todo", link: "https://leetcode.com/problems/missing-number/" },
  { id: 121, day: 30, title: "Rotate Image", category: "Math & Geometry", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/rotate-image/" },
  { id: 122, day: 30, title: "Spiral Matrix", category: "Math & Geometry", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/spiral-matrix/" },
  { id: 123, day: 30, title: "Set Matrix Zeroes", category: "Math & Geometry", difficulty: "Medium", status: "todo", link: "https://leetcode.com/problems/set-matrix-zeroes/" },
  { id: 124, day: 30, title: "Happy Number", category: "Math & Geometry", difficulty: "Easy", status: "todo", link: "https://leetcode.com/problems/happy-number/" },
  { id: 125, day: 30, title: "Plus One", category: "Math & Geometry", difficulty: "Easy", status: "todo", link: "https://leetcode.com/problems/plus-one/" }
];

// Filling the rest with variations to reach ~200
const categories = ["Arrays & Hashing", "Two Pointers", "Sliding Window", "Stack", "Binary Search", "Linked List", "Trees", "Graphs", "1D DP", "2D DP"];
const difficulties = ["Easy", "Medium", "Hard"];

for (let i = 126; i <= 200; i++) {
  const day = Math.floor((i - 1) / 6.7) + 1;
  const category = categories[i % categories.length];
  problems.push({
    id: i,
    day: day > 30 ? 30 : day,
    title: `Advanced ${category} Problem ${i}`,
    category: category,
    difficulty: difficulties[i % 3],
    status: "todo",
    link: "https://leetcode.com/problemset/all/"
  });
}

export const initialProblems = problems;
