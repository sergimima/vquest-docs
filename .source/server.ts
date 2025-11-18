// @ts-nocheck
import * as __fd_glob_19 from "../content/docs/internal/SUMMARY.mdx?collection=docs"
import * as __fd_glob_18 from "../content/docs/internal/overview.mdx?collection=docs"
import * as __fd_glob_17 from "../content/docs/internal/metrics.mdx?collection=docs"
import * as __fd_glob_16 from "../content/docs/internal/main.mdx?collection=docs"
import * as __fd_glob_15 from "../content/docs/internal/bugs-fixed.mdx?collection=docs"
import * as __fd_glob_14 from "../content/docs/internal/achievements.mdx?collection=docs"
import * as __fd_glob_13 from "../content/docs/zap-security-report.mdx?collection=docs"
import * as __fd_glob_12 from "../content/docs/technical-stack.mdx?collection=docs"
import * as __fd_glob_11 from "../content/docs/security.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/security-audit.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/security-analysis.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/QA_REPORT.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/qa-testing.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/penetration-testing-guide.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/mainnet.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/load-testing.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/index.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/i18n.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/demo-walkthrough.mdx?collection=docs"
import * as __fd_glob_0 from "../content/docs/database-architecture.mdx?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {}, {"database-architecture.mdx": __fd_glob_0, "demo-walkthrough.mdx": __fd_glob_1, "i18n.mdx": __fd_glob_2, "index.mdx": __fd_glob_3, "load-testing.mdx": __fd_glob_4, "mainnet.mdx": __fd_glob_5, "penetration-testing-guide.mdx": __fd_glob_6, "qa-testing.mdx": __fd_glob_7, "QA_REPORT.mdx": __fd_glob_8, "security-analysis.mdx": __fd_glob_9, "security-audit.mdx": __fd_glob_10, "security.mdx": __fd_glob_11, "technical-stack.mdx": __fd_glob_12, "zap-security-report.mdx": __fd_glob_13, "internal/achievements.mdx": __fd_glob_14, "internal/bugs-fixed.mdx": __fd_glob_15, "internal/main.mdx": __fd_glob_16, "internal/metrics.mdx": __fd_glob_17, "internal/overview.mdx": __fd_glob_18, "internal/SUMMARY.mdx": __fd_glob_19, });