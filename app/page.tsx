"use client";

import { useState } from "react";

type Lang = "en" | "zh";

const content = {
  en: {
    version: "v3.0 Stable",
    nav: {
      features: "Features",
      download: "Download",
      guide: "Guide",
      changelog: "Changelog",
    },
    badge: "Engineering Excel Automation Toolkit",
    title1: "CE Database Sync,",
    title2: "Fixed in One Click.",
    description:
      "CE One Click Tool is a Windows desktop tool designed for engineering Excel database checking, synchronization, risk reporting, date standardization, and one-click cleanup.",
    downloadButton: "Download v3.0",
    guideButton: "View Guide",
    selectedFiles: "Selected files:",
    syncCompleted: "✓ Sync completed",
    syncMessage: "Risk report, fixed file, and logs generated successfully.",
    featuresTitle: "Core Features",
    featuresSubtitle:
      "Built for repetitive engineering Excel workflows where accuracy, consistency, and clean reports matter.",
    features: [
      {
        title: "Full Data / CE Data Sync",
        description:
          "Automatically compare Full Data and CE Data, identify missing parts, and generate a clean synchronized output.",
      },
      {
        title: "OSM to Local PN Conversion",
        description:
          "Detect OSM part numbers and convert them to matching Local PN records based on the Full Data reference.",
      },
      {
        title: "Risk Report Generation",
        description:
          "Classify issues into high, medium, and low risk levels, then export a structured Excel report for manual review.",
      },
      {
        title: "Date Standardization",
        description:
          "Unify inconsistent date formats and reduce manual formatting work in engineering Excel files.",
      },
      {
        title: "Color Marking",
        description:
          "Highlight fixed, risky, or newly generated records with optional color marking for easier checking.",
      },
      {
        title: "One Click Clean",
        description:
          "Clear unnecessary Excel cell colors from selected ranges and keep the database file visually clean.",
      },
    ],
    downloadTitle: "Download",
    downloadText: "Current version: CE One Click Tool v3.0 Stable for Windows.",
    fileName: "File name: CE_One_Click_Tool_v3.0.exe",
    platform: "Platform: Windows",
    status: "Status: Tested and ready for internal use",
    guideTitle: "Quick Guide",
    steps: [
      "Open the tool",
      "Select Full Data and CE Data",
      "Choose the one-click process",
      "Export fixed file and reports",
    ],
    stepLabel: "Step",
    changelogTitle: "Changelog",
    changelogVersion: "v3.0 Stable",
    changelogText:
      "Added full one-click workflow, CE/Full Data synchronization, OSM to Local PN conversion, risk report generation, date standardization, color marking, and cleanup tools.",
    footer:
      "© 2026 CE One Click Tool. Built as an engineering data automation project.",
    languageButton: "中文",
  },
  zh: {
    version: "v3.0 正式版",
    nav: {
      features: "功能",
      download: "下载",
      guide: "使用说明",
      changelog: "更新记录",
    },
    badge: "工程 Excel 自动化工具",
    title1: "CE 数据库同步，",
    title2: "一键完成修复。",
    description:
      "CE One Click Tool 是一个 Windows 桌面工具，用于工程 Excel 数据库检查、Full Data 与 CE Data 同步、风险报告生成、日期标准化和一键清理。",
    downloadButton: "下载 v3.0",
    guideButton: "查看说明",
    selectedFiles: "已选择文件：",
    syncCompleted: "✓ 同步完成",
    syncMessage: "风险报告、修复文件和日志已成功生成。",
    featuresTitle: "核心功能",
    featuresSubtitle:
      "适用于重复性的工程 Excel 数据处理场景，重点解决准确性、一致性和报告清晰度问题。",
    features: [
      {
        title: "Full Data / CE Data 同步",
        description:
          "自动对比 Full Data 与 CE Data，识别缺失零件，并生成同步后的干净输出文件。",
      },
      {
        title: "OSM 转 Local PN",
        description:
          "检测 CE Data 中的 OSM 零件号，并根据 Full Data 参考数据转换为对应的 Local PN。",
      },
      {
        title: "风险报告生成",
        description:
          "将问题分为高风险、中风险和低风险，并导出结构清晰的 Excel 报告，方便人工复查。",
      },
      {
        title: "日期标准化",
        description:
          "统一不同格式的日期内容，减少手动调整 Excel 日期格式的工作量。",
      },
      {
        title: "颜色标记",
        description:
          "可选择性标记已修复、新增或存在风险的记录，让检查过程更直观。",
      },
      {
        title: "一键清除颜色",
        description:
          "快速清除指定范围内多余的 Excel 单元格颜色，保持数据库文件整洁。",
      },
    ],
    downloadTitle: "下载",
    downloadText: "当前版本：CE One Click Tool v3.0 Windows 正式版。",
    fileName: "文件名：CE_One_Click_Tool_v3.0.exe",
    platform: "平台：Windows",
    status: "状态：已测试，可用于内部数据处理",
    guideTitle: "快速使用说明",
    steps: [
      "打开软件",
      "选择 Full Data 和 CE Data",
      "点击一键处理流程",
      "导出修复文件和报告",
    ],
    stepLabel: "步骤",
    changelogTitle: "更新记录",
    changelogVersion: "v3.0 正式版",
    changelogText:
      "新增完整一键处理流程，支持 CE/Full Data 同步、OSM 转 Local PN、风险报告生成、日期标准化、颜色标记和清理工具。",
    footer: "© 2026 CE One Click Tool。工程数据自动化项目。",
    languageButton: "English",
  },
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const t = content[lang];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8">
        <nav className="flex items-center justify-between border-b border-white/10 pb-6">
          <div>
            <p className="text-lg font-semibold">CE One Click Tool</p>
            <p className="text-sm text-slate-400">{t.version}</p>
          </div>

          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#features" className="hover:text-white">
              {t.nav.features}
            </a>
            <a href="#download" className="hover:text-white">
              {t.nav.download}
            </a>
            <a href="#guide" className="hover:text-white">
              {t.nav.guide}
            </a>
            <a href="#changelog" className="hover:text-white">
              {t.nav.changelog}
            </a>

            <button
              onClick={() => setLang(lang === "en" ? "zh" : "en")}
              className="rounded-full border border-emerald-400/40 px-4 py-2 text-emerald-300 transition hover:bg-emerald-400/10"
            >
              {t.languageButton}
            </button>
          </div>
        </nav>

        <div className="grid flex-1 items-center gap-12 py-20 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
              {t.badge}
            </div>

            <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
              {t.title1}
              <span className="block text-emerald-300">{t.title2}</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              {t.description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#download"
                className="rounded-xl bg-emerald-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                {t.downloadButton}
              </a>
              <a
                href="#guide"
                className="rounded-xl border border-white/20 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
              >
                {t.guideButton}
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
            <div className="rounded-2xl bg-slate-900 p-6">
              <div className="mb-6 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <div className="space-y-4 font-mono text-sm">
                <p className="text-slate-400">{t.selectedFiles}</p>
                <p className="rounded-lg bg-slate-800 px-4 py-3">
                  Full_Data.xlsx
                </p>
                <p className="rounded-lg bg-slate-800 px-4 py-3">
                  CE_Data.xlsx
                </p>

                <div className="mt-6 rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-4 py-4">
                  <p className="text-emerald-300">{t.syncCompleted}</p>
                  <p className="mt-2 text-slate-300">{t.syncMessage}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section id="features" className="py-16">
          <h2 className="text-3xl font-bold">{t.featuresTitle}</h2>
          <p className="mt-3 max-w-2xl text-slate-400">
            {t.featuresSubtitle}
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="download"
          className="my-16 rounded-3xl border border-white/10 bg-white/5 p-8"
        >
          <h2 className="text-3xl font-bold">{t.downloadTitle}</h2>
          <p className="mt-3 text-slate-400">{t.downloadText}</p>

          <div className="mt-6 rounded-xl bg-slate-900 p-5 text-sm text-slate-300">
            <p>{t.fileName}</p>
            <p>{t.platform}</p>
            <p>{t.status}</p>
          </div>
        </section>

        <section id="guide" className="py-16">
          <h2 className="text-3xl font-bold">{t.guideTitle}</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {t.steps.map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <p className="text-emerald-300">
                  {t.stepLabel} {index + 1}
                </p>
                <p className="mt-3 font-medium">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="changelog" className="py-16">
          <h2 className="text-3xl font-bold">{t.changelogTitle}</h2>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-semibold">{t.changelogVersion}</p>
            <p className="mt-2 text-slate-400">{t.changelogText}</p>
          </div>
        </section>

        <footer className="border-t border-white/10 py-8 text-sm text-slate-500">
          {t.footer}
        </footer>
      </section>
    </main>
  );
}