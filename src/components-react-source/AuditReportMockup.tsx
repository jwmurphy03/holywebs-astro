import { BarChart3, AlertTriangle, Globe, FileText } from "lucide-react";

export default function AuditReportMockup() {
  return (
    <div className="relative w-56 md:w-64 lg:w-72 flex-shrink-0">
      <div
        className="relative bg-white rounded-lg shadow-2xl overflow-hidden"
        style={{ transform: "rotate(-3deg)" }}
      >
        {/* SAMPLE watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
          style={{ transform: "rotate(-30deg)" }}
        >
          <span className="text-4xl md:text-5xl font-extrabold tracking-[0.3em] text-gray-200/60 select-none">
            SAMPLE
          </span>
        </div>

        <div className="relative z-0 p-5 md:p-6 space-y-4">
          {/* Header */}
          <div className="flex items-center gap-2 mb-1">
            <FileText className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-primary">
              Holy Webs
            </span>
          </div>
          <h4 className="text-xs md:text-sm font-bold text-gray-900 leading-tight">
            Local Visibility<br />Audit Report
          </h4>

          <hr className="border-gray-100" />

          {/* Website Health Score */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Globe className="w-3 h-3 text-gray-500" />
                <span className="text-[10px] font-semibold text-gray-700">Website Health Score</span>
              </div>
              <span className="text-[10px] font-bold text-primary">42%</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-primary"
                style={{ width: "42%" }}
              />
            </div>
          </div>

          {/* GBP */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <AlertTriangle className="w-3 h-3 text-red-500" />
                <span className="text-[10px] font-semibold text-gray-700">Google Business Profile</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={`w-4 h-1.5 rounded-sm ${i <= 2 ? "bg-red-400" : "bg-gray-100"}`}
                  />
                ))}
              </div>
              <span className="text-[9px] font-bold text-red-500 uppercase tracking-wide">
                Needs Work
              </span>
            </div>
          </div>

          {/* Local Search Visibility - mini bar chart */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5">
              <BarChart3 className="w-3 h-3 text-gray-500" />
              <span className="text-[10px] font-semibold text-gray-700">Local Search Visibility</span>
            </div>
            <div className="flex items-end gap-1 h-10">
              {[
                { h: "90%", label: "Comp A", color: "bg-gray-300" },
                { h: "75%", label: "Comp B", color: "bg-gray-300" },
                { h: "60%", label: "Comp C", color: "bg-gray-300" },
                { h: "30%", label: "You", color: "bg-primary" },
              ].map((bar) => (
                <div key={bar.label} className="flex flex-col items-center gap-0.5 flex-1">
                  <div
                    className={`w-full rounded-t-sm ${bar.color}`}
                    style={{ height: bar.h }}
                  />
                  <span className="text-[7px] text-gray-400 font-medium">{bar.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom fade / blur */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/95 to-transparent backdrop-blur-[2px] z-20" />
      </div>
    </div>
  );
}
