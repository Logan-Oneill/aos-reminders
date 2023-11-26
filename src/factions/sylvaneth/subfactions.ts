import { IItemDescription } from 'factions/factionTypes'
import { keyOmitter, keyPicker, pickEffects } from 'factions/metatagger'
import Artifacts from './artifacts'
import Battalions from './battalions'
import BattleTraits from './battle_traits'
import CommandAbilities from './command_abilities'
import CommandTraits from './command_traits'
import EndlessSpells from './endless_spells'
import Flavors from './flavors'
import GrandStrategies from './grand_strategies'
import Scenery from './scenery'
import Spells from './spells'
import Units from './units'
import { SYLVANETH } from 'meta/factions'

const baseSubFaction: IItemDescription = {
  mandatory: {
    spells: [keyPicker(Spells, ['Verdant Blessing'])],
  },
  available: {
    artifacts: [keyOmitter(Artifacts, ['Heartwood Hunting Horn'])],
    battalions: [Battalions],
    command_abilities: [CommandAbilities],
    command_traits: [keyOmitter(CommandTraits, ['Sapwood Leader'])],
    endless_spells: [EndlessSpells],
    flavors: [Flavors],
    grand_strategies: [keyOmitter(GrandStrategies, ['The Grand Hunt'])],
    scenery: [Scenery],
    spells: [Spells],
    units: [Units],
  },
  effects: [],
}

const subFactions = {
  'The Burgeoning': {
    ...baseSubFaction,
    effects: pickEffects(BattleTraits, ['The Burgeoning', SYLVANETH, 'Battle Tactics']),
  },
  'The Reaping': {
    ...baseSubFaction,
    effects: pickEffects(BattleTraits, ['The Reaping', SYLVANETH, 'Battle Tactics']),
  },
  'The Dwindling': {
    ...baseSubFaction,
    effects: pickEffects(BattleTraits, ['The Dwindling', SYLVANETH, 'Battle Tactics']),
  },
  Everdusk: {
    ...baseSubFaction,
    effects: pickEffects(BattleTraits, ['Everdusk', SYLVANETH, 'Battle Tactics']),
  },
  'The Evergreen Hunt': {
    ...baseSubFaction,
    available: {
      ...baseSubFaction.available,
      flavors: [],
      artifacts: [Artifacts],
      command_traits: [CommandTraits],
      grand_strategies: [GrandStrategies],
    },
    effects: pickEffects(BattleTraits, ['The Evergreen Hunt', 'The Evergreen Hunt Battle Tactics']),
  },
}

export default subFactions
