// Generated from https://github.com/techhat/openrecipeformat/blob/f1f1a3019b270b0812b73fbd6249697af4270bd9/schema.json
// using https://transform.tools/json-schema-to-typescript

export type Note = string
/**
 * The unit, relevant to the amount.
 */
export type Unit = string
export type None = "none" | "None"

/**
 * This corresponds with the index keys in the USDA Standard Reference. It is generally used for easy lookup of nutritional data. If possible, this should be used, and USDA data, when available, is preferable to any other nutritional data source.
 */
export type UsdaNum = number | string

export interface OpenRecipe {
  /**
   * The name of this recipe.
   */
  recipe_name: string
  /**
   * General notes about the recipe.
   */
  notes?: Note[]
  /**
   * A list, in order, of steps to be performed on the recipe.
   */
  steps: Step[]
  /**
   * A list of dicts, defining which food items are to be added to the recipe. These items should be listed in the order in which they are to be used. Bearing this in mind, a particular item may be listed multiple times, if it is to be used multiple times and/or at different quantities in a recipe.
   */
  ingredients: Ingredient[]
  /**
   * Setting to be used with convection oven. Possible values are “Off”, “Low” and “High”. If not specified, it is assumed to be “Off”. If specified, all software should display and print this value. If not specified, it is up to the software whether or not it is displayed and/or printed, but it should be consistent.
   */
  oven_fan?: None | ("Off" | "Low" | "High")
  /**
   * Starting oven temperature, if the oven is used.
   */
  oven_temp?:
    | None
    | {
        amount?: number
        unit?: "C" | "F"
      }[]
  /**
   * How long the dish should spend in the oven. This is an overall value, which refers to the recipe as a whole. If multiple oven times are used, they should be specified in the recipe.
   */
  oven_time?: String
  recipe_uuid?: String
  /**
   * If this recipe was originally pulled from a book, then the book information should go here. Recipe software should make an intelligent effort to include correct information in the correct fields, rather than just dumping everything into a generic notes field.
   */
  source_book?:
    | {
        /**
         * This is a list. Refers to the author(s) of this recipe. Can be the same as source_authors, if appropriate. If there was only one author, then they would be the only item in the list.
         */
        authors: string[]
        /**
         * Title of the book. This is a single value, not a list.
         */
        title: string
        /**
         * International Standard Book Number, if available.
         */
        isbn?: string
        /**
         * Any information about the book that does not fit into another field.
         */
        notes?: Note[]
        /**
         * A lot of different information about a book can be stored. Until a field has been officially accepted into the spec, it should start with a capital X, followed by a dash.
         *
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^X-.*$".
         */
        [k: string]: unknown
      }
    | None
  /**
   * Does not refer to the person who entered the recipe; only refers to the original author of the recipe. If this recipe was based on another recipe by another person, then this field should contain the name of the original author.
   */
  source_authors?: string[] | string
  /**
   * The URL that this recipe was copied from, if applicable. In the case of a recipe-hosting website, this may refer to the official URL at which the recipe is hosted.
   */
  source_url?: string
  /**
   * Refers to how much food the recipe makes. This is a list, which will normally contain one dict. In cases where multiple yields need to be stored (i.e. 50 cookies vs 100 cookes vs 250 cookies), each yield will have its own dict in this list.
   */
  yields?: {
    amount?: number
    unit?: Unit
    [k: string]: number | Unit
  }[]
  author?: String
  nutrition?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z ]*$".
     */
    [k: string]: {
      unit?: Unit
      amount?: number
      usda_name?: string
      usda_num?: UsdaNum
      proximates?: {
        water?: number
        energy?: number
        protein?: number
        lipid_total?: number
        ash?: number
        carbohydrate?: number
        fiber_total?: number
        sugars_total?: number
        sucrose?: number
        glucose?: number
        fructose?: number
        lactose?: number
        maltose?: number
        galactose?: number
        starch?: number
      }
      minerals?: {
        calcium?: number
        iron?: number
        magnesium?: number
        phosphorus?: number
        potassium?: number
        sodium?: number
        zinc?: number
        copper?: number
        manganese?: number
        selenium?: number
        flouride?: number
      }
      vitamins?: {
        vitamin_c?: number
        thiamin?: number
        riboflavin?: number
        niacin?: number
        pantothenic_acid?: number
        vitamin_b6?: number
        folate_total?: number
        folic_acid?: number
        folate_food?: number
        folate_dfe?: number
        choline_total?: number
        betaine?: number
        vitamin_b12?: number
        vitamin_b12_added?: number
        vitamin_a_rae?: number
        retinol?: number
        carotene_beta?: number
        carotene_alpha?: number
        cryptoxanthin_beta?: number
        vitamin_a_iu?: number
        lycopene?: number
        lutein_zeaxanthin?: number
        vitamin_e_alpha_tocopherol?: number
        vitamin_e_added?: number
        vitamin_e?: number
        tocopherol_beta?: number
        tocopherol_gamma?: number
        tocopherol_delta?: number
        vitamin_d2_d3?: number
        vitamin_d_ergocalciferol?: number
        vitamin_d_cholecalciferol?: number
        vitamin_d?: number
        vitamin_k?: number
        menaquinone_4?: number
      }
      lipids?: {
        total_saturated?: number
        total_monounsaturated?: number
        total_polyunsaturated?: number
        cholesterol?: number
      }
      other?: {
        caffeine?: number
        [k: string]: unknown
      }
      [k: string]: unknown
    }[]
  }
  /**
   * A lot of different information about a recipe can be stored. Until a field has been officially accepted into the spec, it should start with a capital X, followed by a dash.
   *
   * This interface was referenced by `MySchema`'s JSON-Schema definition
   * via the `patternProperty` "^X-[a-zA-z]+$".
   */
  [k: string]: unknown
}
/**
 * Describes step to be performed on the recipe.
 */
export interface Step {
  /**
   * Description of the step.
   */
  step: string
  /**
   * A list of notes relevant to this step. Often known as “bench notes” to professionals.
   */
  notes?: Note[]
  /**
   * Can contain either a control_point or a critical_control_point. Should not contain both.
   */
  haccp?: {
    /**
     * Refers to specific HACCP guidelines relevant to this step.
     */
    control_point?: string
    /**
     * Refers to specific HACCP guidelines relevant to this step, which are critical to the safety outcome of this recipe.
     */
    critical_control_point?: string
    [k: string]: unknown
  }
}
export interface Ingredient {
  /**
   * This interface was referenced by `Ingredient`'s JSON-Schema definition
   * via the `patternProperty` "^[a-zA-Z ]*$".
   */
  [k: string]: {
    /**
     * A list of dicts which describe the amounts to use. Normally, the list will only contain one dict. In cases where multiple yields need to be stored (i.e. 50 cookies vs 100 cookes vs 250 cookies), each yield will have its own dict in this list, in the same order as the recipe’s yield field.
     */
    amounts: {
      /**
       * The amount of the unit to use.
       */
      amount: number | string
      unit: Unit
    }[]
    /**
     * A list of tags which describe the processing of this item. For instance, “whole”, “large dice”, “minced”, “raw”, “steamed”, etc.
     */
    processing?: string[]
    /**
     * Any notes specific to this ingredient
     */
    notes?: Note[]
    /**
     * This field is a list of ingredients, in exactly the same format as a regular ingredient list item, minus the substitutions field.
     */
    substitutions?: Ingredient[]
    /**
     * This corresponds with the index keys in the USDA Standard Reference. It is generally used for easy lookup of nutritional data. If possible, this should be used, and USDA data, when available, is preferable to any other nutritional data source.
     */
    usda_num?: number | string
  }
}
