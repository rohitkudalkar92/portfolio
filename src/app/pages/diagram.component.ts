import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../common/layout.component';

@Component({
  selector: 'app-diagram',
  standalone: true,
  imports: [CommonModule, LayoutComponent],
  template: `
    <app-layout>
      <h1 class="text-3xl font-bold mb-8">Advanced System Architecture Diagrams</h1>
      
      <!-- Microservices Architecture -->
      <div class="mb-12 glass p-6 rounded-xl">
        <h3 class="text-xl font-semibold mb-4">Microservices Architecture</h3>
        <div class="bg-white/5 rounded-lg p-4" style="height: 500px;">
          <svg width="100%" height="100%" viewBox="0 0 800 450">
            <!-- API Gateway -->
            <rect x="350" y="20" width="120" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="410" y="50" text-anchor="middle" fill="black" font-size="12" font-weight="600">API Gateway</text>
            
            <!-- Load Balancer -->
            <rect x="350" y="100" width="120" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="410" y="130" text-anchor="middle" fill="black" font-size="12" font-weight="600">Load Balancer</text>
            
            <!-- Microservices -->
            <rect x="50" y="200" width="100" height="60" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="100" y="220" text-anchor="middle" fill="black" font-size="10" font-weight="600">User Service</text>
            <text x="100" y="235" text-anchor="middle" fill="black" font-size="9">(Node.js)</text>
            <text x="100" y="250" text-anchor="middle" fill="black" font-size="9">Port: 3001</text>
            
            <rect x="200" y="200" width="100" height="60" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="250" y="220" text-anchor="middle" fill="black" font-size="10" font-weight="600">Order Service</text>
            <text x="250" y="235" text-anchor="middle" fill="black" font-size="9">(Python)</text>
            <text x="250" y="250" text-anchor="middle" fill="black" font-size="9">Port: 3002</text>
            
            <rect x="350" y="200" width="100" height="60" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="400" y="220" text-anchor="middle" fill="black" font-size="10" font-weight="600">Payment Service</text>
            <text x="400" y="235" text-anchor="middle" fill="black" font-size="9">(Java)</text>
            <text x="400" y="250" text-anchor="middle" fill="black" font-size="9">Port: 3003</text>
            
            <rect x="500" y="200" width="100" height="60" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="550" y="220" text-anchor="middle" fill="black" font-size="10" font-weight="600">Notification</text>
            <text x="550" y="235" text-anchor="middle" fill="black" font-size="9">(Go)</text>
            <text x="550" y="250" text-anchor="middle" fill="black" font-size="9">Port: 3004</text>
            
            <rect x="650" y="200" width="100" height="60" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="700" y="220" text-anchor="middle" fill="black" font-size="10" font-weight="600">Analytics</text>
            <text x="700" y="235" text-anchor="middle" fill="black" font-size="9">(Python)</text>
            <text x="700" y="250" text-anchor="middle" fill="black" font-size="9">Port: 3005</text>
            
            <!-- Databases -->
            <rect x="50" y="320" width="100" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="100" y="350" text-anchor="middle" fill="black" font-size="10" font-weight="600">PostgreSQL</text>
            
            <rect x="200" y="320" width="100" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="250" y="350" text-anchor="middle" fill="black" font-size="10" font-weight="600">MongoDB</text>
            
            <rect x="350" y="320" width="100" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="400" y="350" text-anchor="middle" fill="black" font-size="10" font-weight="600">Redis Cache</text>
            
            <rect x="500" y="320" width="100" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="550" y="350" text-anchor="middle" fill="black" font-size="10" font-weight="600">Message Queue</text>
            
            <rect x="650" y="320" width="100" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="700" y="350" text-anchor="middle" fill="black" font-size="10" font-weight="600">Elasticsearch</text>
            
            <!-- Connections -->
            <line x1="410" y1="70" x2="410" y2="100" stroke="black" stroke-width="2" marker-end="url(#arrow)"/>
            
            <line x1="360" y1="150" x2="100" y2="200" stroke="black" stroke-width="2" marker-end="url(#arrow)"/>
            <line x1="380" y1="150" x2="250" y2="200" stroke="black" stroke-width="2" marker-end="url(#arrow)"/>
            <line x1="410" y1="150" x2="400" y2="200" stroke="black" stroke-width="2" marker-end="url(#arrow)"/>
            <line x1="440" y1="150" x2="550" y2="200" stroke="black" stroke-width="2" marker-end="url(#arrow)"/>
            <line x1="460" y1="150" x2="700" y2="200" stroke="black" stroke-width="2" marker-end="url(#arrow)"/>
            
            <line x1="100" y1="260" x2="100" y2="320" stroke="black" stroke-width="2" marker-end="url(#arrow)"/>
            <line x1="250" y1="260" x2="250" y2="320" stroke="black" stroke-width="2" marker-end="url(#arrow)"/>
            <line x1="400" y1="260" x2="400" y2="320" stroke="black" stroke-width="2" marker-end="url(#arrow)"/>
            <line x1="550" y1="260" x2="550" y2="320" stroke="black" stroke-width="2" marker-end="url(#arrow)"/>
            <line x1="700" y1="260" x2="700" y2="320" stroke="black" stroke-width="2" marker-end="url(#arrow)"/>
            
            <defs>
              <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="black"/>
              </marker>
            </defs>
          </svg>
        </div>
      </div>
      
      <!-- CI/CD Pipeline -->
      <div class="mb-12 glass p-6 rounded-xl">
        <h3 class="text-xl font-semibold mb-4">CI/CD Pipeline Architecture</h3>
        <div class="bg-white/5 rounded-lg p-4" style="height: 400px;">
          <svg width="100%" height="100%" viewBox="0 0 900 350">
            <!-- Developer -->
            <rect x="50" y="150" width="80" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="90" y="180" text-anchor="middle" fill="black" font-size="12" font-weight="600">Developer</text>
            
            <!-- Git Repository -->
            <rect x="180" y="150" width="100" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="230" y="180" text-anchor="middle" fill="black" font-size="12" font-weight="600">Git Repository</text>
            
            <!-- CI Server -->
            <rect x="330" y="100" width="100" height="60" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="380" y="125" text-anchor="middle" fill="black" font-size="11" font-weight="600">CI Server</text>
            <text x="380" y="140" text-anchor="middle" fill="black" font-size="9">(Jenkins/GitHub)</text>
            <text x="380" y="155" text-anchor="middle" fill="black" font-size="9">Actions</text>
            
            <!-- Build & Test -->
            <rect x="480" y="50" width="100" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="530" y="80" text-anchor="middle" fill="black" font-size="11" font-weight="600">Build & Test</text>
            
            <rect x="480" y="120" width="100" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="530" y="150" text-anchor="middle" fill="black" font-size="11" font-weight="600">Code Quality</text>
            
            <rect x="480" y="190" width="100" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="530" y="220" text-anchor="middle" fill="black" font-size="11" font-weight="600">Security Scan</text>
            
            <!-- Container Registry -->
            <rect x="630" y="120" width="100" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="680" y="150" text-anchor="middle" fill="black" font-size="11" font-weight="600">Docker Registry</text>
            
            <!-- Deployment -->
            <rect x="780" y="50" width="100" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="830" y="80" text-anchor="middle" fill="black" font-size="11" font-weight="600">Staging</text>
            
            <rect x="780" y="120" width="100" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="830" y="150" text-anchor="middle" fill="black" font-size="11" font-weight="600">Production</text>
            
            <rect x="780" y="190" width="100" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="830" y="220" text-anchor="middle" fill="black" font-size="11" font-weight="600">Monitoring</text>
            
            <!-- Connections -->
            <line x1="130" y1="175" x2="180" y2="175" stroke="black" stroke-width="2" marker-end="url(#arrow2)"/>
            <text x="155" y="165" text-anchor="middle" fill="black" font-size="9">git push</text>
            
            <line x1="280" y1="175" x2="330" y2="140" stroke="black" stroke-width="2" marker-end="url(#arrow2)"/>
            <text x="305" y="150" text-anchor="middle" fill="black" font-size="9">webhook</text>
            
            <line x1="430" y1="120" x2="480" y2="85" stroke="black" stroke-width="2" marker-end="url(#arrow2)"/>
            <line x1="430" y1="130" x2="480" y2="145" stroke="black" stroke-width="2" marker-end="url(#arrow2)"/>
            <line x1="430" y1="140" x2="480" y2="205" stroke="black" stroke-width="2" marker-end="url(#arrow2)"/>
            
            <line x1="580" y1="145" x2="630" y2="145" stroke="black" stroke-width="2" marker-end="url(#arrow2)"/>
            
            <line x1="730" y1="135" x2="780" y2="85" stroke="black" stroke-width="2" marker-end="url(#arrow2)"/>
            <line x1="730" y1="145" x2="780" y2="145" stroke="black" stroke-width="2" marker-end="url(#arrow2)"/>
            <line x1="730" y1="155" x2="780" y2="205" stroke="black" stroke-width="2" marker-end="url(#arrow2)"/>
            
            <defs>
              <marker id="arrow2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="black"/>
              </marker>
            </defs>
          </svg>
        </div>
      </div>
      
      <!-- Cloud Architecture -->
      <div class="glass p-6 rounded-xl">
        <h3 class="text-xl font-semibold mb-4">Cloud Infrastructure (AWS/Azure)</h3>
        <div class="bg-white/5 rounded-lg p-4" style="height: 450px;">
          <svg width="100%" height="100%" viewBox="0 0 800 400">
            <!-- Internet -->
            <ellipse cx="100" cy="50" rx="60" ry="30" fill="white" stroke="black" stroke-width="2"/>
            <text x="100" y="55" text-anchor="middle" fill="black" font-size="12" font-weight="600">Internet</text>
            
            <!-- CDN -->
            <rect x="250" y="25" width="100" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="300" y="55" text-anchor="middle" fill="black" font-size="12" font-weight="600">CDN/CloudFront</text>
            
            <!-- Load Balancer -->
            <rect x="250" y="100" width="100" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="300" y="130" text-anchor="middle" fill="black" font-size="12" font-weight="600">Load Balancer</text>
            
            <!-- Auto Scaling Group -->
            <rect x="50" y="200" width="120" height="80" rx="8" fill="none" stroke="black" stroke-width="2" stroke-dasharray="5,5"/>
            <text x="110" y="190" text-anchor="middle" fill="black" font-size="10" font-weight="600">Auto Scaling Group</text>
            
            <rect x="60" y="220" width="80" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="100" y="250" text-anchor="middle" fill="black" font-size="10" font-weight="600">EC2 Instance</text>
            
            <rect x="200" y="200" width="120" height="80" rx="8" fill="none" stroke="black" stroke-width="2" stroke-dasharray="5,5"/>
            <text x="260" y="190" text-anchor="middle" fill="black" font-size="10" font-weight="600">Container Cluster</text>
            
            <rect x="210" y="220" width="80" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="250" y="250" text-anchor="middle" fill="black" font-size="10" font-weight="600">ECS/EKS</text>
            
            <!-- Databases -->
            <rect x="400" y="180" width="100" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="450" y="210" text-anchor="middle" fill="black" font-size="11" font-weight="600">RDS (Primary)</text>
            
            <rect x="400" y="250" width="100" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="450" y="280" text-anchor="middle" fill="black" font-size="11" font-weight="600">RDS (Replica)</text>
            
            <rect x="530" y="180" width="100" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="580" y="210" text-anchor="middle" fill="black" font-size="11" font-weight="600">ElastiCache</text>
            
            <rect x="530" y="250" width="100" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="580" y="280" text-anchor="middle" fill="black" font-size="11" font-weight="600">S3 Storage</text>
            
            <!-- Monitoring -->
            <rect x="650" y="180" width="100" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="700" y="210" text-anchor="middle" fill="black" font-size="11" font-weight="600">CloudWatch</text>
            
            <rect x="650" y="250" width="100" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="700" y="280" text-anchor="middle" fill="black" font-size="11" font-weight="600">Lambda</text>
            
            <!-- API Gateway -->
            <rect x="400" y="100" width="100" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="450" y="130" text-anchor="middle" fill="black" font-size="12" font-weight="600">API Gateway</text>
            
            <!-- Connections -->
            <line x1="160" y1="50" x2="250" y2="50" stroke="black" stroke-width="2" marker-end="url(#arrow3)"/>
            <line x1="300" y1="75" x2="300" y2="100" stroke="black" stroke-width="2" marker-end="url(#arrow3)"/>
            
            <line x1="250" y1="125" x2="110" y2="200" stroke="black" stroke-width="2" marker-end="url(#arrow3)"/>
            <line x1="300" y1="150" x2="260" y2="200" stroke="black" stroke-width="2" marker-end="url(#arrow3)"/>
            <line x1="350" y1="125" x2="400" y2="125" stroke="black" stroke-width="2" marker-end="url(#arrow3)"/>
            
            <line x1="320" y1="245" x2="400" y2="205" stroke="black" stroke-width="2" marker-end="url(#arrow3)"/>
            <line x1="320" y1="245" x2="530" y2="205" stroke="black" stroke-width="2" marker-end="url(#arrow3)"/>
            <line x1="320" y1="245" x2="530" y2="275" stroke="black" stroke-width="2" marker-end="url(#arrow3)"/>
            
            <line x1="450" y1="230" x2="450" y2="250" stroke="black" stroke-width="2" marker-end="url(#arrow3)"/>
            
            <defs>
              <marker id="arrow3" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="black"/>
              </marker>
            </defs>
          </svg>
        </div>
      </div>
      
      <!-- Event-Driven Architecture -->
      <div class="mb-12 glass p-6 rounded-xl">
        <h3 class="text-xl font-semibold mb-4">Event-Driven Architecture</h3>
        <div class="bg-white/5 rounded-lg p-4" style="height: 400px;">
          <svg width="100%" height="100%" viewBox="0 0 900 350">
            <!-- Event Producers -->
            <rect x="50" y="50" width="100" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="100" y="80" text-anchor="middle" fill="black" font-size="11" font-weight="600">User Service</text>
            
            <rect x="50" y="120" width="100" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="100" y="150" text-anchor="middle" fill="black" font-size="11" font-weight="600">Order Service</text>
            
            <rect x="50" y="190" width="100" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="100" y="220" text-anchor="middle" fill="black" font-size="11" font-weight="600">Payment Service</text>
            
            <!-- Event Bus -->
            <rect x="250" y="120" width="150" height="80" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="325" y="140" text-anchor="middle" fill="black" font-size="12" font-weight="600">Event Bus</text>
            <text x="325" y="155" text-anchor="middle" fill="black" font-size="10">(Apache Kafka/RabbitMQ)</text>
            <text x="325" y="175" text-anchor="middle" fill="black" font-size="9">• User Events</text>
            <text x="325" y="190" text-anchor="middle" fill="black" font-size="9">• Order Events</text>
            
            <!-- Event Consumers -->
            <rect x="500" y="50" width="100" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="550" y="80" text-anchor="middle" fill="black" font-size="11" font-weight="600">Email Service</text>
            
            <rect x="500" y="120" width="100" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="550" y="150" text-anchor="middle" fill="black" font-size="11" font-weight="600">Analytics</text>
            
            <rect x="500" y="190" width="100" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="550" y="220" text-anchor="middle" fill="black" font-size="11" font-weight="600">Audit Service</text>
            
            <rect x="500" y="260" width="100" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="550" y="290" text-anchor="middle" fill="black" font-size="11" font-weight="600">Inventory</text>
            
            <!-- Event Store -->
            <rect x="700" y="120" width="100" height="80" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="750" y="145" text-anchor="middle" fill="black" font-size="11" font-weight="600">Event Store</text>
            <text x="750" y="160" text-anchor="middle" fill="black" font-size="9">(Event Sourcing)</text>
            <text x="750" y="180" text-anchor="middle" fill="black" font-size="9">Replay Events</text>
            
            <!-- Connections -->
            <line x1="150" y1="75" x2="250" y2="140" stroke="black" stroke-width="2" marker-end="url(#arrow4)"/>
            <line x1="150" y1="145" x2="250" y2="160" stroke="black" stroke-width="2" marker-end="url(#arrow4)"/>
            <line x1="150" y1="215" x2="250" y2="180" stroke="black" stroke-width="2" marker-end="url(#arrow4)"/>
            
            <line x1="400" y1="140" x2="500" y2="75" stroke="black" stroke-width="2" marker-end="url(#arrow4)"/>
            <line x1="400" y1="150" x2="500" y2="145" stroke="black" stroke-width="2" marker-end="url(#arrow4)"/>
            <line x1="400" y1="170" x2="500" y2="215" stroke="black" stroke-width="2" marker-end="url(#arrow4)"/>
            <line x1="400" y1="180" x2="500" y2="285" stroke="black" stroke-width="2" marker-end="url(#arrow4)"/>
            
            <line x1="400" y1="160" x2="700" y2="160" stroke="black" stroke-width="2" marker-end="url(#arrow4)"/>
            
            <defs>
              <marker id="arrow4" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="black"/>
              </marker>
            </defs>
          </svg>
        </div>
      </div>
      
      <!-- Database Architecture -->
      <div class="mb-12 glass p-6 rounded-xl">
        <h3 class="text-xl font-semibold mb-4">Database Architecture & Replication</h3>
        <div class="bg-white/5 rounded-lg p-4" style="height: 400px;">
          <svg width="100%" height="100%" viewBox="0 0 800 350">
            <!-- Application Layer -->
            <rect x="50" y="50" width="100" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="100" y="80" text-anchor="middle" fill="black" font-size="11" font-weight="600">Application</text>
            
            <rect x="200" y="50" width="100" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="250" y="80" text-anchor="middle" fill="black" font-size="11" font-weight="600">Connection Pool</text>
            
            <!-- Master Database -->
            <rect x="350" y="30" width="120" height="70" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="410" y="55" text-anchor="middle" fill="black" font-size="12" font-weight="600">Master DB</text>
            <text x="410" y="70" text-anchor="middle" fill="black" font-size="10">(Read/Write)</text>
            <text x="410" y="85" text-anchor="middle" fill="black" font-size="9">PostgreSQL</text>
            
            <!-- Read Replicas -->
            <rect x="520" y="30" width="100" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="570" y="55" text-anchor="middle" fill="black" font-size="10" font-weight="600">Read Replica 1</text>
            <text x="570" y="70" text-anchor="middle" fill="black" font-size="9">(Read Only)</text>
            
            <rect x="520" y="100" width="100" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="570" y="125" text-anchor="middle" fill="black" font-size="10" font-weight="600">Read Replica 2</text>
            <text x="570" y="140" text-anchor="middle" fill="black" font-size="9">(Read Only)</text>
            
            <!-- Cache Layer -->
            <rect x="650" y="30" width="100" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="700" y="60" text-anchor="middle" fill="black" font-size="11" font-weight="600">Redis Cache</text>
            
            <!-- Backup & Archive -->
            <rect x="350" y="150" width="120" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="410" y="180" text-anchor="middle" fill="black" font-size="11" font-weight="600">Backup Storage</text>
            
            <rect x="520" y="200" width="100" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="570" y="230" text-anchor="middle" fill="black" font-size="11" font-weight="600">Archive DB</text>
            
            <!-- Data Warehouse -->
            <rect x="50" y="200" width="120" height="70" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="110" y="225" text-anchor="middle" fill="black" font-size="11" font-weight="600">Data Warehouse</text>
            <text x="110" y="240" text-anchor="middle" fill="black" font-size="10">(Analytics)</text>
            <text x="110" y="255" text-anchor="middle" fill="black" font-size="9">Snowflake/BigQuery</text>
            
            <!-- ETL Process -->
            <rect x="200" y="220" width="100" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="250" y="250" text-anchor="middle" fill="black" font-size="11" font-weight="600">ETL Pipeline</text>
            
            <!-- Connections -->
            <line x1="150" y1="75" x2="200" y2="75" stroke="black" stroke-width="2" marker-end="url(#arrow5)"/>
            <line x1="300" y1="75" x2="350" y2="65" stroke="black" stroke-width="2" marker-end="url(#arrow5)"/>
            
            <line x1="470" y1="55" x2="520" y2="55" stroke="black" stroke-width="2" marker-end="url(#arrow5)"/>
            <line x1="470" y1="75" x2="520" y2="125" stroke="black" stroke-width="2" marker-end="url(#arrow5)"/>
            <text x="495" y="50" text-anchor="middle" fill="black" font-size="9">Replication</text>
            
            <line x1="620" y1="55" x2="650" y2="55" stroke="black" stroke-width="2" marker-end="url(#arrow5)"/>
            
            <line x1="410" y1="100" x2="410" y2="150" stroke="black" stroke-width="2" marker-end="url(#arrow5)"/>
            <text x="425" y="125" text-anchor="start" fill="black" font-size="9">Backup</text>
            
            <line x1="470" y1="175" x2="520" y2="225" stroke="black" stroke-width="2" marker-end="url(#arrow5)"/>
            
            <line x1="300" y1="245" x2="350" y2="175" stroke="black" stroke-width="2" marker-end="url(#arrow5)"/>
            <line x1="200" y1="245" x2="170" y2="235" stroke="black" stroke-width="2" marker-end="url(#arrow5)"/>
            
            <defs>
              <marker id="arrow5" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="black"/>
              </marker>
            </defs>
          </svg>
        </div>
      </div>
      
      <!-- Security Architecture -->
      <div class="glass p-6 rounded-xl">
        <h3 class="text-xl font-semibold mb-4">Security Architecture & Zero Trust</h3>
        <div class="bg-white/5 rounded-lg p-4" style="height: 450px;">
          <svg width="100%" height="100%" viewBox="0 0 900 400">
            <!-- External Zone -->
            <rect x="20" y="20" width="860" height="100" rx="8" fill="none" stroke="black" stroke-width="2" stroke-dasharray="10,5"/>
            <text x="30" y="40" fill="black" font-size="12" font-weight="600">External Zone (Internet)</text>
            
            <!-- User -->
            <rect x="50" y="60" width="80" height="40" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="90" y="85" text-anchor="middle" fill="black" font-size="11" font-weight="600">User/Client</text>
            
            <!-- WAF -->
            <rect x="200" y="60" width="100" height="40" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="250" y="85" text-anchor="middle" fill="black" font-size="11" font-weight="600">WAF/Firewall</text>
            
            <!-- DDoS Protection -->
            <rect x="350" y="60" width="100" height="40" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="400" y="85" text-anchor="middle" fill="black" font-size="11" font-weight="600">DDoS Protection</text>
            
            <!-- DMZ Zone -->
            <rect x="20" y="140" width="860" height="120" rx="8" fill="none" stroke="black" stroke-width="2" stroke-dasharray="10,5"/>
            <text x="30" y="160" fill="black" font-size="12" font-weight="600">DMZ Zone</text>
            
            <!-- Load Balancer -->
            <rect x="50" y="180" width="100" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="100" y="210" text-anchor="middle" fill="black" font-size="11" font-weight="600">Load Balancer</text>
            
            <!-- API Gateway -->
            <rect x="200" y="180" width="100" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="250" y="210" text-anchor="middle" fill="black" font-size="11" font-weight="600">API Gateway</text>
            
            <!-- Identity Provider -->
            <rect x="350" y="180" width="100" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="400" y="200" text-anchor="middle" fill="black" font-size="10" font-weight="600">Identity Provider</text>
            <text x="400" y="215" text-anchor="middle" fill="black" font-size="9">(OAuth/SAML)</text>
            
            <!-- Certificate Authority -->
            <rect x="500" y="180" width="100" height="50" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="550" y="200" text-anchor="middle" fill="black" font-size="10" font-weight="600">Certificate</text>
            <text x="550" y="215" text-anchor="middle" fill="black" font-size="10" font-weight="600">Authority</text>
            
            <!-- Internal Zone -->
            <rect x="20" y="280" width="860" height="100" rx="8" fill="none" stroke="black" stroke-width="2" stroke-dasharray="10,5"/>
            <text x="30" y="300" fill="black" font-size="12" font-weight="600">Internal Zone (Private Network)</text>
            
            <!-- Application Servers -->
            <rect x="50" y="320" width="100" height="40" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="100" y="345" text-anchor="middle" fill="black" font-size="11" font-weight="600">App Servers</text>
            
            <!-- Database -->
            <rect x="200" y="320" width="100" height="40" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="250" y="345" text-anchor="middle" fill="black" font-size="11" font-weight="600">Database</text>
            
            <!-- Secrets Manager -->
            <rect x="350" y="320" width="100" height="40" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="400" y="345" text-anchor="middle" fill="black" font-size="11" font-weight="600">Secrets Manager</text>
            
            <!-- Monitoring -->
            <rect x="500" y="320" width="100" height="40" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="550" y="345" text-anchor="middle" fill="black" font-size="11" font-weight="600">SIEM/Monitoring</text>
            
            <!-- Backup -->
            <rect x="650" y="320" width="100" height="40" rx="8" fill="white" stroke="black" stroke-width="2"/>
            <text x="700" y="345" text-anchor="middle" fill="black" font-size="11" font-weight="600">Encrypted Backup</text>
            
            <!-- Security Connections -->
            <line x1="130" y1="80" x2="200" y2="80" stroke="black" stroke-width="2" marker-end="url(#arrow6)"/>
            <line x1="300" y1="80" x2="350" y2="80" stroke="black" stroke-width="2" marker-end="url(#arrow6)"/>
            
            <line x1="100" y1="100" x2="100" y2="180" stroke="black" stroke-width="2" marker-end="url(#arrow6)"/>
            <line x1="150" y1="205" x2="200" y2="205" stroke="black" stroke-width="2" marker-end="url(#arrow6)"/>
            
            <line x1="100" y1="230" x2="100" y2="320" stroke="black" stroke-width="2" marker-end="url(#arrow6)"/>
            <line x1="250" y1="230" x2="250" y2="320" stroke="black" stroke-width="2" marker-end="url(#arrow6)"/>
            
            <line x1="400" y1="230" x2="400" y2="320" stroke="black" stroke-width="2" marker-end="url(#arrow6)"/>
            <line x1="550" y1="230" x2="550" y2="320" stroke="black" stroke-width="2" marker-end="url(#arrow6)"/>
            
            <!-- Security Labels -->
            <text x="165" y="70" text-anchor="middle" fill="black" font-size="8">HTTPS/TLS</text>
            <text x="375" y="70" text-anchor="middle" fill="black" font-size="8">Rate Limiting</text>
            <text x="175" y="195" text-anchor="middle" fill="black" font-size="8">mTLS</text>
            <text x="325" y="270" text-anchor="middle" fill="black" font-size="8">Zero Trust</text>
            
            <defs>
              <marker id="arrow6" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="black"/>
              </marker>
            </defs>
          </svg>
        </div>
      </div>
    </app-layout>
  `
})
export class DiagramComponent {
  // Component logic can be added here if needed
}