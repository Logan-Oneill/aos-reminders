import { TSupportedFaction } from 'meta/factions'
import { TGameStructure } from 'meta/game_structure'
import { TEffects, TEntry } from 'types/data'
import { RealmscapesEnum } from 'types/realmscapes'
import { TSelections } from 'types/selections'
import { TAllySelectionStore } from 'types/store'

export interface IArmy {
  Artifacts: TEntry[]
  Battalions: TEntry[]
  BattleTactics: TEntry[] // New in v5.2.6
  BattleTraits: TEffects[] // Previously 'Abilities'
  CommandAbilities: TEntry[] // Previously 'Commands'
  CommandTraits: TEntry[] // Previously 'Traits'
  CoreRules: TEntry[] // New in v5: Heroic Actions, Battalion Abilities, as well as rules like Unit Coherency
  EndlessSpells: TEntry[]
  Flavors: TEntry[] // Previously 'Allegiances'
  FlavorType?: string // Previously 'AllegianceType'
  Game: TGameStructure
  GrandStrategies: TEntry[] // New in v5: GHB 2021 Rules
  Incarnates: TEntry[] // New in v5.2.0
  MonstrousRampages: TEntry[] // New in v5.2.0
  MountTraits: TEntry[] // New in v4: (previously part of 'Traits')
  Prayers: TEntry[] // New in v4: (previously part of 'Spells')
  Scenery: TEntry[]
  Spells: TEntry[]
  SubFaction: TEntry // New in v4: Metadata about this SubFaction
  Triumphs: TEntry[]
  Units: TEntry[]
}

export type TAllyArmies = Record<string, IArmy>
export interface TInitialArmy extends Partial<IArmy> {
  AlliedUnits?: TEntry[]
}
export interface TSubfactionArmy extends Omit<IArmy, 'Game'> {
  AlliedUnits: TEntry[]
}
export type TCollection = Omit<IArmy, 'BattleTraits' | 'Game' | 'FlavorType' | 'SubFaction'>

export interface ICurrentArmy {
  allyFactionNames: TSupportedFaction[]
  allySelections: TAllySelectionStore
  factionName: TSupportedFaction
  subFactionName: string
  origin_realm: RealmscapesEnum | null
  realmscape_feature: string | null
  realmscape: RealmscapesEnum | null
  selections: TSelections
}
