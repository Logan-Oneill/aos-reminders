import { realmscapeActions, selectionActions } from 'ducks'
import { selectRealmscapeSlice, selectSelections } from 'ducks/selectors'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { IArmy } from 'types/army'
import { SUPPORTED_REALMSCAPES } from 'types/realmscapes'
import { getSideEffects } from 'utils/getSideEffects'

const useGetArmyBuilderCards = (army: IArmy) => {
  const { realmscape } = useSelector(selectRealmscapeSlice)
  const selections = useSelector(selectSelections)

  const value = useMemo(() => {
    return [
      {
        slice: 'units' as const,
        items: army.Units,
        setValues: selectionActions.setUnits,
        title: 'Units',
        values: selections.units || [],
        type: 'multi',
        sideEffects: getSideEffects(army.Units),
      },
      {
        slice: 'flavors' as const,
        items: army.Flavors,
        setValues: selectionActions.setFlavors,
        title: army.FlavorType || 'Flavors',
        values: selections.flavors || [],
        type: 'multi',
        sideEffects: getSideEffects(army.Flavors),
      },
      {
        slice: 'battalions' as const,
        items: army.Battalions,
        setValues: selectionActions.setBattalions,
        title: 'Battalions',
        values: selections.battalions || [],
        type: 'multi',
        sideEffects: getSideEffects(army.Battalions),
      },
      {
        slice: 'command_traits' as const,
        items: army.CommandTraits,
        setValues: selectionActions.setCommandTraits,
        title: 'Command Traits',
        values: selections.command_traits || [],
        type: 'multi',
        sideEffects: getSideEffects(army.CommandTraits),
      },
      {
        slice: 'mount_traits' as const,
        items: army.MountTraits,
        setValues: selectionActions.setMountTraits,
        title: 'Mount Traits',
        values: selections.mount_traits || [],
        type: 'multi',
        sideEffects: getSideEffects(army.MountTraits),
      },
      {
        slice: 'monstrous_rampages' as const,
        items: army.MonstrousRampages,
        setValues: selectionActions.setMonstrousRampages,
        title: 'Monstrous Rampages',
        values: selections.monstrous_rampages || [],
        type: 'multi',
        sideEffects: getSideEffects(army.MonstrousRampages),
      },
      {
        slice: 'command_abilities' as const,
        items: army.CommandAbilities,
        setValues: selectionActions.setCommandAbilities,
        title: 'Command Abilities',
        values: selections.command_abilities || [],
        type: 'multi',
        sideEffects: getSideEffects(army.CommandAbilities),
      },
      {
        slice: 'artifacts' as const,
        items: army.Artifacts,
        setValues: selectionActions.setArtifacts,
        title: 'Artifacts',
        values: selections.artifacts || [],
        type: 'multi',
        sideEffects: getSideEffects(army.Artifacts),
      },
      {
        slice: 'prayers' as const,
        items: army.Prayers,
        setValues: selectionActions.setPrayers,
        title: 'Prayers',
        values: selections.prayers || [],
        type: 'multi',
        sideEffects: getSideEffects(army.Prayers),
      },
      {
        slice: 'spells' as const,
        items: army.Spells,
        setValues: selectionActions.setSpells,
        title: 'Spells',
        values: selections.spells || [],
        type: 'multi',
        sideEffects: getSideEffects(army.Spells),
      },
      {
        slice: 'battle_tactics' as const,
        items: army.BattleTactics,
        setValues: selectionActions.setBattleTactics,
        title: 'Battle Tactics',
        values: selections.battle_tactics || [],
        type: 'multi',
        sideEffects: getSideEffects(army.BattleTactics),
      },
      {
        slice: 'core_rules' as const,
        items: army.CoreRules,
        setValues: selectionActions.setCoreRules,
        title: 'Core Rules',
        values: selections.core_rules || [],
        type: 'multi',
        sideEffects: getSideEffects(army.CoreRules),
      },
      {
        slice: 'endless_spells' as const,
        items: army.EndlessSpells,
        setValues: selectionActions.setEndlessSpells,
        title: 'Endless Spells',
        values: selections.endless_spells || [],
        type: 'multi',
        sideEffects: getSideEffects(army.EndlessSpells),
      },
      {
        slice: 'incarnates' as const,
        items: army.Incarnates,
        setValues: selectionActions.setIncarnates,
        title: 'Incarnates',
        values: selections.incarnates || [],
        type: 'multi',
        sideEffects: getSideEffects(army.Incarnates),
      },
      {
        slice: 'scenery' as const,
        items: army.Scenery,
        setValues: selectionActions.setScenery,
        title: 'Scenery',
        values: selections.scenery || [],
        type: 'multi',
        sideEffects: getSideEffects(army.Scenery),
      },
      {
        slice: 'grand_strategies',
        items: army.GrandStrategies,
        setValues: selectionActions.setGrandStrategies,
        title: 'Grand Strategies',
        values: selections.grand_strategies || [],
        type: 'multi',
        sideEffects: getSideEffects(army.GrandStrategies),
      },
      {
        slice: 'triumphs' as const,
        items: army.Triumphs,
        setValues: selectionActions.setTriumphs,
        title: 'Triumphs',
        values: selections.triumphs || [],
        type: 'multi',
        sideEffects: getSideEffects(army.Triumphs),
      },
      // Origin realms appear to have been removed in AoS 3.0
      // {
      //   items: SUPPORTED_ORIGIN_REALMS,
      //   setValue: realmscapeActions.setOriginRealm,
      //   title: `Realm of Origin`,
      //   mobileTitle: `Origin Realm`,
      //   value: origin_realm || null,
      //   type: 'single',
      // },
      {
        items: SUPPORTED_REALMSCAPES,
        setValue: realmscapeActions.setRealmscape,
        title: `Realm of Battle`,
        mobileTitle: `Battle Realm`,
        value: realmscape || null,
        type: 'single',
      },
      // In AoS 3.0, we just include ALL of the realmscape features for a given realm
      // Which deprecates the need for this dropdown
      // {
      //   items: realmFeatureItems,
      //   setValue: realmscapeActions.setRealmscapeFeature,
      //   title: `Realm Feature`,
      //   value: realmscape_feature || null,
      //   type: 'single',
      // },
    ]
  }, [army, realmscape, selections])

  return value
}

export default useGetArmyBuilderCards
