/**
 * @julienbenac/ally-orange
 *
 * @author Julien Benac <contact@julienbenac.fr>
 * @license MIT
 */

import type { HttpContext } from '@adonisjs/core/http'

export { stubsRoot } from './stubs/main.js'
export { configure } from './configure.js'

import type { OrangeDriverConfig, OrangeToken } from './src/types/main.js'

import { OrangeDriver } from './src/orange.js'

export function orange(config: OrangeDriverConfig) {
  return (ctx: HttpContext) => new OrangeDriver(ctx, config)
}

export type { OrangeToken }
