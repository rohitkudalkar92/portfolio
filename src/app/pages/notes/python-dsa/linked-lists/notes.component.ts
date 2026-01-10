import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../../../../common/layout/layout.component';
import { TopicHeaderComponent } from '../../../../common/topic-header.component';
import { ContentSectionComponent } from '../../../../common/content-section.component';
import { CodeBlockComponent } from '../../../../common/code-block.component';
import { TitleService } from '../../../../title.service';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, LayoutComponent, TopicHeaderComponent, ContentSectionComponent, CodeBlockComponent],
  template: `
    <app-layout>
      <app-topic-header 
        title="Linked Lists" 
        description="Singly, doubly linked lists and operations"
        difficulty="Intermediate">
      </app-topic-header>

      <app-content-section title="Node Structure">
        <p>Basic building block of linked lists.</p>
        <app-code-block 
          language="python" 
          [code]="nodeStructure">
        </app-code-block>
      </app-content-section>

      <app-content-section title="Singly Linked List">
        <p>Implementation of singly linked list with basic operations.</p>
        <app-code-block 
          language="python" 
          [code]="singlyLinkedList">
        </app-code-block>
      </app-content-section>

      <app-content-section title="Common Algorithms">
        <p>Essential linked list algorithms and patterns.</p>
        <app-code-block 
          language="python" 
          [code]="commonAlgorithms">
        </app-code-block>
      </app-content-section>
    </app-layout>
  `
})
export class NotesComponent implements OnInit {
  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Linked Lists - Python DSA');
  }

  nodeStructure = `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
    
    def __str__(self):
        return str(self.val)

# Creating nodes
node1 = ListNode(1)
node2 = ListNode(2)
node3 = ListNode(3)

# Linking nodes
node1.next = node2
node2.next = node3`;

  singlyLinkedList = `class LinkedList:
    def __init__(self):
        self.head = None
    
    def append(self, val):
        new_node = ListNode(val)
        if not self.head:
            self.head = new_node
            return
        
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node
    
    def prepend(self, val):
        new_node = ListNode(val)
        new_node.next = self.head
        self.head = new_node
    
    def delete(self, val):
        if not self.head:
            return
        
        if self.head.val == val:
            self.head = self.head.next
            return
        
        current = self.head
        while current.next and current.next.val != val:
            current = current.next
        
        if current.next:
            current.next = current.next.next`;

  commonAlgorithms = `def reverse_linked_list(head):
    """Reverse a linked list iteratively"""
    prev = None
    current = head
    
    while current:
        next_temp = current.next
        current.next = prev
        prev = current
        current = next_temp
    
    return prev

def has_cycle(head):
    """Detect cycle using Floyd's algorithm"""
    if not head or not head.next:
        return False
    
    slow = fast = head
    
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    
    return False

def merge_sorted_lists(l1, l2):
    """Merge two sorted linked lists"""
    dummy = ListNode(0)
    current = dummy
    
    while l1 and l2:
        if l1.val <= l2.val:
            current.next = l1
            l1 = l1.next
        else:
            current.next = l2
            l2 = l2.next
        current = current.next
    
    current.next = l1 or l2
    return dummy.next`;
}