import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import meta_rule_sources from 'meta/rule_sources'
import { END_OF_GAME } from 'types/phases'

const GrandStrategies = {
  'A Scheme for Every Occasion': {
    effects: [
      {
        name: `A Scheme for Every Occasion`,
        desc: `When the battle ends, you complete this grand strategy if you completed at least 4 battle tactics and all of the battle tactics you completed were from the 'Nasty Tricks' list.`,
        when: [END_OF_GAME],
      },
    ],
  },
  'Chasing the Moon': {
    effects: [
      {
        name: `Chasing the Moon`,
        desc: `When the battle ends, you complete this grand strategy if the model picked to be your general has not been slain and they have been affected by the Light of the Bad Moon in at least 3 battle rounds.`,
        when: [END_OF_GAME],
      },
    ],
  },
  'Protect da Shrine!': {
    effects: [
      {
        name: `Protect da Shrine!`,
        desc: `When the battle ends, you complete this grand strategy there is a Bad Moon Loonshrine from your army on the battlefield, there are no enemy models within 12" of it and it was not affected by a successful Smash To Rubble monstrous rampage.`,
        when: [END_OF_GAME],
      },
    ],
  },
  'Superior Spell-flinger': {
    effects: [
      {
        name: `Superior Spell-flinger`,
        desc: `When the battle ends, you complete this grand strategy if there are 2 or more friendly Gloomspite Gitz endless spells on the battlefield.`,
        when: [END_OF_GAME],
      },
    ],
  },
  'Leave Me Alone!': {
    effects: [
      {
        name: `Leave Me Alone!`,
        desc: `When the battle ends, you complete this grand strategy if a friendly TRUGG is on the battlefield and no enemy HEROES are on the battlefield.`,
        when: [END_OF_GAME],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_2],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(GrandStrategies, 'grand_strategy')
