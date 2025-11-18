// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "functional/demo-walkthrough.mdx": () => import("../content/docs/functional/demo-walkthrough.mdx?collection=docs"), "technical/database-architecture.mdx": () => import("../content/docs/technical/database-architecture.mdx?collection=docs"), "technical/technical-stack.mdx": () => import("../content/docs/technical/technical-stack.mdx?collection=docs"), "security/penetration-testing-guide.mdx": () => import("../content/docs/security/penetration-testing-guide.mdx?collection=docs"), "security/security-audit.mdx": () => import("../content/docs/security/security-audit.mdx?collection=docs"), "security/zap-security-report.mdx": () => import("../content/docs/security/zap-security-report.mdx?collection=docs"), "testing/load-testing.mdx": () => import("../content/docs/testing/load-testing.mdx?collection=docs"), "testing/qa-report.mdx": () => import("../content/docs/testing/qa-report.mdx?collection=docs"), }),
};
export default browserCollections;