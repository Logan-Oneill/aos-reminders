import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import meta_rule_sources from 'meta/rule_sources'
import { END_OF_GAME } from 'types/phases'

const GrandStrategies = {
  'Draconith Defiance': {
    effects: [
      {
        name: `Draconith Defiance`,
        desc: `When the battle ends, you complete this grand strategy if the only HEROES on the battlefield are friendly DRACONITH, STARDRAKE or DRACOTH units.`,
        when: [END_OF_GAME],
      },
    ],
  },
  'Pillars of Victory': {
    effects: [
      {
        name: `Pillars of Victory`,
        desc: `When the battle ends, you complete this grand strategy if the only Battleline units on the battlefield are friendly REDEEMER units.`,
        when: [END_OF_GAME],
      },
    ],
  },
  'Sacred Charge': {
    effects: [
      {
        name: `Sacred Charge`,
        desc: `When the battle ends, you complete this grand strategy if there are 2 or more friendly CITIES OF SIGMAR units on the battlefield.`,
        when: [END_OF_GAME],
      },
    ],
  },
  'On Wings of Death': {
    effects: [
      {
        name: `On Wings of Death`,
        desc: `When the battle ends, you complete this grand strategy if 3 friendly DRACONITH units are wholly within 9" of each other.`,
        when: [END_OF_GAME],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_3],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(GrandStrategies, 'grand_strategy')
