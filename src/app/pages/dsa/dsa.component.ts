import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../common/layout.component';
import { TitleService } from '../title.service';
import { CONSTANTS } from '../constants';

@Component({
  selector: 'app-dsa',
  standalone: true,
  imports: [CommonModule, LayoutComponent],
  template: `
    <app-layout>
      <h1 class="text-3xl font-bold mb-8">Data Structures & Algorithms</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div *ngFor="let topic of dsaTopics" class="glass p-6 rounded-xl hover:scale-105 transition-transform duration-300">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center text-white font-bold">
              {{ topic.icon }}
            </div>
            <h3 class="font-semibold text-lg">{{ topic.title }}</h3>
          </div>
          <p class="text-sm opacity-80 mb-4">{{ topic.description }}</p>
          <div class="mb-4">
            <div class="flex justify-between text-sm mb-1">
              <span>Proficiency</span>
              <span>{{ topic.proficiency }}%</span>
            </div>
            <div class="w-full bg-glass-bg rounded-full h-2">
              <div class="bg-gradient-to-r from-indigo-400 to-purple-600 h-2 rounded-full transition-all duration-500" [style.width.%]="topic.proficiency"></div>
            </div>
          </div>
          <div class="flex flex-wrap gap-2">
            <span *ngFor="let concept of topic.concepts" class="text-xs px-2 py-1 bg-glass-bg border border-glass-border rounded-md">
              {{ concept }}
            </span>
          </div>
        </div>
      </div>
      
      <div class="mt-12">
        <h2 class="text-2xl font-semibold mb-6">Problem Solving Stats</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div *ngFor="let stat of problemStats" class="glass p-6 rounded-xl text-center">
            <div class="text-3xl font-bold text-indigo-400 mb-2">{{ stat.count }}</div>
            <div class="text-sm opacity-80">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </app-layout>
  `
})
export class DSAComponent implements OnInit {
  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle(CONSTANTS.PAGE_TITLES.DSA);
  }
  dsaTopics = [
    {
      title: 'Arrays & Strings',
      icon: '📊',
      description: 'Linear data structures for storing and manipulating collections of elements with efficient access patterns.',
      proficiency: 90,
      concepts: ['Two Pointers', 'Sliding Window', 'Prefix Sum', 'Sorting']
    },
    {
      title: 'Linked Lists',
      icon: '🔗',
      description: 'Dynamic data structures with nodes containing data and references to next elements.',
      proficiency: 85,
      concepts: ['Singly Linked', 'Doubly Linked', 'Circular', 'Fast & Slow Pointers']
    },
    {
      title: 'Trees & Graphs',
      icon: '🌳',
      description: 'Hierarchical and network data structures for representing complex relationships.',
      proficiency: 88,
      concepts: ['Binary Trees', 'BST', 'DFS', 'BFS', 'Topological Sort']
    },
    {
      title: 'Dynamic Programming',
      icon: '🧮',
      description: 'Optimization technique using memoization and tabulation to solve complex problems.',
      proficiency: 80,
      concepts: ['Memoization', 'Tabulation', 'LCS', 'Knapsack', 'Fibonacci']
    },
    {
      title: 'Hash Tables',
      icon: '🗂️',
      description: 'Key-value data structures providing average O(1) time complexity for operations.',
      proficiency: 92,
      concepts: ['Hash Functions', 'Collision Handling', 'Load Factor', 'Chaining']
    },
    {
      title: 'Sorting & Searching',
      icon: '🔍',
      description: 'Fundamental algorithms for organizing and finding data efficiently.',
      proficiency: 87,
      concepts: ['Quick Sort', 'Merge Sort', 'Binary Search', 'Heap Sort']
    },
    {
      title: 'Stacks & Queues',
      icon: '📚',
      description: 'LIFO and FIFO data structures for managing elements in specific order.',
      proficiency: 88,
      concepts: ['Stack Operations', 'Queue Operations', 'Deque', 'Priority Queue']
    },
    {
      title: 'Heaps',
      icon: '⛰️',
      description: 'Complete binary trees maintaining heap property for priority-based operations.',
      proficiency: 83,
      concepts: ['Min Heap', 'Max Heap', 'Heap Sort', 'Priority Queue']
    },
    {
      title: 'Greedy Algorithms',
      icon: '🎯',
      description: 'Optimization approach making locally optimal choices at each step.',
      proficiency: 78,
      concepts: ['Activity Selection', 'Huffman Coding', 'Fractional Knapsack', 'MST']
    },
    {
      title: 'Backtracking',
      icon: '🔄',
      description: 'Algorithmic approach for finding solutions by exploring possibilities and undoing choices.',
      proficiency: 75,
      concepts: ['N-Queens', 'Sudoku Solver', 'Permutations', 'Combinations']
    },
    {
      title: 'Bit Manipulation',
      icon: '🔢',
      description: 'Operations on binary representations of numbers for efficient computations.',
      proficiency: 72,
      concepts: ['XOR', 'Bit Masks', 'Power of 2', 'Single Number']
    },
    {
      title: 'Trie',
      icon: '🌲',
      description: 'Tree-like data structure for efficient string storage and prefix-based operations.',
      proficiency: 80,
      concepts: ['Prefix Tree', 'Auto-complete', 'Word Search', 'Dictionary']
    },
    {
      title: 'Union Find',
      icon: '🔗',
      description: 'Disjoint set data structure for tracking connected components efficiently.',
      proficiency: 76,
      concepts: ['Path Compression', 'Union by Rank', 'Connected Components', 'Cycle Detection']
    },
    {
      title: 'Segment Tree',
      icon: '🌿',
      description: 'Tree data structure for efficient range queries and updates on arrays.',
      proficiency: 70,
      concepts: ['Range Sum', 'Range Min/Max', 'Lazy Propagation', 'Point Updates']
    }
  ];

  problemStats = [
    { count: '500+', label: 'Problems Solved' },
    { count: '20+', label: 'Algorithms Mastered' },
    { count: '14+', label: 'Data Structures' },
    { count: '95%', label: 'Success Rate' }
  ];
}