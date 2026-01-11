import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';

@Component({
  selector: 'app-escape-sequence-characters-notes',
  templateUrl: './notes.component.html'
})
export class EscapeSequenceCharactersNotesComponent implements OnInit {

  newlineCode = `# Newline character \\n
print("Hello\\nWorld")
print("Line 1\\nLine 2\\nLine 3")`;

  newlineOutput = `Hello
World
Line 1
Line 2
Line 3`;

  tabCode = `# Tab character \\t
print("Name:\\tJohn")
print("Age:\\t25")
print("City:\\tNew York")`;

  tabOutput = `Name:	John
Age:	25
City:	New York`;

  backslashCode = `# Backslash character \\\\
print("File path: C:\\\\Users\\\\Documents")
print("This is a backslash: \\\\")`;

  backslashOutput = `File path: C:\\Users\\Documents
This is a backslash: \\`;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Python Escape Sequence Characters - My Notes');
  }
}