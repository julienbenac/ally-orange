/**
 * @julienbenac/ally-orange
 *
 * @author Julien Benac <contact@julienbenac.fr>
 * @license MIT
 */

import Configure from '@adonisjs/core/commands/configure'

export async function configure(command: Configure) {
  const codemods = await command.createCodemods()

  await codemods.defineEnvVariables({
    ORANGE_CLIENT_ID: '',
    ORANGE_CLIENT_SECRET: '',
    ORANGE_CALLBACK_URL: '',
  })

  await codemods.defineEnvValidations({
    variables: {
      ORANGE_CLIENT_ID: 'Env.schema.string()',
      ORANGE_CLIENT_SECRET: 'Env.schema.string()',
      ORANGE_CALLBACK_URL: 'Env.schema.string()',
    },
    leadingComment: 'Variables for configuring @julienbenac/ally-orange',
  })
}
