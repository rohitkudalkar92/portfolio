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
        title="Trees" 
        description="Binary trees, BST, traversals, and tree algorithms"
        difficulty="Advanced">
      </app-topic-header>

      <app-content-section title="Tree Node Structure">
        <p>Basic structure for binary tree nodes.</p>
        <app-code-block 
          language="python" 
          [code]="treeNode">
        </app-code-block>
      </app-content-section>

      <app-content-section title="Tree Traversals">
        <p>Different ways to traverse binary trees.</p>
        <app-code-block 
          language="python" 
          [code]="traversals">
        </app-code-block>
      </app-content-section>

      <app-content-section title="Binary Search Tree">
        <p>BST operations and properties.</p>
        <app-code-block 
          language="python" 
          [code]="bst">
        </app-code-block>
      </app-content-section>
    </app-layout>
  `
})
export class NotesComponent implements OnInit {
  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Trees - Python DSA');
  }

  treeNode = `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# Creating a simple tree
#       1
#      / \\
#     2   3
#    / \\
#   4   5

root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)`;

  traversals = `def inorder_traversal(root):
    """Left -> Root -> Right"""
    result = []
    
    def inorder(node):
        if node:
            inorder(node.left)
            result.append(node.val)
            inorder(node.right)
    
    inorder(root)
    return result

def preorder_traversal(root):
    """Root -> Left -> Right"""
    result = []
    
    def preorder(node):
        if node:
            result.append(node.val)
            preorder(node.left)
            preorder(node.right)
    
    preorder(root)
    return result

def postorder_traversal(root):
    """Left -> Right -> Root"""
    result = []
    
    def postorder(node):
        if node:
            postorder(node.left)
            postorder(node.right)
            result.append(node.val)
    
    postorder(root)
    return result`;

  bst = `class BST:
    def __init__(self):
        self.root = None
    
    def insert(self, val):
        self.root = self._insert_recursive(self.root, val)
    
    def _insert_recursive(self, node, val):
        if not node:
            return TreeNode(val)
        
        if val < node.val:
            node.left = self._insert_recursive(node.left, val)
        else:
            node.right = self._insert_recursive(node.right, val)
        
        return node
    
    def search(self, val):
        return self._search_recursive(self.root, val)
    
    def _search_recursive(self, node, val):
        if not node or node.val == val:
            return node
        
        if val < node.val:
            return self._search_recursive(node.left, val)
        else:
            return self._search_recursive(node.right, val)

def max_depth(root):
    """Find maximum depth of binary tree"""
    if not root:
        return 0
    
    left_depth = max_depth(root.left)
    right_depth = max_depth(root.right)
    
    return max(left_depth, right_depth) + 1`;
}