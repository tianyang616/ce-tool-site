"use client";

import { useState } from "react";

type Lang = "zh" | "en";

const content = {
  zh: {
    version: "v3.0 正式版",
    langButton: "English",
    nav: {
      features: "功能",
      workflow: "流程",
      download: "下载",
      changelog: "版本记录",
      faq: "常见问题",
    },
    badge: "工程 Excel 自动化工具",
    title1: "CE 数据库同步，",
    title2: "一键完成修复。",
    description:
      "一个 Windows 桌面工具，用于工程 Excel 数据库检查、CE / Full Data 同步、风险报告生成、日期标准化和一键清理。",
    primaryButton: "下载 v3.0",
    secondaryButton: "查看流程",
    metrics: [
      { value: "6+", label: "核心功能" },
      { value: "3", label: "风险等级" },
      { value: "Windows", label: "运行平台" },
    ],
    demo: {
      title: "一键处理预览",
      selectedFiles: "已选择文件",
      result: "✓ 同步完成",
      message: "修复文件、风险报告和操作日志已成功生成。",
    },
    featuresTitle: "核心功能",
    featuresSubtitle:
      "适用于重复性的工程 Excel 数据处理场景，重点解决准确性、一致性和报告清晰度问题。",
    features: [
      {
        title: "CE / Full Data 同步",
        description:
          "对比 CE Data 与 Full Data，识别缺失记录，并生成同步后的输出文件。",
      },
      {
        title: "OSM 转 Local PN",
        description:
          "检测 OSM 零件号，并根据参考数据转换为对应的 Local PN 记录。",
      },
      {
        title: "风险报告",
        description:
          "将问题分为高风险、中风险和低风险，并导出结构清晰的复查报告。",
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
        title: "一键清理",
        description:
          "快速清除多余的 Excel 单元格颜色，保持数据库文件整洁。",
      },
    ],
    workflowTitle: "使用流程",
    workflowSubtitle:
      "工具采用本地处理流程，普通用户不需要复杂配置。",
    workflow: [
      "打开 CE One Click Tool",
      "选择 Full Data 和 CE Data",
      "选择一键处理或单独功能",
      "导出修复文件、风险报告和操作日志",
    ],
    downloadTitle: "下载",
    downloadText: "当前版本：CE One Click Tool v3.0 Windows 正式版。",
    downloadNote: "当前下载包内包含 Windows EXE 程序文件。",
    fileInfo: [
      "文件名：CE_One_Click_Tool_v3.0.zip",
      "压缩包内容：CE_One_Click_Tool_v3.0.exe",
      "平台：Windows",
      "状态：已测试，可用于内部数据处理",
      "数据处理方式：本地 Excel 文件处理",
    ],
    changelogTitle: "版本记录",
    changelogSubtitle:
      "这里只保留每个版本最重要的变化，方便快速确认。",
    releaseNotes: [
      {
        version: "v3.0",
        items: [
          "界面整体升级为更清爽的浅色风格。",
          "全流程作为主入口，其他单项功能收纳到“其他工具”。",
          "设置改为按用户保存，封装后每个人都能保留自己的偏好。",
        ],
      },
      {
        version: "v2.8",
        items: [
          "全流程运行前增加预检查，提前发现常见文件问题。",
          "综合报告新增 Summary 首页，结果更容易查看。",
          "输出文件名加入时间戳，方便留档。",
        ],
      },
      {
        version: "v2.7",
        items: [
          "新增设置保存功能，可保留颜色和运行偏好。",
          "全流程底层结构优化，后续维护更稳定。",
        ],
      },
      {
        version: "v2.6",
        items: [
          "新增独立“全流程处理”页面。",
          "全流程输出简化为最终 CE 文件和综合报告。",
          "页面支持滚动，小屏幕也能查看日志。",
        ],
      },
      {
        version: "v2.5",
        items: [
          "处理结果默认生成新文件，原始 CE 文件保持不变。",
          "CE 工作表支持智能识别，减少表名变化带来的报错。",
          "新增全流程一键处理入口。",
        ],
      },
      {
        version: "v2.4",
        items: [
          "整合 CE 内检、数据库同步和清除 Excel 颜色功能。",
          "同步日志改为独立 Excel 输出。",
        ],
      },
    ],
    faqTitle: "常见问题",
    faq: [
      {
        q: "这个网站会在线处理 Excel 文件吗？",
        a: "不会。当前网站只是介绍页和下载页，Excel 文件由 Windows 桌面工具在本地处理。",
      },
      {
        q: "别人电脑没有 Python 也能用吗？",
        a: "可以。打包后的 EXE 版本就是给没有 Python、PyCharm 环境的普通用户使用的。",
      },
      {
        q: "使用前需要备份文件吗？",
        a: "建议备份。虽然工具会生成输出文件，但处理前保留原始 Excel 文件会更安全。",
      },
    ],
    footer: "© 2026 CE One Click Tool。工程数据自动化项目。",
  },

  en: {
    version: "v3.0 Stable",
    langButton: "中文",
    nav: {
      features: "Features",
      workflow: "Workflow",
      download: "Download",
      changelog: "Release Notes",
      faq: "FAQ",
    },
    badge: "Engineering Excel Automation Toolkit",
    title1: "CE Database Sync,",
    title2: "Fixed in One Click.",
    description:
      "A Windows desktop tool designed for engineering Excel database checking, CE / Full Data synchronization, risk reporting, date standardization, and one-click cleanup.",
    primaryButton: "Download v3.0",
    secondaryButton: "View Workflow",
    metrics: [
      { value: "6+", label: "Core Functions" },
      { value: "3", label: "Risk Levels" },
      { value: "Windows", label: "Platform" },
    ],
    demo: {
      title: "One-click processing preview",
      selectedFiles: "Selected files",
      result: "✓ Sync completed",
      message: "Fixed file, risk report, and logs generated successfully.",
    },
    featuresTitle: "Core Features",
    featuresSubtitle:
      "Built for repetitive engineering Excel workflows where accuracy, consistency, and clean reports matter.",
    features: [
      {
        title: "CE / Full Data Sync",
        description:
          "Compare CE Data with Full Data, identify missing records, and generate synchronized output files.",
      },
      {
        title: "OSM to Local PN",
        description:
          "Detect OSM part numbers and convert them to matching Local PN records based on reference data.",
      },
      {
        title: "Risk Report",
        description:
          "Classify issues into high, medium, and low risk levels, then export a structured review report.",
      },
      {
        title: "Date Standardization",
        description:
          "Unify inconsistent date formats and reduce manual Excel formatting work.",
      },
      {
        title: "Color Marking",
        description:
          "Optionally highlight fixed, risky, or newly generated records for easier checking.",
      },
      {
        title: "One-click Cleanup",
        description:
          "Clear unnecessary Excel cell colors and keep the database visually clean.",
      },
    ],
    workflowTitle: "How It Works",
    workflowSubtitle:
      "The tool follows a simple local workflow. No complicated setup is required for normal users.",
    workflow: [
      "Open CE One Click Tool",
      "Select Full Data and CE Data",
      "Choose one-click process or single function",
      "Export fixed file, risk report, and operation logs",
    ],
    downloadTitle: "Download",
    downloadText: "Current version: CE One Click Tool v3.0 Stable for Windows.",
    downloadNote: "The download package currently includes the Windows EXE file.",
    fileInfo: [
      "File name: CE_One_Click_Tool_v3.0.zip",
      "Package content: CE_One_Click_Tool_v3.0.exe",
      "Platform: Windows",
      "Status: Tested and ready for internal use",
      "Data processing: Local Excel file processing",
    ],
    changelogTitle: "Release Notes",
    changelogSubtitle:
      "Key changes from previous versions. Only major updates are listed for quick review.",
    releaseNotes: [
      {
        version: "v3.0",
        items: [
          "Redesigned the interface with a cleaner light-style layout.",
          "Set the full workflow as the main entry, while single tools were moved under Other Tools.",
          "Settings are now saved per user after packaging, so each user can keep their own preferences.",
        ],
      },
      {
        version: "v2.8",
        items: [
          "Added pre-checks before running the full workflow to detect common file issues earlier.",
          "Added a Summary sheet to the combined report for easier result review.",
          "Added timestamps to output file names for easier archiving.",
        ],
      },
      {
        version: "v2.7",
        items: [
          "Added settings save function to keep color and running preferences.",
          "Optimized the full workflow backend structure for better maintainability.",
        ],
      },
      {
        version: "v2.6",
        items: [
          "Added a dedicated Full Process page.",
          "Simplified full workflow output into the final CE file and a combined report.",
          "Added scroll support so logs can be viewed on smaller screens.",
        ],
      },
      {
        version: "v2.5",
        items: [
          "Processing results now generate a new file by default, keeping the original CE file unchanged.",
          "Added intelligent CE worksheet recognition to reduce errors caused by sheet name changes.",
          "Added the full workflow one-click processing entry.",
        ],
      },
      {
        version: "v2.4",
        items: [
          "Integrated CE internal check, database sync, and Excel color cleanup functions.",
          "Changed the sync log to an independent Excel output.",
        ],
      },
    ],
    faqTitle: "FAQ",
    faq: [
      {
        q: "Does this website process Excel files online?",
        a: "No. The current website is only an introduction and download page. Excel files are processed locally by the Windows desktop tool.",
      },
      {
        q: "Can the tool be used without Python?",
        a: "Yes. The distributed EXE version is designed for users who do not have Python or PyCharm installed.",
      },
      {
        q: "Should users back up their files first?",
        a: "Yes. Even though the tool generates output files, users should always keep a copy of the original Excel files before processing.",
      },
    ],
    footer:
      "© 2026 CE One Click Tool. Built as an engineering data automation project.",
  },
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("zh");
  const t = content[lang];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-8">
        <nav className="border-b border-white/10 pb-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-lg font-semibold">CE One Click Tool</p>
              <p className="text-sm text-slate-400">{t.version}</p>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
              <a
                href="#features"
                className="rounded-full border border-white/10 px-4 py-2 transition hover:bg-white/10 hover:text-white"
              >
                {t.nav.features}
              </a>

              <a
                href="#workflow"
                className="rounded-full border border-white/10 px-4 py-2 transition hover:bg-white/10 hover:text-white"
              >
                {t.nav.workflow}
              </a>

              <a
                href="#download"
                className="rounded-full border border-white/10 px-4 py-2 transition hover:bg-white/10 hover:text-white"
              >
                {t.nav.download}
              </a>

              <a
                href="#changelog"
                className="rounded-full border border-white/10 px-4 py-2 transition hover:bg-white/10 hover:text-white"
              >
                {t.nav.changelog}
              </a>

              <a
                href="#faq"
                className="rounded-full border border-white/10 px-4 py-2 transition hover:bg-white/10 hover:text-white"
              >
                {t.nav.faq}
              </a>

              <button
                onClick={() => setLang(lang === "zh" ? "en" : "zh")}
                className="rounded-full border border-emerald-400/40 px-4 py-2 text-sm text-emerald-300 transition hover:bg-emerald-400/10"
              >
                {t.langButton}
              </button>
            </div>
          </div>
        </nav>

        <section className="grid min-h-[720px] items-center gap-12 py-20 lg:grid-cols-2">
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
                {t.primaryButton}
              </a>

              <a
                href="#workflow"
                className="rounded-xl border border-white/20 px-6 py-3 text-center font-semibold text-white transition hover:bg-white/10"
              >
                {t.secondaryButton}
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {t.metrics.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-2xl font-bold text-emerald-300">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
            <div className="rounded-2xl bg-slate-900 p-6">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <p className="text-xs text-slate-500">{t.demo.title}</p>
              </div>

              <div className="space-y-4 font-mono text-sm">
                <p className="text-slate-400">{t.demo.selectedFiles}</p>
                <p className="rounded-lg bg-slate-800 px-4 py-3">
                  Full_Data.xlsx
                </p>
                <p className="rounded-lg bg-slate-800 px-4 py-3">
                  CE_Data.xlsx
                </p>

                <div className="mt-6 rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-4 py-4">
                  <p className="text-emerald-300">{t.demo.result}</p>
                  <p className="mt-2 text-slate-300">{t.demo.message}</p>
                </div>

                <div className="grid grid-cols-3 gap-3 pt-2 text-center text-xs">
                  <div className="rounded-lg bg-slate-800 p-3">
                    <p className="text-red-300">High</p>
                    <p className="mt-1 text-slate-400">Risk</p>
                  </div>
                  <div className="rounded-lg bg-slate-800 p-3">
                    <p className="text-yellow-300">Medium</p>
                    <p className="mt-1 text-slate-400">Risk</p>
                  </div>
                  <div className="rounded-lg bg-slate-800 p-3">
                    <p className="text-green-300">Low</p>
                    <p className="mt-1 text-slate-400">Risk</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20">
          <h2 className="text-3xl font-bold">{t.featuresTitle}</h2>
          <p className="mt-3 max-w-2xl text-slate-400">
            {t.featuresSubtitle}
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="workflow" className="py-20">
          <h2 className="text-3xl font-bold">{t.workflowTitle}</h2>
          <p className="mt-3 max-w-2xl text-slate-400">
            {t.workflowSubtitle}
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {t.workflow.map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <p className="text-sm text-emerald-300">
                  {lang === "zh" ? "步骤" : "Step"} {index + 1}
                </p>
                <p className="mt-4 font-medium">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="download"
          className="my-20 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-8"
        >
          <h2 className="text-3xl font-bold">{t.downloadTitle}</h2>
          <p className="mt-3 text-slate-300">{t.downloadText}</p>
          <p className="mt-2 text-sm text-slate-400">{t.downloadNote}</p>

          <div className="mt-6 rounded-xl bg-slate-950/80 p-5 text-sm text-slate-300">
            {t.fileInfo.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <a
            href="https://github.com/tianyang616/ce-tool-site/releases/download/v3.0.0/CE_One_Click_Tool_v3.0.zip"
            className="mt-6 inline-flex rounded-xl bg-emerald-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-300"
          >
            {t.primaryButton}
          </a>
        </section>

        <section id="changelog" className="py-20">
          <h2 className="text-3xl font-bold">{t.changelogTitle}</h2>
          <p className="mt-3 max-w-2xl text-slate-400">
            {t.changelogSubtitle}
          </p>

          <div className="mt-10 space-y-5">
            {t.releaseNotes.map((release) => (
              <div
                key={release.version}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-4 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm font-semibold text-emerald-300">
                  {release.version}
                </div>

                <ul className="space-y-2 text-sm leading-6 text-slate-300">
                  {release.items.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="py-20">
          <h2 className="text-3xl font-bold">{t.faqTitle}</h2>

          <div className="mt-8 grid gap-4">
            {t.faq.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <p className="font-semibold">{item.q}</p>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        <footer className="border-t border-white/10 py-8 text-sm text-slate-500">
          {t.footer}
        </footer>
      </section>
    </main>
  );
}