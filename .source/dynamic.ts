// @ts-nocheck
import { dynamic } from 'fumadocs-mdx/runtime/dynamic';
import * as Config from '../source.config';

const create = await dynamic<typeof Config, {
  DocData: {
  }
}>(Config, {"environment":"next","outDir":".source","configPath":"source.config.ts"}, {"doc":{"passthroughs":["extractedReferences"]}});