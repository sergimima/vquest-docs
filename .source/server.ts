// @ts-nocheck
import * as __fd_glob_13 from "../content/docs/testing/qa-report.mdx?collection=docs"
import * as __fd_glob_12 from "../content/docs/testing/load-testing.mdx?collection=docs"
import * as __fd_glob_11 from "../content/docs/security/zap-security-report.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/security/security-audit.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/security/penetration-testing-guide.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/technical/technical-stack.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/technical/database-architecture.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/functional/demo-walkthrough.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/index.mdx?collection=docs"
import { default as __fd_glob_4 } from "../content/docs/testing/meta.json?collection=docs"
import { default as __fd_glob_3 } from "../content/docs/technical/meta.json?collection=docs"
import { default as __fd_glob_2 } from "../content/docs/security/meta.json?collection=docs"
import { default as __fd_glob_1 } from "../content/docs/functional/meta.json?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"meta.json": __fd_glob_0, "functional/meta.json": __fd_glob_1, "security/meta.json": __fd_glob_2, "technical/meta.json": __fd_glob_3, "testing/meta.json": __fd_glob_4, }, {"index.mdx": __fd_glob_5, "functional/demo-walkthrough.mdx": __fd_glob_6, "technical/database-architecture.mdx": __fd_glob_7, "technical/technical-stack.mdx": __fd_glob_8, "security/penetration-testing-guide.mdx": __fd_glob_9, "security/security-audit.mdx": __fd_glob_10, "security/zap-security-report.mdx": __fd_glob_11, "testing/load-testing.mdx": __fd_glob_12, "testing/qa-report.mdx": __fd_glob_13, });