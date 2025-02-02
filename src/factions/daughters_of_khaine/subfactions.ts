import { keyPicker, pickEffects } from 'factions/metatagger'
import { DAUGHTERS_OF_KHAINE } from 'meta/factions'
import Artifacts from './artifacts'
import Battalions from './battalions'
import BattleTactics from './battle_tactics'
import BattleTraits from './battle_traits'
import CommandAbilities from './command_abilities'
import CommandTraits from './command_traits'
import EndlessSpells from './endless_spells'
import Flavors from './flavors'
import GrandStrategies from './grand_strategies'
import Prayers from './prayers'
import Spells from './spells'
import Units from './units'
import { TItemDescriptions } from 'factions/factionTypes'

const subFactions = {
  [DAUGHTERS_OF_KHAINE]: {
    effects: pickEffects(BattleTraits, [DAUGHTERS_OF_KHAINE]),

    mandatory: {
      command_abilities: [keyPicker(CommandAbilities, ['All-out Slaughter'])],
    },

    available: {
      artifacts: [Artifacts],
      battalions: [Battalions],
      battle_tactics: [BattleTactics],
      command_abilities: [CommandAbilities],
      command_traits: [CommandTraits],
      endless_spells: [EndlessSpells],
      flavors: [Flavors],
      grand_strategies: [GrandStrategies],
      prayers: [Prayers],
      spells: [Spells],
      units: [Units],
    },
  },
} satisfies TItemDescriptions

export default subFactions
