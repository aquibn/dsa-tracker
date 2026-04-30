export const dsReference = [
  {
    name: "vector<T> / list",
    type: "Dynamic Array",
    description: "Default container; random access. Use for growable arrays and most linear data storage.",
    complexity: { access: "O(1)", insert: "O(n)", push: "O(1) am.", pop: "O(1)" },
    cpp: "vector<int> v = {3, 1, 4};\nsort(v.begin(), v.end());\nv.push_back(9);",
    python: "a = [3, 1, 4]\na.sort()\na.append(9)",
    operations: [
      { op: "Sort", cpp: "sort(v.begin(), v.end())", py: "a.sort()", time: "O(n log n)" },
      { op: "Lower Bound", cpp: "lower_bound(v.begin(), v.end(), x)", py: "bisect.bisect_left(a, x)", time: "O(log n)" }
    ]
  },
  {
    name: "unordered_map<K,V> / dict",
    type: "Hash Table",
    description: "O(1) average lookup by key. Fast frequency counting and mapping.",
    complexity: { lookup: "O(1) avg", insert: "O(1) avg", delete: "O(1) avg" },
    cpp: "unordered_map<int,int> mp;\nmp[key] = val;\nif(mp.count(key)) ...",
    python: "d = {}\nd[key] = val\nif key in d: ...",
    operations: [
      { op: "Insert", cpp: "mp[k] = v", py: "d[k] = v", time: "O(1)" },
      { op: "Count", cpp: "mp.count(k)", py: "d.get(k, 0)", time: "O(1)" }
    ]
  },
  {
    name: "unordered_set<T> / set",
    type: "Hash Table",
    description: "O(1) average membership testing. Use to keep track of seen elements.",
    complexity: { insert: "O(1) avg", lookup: "O(1) avg" },
    cpp: "unordered_set<int> s;\ns.insert(x);\nif(s.count(x)) ...",
    python: "s = set()\ns.add(x)\nif x in s: ...",
    operations: [
      { op: "Insert", cpp: "s.insert(x)", py: "s.add(x)", time: "O(1)" },
      { op: "Contains", cpp: "s.count(x)", py: "x in s", time: "O(1)" }
    ]
  },
  {
    name: "map<K,V> / SortedDict",
    type: "Red-Black Tree",
    description: "Ordered key-value pairs. Use when you need sorted keys or floor/ceil queries.",
    complexity: { lookup: "O(log n)", insert: "O(log n)", lower_bound: "O(log n)" },
    cpp: "map<int,int> ord;\nord[10] = 1;\nauto it = ord.lower_bound(5); // first key >= 5",
    python: "from sortedcontainers import SortedDict\nsd = SortedDict({10: 1})\n# No direct lower_bound in standard dict",
    operations: [
      { op: "Lower Bound", cpp: "mp.lower_bound(x)", py: "sd.bisect_left(x)", time: "O(log n)" }
    ]
  },
  {
    name: "stack<T> / list",
    type: "LIFO",
    description: "Last-In-First-Out. Backtracking, matching parentheses, monotonic stacks.",
    complexity: { push: "O(1)", pop: "O(1)", top: "O(1)" },
    cpp: "stack<int> st;\nst.push(x);\nst.top();\nst.pop();",
    python: "st = []\nst.append(x)\nst[-1]\nst.pop()",
    operations: []
  },
  {
    name: "queue<T> / deque",
    type: "FIFO",
    description: "First-In-First-Out. Primary use: Breadth-First Search (BFS).",
    complexity: { push: "O(1)", pop: "O(1)", front: "O(1)" },
    cpp: "queue<int> q;\nq.push(x);\nq.front();\nq.pop();",
    python: "from collections import deque\nq = deque()\nq.append(x)\nq.popleft()",
    operations: []
  },
  {
    name: "deque<T> / deque",
    type: "Double-Ended Queue",
    description: "Double-ended queue. Use for sliding window maximum or monotonic deque.",
    complexity: { push_front: "O(1)", push_back: "O(1)", pop_front: "O(1)", pop_back: "O(1)" },
    cpp: "deque<int> dq;\ndq.push_front(1);\ndq.push_back(2);\ndq.pop_front();",
    python: "from collections import deque\ndq = deque()\ndq.appendleft(1)\ndq.append(2)\ndq.popleft()",
    operations: []
  },
  {
    name: "priority_queue<T> / heapq",
    type: "Binary Heap",
    description: "Top K elements, Dijkstra, scheduling. C++ max-heap default, Python min-heap default.",
    complexity: { push: "O(log n)", pop: "O(log n)", top: "O(1)" },
    cpp: "priority_queue<int> maxH;\npriority_queue<int, vector<int>, greater<>> minH;",
    python: "import heapq\nh = []\nheapq.heappush(h, x)\nheapq.heappop(h)",
    operations: []
  },
  {
    name: "string / str",
    type: "Character Array",
    description: "Handling sequence of characters. Substrings, find, concatenate.",
    complexity: { concat: "O(n+m)", substr: "O(len)", find: "O(n*m)" },
    cpp: "string s = \"hello\";\ns.substr(1, 3); // \"ell\"\ns.find(\"lo\");",
    python: "s = \"hello\"\ns[1:4] # \"ell\"\ns.find(\"lo\")",
    operations: []
  },
  {
    name: "bitset<N> / int",
    type: "Bit Array",
    description: "Extremely fast bitwise operations. Use for subset DP or memory optimization.",
    complexity: { bitops: "O(1) / O(N/word_size)" },
    cpp: "bitset<32> b;\nb.set(1);\nb.test(1);\nint cnt = b.count();",
    python: "b = 0\nb |= (1 << 1)\nb & (1 << 1)\nbin(b).count('1')",
    operations: []
  },
  {
    name: "Trie (Custom)",
    type: "26-ary Tree",
    description: "Prefix tree for strings. Fast prefix queries and word lookups.",
    complexity: { insert: "O(L)", search: "O(L)" },
    cpp: "struct Trie {\n  Trie* ch[26];\n  bool end;\n  void insert(string w) { ... }\n};",
    python: "class Trie:\n  def __init__(self):\n    self.children = {}\n    self.is_end = False",
    operations: []
  },
  {
    name: "Union-Find (Custom)",
    type: "Disjoint Set",
    description: "Connectivity in graphs. Union by rank and path compression.",
    complexity: { union: "O(α(n))", find: "O(α(n))" },
    cpp: "struct DSU {\n  vector<int> p; \n  int find(int x) { ... }\n  void unite(int a, int b) { ... }\n};",
    python: "class DSU:\n  def __init__(self, n):\n    self.p = list(range(n))\n  def find(self, x): ...",
    operations: []
  }
];
