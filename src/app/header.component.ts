import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="flex items-center justify-between py-4">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center font-bold text-black">
          R
        </div>
        <div>
          <div class="text-lg font-semibold">Rohit.dev</div>
          <div class="text-xs opacity-70">Frontend Engineer • Creator</div>
        </div>
      </div>
      <nav class="hidden md:flex items-center gap-6 text-sm opacity-90">
        <a href="#home" class="hover:underline">Home</a>
        <a href="#services" class="hover:underline">Expertise</a>
        <a href="#about" class="hover:underline">About</a>
        <a href="#contact" class="hover:underline">Contact</a>
      </nav>
    </header>
  `
})
export class HeaderComponent {}