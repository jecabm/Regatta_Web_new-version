"use client";

import {
  LayoutDashboard,
  Package,
  ClipboardCheck,
  ShieldCheck,
  BarChart3,
  Bell,
  Search,
  Plus,
  ChevronRight,
  AlertTriangle,
  CheckCircle2,
  Clock,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Package,         label: "Assets" },
  { icon: ClipboardCheck,  label: "Inspections" },
  { icon: ShieldCheck,     label: "Compliance" },
  { icon: BarChart3,       label: "Reports" },
];

const kpis = [
  { label: "Total Assets",      value: "1,248", delta: "+12",  color: "#F28500" },
  { label: "Inspections Due",   value: "37",    delta: "-3",   color: "#f59e0b" },
  { label: "Compliance Rate",   value: "98.2%", delta: "+0.4", color: "#22c55e" },
  { label: "Overdue Actions",   value: "4",     delta: "+1",   color: "#ef4444" },
];

const assets = [
  { name: "Grove RT650E Crane",     type: "Crane",     date: "2024-11-18", status: "ok" },
  { name: "CAT 320 Excavator",      type: "Excavator", date: "2024-10-05", status: "warn" },
  { name: "Toyota 8FBE20 Forklift", type: "Forklift",  date: "2024-12-01", status: "ok" },
  { name: "WLL 12T Chain Sling",    type: "Rigging",   date: "2024-09-14", status: "danger" },
  { name: "JLG 450AJ Boom Lift",    type: "EWP",       date: "2024-11-29", status: "ok" },
];

function StatusBadge({ status }: { status: string }) {
  if (status === "ok")
    return (
      <span className="flex items-center gap-1 text-[10px] font-medium text-emerald-400">
        <CheckCircle2 className="h-3 w-3" /> Compliant
      </span>
    );
  if (status === "warn")
    return (
      <span className="flex items-center gap-1 text-[10px] font-medium text-amber-400">
        <Clock className="h-3 w-3" /> Due Soon
      </span>
    );
  return (
    <span className="flex items-center gap-1 text-[10px] font-medium text-red-400">
      <AlertTriangle className="h-3 w-3" /> Overdue
    </span>
  );
}

export function MercuryDashboard() {
  return (
    <div
      className="flex h-full w-full overflow-hidden"
      style={{ background: "#171721", fontFamily: "var(--font-jakarta)" }}
    >
      {/* Sidebar */}
      <aside
        className="hidden w-44 shrink-0 flex-col border-r py-5 sm:flex"
        style={{ background: "#171721", borderColor: "#272735" }}
      >
        {/* Logo */}
        <div className="mb-6 px-4">
          <span
            className="text-sm font-medium tracking-wide"
            style={{ color: "#ededf3", fontFamily: "var(--font-jakarta)" }}
          >
            Regatta
          </span>
          <span className="ml-1 text-sm" style={{ color: "#F28500" }}>
            ●
          </span>
        </div>

        <nav className="flex flex-1 flex-col gap-0.5 px-2">
          {navItems.map(({ icon: Icon, label, active }) => (
            <button
              key={label}
              className="flex items-center gap-2.5 rounded px-2.5 py-2 text-left text-xs transition-colors"
              style={{
                background: active ? "#272735" : "transparent",
                color: active ? "#ededf3" : "#70707d",
              }}
            >
              <Icon className="h-3.5 w-3.5 shrink-0" />
              {label}
            </button>
          ))}
        </nav>

        <div className="px-4 pt-4">
          <div
            className="rounded px-2.5 py-2 text-[10px]"
            style={{ background: "#272735", color: "#70707d" }}
          >
            AU — Pro Plan
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top bar */}
        <div
          className="flex h-10 shrink-0 items-center justify-between border-b px-4"
          style={{ borderColor: "#272735", background: "#1e1e2a" }}
        >
          <div
            className="flex items-center gap-2 rounded-full px-3 py-1"
            style={{ background: "#272735" }}
          >
            <Search className="h-3 w-3" style={{ color: "#70707d" }} />
            <span className="text-[11px]" style={{ color: "#70707d" }}>
              Search assets…
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Bell className="h-4 w-4" style={{ color: "#70707d" }} />
            <div
              className="h-6 w-6 rounded-full text-center text-[10px] leading-6 font-medium"
              style={{ background: "#F28500", color: "#fff" }}
            >
              JC
            </div>
          </div>
        </div>

        {/* Content */}
        <div
          className="flex-1 overflow-auto p-4"
          style={{ background: "#1e1e2a" }}
        >
          {/* Header */}
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2
                className="text-sm font-medium"
                style={{ color: "#ededf3", fontFamily: "var(--font-jakarta)" }}
              >
                Asset Register
              </h2>
              <p className="text-[11px]" style={{ color: "#70707d" }}>
                Last synced 2 min ago
              </p>
            </div>
            <button
              className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-medium"
              style={{ background: "#F28500", color: "#fff" }}
            >
              <Plus className="h-3 w-3" />
              New asset
            </button>
          </div>

          {/* KPI cards */}
          <div className="mb-4 grid grid-cols-2 gap-2 lg:grid-cols-4">
            {kpis.map(({ label, value, delta, color }) => (
              <div
                key={label}
                className="rounded p-3"
                style={{ background: "#272735" }}
              >
                <p className="mb-1 text-[10px]" style={{ color: "#70707d" }}>
                  {label}
                </p>
                <p
                  className="text-lg font-medium leading-none"
                  style={{ color: "#ededf3" }}
                >
                  {value}
                </p>
                <p
                  className="mt-1 text-[10px] font-medium"
                  style={{ color }}
                >
                  {delta} this month
                </p>
              </div>
            ))}
          </div>

          {/* Table */}
          <div
            className="overflow-hidden rounded"
            style={{ border: "1px solid #272735" }}
          >
            <table className="w-full text-[11px]">
              <thead>
                <tr style={{ borderBottom: "1px solid #272735", background: "#171721" }}>
                  {["Asset Name", "Type", "Last Inspection", "Status", ""].map((h) => (
                    <th
                      key={h}
                      className="px-3 py-2 text-left font-medium"
                      style={{ color: "#70707d" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {assets.map(({ name, type, date, status }) => (
                  <tr
                    key={name}
                    style={{ borderBottom: "1px solid #272735" }}
                    className="transition-colors hover:bg-[#272735]/60"
                  >
                    <td className="px-3 py-2.5 font-medium" style={{ color: "#ededf3" }}>
                      {name}
                    </td>
                    <td className="px-3 py-2.5" style={{ color: "#70707d" }}>
                      {type}
                    </td>
                    <td className="px-3 py-2.5" style={{ color: "#70707d" }}>
                      {date}
                    </td>
                    <td className="px-3 py-2.5">
                      <StatusBadge status={status} />
                    </td>
                    <td className="px-3 py-2.5">
                      <ChevronRight className="h-3 w-3" style={{ color: "#70707d" }} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
