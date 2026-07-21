"use client";

import Image from "next/image";
import {
  Home,
  CalendarDays,
  BookOpen,
  FileCheck2,
  ClipboardList,
  Eye,
  Settings2,
  Building2,
  Users,
  Package,
  Search,
  Bell,
  MapPin,
  ChevronDown,
  Plus,
  X,
} from "lucide-react";

// ─── Sidebar data ────────────────────────────────────────────────────────────

type SidebarItem = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active?: boolean;
  chevron?: boolean;
};

const sidebarNav: { group: string; items: SidebarItem[] }[] = [
  {
    group: "DASHBOARD",
    items: [
      { icon: Home,          label: "Home",            active: true },
      { icon: CalendarDays,  label: "Calendar" },
    ],
  },
  {
    group: "LIFTING EQUIPMENT",
    items: [
      { icon: BookOpen,      label: "Registers",           chevron: true },
      { icon: FileCheck2,    label: "Test Certificates",   chevron: true },
      { icon: ClipboardList, label: "Records",             chevron: true },
      { icon: Eye,           label: "Visual Inspection",   chevron: true },
      { icon: Settings2,     label: "General",             chevron: true },
    ],
  },
  {
    group: "ASSET MANAGEMENT",
    items: [
      { icon: Package,    label: "Asset",   chevron: true },
      { icon: Settings2,  label: "General", chevron: true },
    ],
  },
  {
    group: "SETTINGS",
    items: [
      { icon: Building2, label: "Companies" },
      { icon: Users,     label: "Users" },
    ],
  },
];

// ─── KPI cards ───────────────────────────────────────────────────────────────

const kpis = [
  {
    label: "Total Assets",
    value: "248",
    delta: "+12 added this month",
    deltaColor: "#22c55e",
    borderColor: "#F28500",
  },
  {
    label: "Failed Asset",
    value: "16",
    delta: "Need Attention",
    deltaColor: "#ef4444",
    borderColor: "#ef4444",
  },
  {
    label: "Inspections Due",
    value: "34",
    delta: "8 overdue · action needed",
    deltaColor: "#f97316",
    borderColor: "#f97316",
  },
  {
    label: "Overdue Inspections",
    value: "8",
    delta: "Need Attention",
    deltaColor: "#ef4444",
    borderColor: "#ef4444",
  },
  {
    label: "Compliance Rate",
    value: "91%",
    delta: "↓ 2% vs last month",
    deltaColor: "#22c55e",
    borderColor: "#22c55e",
  },
];

// ─── Inspections table ───────────────────────────────────────────────────────

type InspectionStatus = "overdue" | "due-today" | "scheduled" | "in-progress";

const inspections: {
  company: string;
  location: string;
  dueDate: string;
  status: InspectionStatus;
}[] = [
  { company: "ABC Constructions", location: "Airport",   dueDate: "Today",        status: "overdue" },
  { company: "Crane Ltd",         location: "Brisbane",  dueDate: "12 Jun 2026",  status: "due-today" },
  { company: "Hutchinson",        location: "Sydney",    dueDate: "14 Jun 2026",  status: "scheduled" },
  { company: "Volvo",             location: "Melbourne", dueDate: "15 Jun 2026",  status: "scheduled" },
  { company: "Crane Ltd",         location: "Brisbane",  dueDate: "18 Jun 2026",  status: "in-progress" },
];

const statusStyles: Record<InspectionStatus, { label: string; bg: string; color: string }> = {
  "overdue":     { label: "Overdue",    bg: "#fff7ed", color: "#ea580c" },
  "due-today":   { label: "Due Today",  bg: "#fef2f2", color: "#dc2626" },
  "scheduled":   { label: "Scheduled",  bg: "#eff6ff", color: "#2563eb" },
  "in-progress": { label: "In Progress",bg: "#f0fdf4", color: "#16a34a" },
};

function StatusBadge({ status }: { status: InspectionStatus }) {
  const s = statusStyles[status];
  return (
    <span
      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold"
      style={{ background: s.bg, color: s.color }}
    >
      {s.label}
    </span>
  );
}

// ─── Compliance donut ─────────────────────────────────────────────────────────

const complianceSegments = [
  { label: "Completed", value: 412, pct: 81, color: "#22c55e" },
  { label: "Scheduled", value: 64,  pct: 13, color: "#3b82f6" },
  { label: "Due soon",  value: 28,  pct: 6,  color: "#f97316" },
  { label: "Overdue",   value: 3,   pct: 1,  color: "#ef4444" },
];

function DonutChart() {
  const r = 38;
  const cx = 52;
  const cy = 52;
  const circumference = 2 * Math.PI * r;

  const segments = complianceSegments.reduce<
    Array<(typeof complianceSegments)[0] & { dash: number; gap: number; rotate: number }>
  >((acc, seg) => {
    const prevOffset = acc.reduce((sum, s) => sum + s.pct, 0);
    const dash = (seg.pct / 100) * circumference;
    const gap = circumference - dash;
    const rotate = (prevOffset / 100) * 360 - 90;
    return [...acc, { ...seg, dash, gap, rotate }];
  }, []);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative shrink-0" style={{ width: 104, height: 104 }}>
        <svg width="104" height="104" viewBox="0 0 104 104">
          {segments.map((seg) => (
            <circle
              key={seg.label}
              cx={cx}
              cy={cy}
              r={r}
              fill="none"
              stroke={seg.color}
              strokeWidth="14"
              strokeDasharray={`${seg.dash} ${seg.gap}`}
              strokeLinecap="butt"
              transform={`rotate(${seg.rotate} ${cx} ${cy})`}
            />
          ))}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-lg font-bold leading-none text-ink-900">507</span>
          <span className="text-[9px] font-medium tracking-wide text-ink-400">TOTAL</span>
        </div>
      </div>
      <ul className="w-full flex flex-col gap-1.5">
        {complianceSegments.map((seg) => (
          <li key={seg.label} className="flex items-center gap-2 text-[11px]">
            <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: seg.color }} />
            <span className="flex-1 text-ink-600">{seg.label}</span>
            <span className="font-semibold text-ink-900">{seg.value}</span>
            <span className="w-8 text-right text-ink-400">{seg.pct}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function MercuryDashboard() {
  return (
    <div
      className="flex h-full w-full overflow-hidden rounded-xl"
      style={{ background: "#f4f5f7", fontFamily: "var(--font-jakarta)" }}
    >
      {/* ── Sidebar ── */}
      <aside
        className="hidden w-52 shrink-0 flex-col border-r border-gray-200 bg-white py-4 sm:flex"
      >
        {/* Logo */}
        <div className="mb-4 px-4">
          <Image src="/RR-logo.svg" alt="Regatta Registers" width={100} height={100} />
        </div>

        {/* Nav groups */}
        <nav className="flex flex-1 flex-col gap-4 overflow-y-auto px-3">
          {sidebarNav.map(({ group, items }) => (
            <div key={group}>
              <p className="mb-1 px-2 text-[9px] font-bold tracking-widest text-ink-400">
                {group}
              </p>
              {items.map(({ icon: Icon, label, active = false, chevron = false }) => (
                <button
                  key={label}
                  className="flex w-full items-center justify-between rounded-lg px-2 py-1.5 text-left transition-colors"
                  style={{
                    background: active ? "#fff7ed" : "transparent",
                    color: active ? "#F28500" : "#4b5563",
                  }}
                >
                  <span className="flex items-center gap-2 text-[11px] font-medium">
                    <Icon className="h-3.5 w-3.5 shrink-0" />
                    {label}
                  </span>
                  {chevron && (
                    <ChevronDown className="h-3 w-3 shrink-0 text-ink-300" />
                  )}
                </button>
              ))}
            </div>
          ))}
        </nav>
      </aside>

      {/* ── Main column ── */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top bar */}
        <div className="flex h-11 shrink-0 items-center justify-between border-b border-gray-200 bg-white px-4">
          {/* Search + links */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1">
              <Search className="h-3 w-3 text-ink-400" />
              <span className="text-[11px] text-ink-400">Search</span>
            </div>
            <span className="hidden text-[11px] font-medium text-ink-500 sm:block">FAQ</span>
            <span className="hidden text-[11px] font-medium text-ink-500 sm:block">Support</span>
          </div>
          {/* Right side */}
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-1 sm:flex">
              <MapPin className="h-3 w-3 text-ink-400" />
              <span className="text-[11px] text-ink-500">Brisbane – Rocklea</span>
            </div>
            <span className="text-base leading-none">🇦🇺</span>
            <Bell className="h-4 w-4 text-ink-400" />
            <div
              className="flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold text-white"
              style={{ background: "#F28500" }}
            >
              JB
            </div>
          </div>
        </div>

        {/* Content area */}
        <div className="flex-1 overflow-x-hidden overflow-y-auto p-4">

          {/* Page header */}
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-baseline gap-3">
              <h2 className="text-base font-bold text-ink-900">Dashboard</h2>
              <span className="hidden text-[11px] text-ink-400 sm:block">
                Thursday, 11 June 2026 · Brisbane – Rocklea
              </span>
            </div>
            <button
              className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[11px] font-semibold text-white shadow-sm"
              style={{ background: "#F28500" }}
            >
              <Plus className="h-3.5 w-3.5" />
              New Inspection
            </button>
          </div>

          {/* Action buttons + dropdowns */}
          <div className="mb-3 flex flex-wrap items-center gap-2">
            {["Add Asset", "Book Appointment", "Create Company"].map((label) => (
              <button
                key={label}
                className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-[11px] font-medium text-ink-700 shadow-sm transition-colors hover:bg-gray-50"
              >
                {label}
              </button>
            ))}
            <div className="ml-auto hidden items-center gap-2 sm:flex">
              {["Select Company", "Select Location"].map((label) => (
                <button
                  key={label}
                  className="flex items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-[11px] text-ink-500 shadow-sm"
                >
                  {label}
                  <ChevronDown className="h-3 w-3" />
                </button>
              ))}
            </div>
          </div>

          {/* KPI cards */}
          <div className="mb-3 grid grid-cols-2 gap-2 lg:grid-cols-5">
            {kpis.map(({ label, value, delta, deltaColor, borderColor }) => (
              <div
                key={label}
                className="rounded-lg bg-white p-3 shadow-sm"
                style={{ borderTop: `3px solid ${borderColor}` }}
              >
                <p className="mb-1 text-[10px] text-ink-500">{label}</p>
                <p className="text-xl font-bold leading-none text-ink-900">{value}</p>
                <p className="mt-1 text-[10px] font-medium" style={{ color: deltaColor }}>
                  {delta}
                </p>
              </div>
            ))}
          </div>

          {/* Two-column: Inspections + Compliance */}
          <div className="mb-3 grid gap-3 lg:grid-cols-[1fr_auto]">
            {/* Inspections Due */}
            <div className="rounded-lg bg-white shadow-sm">
              <div className="border-b border-gray-100 px-4 pt-3 pb-2">
                <p className="mb-2 text-[10px] font-bold tracking-widest text-ink-400">
                  INSPECTIONS DUE
                </p>
                <div className="flex gap-1.5">
                  {[
                    { label: "All 9", active: true },
                    { label: "Needs action 5" },
                    { label: "Overdue" },
                  ].map(({ label, active }) => (
                    <button
                      key={label}
                      className="rounded-full px-3 py-1 text-[10px] font-medium transition-colors"
                      style={
                        active
                          ? { background: "#111827", color: "#fff" }
                          : { background: "#f3f4f6", color: "#6b7280" }
                      }
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
              <table className="w-full text-[11px]">
                <thead>
                  <tr className="border-b border-gray-100">
                    {["Company", "Site Location", "Due Date", "Status", ""].map((h) => (
                      <th
                        key={h}
                        className="px-4 py-2 text-left text-[10px] font-semibold text-ink-400"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {inspections.map(({ company, location, dueDate, status }) => (
                    <tr key={`${company}-${dueDate}`} className="border-b border-gray-50 hover:bg-gray-50">
                      <td className="px-4 py-2 font-semibold text-ink-900">{company}</td>
                      <td className="px-4 py-2 text-ink-500">{location}</td>
                      <td className="px-4 py-2 text-ink-500">{dueDate}</td>
                      <td className="px-4 py-2">
                        <StatusBadge status={status} />
                      </td>
                      <td className="px-4 py-2">
                        <button className="rounded border border-gray-200 px-2 py-0.5 text-[10px] font-medium text-ink-500 hover:bg-gray-50">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Compliance */}
            <div className="w-full rounded-lg bg-white p-4 shadow-sm lg:w-64">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold tracking-widest text-ink-400">COMPLIANCE</p>
                  <p className="mt-0.5 text-sm font-bold text-ink-900">Compliance status</p>
                  <p className="text-[10px] text-ink-400">Across all active assets</p>
                </div>
                <button className="flex items-center gap-1 rounded border border-gray-200 px-2 py-1 text-[10px] text-ink-500">
                  June 2026
                  <ChevronDown className="h-3 w-3" />
                </button>
              </div>
              <DonutChart />
            </div>
          </div>

          {/* Bottom row: Safety + Asset Status */}
          <div className="grid gap-3 lg:grid-cols-[1fr_auto]">
            {/* Safety */}
            <div className="rounded-lg bg-white shadow-sm">
              <div className="border-b border-gray-100 px-4 py-3">
                <p className="text-[10px] font-bold tracking-widest text-ink-400">SAFETY</p>
              </div>
              <div className="px-4 py-3">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-ink-900">Failed assets</span>
                    <span
                      className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white"
                      style={{ background: "#ef4444" }}
                    >
                      16
                    </span>
                  </div>
                  <button className="flex items-center gap-1 text-[11px] font-semibold" style={{ color: "#F28500" }}>
                    View all
                    <ChevronDown className="h-3 w-3 -rotate-90" />
                  </button>
                </div>
                <p className="mb-2 text-[11px] text-ink-500">Restricted from operation</p>
                <div className="flex items-center justify-between rounded-lg border border-gray-100 px-3 py-2">
                  <div className="flex items-center gap-2">
                    <span
                      className="flex h-6 w-6 items-center justify-center rounded"
                      style={{ background: "#fef2f2" }}
                    >
                      <X className="h-3 w-3 text-red-500" />
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold text-ink-900">Grove GMK5150L</p>
                      <p className="text-[10px] text-ink-400">CR-0421</p>
                    </div>
                  </div>
                  <button className="flex items-center gap-1 rounded border border-gray-200 px-2 py-1 text-[10px] font-medium text-ink-500">
                    <Settings2 className="h-3 w-3" />
                    View
                  </button>
                </div>
              </div>
            </div>

            {/* Asset Status Overview */}
            <div className="w-full rounded-lg bg-white p-4 shadow-sm lg:w-64">
              <p className="mb-1 text-[10px] font-bold tracking-widest text-ink-400">
                ASSET STATUS OVERVIEW
              </p>
              <p className="text-sm font-bold text-ink-900">Register Status Summary</p>
              <p className="mb-3 text-[10px] text-ink-400">248 total items across all categories</p>
              <div className="flex flex-col gap-2">
                {["ABC Constructions", "Airport"].map((label) => (
                  <button
                    key={label}
                    className="flex w-full items-center justify-between rounded-lg border border-gray-200 px-3 py-2 text-[11px] text-ink-600"
                  >
                    {label}
                    <ChevronDown className="h-3.5 w-3.5 text-ink-400" />
                  </button>
                ))}
              </div>
              <p className="mt-3 text-right text-[11px] font-semibold text-ink-900">
                Total Items: 151
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
