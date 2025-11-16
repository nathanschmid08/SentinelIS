/*
inserts-assets.js
*/

db.assets.insertMany([
  {
    asset_id: 1,
    name: "Webserver Alpha",
    type: "Server",
    description: "Apache Webserver für interne Anwendungen",
    classification: "internal",
    location: "Zürich Datacenter A",
    owner: "IT Ops Team",
    value: "high",
    status: "active",
    risks: [
      {
        risk_id: "R1",
        description: "Ungepatchter Apache Exploit möglich",
        impact: "high",
        probability: "medium"
      }
    ],
    controls: [
      {
        control_id: "C1",
        description: "Automatisches Patch-Management"
      }
    ],
    last_audit: {
      date: new Date("2024-12-10"),
      auditor: "Security Team",
      result: "compliant"
    },
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    asset_id: 2,
    name: "CRM Backend",
    type: "Application",
    description: "Backend-Service für das CRM-System",
    classification: "internal",
    location: "Cloud Region EU-Central",
    owner: "Business Applications",
    value: "critical",
    status: "active",
    risks: [
      {
        risk_id: "R2",
        description: "Fehlende Input Validation",
        impact: "medium",
        probability: "medium"
      }
    ],
    controls: [
      {
        control_id: "C2",
        description: "Secure Coding Guidelines"
      }
    ],
    last_audit: {
      date: new Date("2024-11-05"),
      auditor: "Internal Audit",
      result: "non-compliant"
    },
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    asset_id: 3,
    name: "Employee Laptop 003-A",
    type: "Device",
    description: "Standard Windows Laptop",
    classification: "internal",
    location: "Basel HQ Office",
    owner: "Employee #42",
    value: "medium",
    status: "active",
    risks: [
      {
        risk_id: "R3",
        description: "Fehlende Verschlüsselung möglich",
        impact: "high",
        probability: "low"
      }
    ],
    controls: [
      {
        control_id: "C3",
        description: "Full-Disk Encryption"
      }
    ],
    last_audit: {
      date: new Date("2024-10-01"),
      auditor: "IT Compliance",
      result: "compliant"
    },
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    asset_id: 4,
    name: "Finance DB Cluster",
    type: "Database",
    description: "MariaDB Finanzdatenbank",
    classification: "top secret",
    location: "Zürich High Security Room",
    owner: "Finance IT",
    value: "critical",
    status: "active",
    risks: [
      {
        risk_id: "R4",
        description: "SQL Injection Angriff möglich",
        impact: "high",
        probability: "low"
      }
    ],
    controls: [
      {
        control_id: "C4",
        description: "WAF + Prepared Statements"
      }
    ],
    last_audit: {
      date: new Date("2025-01-15"),
      auditor: "External Audit",
      result: "pending"
    },
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    asset_id: 5,
    name: "HR Mobile App",
    type: "Application",
    description: "Mobile App für Urlaubsanträge",
    classification: "internal",
    location: "Cloud Region EU-West",
    owner: "HR IT",
    value: "medium",
    status: "in planning",
    risks: [],
    controls: [],
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    asset_id: 6,
    name: "Legacy Server Delta",
    type: "Server",
    description: "Alter Windows 2012 Server",
    classification: "internal",
    location: "Bern Remote Office",
    owner: "Infrastructure Team",
    value: "low",
    status: "decommissioned",
    risks: [
      {
        risk_id: "R5",
        description: "EOL System ohne Sicherheitsupdates",
        impact: "high",
        probability: "high"
      }
    ],
    controls: [
      {
        control_id: "C5",
        description: "Server vom Netzwerk isoliert"
      }
    ],
    last_audit: {
      date: new Date("2023-06-01"),
      auditor: "IT Security",
      result: "non-compliant"
    },
    created_at: new Date(),
    updated_at: new Date()
  }
]);
