// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"database-architecture.mdx": () => import("../content/docs/database-architecture.mdx?collection=docs"), "demo-walkthrough.mdx": () => import("../content/docs/demo-walkthrough.mdx?collection=docs"), "i18n.mdx": () => import("../content/docs/i18n.mdx?collection=docs"), "index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "load-testing.mdx": () => import("../content/docs/load-testing.mdx?collection=docs"), "mainnet.mdx": () => import("../content/docs/mainnet.mdx?collection=docs"), "penetration-testing-guide.mdx": () => import("../content/docs/penetration-testing-guide.mdx?collection=docs"), "qa-testing.mdx": () => import("../content/docs/qa-testing.mdx?collection=docs"), "QA_REPORT.mdx": () => import("../content/docs/QA_REPORT.mdx?collection=docs"), "security-analysis.mdx": () => import("../content/docs/security-analysis.mdx?collection=docs"), "security-audit.mdx": () => import("../content/docs/security-audit.mdx?collection=docs"), "security.mdx": () => import("../content/docs/security.mdx?collection=docs"), "technical-stack.mdx": () => import("../content/docs/technical-stack.mdx?collection=docs"), "zap-security-report.mdx": () => import("../content/docs/zap-security-report.mdx?collection=docs"), "internal/achievements.mdx": () => import("../content/docs/internal/achievements.mdx?collection=docs"), "internal/bugs-fixed.mdx": () => import("../content/docs/internal/bugs-fixed.mdx?collection=docs"), "internal/main.mdx": () => import("../content/docs/internal/main.mdx?collection=docs"), "internal/metrics.mdx": () => import("../content/docs/internal/metrics.mdx?collection=docs"), "internal/overview.mdx": () => import("../content/docs/internal/overview.mdx?collection=docs"), "internal/SUMMARY.mdx": () => import("../content/docs/internal/SUMMARY.mdx?collection=docs"), }),
};
export default browserCollections;