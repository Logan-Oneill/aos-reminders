import meta_rule_sources from 'meta/rule_sources'
import { TEffects, TEntry } from 'types/data'
import {
  BATTLESHOCK_PHASE,
  CHARGE_PHASE,
  DURING_GAME,
  DURING_SETUP,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SAVES_PHASE,
  START_OF_HERO_PHASE,
  START_OF_MOVEMENT_PHASE,
  START_OF_ROUND,
  START_OF_SETUP,
  TURN_ONE_START_OF_ROUND,
} from 'types/phases'
import { ARCANE, DAMNED, DEADLY, INSPIRING, MYSTICAL, SINISTER, TSceneryEffects } from 'types/terrain'

// Default scenery effects for most games and custom scenery.
const DefaultScenery: TEntry[] = [
  {
    name: DAMNED,
    effects: [
      {
        name: DAMNED,
        desc: `In your hero phase, you can pick 1 friendly unit within 1" of any terrain features with this rule. That unit suffers D3 mortal wounds but you can add 1 to hit rolls for attacks made by that unit until your next hero phase.`,
        when: [HERO_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
    ],
  },
  {
    name: ARCANE,
    effects: [
      {
        name: ARCANE,
        desc: `Add 1 to casting, dispelling and unbinding rolls for models while they are within 1" of any terrain features with this rule.`,
        when: [HERO_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
    ],
  },
  {
    name: INSPIRING,
    effects: [
      {
        name: INSPIRING,
        desc: `Add 1 to the Bravery characteristic of units while they are wholly within 1" of any terrain features with this rule.`,
        when: [BATTLESHOCK_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
    ],
  },
  {
    name: DEADLY,
    effects: [
      {
        name: DEADLY,
        desc: `Each time a unit is set up or finishes a normal move, run, retreat or charge move within 1" of any terrain features with this rule, roll a dice. On a 1, that unit suffers D3 mortal wounds.`,
        when: [DURING_SETUP, MOVEMENT_PHASE, CHARGE_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
    ],
  },
  {
    name: MYSTICAL,
    effects: [
      {
        name: MYSTICAL,
        desc: `Add 1 to chanting and banishment rolls for models while they are within 1" of any terrain features with this rule.`,
        when: [HERO_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
      {
        name: MYSTICAL,
        desc: `Models have a 6+ ward while they are within 1" of any terrain features with this rule.`,
        when: [SAVES_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
    ],
  },
  {
    name: SINISTER,
    effects: [
      {
        name: SINISTER,
        desc: `Subtract 1 from the Bravery characteristic of units while they are wholly within 1" of any terrain features with this rule.`,
        when: [BATTLESHOCK_PHASE],
        rule_sources: [meta_rule_sources.CORE_RULES_2021],
      },
    ],
  },

  // TODO: Are these rules still relevant in AoS 3.0?
  // {
  //   name: OVERGROWN,
  //   effects: [
  //     {
  //       name: OVERGROWN,
  //       desc: `Units are not visible if a 1mm imaginary line drawn from the closest points of two models crosses more than 1" of this terrain. Does not apply if either unit can fly.`,
  //       when: [DURING_GAME],
  //     },
  //   ],
  // },
  // {
  //   name: ENTANGLING,
  //   effects: [
  //     {
  //       name: ENTANGLING,
  //       desc: `Subtract 2 from run and charge rolls (to a minimum of 0) for units that are within 1" of this terrain.`,
  //       when: [MOVEMENT_PHASE, CHARGE_PHASE],
  //     },
  //   ],
  // },
  // {
  //   name: VOLCANIC,
  //   effects: [
  //     {
  //       name: VOLCANIC,
  //       desc: `Roll a D6 for each instance of this terrain. On a 6, each unit within 1" of that terrain feature suffers D3 mortal wounds.`,
  //       when: [START_OF_HERO_PHASE],
  //     },
  //   ],
  // },
  // {
  //   name: COMMANDING,
  //   effects: [
  //     {
  //       name: COMMANDING,
  //       desc: `If your general and no enemy general are within 1" of this terrain, add 1 to the number of command points you receive.`,
  //       when: [START_OF_HERO_PHASE],
  //     },
  //   ],
  // },
  // {
  //   name: HEALING,
  //   effects: [
  //     {
  //       name: HEALING,
  //       desc: `Roll a D6 for each friendly unit within 1" of any Healing terrain. On a 6 you can heal D3 wounds to that unit.`,
  //       when: [START_OF_HERO_PHASE],
  //     },
  //   ],
  // },
  // {
  //   name: NULLIFICATION,
  //   effects: [
  //     {
  //       name: NULLIFICATION,
  //       desc: `If a hero is within 1" of this terrain it can attempt to unbind 1 spell. WIZARDS get this unbind in addition to any others they have.`,
  //       when: [HERO_PHASE],
  //     },
  //     {
  //       name: NULLIFICATION,
  //       desc: `If an endless spell is set up or finishes a move within 1" of this terrain it is dispelled. Any effects from the spell are applied before the model is removed.`,
  //       when: [DURING_GAME],
  //     },
  //   ],
  // },
  // {
  //   name: OBSTACLE,
  //   effects: [
  //     {
  //       name: OBSTACLE,
  //       desc: `If a unit has all of its models within 1" of this terrain is targeted for a shooting attack, the unit receives cover if the attacking model is closer to the terrain than the targeted unit.`,
  //       when: [SHOOTING_PHASE],
  //     },
  //   ],
  // },
  // {
  //   name: GARRISONS,
  //   effects: [
  //     {
  //       name: GARRISONS,
  //       desc: `Units can be set up as a garrison if this terrain is wholly within your territory.

  //              The models garrisoning this terrain feature must have a combined wounds characteristic of 30 or less.`,
  //       when: [DURING_SETUP],
  //     },
  //     {
  //       name: GARRISONS,
  //       desc: `A unit that is wholly within 6" of this terrain and no enemy models within 3" of this terrain may garrison instead of moving.

  //              A unit may exit the terrain if it can be set up wholly within 6" of the terrain and more than 3" from enemy models. This counts as the unit's move.

  //              The models garrisoning this terrain feature must have a combined wounds characteristic of 30 or less.`,
  //       when: [MOVEMENT_PHASE],
  //     },
  //     {
  //       name: GARRISONS,
  //       desc: `A garrisoned unit is assumed to be in cover. In addition, subtract 1 from hit rolls against a garrisoned unit.

  //             Models cannot finish any move onto this terrain feature.`,
  //       when: [DURING_GAME],
  //     },
  //   ],
  // },
]

export const SceneryEffectLookup = DefaultScenery.reduce((accum, entry: TEntry) => {
  accum[entry.name as TSceneryEffects] = entry.effects
  return accum
}, {} as Record<TSceneryEffects, TEffects[]>)

// Penumbral is now a scenery type.
const PenumbralEffects: TEffects[] = [
  {
    name: `Repercussions of the Necroquake`,
    desc: `After determining who has the first turn, roll a D6 to determine the function of all Penumbral terrain features for the duration of the battle:

      1-3: Orrery of Obfuscation.
      4-6: Orrery of Illumination`,
    when: [TURN_ONE_START_OF_ROUND],
  },
  {
    name: `Orrery of Obfuscation`,
    desc: `Reroll save rolls of 1 for units wholly within 12" any Penumbral terrain features.`,
    when: [SAVES_PHASE],
  },
  {
    name: `Orrery of Illumination`,
    desc: `At the start of your hero phase, you receive 1 extra command point if any friendly HEROES are within 12" of any Penumbral terrain features.`,
    when: [START_OF_HERO_PHASE],
  },
  {
    name: `Deteriorating State`,
    desc: `Applies from start of Round 2 onwards. Roll a D6. On a 5-6, the currently active Orrey function on all Penumbral terrain features switches to the other option.`,
    when: [START_OF_ROUND],
  },
]

// Faction scenery available to all armies and all other official models potentially a part of each battle.
const OfficialScenery: TEntry[] = [
  {
    name: `Penumbral Engine`,
    effects: [
      {
        name: `Penumbral Engine`,
        desc: `After territories have been chosen, but before armies have been set up, you can set up this model wholly within your territory. It must be more than 12" from enemy territory, at least 3" away from other terrain features, and at least 1" away from any objectives. If both players can place a terrain features at this time, roll off to see who places first.`,
        when: [START_OF_SETUP],
      },
      ...PenumbralEffects,
    ],
  },
  {
    name: `Arcane Ruin`,
    effects: [
      // ...SceneryEffectLookup[OBSTACLE]
      ...SceneryEffectLookup[ARCANE],
    ],
  },
  {
    name: `Azyrite Ruins`,
    effects: [
      // ...SceneryEffectLookup[OBSTACLE]
    ],
  },
  {
    name: `Baleful Realmgate`,
    effects: [
      {
        name: `Spirit Journey`,
        desc: `You may remove a unit wholly within 6" of this terrain and set it up wholly within 6" of another Baleful Realmgate. This can only be activated if a priest or wizard is within 6" of the starting gate.`,
        when: [START_OF_MOVEMENT_PHASE],
      },

      // ...SceneryEffectLookup[OBSTACLE]
    ],
  },
  {
    name: `Barbed Venomgorse`,
    effects: [
      {
        name: `Barbed Venomgorse`,
        desc: `This terrain consists of 3 models each set up within 1" of at least one other model from the group.`,
        when: [START_OF_SETUP],
      },
      ...SceneryEffectLookup[DEADLY],

      // ...SceneryEffectLookup[OBSTACLE]
    ],
  },
  {
    name: `Citadel Wood`,
    effects: [
      // ...SceneryEffectLookup[OVERGROWN],
      // ...SceneryEffectLookup[OBSTACLE]
    ],
  },
  {
    name: `Dragonfate Dais`,
    effects: [
      ...SceneryEffectLookup[DAMNED],
      // ...SceneryEffectLookup[OBSTACLE]
    ],
  },
  {
    name: `Enduring Stormvault`,
    effects: [
      {
        name: `Rune-locked Vault`,
        desc: `1 friendly HERO within 1" of this terrain feature can roll a D6. On a 1, the HERO suffers D3 mortal wounds. On a 2-5, no effect. On a 6 roll a D3 to determine the effect:

               1 - Add 1 to the damage characteristic of one of the HERO's melee weapons for the remainder of the battle.
               2 - HERO can attempt to cast 1 arcane bolt spell as if it were a wizard. This counts as 1 extra spell on wizards.
               3 - Immeadiately set up an endless spell wholly within 12" of the HERO as if they had cast it.`,
        when: [HERO_PHASE],
      },

      // ...SceneryEffectLookup[OBSTACLE]
    ],
  },
  {
    name: `Hallowed Stormthrone`,
    effects: [
      {
        name: `Bastion of Order`,
        desc: `Order units treat this terrain as Inspiring. Chaos, Destruction, and Death units treat this terrain feature as Sinister.`,
        when: [DURING_GAME],
      },
      {
        name: `Consecrated Ground`,
        desc: `Roll a D6 for each endless spell within 6" of this terrain feature. On a 6 the endless spell is immediately dispelled.`,
        when: [START_OF_ROUND],
      },
      {
        name: `Consecrated Ground`,
        desc: `Roll a D6 each time a unit wholly within this terrain feature is affected by a spell or endless spell. On a 6+ ignore the effects of that spell on the unit.`,
        when: [DURING_GAME],
      },

      // ...SceneryEffectLookup[OBSTACLE]

      ...SceneryEffectLookup[INSPIRING],
      ...SceneryEffectLookup[SINISTER],
    ],
  },
  {
    name: `Magewrath Throne`,
    effects: [
      // ...SceneryEffectLookup[COMMANDING],
      // ...SceneryEffectLookup[OBSTACLE]
    ],
  },
  {
    name: `Numinous Occulum`,
    effects: [
      ...SceneryEffectLookup[MYSTICAL],
      // ...SceneryEffectLookup[OBSTACLE]
    ],
  },
  {
    name: `Ophidian Archway`,
    effects: [
      ...SceneryEffectLookup[SINISTER],
      // ...SceneryEffectLookup[OBSTACLE]
    ],
  },
  {
    name: `Penumbral Stormvault`,
    effects: [
      ...PenumbralEffects,
      {
        name: `Grand Dais of Sigmar`,
        desc: `Order units wholly within 6" of this terrain feature do not take battleshock tests.`,
        when: [BATTLESHOCK_PHASE],
      },
      {
        name: `Grand Dais of Sigmar`,
        desc: `Chaos, Death, and Destruction generals within 1" of this terrain feature generate 1 additional command point. This does not take effect if any enemy units are within 1" of this terrain feature.`,
        when: [START_OF_HERO_PHASE],
      },

      // ...SceneryEffectLookup[OBSTACLE]
    ],
  },
  {
    name: `Shardwrack Spines`,
    effects: [
      {
        name: `Shardwrack Spines`,
        desc: `This terrain consists of 2-5 models with all model's bases touching at least one other model's base from the group.`,
        when: [START_OF_SETUP],
      },
      ...SceneryEffectLookup[DEADLY],

      // ...SceneryEffectLookup[OBSTACLE]
    ],
  },
  {
    name: `Shattered Temple`,
    effects: [
      // ...SceneryEffectLookup[OBSTACLE]

      ...SceneryEffectLookup[DEADLY],
      ...SceneryEffectLookup[ARCANE],
    ],
  },
  {
    name: `Sigmarite Dais`,
    effects: [
      {
        name: `Bastion of Order`,
        desc: `Order units treat this terrain as Inspiring. All other grand alliances treat this terrain as Sinister.`,
        when: [DURING_GAME],
      },

      // ...SceneryEffectLookup[OBSTACLE]

      ...SceneryEffectLookup[INSPIRING],
      ...SceneryEffectLookup[SINISTER],
    ],
  },
  {
    name: `Sigmarite Mausoleum`,
    effects: [
      {
        name: `Sigmarite Mausoleum`,
        desc: `This terrain consists of 3-6 crypt models, 1-2 statue models, 1-2 gate models, and 7-14 wall section models. All model's bases must be touching at least two other model's bases from the group.`,
        when: [START_OF_SETUP],
      },
      {
        name: `Domain of the Dead`,
        desc: `This terrain is treated as an additional gravesite as specified in Battletome: Legions of Nagash.`,
        when: [DURING_GAME],
      },
      // ...SceneryEffectLookup[GARRISONS],
    ],
  },
  {
    name: `Timeworn Ruin`,
    effects: [
      {
        name: `Timeworn Ruin`,
        desc: `This terrain consists of 10 Timeworn Ruin models with each model being set up within 1" of at least one other model from the group.`,
        when: [START_OF_SETUP],
      },

      // ...SceneryEffectLookup[OBSTACLE]

      ...SceneryEffectLookup[DEADLY],
    ],
  },
  {
    name: `Walls and Fences`,
    effects: [
      {
        name: `Walls and Fences`,
        desc: `This terrain feature consists of 2-10 wall and/or fence models and is set up with all model's bases touching at least one other model's base from the group.`,
        when: [START_OF_SETUP],
      },

      // ...SceneryEffectLookup[OBSTACLE]
    ],
  },
  {
    name: `Warscryer Citadel`,
    effects: [
      {
        name: `Celestium Construct`,
        desc: `If any heroes from your army are garrisoning this terrain you can roll a D6. On a 2+, add 1 to the number of command points you receive this phase. On a 1, subtract 1 from the number of command points your receive instead.`,
        when: [START_OF_HERO_PHASE],
      },
      {
        name: `Domed Arcanoscope`,
        desc: `If any heroes from your army are garrisoning this terrain with a domed arcanoscope, one of them can attempt to unbind 1 spell. WIZARDS get this unbind in addition to any others they have.`,
        when: [HERO_PHASE],
      },
      {
        name: `Crenellated Battlements`,
        desc: `A model with a wounds characteristic of 10+ cannot garrison this terrain unless the terrain has crenellated battlements.

               If this terrain has crenellated battlements, it can be garrisoned by a single monster that can fly in addition to the other models that can garrison it.`,
        when: [DURING_SETUP, MOVEMENT_PHASE],
      },
      // ...SceneryEffectLookup[GARRISONS],
    ],
  },
]

// Combine all scenery rules into generic scenery export for use by any army.
const GenericScenery: TEntry[] = [...DefaultScenery, ...OfficialScenery]

export default GenericScenery
