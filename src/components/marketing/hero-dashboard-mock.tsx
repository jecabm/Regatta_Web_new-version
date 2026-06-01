import {
  LayoutDashboard,
  Boxes,
  ClipboardCheck,
  ShieldCheck,
  BarChart3,
  Search,
  Plus,
  Bell,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

/**
 * On-brand mock of the Regatta Registers asset/inspection dashboard.
 * Static presentational illustration used inside the hero scroll card.
 */

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Boxes, label: "Assets" },
  { icon: ClipboardCheck, label: "Inspections" },
  { icon: ShieldCheck, label: "Compliance" },
  { icon: BarChart3, label: "Reports" },
];

const kpis = [
  { label: "Total Assets", value: "1,248" },
  { label: "Inspections Due", value: "37" },
  { label: "Compliance", value: "98.2%" },
  { label: "Overdue", value: "4" },
];

const rows = [
  { asset: "Crawler Crane CC-2800", type: "Lifting", date: "12 May 2026", status: "success" as const, label: "Compliant" },
  { asset: "Tower Crane TC-180", type: "Lifting", date: "03 Jun 2026", status: "warning" as const, label: "Due soon" },
  { asset: "Excavator EX-350", type: "Earthmoving", date: "28 Apr 2026", status: "success" as const, label: "Compliant" },
  { asset: "Forklift FL-25", type: "Materials", date: "18 Mar 2026", status: "danger" as const, label: "Overdue" },
  { asset: "Lifting Sling LS-12", type: "Rigging", date: "21 May 2026", status: "success" as const, label: "Compliant" },
];

export function HeroDashboardMock() {
  return (
    <div className="flex h-full w-full select-none bg-ink-50 text-left">
      {/* Sidebar */}
      <aside className="hidden w-52 shrink-0 flex-col border-r border-ink-200 bg-white p-4 md:flex">
        <div className="flex items-center gap-2 px-1">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-brand-500 text-[11px] font-bold text-white">
            RR
          </span>
          <span className="text-sm font-bold tracking-tight text-ink-900">
            Regatta
          </span>
        </div>
        <nav className="mt-6 space-y-1">
          {navItems.map(({ icon: Icon, label, active }) => (
            <div
              key={label}
              className={`flex items-center gap-2.5 rounded-md px-2.5 py-2 text-xs font-medium ${
                active ? "bg-brand-50 text-brand-700" : "text-ink-500"
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Top bar */}
        <div className="flex items-center justify-between gap-3 border-b border-ink-200 bg-white px-4 py-3">
          <div className="flex items-center gap-2 rounded-md border border-ink-200 bg-ink-50 px-2.5 py-1.5 text-xs text-ink-400">
            <Search className="h-3.5 w-3.5" />
            Search assets, registers…
          </div>
          <div className="flex items-center gap-3">
            <Bell className="h-4 w-4 text-ink-400" />
            <span className="h-7 w-7 rounded-full bg-ink-200" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold tracking-tight text-ink-900">
                Asset Register
              </h3>
              <p className="text-xs text-ink-400">Mining &amp; lifting equipment</p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-md bg-brand-500 px-3 py-1.5 text-xs font-semibold text-white">
              <Plus className="h-3.5 w-3.5" /> New asset
            </span>
          </div>

          {/* KPIs */}
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {kpis.map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-lg border border-ink-200 bg-white p-3"
              >
                <p className="text-[11px] text-ink-400">{kpi.label}</p>
                <p className="mt-1 text-lg font-bold text-ink-900">{kpi.value}</p>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="mt-4 overflow-hidden rounded-lg border border-ink-200 bg-white">
            <div className="grid grid-cols-[2fr_1fr_1fr_auto] gap-3 border-b border-ink-200 bg-ink-50 px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-ink-400">
              <span>Asset</span>
              <span className="hidden sm:block">Type</span>
              <span className="hidden sm:block">Last inspection</span>
              <span>Status</span>
            </div>
            {rows.map((row) => (
              <div
                key={row.asset}
                className="grid grid-cols-[2fr_1fr_1fr_auto] items-center gap-3 border-b border-ink-100 px-4 py-2.5 text-xs text-ink-700 last:border-0"
              >
                <span className="truncate font-medium text-ink-900">
                  {row.asset}
                </span>
                <span className="hidden text-ink-500 sm:block">{row.type}</span>
                <span className="hidden text-ink-500 sm:block">{row.date}</span>
                <Badge variant={row.status}>{row.label}</Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
